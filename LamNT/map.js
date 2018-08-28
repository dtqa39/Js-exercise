var map;
var infowindow;
var markersArray = [];
var buttonDistance = document.getElementById('btn-distance');
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 13
  });
  infoWindow = new google.maps.InfoWindow;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      infoWindow.open(map);
      map.setCenter(pos);
      // Create markers.
      var marker = new google.maps.Marker({
        position: pos,
        map: map
      });
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } 
  else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}
buttonDistance.onclick = function(){
  var selectDistance = document.getElementById('select-distance');
  var rad = selectDistance.value * 1000;
  var service = new google.maps.places.PlacesService(map);
  var getNextPage = null;
  var moreButton = document.getElementById('more');
  function clearOverlays() {
    for (var i = 0; i < markersArray.length; i++ ) {
     markersArray[i].setMap(null);
    }
  }
  clearOverlays();
  moreButton.onclick = function() {
    moreButton.disabled = true;
    if (getNextPage) getNextPage();
  };      
  service.nearbySearch(
    {location: pos, radius: rad, type: ['restaurant']},
    function(results, status, pagination) {
      if (status !== 'OK') return;
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
      }
      moreButton.disabled = !pagination.hasNextPage;
      getNextPage = pagination.hasNextPage && function() {
        pagination.nextPage();
      };
  });
}
function createMarker(place) {
  var bounds = new google.maps.LatLngBounds();
  var marker1 = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    icon: {
      url: 'images/Layer 1.png',
      scaledSize: new google.maps.Size(30, 30),
      labelOrigin: new google.maps.Point(15, 10)
    }
  });
  markersArray.push(marker1); 
  bounds.extend(place.geometry.location);
  // map.fitBounds(bounds);
  google.maps.event.addListener(marker1, 'click', function() {
    document.getElementById("modal").style.display = "block";
    document.getElementById("restaurant-name").innerHTML = place.name;
    document.getElementById("restaurant--info-vin").innerHTML = place.vicinity;
    if (place.opening_hours.open_now == true) {
      document.getElementById("restaurant--info-open").innerHTML = "Đang mở cửa";
    } else {
      document.getElementById("restaurant--info-open").innerHTML = "Đã đóng cửa";
    }
    document.getElementById("restaurant--info-rate").innerHTML = "Đánh giá:" + " " + place.rating;
  });
}
