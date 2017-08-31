
    
// Creat a map function
function initMap() {
  var bounds = new google.maps.LatLngBounds;
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13
});

  var input = document.getElementById('pac-input');
  var inp = document.getElementById('query!-input')
}



// Create a function which include Google map api Autocomplete, DirectionService and DistanceMatrix. 
function initAutocomplete() {

  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 22.372081, lng: 114.107877},
    zoom: 7,
    mapTypeId: 'roadmap'
});
        
  var infowindow = new google.maps.InfoWindow(); 
  var marker = new google.maps.Marker({
  map: map
});
         
marker.addListener('click', function() {
            
            infowindow.close();
            var place = autocomplete.getPlace();
            if (!place.place_id) {
return; 
}
})

    
var input = document.getElementById('origin-input');
var input2 = document.getElementById('destination-input');
    
    
  
  var autocomplete =  new google.maps.places.Autocomplete(
  input, {placeIdOnly: true}); 
  var autocomplete2 =  new google.maps.places.Autocomplete(
  input2, {placeIdOnly: true}); 

  autocomplete.bindTo('bounds', map);
  autocomplete2.bindTo('bounds', map);
          
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input2);

  var infowindow = new google.maps.InfoWindow(); 
  var geocoder = new google.maps.Geocoder;
  var marker = new google.maps.Marker({
  map: map
}); 

  marker.addListener('click', function() {
  infowindow.open(map, marker);
});
    
    autocomplete.addListener('place_change', function() {
  infowindow.close();
  var place = autocomplete.getPlace();
      if (!place.place_id) {
          return ("there is no place id"); 
}
  geocoder.geocode({'placeId': place.place_id}, function(results, status){
      if (status !=='OK') {
          window.alert('Geocoder failed due to: ' + status );
          return;
  }
})
})  
    
  
// This is the autocomplete
    
   // var autocomplete = new google.maps.places.Autocomplete(
//    input, {placeOnly: true});
//    autocomplete.bindTo('bounds', map);
    
  // map.controls[google.maps.ControlsPosition.TOP_LEFT].push(input);
  //  var indowindow = new google.maps.InfoWindow();
//    var geocoder = new google.maps.Geocoder;
//    var marker = new google.maps.Marker ({
//    map: map
//});
//    marker.addListener('click', function() { 
//    infowindow.open(map, marker);
 //});
        
  directionsDisplay.setMap(map); 
  directionsDisplay.setPanel(document.getElementById('right-panel')); 
      
  var onChangeHandler = function() {
   calculateAndDisplayRoute(directionsService, directionsDisplay)
}; 
          
  document.getElementById('origin-input').addEventListener('change', onChangeHandler);
  document.getElementById('destination-input').addEventListener('change', onChangeHandler);
  
  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
    origin: document.getElementById('origin-input').value,
    destination: document.getElementById('destination-input').value, 
    travelMode: 'DRIVING'
}, function(response, status) {
      if (status ==='OK') {
          directionsDisplay.setDirections(response);
    }
  });
}
}

// Adding Google map DistanceMatrix api and Google map geocode api.
function mFunction() {
  var address1 = document.getElementById('origin-input').value;
  var address2 = document.getElementById('destination-input').value;
  window.open("https://maps.googleapis.com/maps/api/distancematrix/json?origins=" + address1 + "&destinations=" + address2 + '&key=AIzaSyDH3Y5os8GvSV1IgwOXYvS50PeZbsBAFN8' );
}
        
function SFunction() {
  var address1 = document.getElementById('origin-input').value;
  var address2 = document.getElementById('destination-input').value;
  window.open("https://maps.googleapis.com/maps/api/geocode/json?address=" + address1 + '&key=AIzaSyDH3Y5os8GvSV1IgwOXYvS50PeZbsBAFN8' );
}
        
function EFunction() {
  var address1 = document.getElementById('origin-input').value;
  var address2 = document.getElementById('destination-input').value;
  window.open("https://maps.googleapis.com/maps/api/geocode/json?address="  + address2 + '&key=AIzaSyDH3Y5os8GvSV1IgwOXYvS50PeZbsBAFN8'
)};
