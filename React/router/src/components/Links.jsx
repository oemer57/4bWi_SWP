import React from "react";
import { Link } from "react-router"

export default function Link0() {
    return (
        <div>
            <h1>Links</h1>
            <Link to="/People" className="m-5">PeopleTask</Link>
            <Link to="/Button">ButtonTask</Link>
            <Link to="/Card">CardTask</Link>
            <Link to="/List">ListTask</Link>
        </div>
    )
}