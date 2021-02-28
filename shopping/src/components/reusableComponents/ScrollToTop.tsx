import React, {useState, useEffect} from "react";
import {makeStyles, IconButton} from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const useStyles = makeStyles(() => ({
    scrollToTop: {
      zIndex: 2,
      position: "fixed",
      bottom: "40%",
      backgroundColor: "#f4eddd",
      color: "black",
      right: "0",
      opacity: 0.9
    }
}));



const ScrollToTop = (showBelow:{showBelow:number}) => {

    const {scrollToTop} = useStyles();

    const [show, setShow] = useState<boolean>(false);

    useEffect(()=>{
        if (showBelow){
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    },[])

    const handleClick = () => {
        window["scrollTo"]({top: 0, behavior: "smooth"});
    }

    const handleScroll = () => {
        window.pageYOffset > showBelow.showBelow ? setShow(true) : setShow(false);
    }

    return (
        <div className={scrollToTop}>
            {show &&
            <IconButton onClick={handleClick}>
                <ExpandLessIcon/>
            </IconButton>}
        </div>
    )
}

export default ScrollToTop;