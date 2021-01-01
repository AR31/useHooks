import React from "react";
import { Link } from "react-router-dom";

function Description(props) {
    return (
        <>
            <div>Description Page</div>
            <div>{props.Description}</div>
            <Link to="/" className="btn btn-primary">
                Return to home
        </Link>
        </>
    );
}

export default Description;
