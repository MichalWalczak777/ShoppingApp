import { AccordionSummary, AccordionDetails, Accordion, Typography, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { useLocation } from "react-router-dom";
import { NoEncryption } from "@material-ui/icons";
import Container from "../../reusableComponents/container/Container";

const useStyles = makeStyles(() => ({
    footer: {
        padding: '20px 0 0 0',
        backgroundColor: '#F0F0F1'
    },
    footerIcon: {
        padding: '10px 8px 6px'
    },
    accordion: {
        backgroundColor: '#F0F0F1',
        boxShadow: "none",
        '&:before': {
            display: 'none'
        }
    },
    listElement: {
        padding:'0 0 10px 0'
    },
    accordionDetails: {
        padding: '0 16px 4px',
        margin:'0'
    },
    accordionSummary: {
        '*': {
            display: 'flex',
            alignItems: 'center',
        },
        '.Mui-expanded': {
            minHeight: '48px'
        },
    
    },
    arrow: {
        alignSelf: 'center',
        margin: '0 0 0 8px'
    }

}));


const Footer = () => {

    const [isExpanded, setIsExpanded] = useState<Array<boolean>>([false, false, false]);
    const location = useLocation();
    const {footer, footerIcon, accordion, listElement, accordionDetails, accordionSummary, arrow} = useStyles();
    const footerData = [{summary: "Kontakt", details:[" tel. (12) 333 23 11", "sklep@bestshopping.com", <a>formularz kontaktowy</a>]},
                        {summary: "Informacje", details: ["O nas", "Nasze salony", "Polityka prywatności", "Pracuj w Best Shopping!"]},
                        {summary: "Obsługa klienta", details: ["Dostawa", "Formy płatności", "Czas realizacji zamównienia", "Regulamin", "Zwroty i reklamacje"]}];


    useEffect(() => {
        setIsExpanded([false, false, false]);
    }, [location]);

    const handleChange = (index: number) => (event: React.ChangeEvent<{}>, expanded: boolean) => {
        let expandedArray = [...isExpanded];
        expandedArray[index] = expanded;
        setIsExpanded(expandedArray);
    }

    return (
        <footer className = {footer}>
            <Container>
                {footerData?.map((data, index) => 
                        <Accordion expanded = {isExpanded[index]} className={accordion} onChange={handleChange(index)} key={"accordion" + data.summary}>
                            <AccordionSummary className={accordionSummary}>
                                {data.summary}
                                <ExpandMoreIcon className={arrow}/>
                            </AccordionSummary>
                            <AccordionDetails className={accordionDetails}>
                                <ul>
                                    {data.details?.map(dataDetails=><li className={listElement} key={"accordion details" + dataDetails}>{dataDetails}</li>)}
                                </ul>
                            </AccordionDetails>
                        </Accordion>)}
                <div className="footer-socialMedia">
                    <div>
                        <FacebookIcon className={footerIcon}/>
                        <InstagramIcon className={footerIcon}/>
                        <YouTubeIcon className={footerIcon}/>
                    </div>
                </div>
            </Container>
        </footer>
    );
}


export default Footer;