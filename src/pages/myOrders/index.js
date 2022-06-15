// import Card from "components/cards/card";
import CategoriesCheckbox from "components/categoriesChackbox";
// import FindTaskFilters from "containers/findTaskFilters";
import FindTaskMainContent from "containers/findTaskMainContent";
import { checkboxFakeData } from "helpers/constants";

import React, { useState } from "react";

export default function MyOrder() {
    const [orderWorker, setOrderWorker] = useState(true);

    const [filters, setFilters] = useState({
        remoteWork: false,
        tasksWithoutResponses: false,
        onlyVacancies: false,
        searchValue: "",
        homeSearchValue: "",
        radiusSearchValue: "",
        budgetSearchValue: "",
        categoriesCheckbox: [],
    });

    const handleCategoriesCheckboxChange = (state) =>
        setFilters({ ...filters, categoriesCheckbox: state });

    const handleSetOrderWorker = (type) => () => {
        setOrderWorker(type);
    };

    return (
        <div className="page-wrapper">
            <div className="page">
                <div className="content-wrapper my-orders-page-wrapper">
                    <h2 className="my-orders-container-title">Мои заказы</h2>
                    <div className="my-orders-type">
                        <button
                            className={`btn btn-purple body3 ${
                                orderWorker && "btn-green-active"
                            }`}
                            onClick={handleSetOrderWorker(true)}
                        >
                            Я заказчик
                        </button>
                        <button
                            className={`btn ${
                                !orderWorker && "btn-purple-filled-active"
                            } body3`}
                            onClick={handleSetOrderWorker(false)}
                        >
                            Я исполнитель
                        </button>
                    </div>

                    <div className="my-orders-info">
                        <p className="my-order-info-title">Вы оставили отклик к 145 заданиям, из них:</p>
                        <div className="order-tasks-info">
                          <p>Открыто: <span>9</span></p>
                          <p>Выполняется: <span>9</span></p>
                          <p>Закрыто: <span>89</span></p>
                          <p className="order-task-active">В архиве: <span>38</span></p>
                        </div>
                        <p>
                            *Задания, где выбрали других исполнителей либо
                            отменили
                        </p>
                    </div>

                    <div className="my-orders-main-content-wrapper">
                        <FindTaskMainContent />
                        <CategoriesCheckbox
                            state={filters.categoriesCheckbox}
                            setState={handleCategoriesCheckboxChange}
                            data={checkboxFakeData}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
