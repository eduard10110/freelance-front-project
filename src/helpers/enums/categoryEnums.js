import ai from "assets/images/categories/ai.png";
import beautyHealth from "assets/images/categories/beauty-health.png";
import car from "assets/images/categories/car.png";
import cleaning from "assets/images/categories/cleaning.png";
import computer from "assets/images/categories/computer.png";
import delivery from "assets/images/categories/delivery.png";
import dron from "assets/images/categories/dron.png";
import learning from "assets/images/categories/learning.png";
import lower from "assets/images/categories/lower.png";
import photo from "assets/images/categories/photo.png";
import robot from "assets/images/categories/robot.png";
import sale from "assets/images/categories/sale.png";
import setting from "assets/images/categories/setting.png";

export const categoriesEnum = {
  leftColumn: [
    { label: "Курьерские услуги", width: 295, height: 592, image: delivery },
    { label: "Грузоперевозки", width: 397, height: 307, image: dron },
    {
      label: "Красота и здоровье",
      width: 295,
      height: 460,
      image: beautyHealth,
    },
    { label: "Ремонт транспорта", width: 361, height: 344, image: car },
  ],
  rightTopColumnLeft: [
    { label: "Разработка по", width: 383, height: 260, image: setting },
    {
      label: "Уборка и помощь по хозяйтсву",
      width: 351,
      height: 460,
      image: cleaning,
    },
    {
      label: "Репетиторы и обучение",
      width: 381,
      height: 342,
      image: learning,
    },
  ],
  rightTopColumnRight: [
    { label: "Дизайн", width: 316, height: 371, image: ai },
    { label: "Компьютерная помощь", width: 453, height: 344, image: computer },
    { label: "Фото, Видео и аудио", width: 453, height: 344, image: photo },
  ],
  rightBottomColumnTop: [
    {
      label: "Юридическая и бухгалтерская помощь",
      width: 638,
      height: 307,
      image: lower,
    },
  ],
  rightBottomColumnBottom: [
    { label: "Ремонт цифровой техники", width: 331, height: 460, image: robot },
    { label: "Мероприятия и промоакции", width: 316, height: 371, image: sale },
  ],
};
