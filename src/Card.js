import React from "react"
import { BsFillGeoAltFill } from "react-icons/bs"

export default function Card(props) {

    return (

        <div className="card-container">
            <div className="imgs-container">
                <img className="place-img" src={props.item.imageUrl}></img>
            </div>

            <div className="wrapper">

                <div className="location-container">
                    <p className="country"> <i className="location-icon"> <BsFillGeoAltFill /> </i> {props.item.location}</p>
                    <a className="location-url" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>

                <div className="text-container">
                    <h1 className="title">{props.item.title}</h1>
                    <p className="date">{`${props.item.startDate} - ${props.item.endDate}`}</p>
                    <p className="description">{props.item.description}</p>
                </div>

            </div>

        </div>
    )
}