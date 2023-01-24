import React from 'react';
import { GoogleMap, LoadScript, Marker, infowindow } from '@react-google-maps/api';
import PlaceComponent from './pages/maps/SearchMap.jsx';
// import Autocomplete from "react-google-autocomplete";
// import usePlacesAutocomplete, {
//     getGeocode,
//     getLatLng,
//   } from "use-places-autocomplete";
  
var map;

function CreateMap () {
    var options = { 
        center: { 
            lat: 13.806988672784861, 
            lng: 100.55927991132293 
        },
        zoom: 10,
    };

    // map = new window.google.maps.Map(document.getElementById('map'), options);

    // infoWindow = new window.google.maps.InfoWindow

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (p) {
            var position= {
                lat: p.coords.latitude,
                lng: p.coords.longitude
            };
            // infoWindow.serPosition(position);
            // infoWindow.setContent('Your localtion!');
            // infoWindow.open(map);
        })    //     function () {
    //         handleLocationError('Geolocation service failed', map.center());
    //     })
    // } else {
    //     handleLocationError('No geolocation available', map.center());
    // }

    // function handleLocationError (content, position) {
    //     infoWindow.serPosition(position);
    //     infoWindow.setContent(content);
    //     infoWindow.open(map);
    }

    const containerStyle = {
        width: '570px',
        height: '500px'
      };
        
    const center = {
        lat: 13.806988672784861,
        lng: 100.55927991132293,
      };
    
      const zoom = {
        zoom: 10
      };  
      

    // function initMap() {
    //     var map = new window.google.maps.Map(document.getElementById('map'), {
    //         center: {lat: 13.806988672784861, lng: 100.55927991132293},
    //         zoom: 10
    //       });
        
    //     var input = document.getElementById('searchInput');
    //     map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);
        
    //     var autocomplete = new window.google.maps.places.Autocomplete(input);
    //     autocomplete.bindTo('bounds', map);
        
    //     var infowindow = new window.google.maps.InfoWindow();
    //     var marker = new window.google.maps.Marker({
    //         map: map,
    //         anchorPoint: new window.google.maps.Point(0, -29)
    //     });

    //     autocomplete.addListener('place_change', function() {
    //         infowindow.close();
    //         marker.setVisible(false);
    //         var place = autocomplete.getPlace();
    //         if (!place.geometry) {
    //             window.alert("Autocomplete's returned place contains no geometry");
    //             return;
    //         }

    //         if (place.geometry.viewport) {
    //             map.fitBounds(place.geometry.viewport);
    //         } else {
    //             map.setCenter(place.geometry.location);
    //             map.setZoom(17);
    //         }
    //         marker.setIcon(({
    //             url: place.icon,
    //             size: new window.google.maps.Size(71, 71),
    //             origin: new window.google.maps.Point(0, 0),
    //             anchor: new window.google.maps.Point(17, 34),
    //             scaledSize: new window. google.maps.Size(35, 35)
    //         }));
    //         marker.setPosition(place.geometry.location);
    //         marker.setVisible(true);

    //         var address = '';
    //         if (place.address_components) {
    //             address = [
    //             (place.address_components[0] && place.address_components[0].short_name || ''),
    //             (place.address_components[1] && place.address_components[1].short_name || ''),
    //             (place.address_components[2] && place.address_components[2].short_name || '')
    //             ].join(' ');
    //         }
        
    //         infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    //             infowindow.open(map, marker);

    //         document.getElementById('location').innerHTML = place.formatted_address;
    //         document.getElementById('lat').innerHTML = place.geometry.location.lat();
    //         document.getElementById('lon').innerHTML = place.geometry.location.lng();
    //     })

    // }

    return (
        <>
        <div>
            <PlaceComponent />
            {/* <input id="searchInput" class="controls" onClick={initMap} type="text" placeholder="Search here"></input>

            <div id="map"></div>

            {/* <ul class="geo-data">
                <li>Full Address: <span id="location"></span></li>
                <li>Latitude: <span id="lat"></span></li>
                <li>Longitude: <span id="lon"></span></li>
            </ul> */}

            {/* <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBg7qd4aSOs4pJS28MZLnfUmh8kcf39pw4&libraries=places&callback=initMap"></script> */} 
        </div>

        <div>
            
             <LoadScript
                googleMapsApiKey='AIzaSyBg7qd4aSOs4pJS28MZLnfUmh8kcf39pw4'>
        
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={18}
            >
            </GoogleMap>
            </LoadScript>
        </div>
        </>  
    );
}

export default CreateMap;