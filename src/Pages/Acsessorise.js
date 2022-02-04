import React, {useState} from 'react';
import Modal from '../Components/Modal';
import data from '../bdgames.json';

export default function Acsessorise () {
    let items = data.acsessorise;
    const [modalActive, setModalActive] = useState(false);

    return (
        <>
        <Modal active={modalActive} setActive={setModalActive} />
        <div className="page-container">
                <h2 className="page-title">Acsessorises</h2>
                <div className="page-container">

                <div className="card-container">
                    {
                        Object.keys(items).map((el) => {
                            return (
                                <div className="card bmargin-80">
                                    <div className="card__img">
                                        <img src={items[el].cover} alt={items[el].name}/>
                                    </div>
                                    <div className="card__content">
                                        <h3 className="dark-text">{items[el].name}</h3>
                                        <h4 className="dark-text">{items[el].description}</h4>
                                        <p className="price-text">{items[el].price}</p>
                                    </div>
                                        <button className="button_green" onClick={() => setModalActive(true)}>Buy now</button>
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