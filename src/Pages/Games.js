import React from 'react';
import data from '../bdgames.json';

export default function Games () {
    let games = data.games;
    return (
        <>
        <div className="page-container">
                <h2 className="page-title">Consoles Games</h2>
                <div className="page-cardContainer">
                    {
                        Object.keys(games).map((el) => {
                            return (
                                <div className="card">
                                    <div className="card-img">
                                        <img src={games[el].cover} alt={games[el].name}/>
                                    </div>
                                    <div className="card-textcontent">
                                        <h3>{games[el].name}</h3>
                                        <h4>{games[el].subtitle}</h4>
                                    </div>
                                    <div className="exclusive_button">
                                        <button className="button_green card_button">Show details</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                
        </div>
        </>
    )
}