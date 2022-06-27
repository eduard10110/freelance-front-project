import React from "react";
import { Map, Placemark, YMaps } from "react-yandex-maps";

export default function ContactsMobile() {
  return (
    <div className="page-wrapper">
      <div className="page">
        <div className="content-wrapper-mobile cm-wrapper">
          <h4>Контакты</h4>
          <div className="cm-contacts-info">
            <p className="body1">ООО Лекс</p>
            <p className="body1">ИНН: 6317156167</p>
            <p className="body1">КПП: 631701001</p>
            <p className="body1">ОГРН: 1216300056983</p>
            <p className="body1">Адрес: 443099, Россия, г.</p>
            <p className="body1">Самара, ул. Чапаевская, д.</p>
            <p className="body1">85, ком. 9</p>
          </div>
          <div className="cm-map-container-wrapper">
            <YMaps>
              <Map
                width={"100%"}
                height={"100%"}
                defaultState={{
                  center: [53.1863672, 50.0914442, 17],
                  zoom: 14,
                }}
              >
                <Placemark
                  modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                  geometry={[53.1863672, 50.0914442, 17]}
                />
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    </div>
  );
}
