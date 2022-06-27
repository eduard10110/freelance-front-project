import React from "react";
import girlImage from "assets/images/home-girl.png";
import boyImage from "assets/images/home-boy.png";

export default function HomeMobileFirstContainer() {
    return (
        <div className="page-wrapper">
            <div className="page">
                <div className="mobile-first-container-content">
                    <div className="mobile-first-container-info">
                        <p className="body2">MELAEK</p>
                        <p className="body-mobile-1">Поможем найти надёжного исполнителя для любых задач</p>
                        <div >
                            <button className="btn btn-purple body-mobile-2">Заказать услугу</button>
                            <button className="btn btn-purple-filled body-mobile-2">Стать исполнителем</button>
                        </div>
                    </div>
                    <div className="mobile-first-container-images">
                        <div className="mobile-boy-image">
                            <img src={boyImage} alt="avatar"/>
                        </div>
                        <div className="mobile-girl-image">
                            <img src={girlImage} alt="avatar"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
