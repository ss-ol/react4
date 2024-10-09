import React from 'react';
import Description from "../../components/Description/Description";
import classes from './aboutpage.module.css';

const AboutPage = (props) => {
    return (
        <div>
            <Description title={"Title 2"} description={"description 2"}/>
            <h2 className={classes.title}>I am AboutPage</h2>
        </div>
    );
};

export default AboutPage;