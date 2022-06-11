import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

export default function Contacts() {
  return (
    <div className="page-wrapper">
      <div className="page">
        <div className="content-wrapper contacts-container-wrapper">
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
            <div className="map-container">
              <YMaps>
                <Map
                  width={"520px"}
                  height={"520px"}
                  defaultState={{
                    center: [53.1863672, 50.0914442, 17],
                    zoom: 14,
                  }}
                >
                  <Placemark
                    modules={[
                      "geoObject.addon.balloon",
                      "geoObject.addon.hint",
                    ]}
                    geometry={[53.1863672, 50.0914442, 17]}
                  />
                </Map>
              </YMaps>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
