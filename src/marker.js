const mapboxgl = require('mapbox-gl');

const activityDomEl = document.createElement("div"); // Create a new, detached DIV
activityDomEl.style.width = "32px";
activityDomEl.style.height = "39px";
activityDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"

const restaurantDomEl = document.createElement("div"); // Create a new, detached DIV
restaurantDomEl.style.width = "32px";
restaurantDomEl.style.height = "39px";
restaurantDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)"

const hotelDomEl = document.createElement("div"); // Create a new, detached DIV
hotelDomEl.style.width = "32px";
hotelDomEl.style.height = "39px";
hotelDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)"


function buildMarker(locationType, lnglat){

  let markerDomEl;

  if (locationType === 'activity'){
    markerDomEl = activityDomEl;

  } else if (locationType === 'restaurant'){
    markerDomEl = restaurantDomEl;

  } else if (locationType === 'hotel'){
    markerDomEl = hotelDomEl;

  }

  const mapMarker = new mapboxgl.Marker(markerDomEl)
      .setLngLat(lnglat);

  return mapMarker;
}



module.exports = buildMarker;

