"use client";

import * as React from "react";
import Map, { Marker, Popup } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa6";

const LOCATION = {
  longitude: 26.094224,
  latitude: 44.446075,
  zoom: 14,
};

export default function FairLocation() {
  return (
    <div className="w-full max-w-4xl mx-auto px-8 py-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Event Location</h2>
      <p className="text-base md:text-lg mb-4">
        The Raven1 Christmas Science Fair will be held in Bucharest at:
      </p>
      <Link
        href="https://www.google.com/maps/dir/?api=1&destination=44.446075,26.094224"
        className="text-sm md:text-lg font-semibold mb-8 btn btn-sm md:btn-md btn-primary "
      >
        str. Christian Tell no. 22{" "}
        <span>
          {" "}
          <FaArrowUp className="h-5 w-5 rotate-45" />
        </span>
      </Link>
      <div className="w-full h-64 md:h-96 border-2 rounded-lg border-black/20 shadow-lg">
        <Map
          mapboxAccessToken="pk.eyJ1IjoibHVjYXNhaW5lbmNvIiwiYSI6ImNsM2V2YXJ2czA0bDYzam4wMXYycDU0eG0ifQ.p7mkAeKWRHsi3q6pLdMhIQ"
          initialViewState={{
            latitude: LOCATION.latitude + 0.0005,
            longitude: LOCATION.longitude,
            zoom: LOCATION.zoom,
          }}
          style={{ width: "100%", height: "100%", borderRadius: "8px" }}
          mapStyle="mapbox://styles/lucasainenco/clo9pjg5000rp01qxh60taxwj"
        >
          <Marker {...LOCATION}>
            <Popup
              closeButton={false}
              closeOnClick={false}
              closeOnMove={false}
              focusAfterOpen={false}
              anchor={"bottom"}
              className=""
              {...LOCATION}
            >
              <div className="p-0 sm:p-2">
                <div className="text-sm sm:text-base text-primary-content font-semibold">
                  Raven1 Science Fair
                </div>
                <div className="text-xs sm:text-sm font-semibold text-primary-content">
                  At The Youth by FNT
                </div>

                <Link
                  href="https://www.google.com/maps/dir/?api=1&destination=44.446075,26.094224"
                  className="btn btn-neutral btn-xs  mt-2 md:mt-10"
                >
                  Open in Maps <FaArrowUp className="h-3 w-3 rotate-45" />
                </Link>
              </div>
            </Popup>
          </Marker>
        </Map>
      </div>
    </div>
  );
}
