mapboxgl.accessToken = 'pk.eyJ1IjoicmFqYXRtYWhhcmFuYSIsImEiOiJjbGZpZDk3cW0wN3hzM3BwbjU2YmpnamIwIn0.JpI51fCE98-bi0IXog1VKA';


navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true });

function successLocation(position) {
    settingMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    settingMap([18.781525,84.084542])
}

function settingMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 10
    });

    map.addControl(new mapboxgl.NavigationControl());

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
    });
    map.addControl(directions, 'top-left');
}