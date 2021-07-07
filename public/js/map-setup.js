const api = new APIHandler()
function initMap() {

    const myMap = new google.maps.Map(
        document.querySelector('#airportMap'),
        { zoom: 12, center: { lat: 40.46832139227406, lng: - 3.5698360983159154 } }
    )

    getPlacesData()
}


function getPlacesData() {

    axios
        .get()
        .then(response => {
            console.log(response)
        })
        .catch(err => console.log(err))
}

// axios
//     .get('/api/locations')
//     .then(response => response.data.forEach(elm => printMarker(elm.location, myMap)))
//     .catch(err => console.log(err))


function printMarker(location, myMap) {

    const { coordinates } = location

    new google.maps.Marker({
        map: myMap,
        position: { lat: coordinates[0], lng: coordinates[1] }
    })
}