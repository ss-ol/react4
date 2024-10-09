import React from 'react';
import Description from "../../components/Description/Description";
import classes from './mainpage.module.css';


const MainPage = () => {
    return (
        <div>
           <Description title={"Title"} description={"description"} />
            <h2 className={classes.title}>I am MainPage</h2>
        </div>
    );
};

export default MainPage;