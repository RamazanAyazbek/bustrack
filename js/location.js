    // Map initialization 
    var map = L.map('map').setView([43.2308224, 76.8671744], 15);

    //osm layer
    var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    osm.addTo(map);


    if(!navigator.geolocation) {
        console.log("Your browser doesn't support geolocation feature!")
    } else {
        // navigator.geolocation.getCurrentPosition(getPosition)
        setInterval(() => {
            navigator.geolocation.getCurrentPosition(getPosition)
        }, 3000);
    }

    var marker, circle;
    var transfer_lat=0,transfer_long=0; 

    function getPosition(position){
        // console.log(position)
        var lat = position.coords.latitude
        var long = position.coords.longitude
        // position.coords.accuracy=20
        var accuracy = position.coords.accuracy
        transfer_lat=lat
        transfer_long=long

        if(marker) {
            map.removeLayer(marker)
        }

        if(circle) {
            map.removeLayer(circle)
        }

        marker = L.marker([lat, long])
        circle = L.circle([lat, long], {radius: accuracy})

        var featureGroup = L.featureGroup([marker, circle]).addTo(map)

        map.fitBounds(featureGroup.getBounds())

        console.log("Your coordinate is: Lat: "+ lat +" Long: "+ long+ " Accuracy: "+ accuracy)
    }

setInterval(()=>{
    console.log("transfer: ", transfer_lat, "," + transfer_long)
    // document.getElementById('lat_data').value=transfer_lat
    // document.getElementById('long_data').value=transfer_long
}, 15000)
