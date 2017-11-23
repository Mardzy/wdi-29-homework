/* global google:ignore */
$(() => {
  console.log('JS connected');

  const $map = $('.map');
  const $info = $('.info');
  const $name = $('#name');
  const $who = $('#who');
  const $where = $('#where');
  const $when = $('#when');
  const $latitude = $('#latitude');
  const $longitude = $('#longitude');
  const $image = $('#image');
  const $rating = $('#rating');
  const $newMarkets = $('#new-markets');
  const $delete = $('.btn-danger');
  const $marketForm = $('.market-form');
  let map = null;
  let locations = null;
  let infowindow = null;
  const markers = [];

  $info.on('click',$delete, deleteMarket);
  $newMarkets.on('submit', createMarket);
  // $marketForm.on('click', showForm);

  // function hideForm(){
  //   $newMarkets.addClass('hidden');
  // }

  // function showForm(){
  //   $newMarkets.removeClass('hidden');
  // }
  //


  intitMap();

  function intitMap() {
    const latLng = { lat: 51.527104, lng: -0.111000 };
    map = new google.maps.Map($map.get(0), {
      zoom: 12,
      center: latLng,
      scrollwheel: false
    });
    getMarkets();
  }

  function getMarkets() {
    $.get('http://localhost:3000/markets')
      .done((response) => {
        locations = response;
        locations.forEach((location) => {
          addMarker(location);
          infoAsidePrepend(location);
        });
        console.log(response);
      });
  }

  function createMarket(e) {
    e.preventDefault();
    const newMarket = {
      name: $name.val(),
      who: $who.val(),
      when: $when.val(),
      where: $where.val(),
      rating: $rating.val(),
      latitude: $latitude.val(),
      longitude: $longitude.val(),
      image: $image.val()
    };
    $.ajax({
      url: 'http://localhost:3000/markets',
      method: 'POST',
      data: JSON.stringify(newMarket),
      contentType: 'application/json'
    })
      .done((market) => {
        addMarker(market);

      });
  }

  function infoAsidePrepend(location) {
    $info.append(`
      <div class="market">
        <form class="market-form">
          <input class="img" id="${location.id}" type="image" value="${location.id}" src="${location.image}">
          <label for="${location.id}">
          <span class="form-name">${location.name}</span><br>
          <span class="form-where">${location.where}</span><br>
          <span class="form-info">Who: ${location.who}<br>
            When: ${location.when}<br>
            Rating: ${location.rating}/5</span></label>
            <buttondata-id="${location.id}" class="btn-sm btn-danger">Delete</button>
        </div>
    `);
  }

  function addMarker(location) {
    const latLng = { lat: location.latitude, lng: location.longitude};
    const marker = new google.maps.Marker({
      position: latLng,
      map: map,
      icon: 'images/kerb.png'
    });
    marker.addListener('click', () => {
      createInfoWindow(marker, location);
    });
    markers.push(marker);
  }

  function createInfoWindow(marker, location) {
    if(infowindow) infowindow.close();
    infowindow = new google.maps.InfoWindow({
      content: `
    <div class="infowindow">
      <h4>${location.name}</h4>
      <p>${location.where}</p>
      <p>${location.when}</p>
    </div>
    `
    });
    infowindow.open(map, marker);
  }

  function deleteMarket(e) {
    const id = $(e.target).data('id');
    $.ajax({
      url: `http://localhost:3000/markets/${id}`,
      method: 'DELETE'
    })
      .done(() => {
        $(e.target).parent().remove();
      });
  }

});//last line
