import React, { useEffect } from "react";

const Location = () => {
  useEffect(() => {
    const initMap = () => {
      const chennai = { lat: 13.0827, lng: 80.2707 };

      // Create the map, centered on Chennai
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: chennai,
      });

      // Add a KML Layer (you can customize the URL)
      const georssLayer = new google.maps.KmlLayer({
        url: "http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss",
      });
      georssLayer.setMap(map);

      // Create a control button to recenter the map
      const createCenterControl = (map) => {
        const controlButton = document.createElement("button");
        controlButton.classList.add('buttonStyle');
        controlButton.textContent = "Center Map on Chennai";
        controlButton.title = "Click to recenter the map on Chennai";
        controlButton.type = "button";

        controlButton.addEventListener("click", () => {
          map.setCenter(chennai);
        });

        return controlButton;
      };

      // Add the control button to the map
      const centerControlDiv = document.createElement("div");
      const centerControl = createCenterControl(map);
      centerControlDiv.appendChild(centerControl);
      map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
    };

    // Load the Google Maps script and initialize the map
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=INSERT_YOUR_API_KEY&callback=initMap&v=weekly&solution_channel=GMP_CCS_customcontrols_v2`;
      script.async = true;
      window.initMap = initMap;
      document.head.appendChild(script);
    };

    loadScript();
  }, []);

  return <div id="map" style={{ height: "100vh", width: "100%" }}></div>;
};

export default Location;
