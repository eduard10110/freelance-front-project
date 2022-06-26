import React from "react";
import girlWithComputerImage from "assets/images/girl-with-computer.png";

export default function MobileStartTodayContainer() {
    return (
        <div className="mobile-start-today-container-wrapper">
            <div className="start-content-image">
                <img
                    src={girlWithComputerImage}
                    // className="girl-with-computer-image"
                    alt="girl"
                />
            </div>
            <div className="start-today-container">
                <div className="start-today-content">
                    <h4 className="body1">Начните сегодня</h4>
                    <p className="body">Исполнители уже готовы вам помочь</p>
                    <div className="buttons-wrapper">
                        <button className="btn btn-purple">
                            Создать задание
                        </button>
                        <button className="btn btn-purple-filled">
                            Найти задание
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
