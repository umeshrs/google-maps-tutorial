function initialize () {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(48.8588589, 2.3475569),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);

  map.set('styles', [
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        { color: '#000000' },
        { weight: 0.5 }
      ]
    }, {
      featureType: 'road',
      elementType: 'labels',
      stylers: [
        { saturation: -100 },
        { invert_lightness: true }
      ]
    }, {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [
        { hue: '#ffff00' },
        { gamma: 1.4 },
        { saturation: 82 },
        { lightness: 96 }
      ]
    }, {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        { visibility: 'off' }
      ]
    }, {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    }, {
      featureType: 'poi.school',
      elementType: 'geometry',
      stylers: [
        { visibility: 'on' },
        { hue: '#fff700' },
        { lightness: -15 },
        { saturation: 99 }
      ]
    }, {
      featureType: 'poi.school',
      elementType: 'labels',
      stylers: [
        { visibility: 'on' }
      ]
    }, {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        { color: '#FF7700' }
      ]
    }
  ]);
}
google.maps.event.addDomListener(window, 'load', initialize);
