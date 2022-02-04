import React from 'react';
import {useNavigate} from "react-router-dom";

export default function Games (props) {
    let navigate = useNavigate();
    const goToDetails = () => {
        navigate("/details");
    }

    return (
        <>
        <div className="page-container">
                <h2 className="page-title">{props.title}</h2>
                <div className="page-container">

                <div className="card-container">
                    {
                        Object.keys(props.games).map((el) => {
                            return (
                                <div className="card dark-fon">
                                    <div className="card__img">
                                        <img src={props.games[el].cover} alt={props.games[el].name}/>
                                    </div>
                                    <div className="card__content">
                                        <h3>{props.games[el].name}</h3>
                                        <h4>{props.games[el].subtitle}</h4>
                                        <p className="white-text">{props.games[el].description}</p>
                                    </div>
                                        <button className="button_green" onClick={goToDetails}>Show details</button>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                
        </div>
        </>
    )
}