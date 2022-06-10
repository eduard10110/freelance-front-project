import React from "react";
import girlImage from "assets/images/home-girl.png";
import boyImage from "assets/images/home-boy.png";

export default function HomeFirstContainer() {
    return (
        <div className="page-wrapper">
            <div className="page">
                <div className="content-wrapper">
                    <div className="first-container-wrapper">
                        <div className="container-inner">
                            <h1>melaek</h1>
                            <p className="body1 mt-2">
                                Поможем найти надёжного исполнителя для любых
                                задач
                            </p>

                            <div className="buttons-container">
                                <button className="btn btn-purple body7">
                                    Заказать услугу
                                </button>
                                <button className="btn btn-purple-filled body7">
                                    Стать исполнителем
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="images-wrapper">
                    <div className="girl-image">
                        <img src={girlImage} alt="girl" />
                    </div>
                    <div className="boy-image">
                        <img src={boyImage} alt="boy" />
                    </div>
                    {/* <div className="girl-image"></div> */}
                </div>
            </div>
        </div>
    );
}
