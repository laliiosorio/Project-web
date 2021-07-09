const Api = new APIHandler()

// function initMap() {

//     const myMap = new google.maps.Map(
//         document.querySelector('#airportMap'),
//         { zoom: 12, center: { lat: 40.46832139227406, lng: - 3.5698360983159154 } }
//     )

//     getAirportData(myMap)
// }


function getAirportData() {

    const reviewId = document.querySelector('#review_id').dataset.id
    console.log('review id', reviewId)

    Api
        .getOneReview(reviewId)
        .then(response => {
            const location = [response.data.airport.lat, response.data.airport.lon]

            console.log('aqui then', response.data.airport)
            const myMap = new google.maps.Map(
                document.querySelector('#airportMap'),
                { zoom: 14, center: { lat: location[0], lng: location[1] }, styles: mapStyles.aubergine }
            )
            new google.maps.Marker({
                map: myMap,
                position: { lat: location[0], lng: location[1] }
            })
        })
        .catch(err => console.log('estoy entrando aqui', { err }))
}

function getAirportsData() {

    Api
        .getFullListAirports()
        .then(response => {
            console.log(response.data)

            const myMap = new google.maps.Map(
                document.querySelector('#airportsMap'),
                { zoom: 2, center: { lat: 32.26017162019832, lng: - 38.8741490053185 }, styles: mapStyles.aubergine }
            )
            response.data.forEach(elm => {
                new google.maps.Marker({
                    map: myMap,
                    position: { lat: elm.lat, lng: elm.lon }
                })
            })


        })
        .catch(err => console.log('estoy entrando aqui', { err }))
}

function printMarker(location, myMap) {

    const { coordinates } = location

    new google.maps.Marker({
        map: myMap,
        position: { lat: coordinates[0], lng: coordinates[1] }
    })
}