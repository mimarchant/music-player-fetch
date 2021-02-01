import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

function Player(props) {
    return (
        <>
            <div className="container">
                <div className="card text-center">
                    <div className="card-header text-danger">
                        THE BEST MUSIC PLAYER EVER!!
                    </div>
                    <div className="card-body bg-dark text-primary">
                        <ul>

                        </ul>
                    </div>
                    <div className="container card-footer bg-dark justify-content-center">

                        <button className="botones"><i className="far fa-caret-square-left"></i></button>
                        <button className="botones"><i className="fas fa-play-circle"></i></button>
                        <button className="botones"><i className="far fa-caret-square-right"></i></button>
                    </div>
                </div>


            </div>

        </>
    );

}

export default Player;