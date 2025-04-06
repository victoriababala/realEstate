"use client";
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useAppSelector } from "@/state/redux";
import { useGetPropertiesQuery } from "@/state/api";
import { Property } from "@/types/prismaTypes";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY as string;

const Map = () => {
  const mapContainerRef = useRef(null);
  const filters = useAppSelector((state) => state.global.filters);
  const {
    data: properties,
    isLoading,
    isError,
  } = useGetPropertiesQuery(filters);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [mapStyle, setMapStyle] = React.useState(
    "mapbox://styles/mapbox/streets-v12"
  );

  useEffect(() => {
    if (isLoading || isError || !properties) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: mapStyle,
      center: filters.coordinates || [-74.5, 40],
      zoom: 9,
    });

    mapRef.current = map;

    properties.forEach((property) => {
      const marker = createPropertyMarker(property, map);
      const markerElement = marker.getElement();
      const path = markerElement.querySelector("path[fill='#3FB1CE']");
      if (path) path.setAttribute("fill", "#000000");
    });

    const resizeMap = () => {
      if (map) setTimeout(() => map.resize(), 700);
    };
    resizeMap();

    return () => map.remove();
  }, [isLoading, isError, properties, filters.coordinates, mapStyle]);

  const toggleMapStyle = () => {
    setMapStyle((prevStyle) =>
      prevStyle === "mapbox://styles/mapbox/streets-v12"
        ? "mapbox://styles/mapbox/satellite-streets-v12"
        : "mapbox://styles/mapbox/streets-v12"
    );
  };

  if (isLoading) return <Loading />;
  if (isError || !properties) return <div>Failed to fetch properties</div>;

  return (
    <div className="basis-5/12 grow relative rounded-xl">
      <Button
        onClick={toggleMapStyle}
        className="absolute top-4 left-4 z-10 bg-white text-black rounded-md shadow-md hover:bg-gray-200 transition duration-300"
      >
        Toggle Map Style
      </Button>
      <div
        className="map-container rounded-xl"
        ref={mapContainerRef}
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  );
};

const createPropertyMarker = (property: Property, map: mapboxgl.Map) => {
  const marker = new mapboxgl.Marker()
    .setLngLat([
      property.location.coordinates.longitude,
      property.location.coordinates.latitude,
    ])
    .setPopup(
      new mapboxgl.Popup().setHTML(
        `
        <div class="marker-popup">
          <div class="marker-popup-image"></div>
          <div>
            <a href="/search/${property.id}" target="_blank" class="marker-popup-title">${property.name}</a>
            <p class="marker-popup-price">
              $${property.pricePerMonth}
              <span class="marker-popup-price-unit"> / month</span>
            </p>
          </div>
        </div>
        `
      )
    )
    .addTo(map);
  return marker;
};

export default Map;
