import React from "react";
import MapComponent from "../ui/map.component";

export default function Map() {
  return (
    <section className="m-pb-100 m-pt-135">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="text-center pb-75">
              <p className="m-0  text-uppercase text-light-dark lt-space">Conoce nuestra sede</p>
              <h2 className="m-0  text-dark">Visítanos</h2>

              <span className="icon-section-wave d-inline-block text-active section-wave mt-3"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-map">
        <MapComponent />
        <div className="image" style={{ width: "100%", height: "100%" }}>
          <img src="/tecuida/images/sede-aptus.webp" style={{ objectFit: "cover", height: "100%", width: "100%" }} alt="Sede Aptus" />
        </div>
      </div>
    </section>
  );
}
