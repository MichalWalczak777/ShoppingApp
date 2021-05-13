import { AccordionSummary, AccordionDetails, Accordion, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { useLocation } from "react-router-dom";


const Footer = () => {
    
    const footerData = [{summary: "kontakt", details:[" tel. (12) 333 23 11", "sklep@bestshopping.com", <a>formularz kontaktowy</a>]},
                        {summary: "informacje", details: ["O nas", "Nasze salony", "Polityka prywatności", "Pracuj w Best Shopping!"]},
                        {summary: "obsługa klienta", details: ["Dostawa", "Formy płatności", "Czas realizacji zamównienia", "Regulamin", "Zwroty i reklamacje"]}];

        // const pathname = useLocation;

        // useEffect(() => {
        //     console.log("location changed");
        //     console.log("location changed")
        //     console.log("location changed")
        //     console.log("location changed")        
        //     console.log("location changed")
        //     console.log("location changed")
        //     console.log("location changed")
        //     console.log("location changed")
    
        // }, [pathname]);


    return (
        <footer>
            {footerData?.map(data => 
                    <Accordion key={"accordion" + data.summary}>
                        <AccordionSummary>
                            {data.summary}
                            <ExpandMoreIcon/>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul>
                                {data.details?.map(dataDetails=><li key={"accordion details" + dataDetails}>{dataDetails}</li>)}
                            </ul>
                        </AccordionDetails>
                    </Accordion>)}
            <div>
                <FacebookIcon/>
                <InstagramIcon/>
                <YouTubeIcon/>
            </div>
        </footer>
    );
}


export default Footer;