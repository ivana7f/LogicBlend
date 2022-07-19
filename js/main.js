// initialize and add the map
function initMap() {
  //Your location
  const loc = { lat: 41.800953, lng: -87.695499 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: loc,
  });
  // The marker, positioned on location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Smooth scrolling

$("#main-nav a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
