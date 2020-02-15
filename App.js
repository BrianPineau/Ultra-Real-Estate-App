fetch('https://api.bridgedataoutput.com/api/v2/test/listings/maps?access_token=6baca547742c6f96a6ff71b138424f21')
.then(result => console.log(result))
.then(data => console.log(data))
.catch(error => console.log(error));

//AIzaSyB_GA5DmzbTIikRWNal_0d5rm3vezbkYOk

function initMap () {
    let options = {
        zoom: 8,
        center: {lat: 39.5501, lng: -105.7821}
    }
    let maps = new google.maps.Map(document.getElementById('map'), options);
};
