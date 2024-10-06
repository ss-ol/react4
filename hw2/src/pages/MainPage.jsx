import React from 'react';
import About from "../components/About";
import Title from "../components/Title";

const MainPage = () => {
    return (
        <div>
            <About info={{title: "Some Title", body:"Some body"}}/>
            <Title text={"Hello world"}/>
        </div>
    );
};

export default MainPage;