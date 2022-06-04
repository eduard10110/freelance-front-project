import { useLoadScript } from "@react-google-maps/api";
import GoogleMaps from "components/googleMaps";
import React from "react";

export default function Contacts() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAezzENRDI0Li-oZEK1F1XL2bxW93ibqWY",
  });
  return (
    <div className="contacts-container-wrapper">
      <div className="contacts-container-location-logo-green"></div>
      <div className="contacts-container-inner">
        <div className="contacts-info">
          <h2>Контакты</h2>
          <div>
            <p className="body1">ООО Лекс</p>
            <p className="body1">ИНН: 6317156167</p>
            <p className="body1">КПП: 631701001</p>
            <p className="body1">ОГРН: 1216300056983</p>
            <p className="body1">Адрес: 443099, Россия, г.</p>
            <p className="body1">Самара, ул. Чапаевская, д.</p>
            <p className="body1">85, ком. 9</p>
          </div>
        </div>
        <div className="google-map">
          {!isLoaded ? <div>Loading...</div> : <GoogleMaps />}
        </div>
      </div>
    </div>
  );
}
