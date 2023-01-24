import React, { useRef, useState } from "react";
import { 
  GoogleMap, 
  LoadScript, 
  useJsApiLoader, 
  Marker,
  Autocomplete, } from '@react-google-maps/api';
import { Loader } from "@googlemaps/js-api-loader"
import { render } from "@testing-library/react";
import AutoComplete from "../../components/Autocomplete";

{/* <script async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBg7qd4aSOs4pJS28MZLnfUmh8kcf39pw4&callback=Map">
</script> */}
  

//   const Map = () => {
//     if ("geolocation" in navigator) {
//     console.log("Available");
//   } else {
//     console.log("Not Available");
//   }

//   navigator.geolocation.getCurrentPosition(function(position) {
//     console.log("Latitude is :", position.coords.latitude);
//     console.log("Longitude is :", position.coords.longitude);
//     console.log(position);
//   });
  
  // const containerStyle = {
  //   width: '570px',
  //   height: '500px'
  // };

  // const center = {
  //   lat: 13.806988672784861,
  //   lng: 100.55927991132293,
  // };

  // const zoom = {
  //   zoom: 10
  // };

//   function Map() {
//     const { isLoaded } = useJsApiLoader({
//       id: 'google-map-script',
//       googleMapsApiKey: "AIzaSyBg7qd4aSOs4pJS28MZLnfUmh8kcf39pw4"
//     })

//     const google = window.google;
//     let map = new google.maps.Map(document.getElementById("map"), {
//       center: {lat:13.806988672784861, lng:100.55927991132293},
//       zoom: 13,
//       mapTypeId: "roadmap",
//     });

//     const input = document.getElementById("pac-input");
//     const searchBox = new google.maps.places.SearchBox(input);

//     map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
//     map.addListener("bounds_changed", () => {
//       searchBox.setBounds(map.getBounds());
//     });

//     const markers = [];

//     searchBox.addListener("places_changed", () => {
//       const places = searchBox.getPlaces();

//       if (places.length == 0) {
//         return;
//       }

//       markers.forEach((marker) => {
//         marker.setMap(null);
//       });
//       markers = [];

//       const bounds = new google.maps.LatLngBounds();

//       places.forEach((place) => {
//         if (!place.geometry || !place.geometry.location) {
//           console.log("Returned place contains no geometry");
//           return;
//         }

//         const icon = {
//           url: place.icon,
//           size: new google.maps.Size(71, 71),
//           origin: new google.maps.Point(0, 0),
//           anchor: new google.maps.Point(17, 34),
//           scaleSize: new google.maps.Size(25, 25),
//         };
//       })
//     })
    
//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
    // <GoogleMap
    //   mapContainerStyle={containerStyle}
    //   center={center}
    //   zoom={zoom}
    //   onLoad={onLoad}
    //   onUnmount={onUnmount}
    // >
    //     { /* Child components, such as markers, info windows, etc. */ }
    // <></>
    //   </GoogleMap>
//   ) : 
//     <></>
  
//   }


// const loader = new Loader({
//   apiKey: "AIzaSyBg7qd4aSOs4pJS28MZLnfUmh8kcf39pw4",
//   version: "weekly",
// });

// loader.load().then(() => {
//   let map = new window.google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// });



//     return (
//       <LoadScript
//         googleMapsApiKey="AIzaSyBg7qd4aSOs4pJS28MZLnfUmh8kcf39pw4"
//       >
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={18}
//       >
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//     </LoadScript>
//     );
// }

export default class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      zoom: 10,
      maptype: 'roadmap',
      place_formatted: '',
      place_id: '',
      place_location: '',
    };
  }

  componentDidMount() {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 13.806988672784861, lng: 100.55927991132293},
      zoom: 13,
      mapTypeId: 'roadmap',
    });

    map.addListener('zoom_chhange', () => {
      this.setState({
        zoom: map.getZoom(),
      });
    }) ;

    map.addListener('maptypeid_change', () => {
      this.setState({
        maptype: map.getMapTypeId(),
      });
    });

    let marker = new window.google.maps.Marker({
      map: map,
      position: {lat: 13.806988672784861, lng: 100.55927991132293},
    });


    let inputNode = document.getElementById('pac-input', () => {
      let place = AutoComplete.getPlace();
      let location = place.geometry.location;

      this.setState({
        place_formatted: place.formatted_address,
        place_id: place.place_id,
        place_location: location.toString(),      
      });

      map.fitBounds(place.geometry.viewport);
      map.setCenter(location);

      marker.setPlace({
        placeId: place.place_id,
        location: location,
      });
    });
  }

  render() {
    return(
      <div id='map'>
        <div id='map'/>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBg7qd4aSOs4pJS28MZLnfUmh8kcf39pw4&libraries=geometry"></script>
      </div>
    );
  }
};


// export default React.memo(Map)