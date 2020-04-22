function initMap() {

    navigator.geolocation.watchPosition(position => {
        //get user's position
        const latLon = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        //generate the map
        let map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: latLon.lat, lng: latLon.lng },
            zoom: 8
        });

        //store user's choice
        let userChoice;

        //show basic markers to the map
        createMarker(latLon, "<h2>You are here!</h2>", "https://cdn3.iconfinder.com/data/icons/maps-and-navigation-7/65/68-512.png");
        createMarker({ lat: 37.983810, lng: 23.727539 }, "<h2>Here is Athens..</h2>", "https://cdn.iconscout.com/icon/premium/png-256-thumb/acropolis-of-athens-1-904393.png");


        //event to create a marker when click and delete the previous one
        let firstClick = true;
        google.maps.event.addListener(map, "click", (e) => {
            if (!firstClick){
                userChoice.setMap(null);
            };
            createMarker(e.latLng, "<h2>Your choice..</h2>");
            firstClick = false;
        });


        function createMarker(latLon,info,url){
            let infowindow = new google.maps.InfoWindow({
                content: info
            });

            let marker;

            if (url){
                    marker = new google.maps.Marker({
                    position: latLon, 
                    icon:{
                        url: url,
                        scaledSize: new google.maps.Size(50, 50)
                    },    
                    map: map
                });
            }else{
                    marker = new google.maps.Marker({
                    position: latLon,    
                    map: map
                });
            }

            marker.addListener("click", () => {
                infowindow.open(map,marker);
                map.setZoom(12);
                map.setCenter(marker.getPosition());
            });

            userChoice = marker;
        };
    });
};
