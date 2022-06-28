import interrogativeGreenImage from "assets/images/interrogative-green.png";
import interrogativePurpleImage from "assets/images/interrogative-purple.png";
import openQuestionIcon from "assets/images/open-question-icon.png";
import closeQuestionIcon from "assets/images/close-question-icon.png";
import { POPULAR_QUESTIONS_DATA } from "helpers/constants";
import React, { useState } from "react";

export default function PopularQuestionsDesktop() {
  const [openedQuestion, setOpenedQuestion] = useState(null);

  const handleOpen = (id) => () => setOpenedQuestion(id);

  const handleClose = () => setOpenedQuestion(null);

  return (
    <div className="page-wrapper">
      <img
        src={interrogativePurpleImage}
        alt="interrogativePurple"
        className="interrogative-purple"
      />
      <img
        src={interrogativeGreenImage}
        alt="interrogativeGreen"
        className="interrogative-green"
      />
      <div className="page">
        <div className="content-wrapper popular-questions-container-wrapper">
          <h2 className="popular-questions-header">Популярные вопросы</h2>
          <div className="questions-wrapper">
            {POPULAR_QUESTIONS_DATA.map(({ label, answer }) => (
              <div
                key={label}
                className={`question-item ${
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
                <p className="body3">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
