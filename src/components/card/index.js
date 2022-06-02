import React from "react";

// texts will coming from props or from backend
export default function Card() {
    return (
        <div className="card">
            <div className="card-avatar">
                <img src="" alt="avatar" />
            </div>
            <div className="card-details">
                <p>Ремонт мойки из иску...</p>
                <div>
                    <p>улица Глазунова, 6, Казань</p>
                    <p>25 марта — 30 марта</p>
                </div>
                <div>
                    <p>Иван И.</p>
                    <p>Нет отзывов</p>
                </div>
            </div>
            <div className="card-order">
                <p>до 5 000 ₽</p>
                <button className="btn btn-purple">Завершить</button>
            </div>
        </div>
    );
}
