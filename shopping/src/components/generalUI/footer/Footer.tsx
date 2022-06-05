import {
  AccordionSummary,
  AccordionDetails,
  Accordion,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { useLocation } from "react-router-dom";
import Container from "../../reusableComponents/container/Container";

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState<Array<boolean>>([
    false,
    false,
    false,
  ]);
  const location = useLocation();
  const footerData = [
    {
      summary: "Kontakt",
      details: [
        " tel. (12) 333 23 11",
        "sklep@bestshopping.com",
        <a>formularz kontaktowy</a>,
      ],
    },
    {
      summary: "Informacje",
      details: [
        "O nas",
        "Nasze salony",
        "Polityka prywatności",
        "Pracuj w YourShop!",
      ],
    },
    {
      summary: "Obsługa klienta",
      details: [
        "Dostawa",
        "Formy płatności",
        "Czas realizacji zamównienia",
        "Regulamin",
        "Zwroty i reklamacje",
      ],
    },
  ];

  useEffect(() => {
    setIsExpanded([false, false, false]);
  }, [location]);

  const handleChange =
    (index: number) => (event: React.ChangeEvent<{}>, expanded: boolean) => {
      let expandedArray = [...isExpanded];
      expandedArray[index] = expanded;
      setIsExpanded(expandedArray);
    };

  return (
    <footer className="footer">
      <Container>
        <div className="footer-mobile">
          {footerData?.map((data, index) => (
            <Accordion
              expanded={isExpanded[index]}
              className="footer-accordion footer-materialComponent"
              onChange={handleChange(index)}
              key={"accordion" + data.summary}
            >
              <AccordionSummary className="footer-accordionSummary footer-materialComponent">
                {data.summary}
                <ExpandMoreIcon className="footer-arrowIcon" />
              </AccordionSummary>
              <AccordionDetails className="footer-accordionDetails footer-materialComponent">
                <ul>
                  {data.details?.map((dataDetails) => (
                    <li
                      className="footer-listElement"
                      key={"accordion details" + dataDetails}
                    >
                      {dataDetails}
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <div className="footer-desktop">
          {footerData?.map((data) => (
            <div
              className="footer-dataColumn"
              key={"non-accordion" + data.summary}
            >
              <h3>{data.summary}</h3>
              <ul>
                {data.details?.map((dataDetails) => (
                  <li
                    className="footer-listElement"
                    key={"non-accordion" + dataDetails}
                  >
                    {dataDetails}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-socialMedia">
          <div>
            <FacebookIcon className="footer-socialMediaIcon" />
            <InstagramIcon className="footer-socialMediaIcon" />
            <YouTubeIcon className="footer-socialMediaIcon" />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
