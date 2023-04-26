function initMap(): void {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 12,
        center: { lat: 43.238949, lng: 76.889709 },
      }
    );
  
    directionsRenderer.setMap(map);
  
    const onChangeHandler = function () {
      calculateAndDisplayRoute(directionsService, directionsRenderer);
    };
  
    (document.getElementById("start") as HTMLElement).addEventListener(
      "change",
      onChangeHandler
    );
    (document.getElementById("end") as HTMLElement).addEventListener(
      "change",
      onChangeHandler
    );
  }
  
  function calculateAndDisplayRoute(
    directionsService: google.maps.DirectionsService,
    directionsRenderer: google.maps.DirectionsRenderer
  ) {
    directionsService
      .route({
        origin: {
          query: (document.getElementById("start") as HTMLInputElement).value,
        },
        destination: {
          query: (document.getElementById("end") as HTMLInputElement).value,
        },
        travelMode: google.maps.TravelMode.DRIVING,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
      })
      .catch((e) => window.alert("Directions request failed due to " + status));
  }
  
  declare global {
    interface Window {
      initMap: () => void;
    }
  }
  window.initMap = initMap;