import React from "react";
import Card from "./Card";
import { TiWorld } from "react-icons/ti";
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })

    return (
        <div className="app-container">
            <nav>
                <i className="planet-icon"><TiWorld /></i>
                <p className="nav-text">my travel journal.</p>
            </nav>

            {cards}

        </div>
    )
}