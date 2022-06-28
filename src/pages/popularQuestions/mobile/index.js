import { POPULAR_QUESTIONS_DATA } from "helpers/constants";
import React, { useState } from "react";
import closeQuestionIcon from "assets/images/close-question-icon.png";
import openQuestionIcon from "assets/images/open-question-icon.png";

export default function PopularQuestionsMobile() {
  const [openedQuestion, setOpenedQuestion] = useState(null);

  const handleOpen = (id) => () => setOpenedQuestion(id);

  const handleClose = () => setOpenedQuestion(null);
  return (
    <div className="page-wrapper">
      <div className="page">
        <div className="content-wrapper-mobile pqm-wrapper">
          <h4>Популярные вопросы</h4>
          <div className="sm-questions-wrapper">
            {POPULAR_QUESTIONS_DATA.map(({ label, answer }) => (
              <div
                key={label}
                className={`sm-question-item ${
                  openedQuestion === label ? "active" : ""
                }`}
              >
                <div className="question-container">
                  <h4>{label}</h4>
                  {openedQuestion === label ? (
                    <div className="open-close-icon">
                      <img
                        onClick={handleClose}
                        src={closeQuestionIcon}
                        alt="close"
                        role="button"
                      />
                    </div>
                  ) : (
                    <img
                      onClick={handleOpen(label)}
                      src={openQuestionIcon}
                      alt="open"
                      className="open-close-icon"
                      role="button"
                    />
                  )}
                </div>
                {<p className="body3">{answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
