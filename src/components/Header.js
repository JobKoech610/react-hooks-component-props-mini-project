import React from "react";
import blogData from "../data/blog";

function Header(props){
    return (
        <header>
    <h1>{props.blogName}</h1>;
    </header>
    )
}

export default Header;