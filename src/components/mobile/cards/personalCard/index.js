import React from "react";
import { Link } from "react-router-dom";
import defaultPersonImage from "assets/images/default-person.png";
import personProfession from "assets/images/icons/person-profession.svg";
import ratingStar from "assets/images/rating-star.png";

export default function PersonalCardMobile({ id }) {
  return (
    <div className={`personal-card-mobile`}>
      <div className="person-info">
        <div className="avatar">
          <img src={defaultPersonImage} alt="avatar" />
        </div>
        <div className="person-bio">
          <p className="body2">Алексей А.</p>
          <p className="body">
            Рейтинг исполнителя:{" "}
            <span>
              <img src={ratingStar} alt="rating" />
            </span>
            <span>4.9</span>
          </p>
          <p className="body">
            Выполнил <span>{295}</span> заданий
          </p>
        </div>
        <div className="person-profession-mobile">
          <img src={personProfession} alt="avatar" />
        </div>
      </div>
      <div className="person-bio-article">
        <p className="body3">
          Решаю проблемы и вопросы в сфере электрики, водоснабжению,
          водоотведению, отоплению. Благодаря многолетнему опыту даю конкретный
          результат. Вы не ошибетесь, выбрав меня. Делаю в срок, качественно,
          акк...
        </p>
      </div>
      <div className="person-profile-button">
        <button className="btn btn-purple">
          <Link to={`/performers/${id}`}>Смотреть профиль</Link>
        </button>
      </div>
    </div>
  );
}
