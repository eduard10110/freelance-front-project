import { FIND_TASK_MAIN_CONTENT_FAKE_DATA } from "helpers/constants";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//the data must be dynamic
export default function SelectedTask() {
  const [currentTaskData, setCurrentTaskData] = useState();
  const { taskId } = useParams();
  useEffect(() => {
    const currentData = FIND_TASK_MAIN_CONTENT_FAKE_DATA.find(
      (elem) => elem.id === +taskId
    );
    if (currentData) {
      setCurrentTaskData(currentData);
    }
  }, []);
  console.log(currentTaskData);
  return (
    <div className="page-wrapper">
      <div className="page">
        <div className="content-wrapper selectedTask-container-wrapper">
          <div className="selectedTask-header">
            <h3>Установить сантехнику</h3>
            <p className="body4">Задание № 9941868</p>
          </div>
        </div>
      </div>
    </div>
  );
}
