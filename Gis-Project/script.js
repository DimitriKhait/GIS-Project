function showMap() {
  var general = { lat: 31.4117, lng: 35.0818 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: general,
  });

  new google.maps.Marker({
    position: general,
    map: map,
    title: "Israel",
    icon: "https://img.icons8.com/dotty/80/000000/nurse-male.png",
  });

  var input = document.getElementById("search");
  var searchBox = new google.maps.places.SearchBox(input);

  //bouns_changed
  // map.addListener('bounds_changed', function () {
  //     searchBox.setBounds(map.getBounds());
  // });
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];

  searchBox.addListener("places_changed", function () {
    var places = searchBox.getPlaces();

    if (places.length === 0) return;

    markers.forEach(function (m) {
      m.setMap(null);
    });
    markers = [];

    var bounds = new google.maps.LatLngBounds();

    places.forEach(function (p) {
      if (!p.geometry) return;

      markers.push(
        new google.maps.Marker({
          map: map,
          title: p.name,
          position: p.geometry.location,
        })
      );

      if (p.geometry.viewport) bounds.union(p.geometry.viewport);
      else bounds.extend(p.geometry.location);
    });
    map.fitBounds(bounds);
  });
  // end section of automatic search bar.
}

// all bikur rofe locations + show on  map functions:

var general_location = { lat: 31.4117, lng: 35.0818 };

// start of north coordinates
var kiryatShmona_location = { lat: 33.21046405348273, lng: 35.567885699395866 };
var krayot_location = { lat: 32.84474379110188, lng: 35.09213033719006 };
var katzrin_location = { lat: 32.99522783746724, lng: 35.690766661363014 };
var afula_location = { lat: 32.60436721798661, lng: 35.294163437533655 };
var nahariya_location = { lat: 33.00525192638475, lng: 35.09628814115974 };
var carmiel_location = { lat: 32.909432781604224, lng: 35.292767228559356 };
var haifa_location = { lat: 32.82146677477609, lng: 34.99166386760888 };
var hadera_location = { lat: 32.438178823638616, lng: 34.927297484582006 };
// end of north coordinates

// start of south coordinates
var mitzpeRamon_location = { lat: 30.610872636085226, lng: 34.80394427116481 };
var yeruham_location = { lat: 31.244277609160168, lng: 34.798551640787764 };
var beerSheva_location = { lat: 31.244299547572226, lng: 34.798557270114145 };
var ashkelon_location = { lat: 31.665128960751485, lng: 34.56624536442502 };
var ashdod_location = { lat: 31.79777792993912, lng: 34.64772458864691 };
var eilat_location = { lat: 29.555885991284196, lng: 34.95526445767038 };
// end of south coordinates

// start of center coordinates
var telAviv_location = { lat: 32.068022744601826, lng: 34.79333845767038 };
var rishonLezion_location = { lat: 31.991877786483347, lng: 34.77505270552789 };
var netanya_location = { lat: 32.280301959220964, lng: 34.86070672883997 };
var modiin_location = { lat: 31.904585016806777, lng: 35.00416740119372 };
var mevaseretZion_location = { lat: 31.80559856169586, lng: 35.15007192713913 };
var jerusalem_location = { lat: 31.78665186153692, lng: 35.18556865963355 };
var holon_location = { lat: 32.018387559077425, lng: 34.77097297569681 };
var ariel_location = { lat: 32.1038001473769, lng: 35.16838654232963 };
var kfarSaba_location = { lat: 32.17449601190563, lng: 34.91295756313092 };
// end of center coordinates

function general() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: general_location,
  });
  new google.maps.Marker({
    position: general_location,
    map,
    title: "Israel",
    icon: "https://img.icons8.com/dotty/80/000000/nurse-male.png",
  });
}

// start of north locations
function kiryatShmona() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: kiryatShmona_location,
  });
  new google.maps.Marker({
    position: kiryatShmona_location,
    map,
    title: "Opening hours: \n Sunday-Thursday \n 8:00 - 12:00 \n 17:00-22:00 ",
    icon: "https://img.icons8.com/dotty/80/000000/nurse-male.png",
  });
}

function krayot() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: krayot_location,
  });
  new google.maps.Marker({
    position: krayot_location,
    map,
    title: "Opening hours: \n Sunday-Thursday \n 8:00 - 12:00 \n 17:00-22:00 ",
    icon: "https://img.icons8.com/dotty/80/000000/nurse-male.png",
  });
}

function katzrin() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: katzrin_location,
  });
  new google.maps.Marker({
    position: katzrin_location,
    map,
    title: "Opening hours: \n Sunday-Thursday \n 8:00 - 12:00 \n 17:00-22:00 ",
    icon: "https://img.icons8.com/dotty/80/000000/nurse-male.png",
  });
}

function afula() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: afula_location,
  });
  new google.maps.Marker({
    position: afula_location,
    map,
    title: "Opening hours: \n Sunday-Thursday \n 8:00 - 12:00 \n 17:00-22:00 ",
    icon: "https://img.icons8.com/dotty/80/000000/nurse-male.png",
  });
}

function nahariya() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: nahariya_location,
  });
  new google.maps.Marker({
    position: nahariya_location,
    map,
    title: "Opening hours: \n Sunday-Thursday \n 8:00 - 12:00 \n 17:00-22:00 ",
    icon: "https://img.icons8.com/dotty/80/000000/nurse-male.png",
  });
}

function carmiel() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: carmiel_location,
  });
  new google.maps.Marker({
    position: carmiel_location,
    map,
    title: "Opening hours: \n Sunday-Thursday \n 8:00 - 12:00 \n 17:00-22:00 ",
    icon: "https://img.icons8.com/dotty/80/000000/nurse-male.png",
  });
}

function haifa() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: haifa_location,
  });
  new google.maps.Marker({
    position: haifa_location,
    map,
    title: "Opening hours: \n Sunday-Thursday \n 8:00 - 12:00 \n 17:00-22:00 ",
    icon: "https://img.icons8.com/dotty/80/000000/nurse-male.png",
  });
}

function hadera() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: hadera_location,
  });
  new google.maps.Marker({
    position: hadera_location,
    map,
    title: "Opening hours: \n Sunday-Thursday \n 8:00 - 12:00 \n 17:00-22:00 ",
    icon: "https://img.icons8.com/dotty/80/000000/nurse-male.png",
  });
}
// end of north locations

// start of south locations
function mitzpeRamon() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: mitzpeRamon_location,
  });
  new google.maps.Marker({
    position: mitzpeRamon_location,
    map,
    title: "Opening hours: \n Sunday-Thursday \n 8:00 - 12:00 \n 17:00-22:00 ",
    icon: "https://img.icons8.com/dotty/80/000000/nurse-male.png",
  });
}

function yeruham() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: yeruham_location,
  });
  new google.maps.Marker({
    position: yeruham_location,
    map,
    title: "Opening hours: \n Sunday-Thursday \n 8:00 - 12:00 \n 17:00-22:00 ",
    icon: "https://img.icons8.com/dotty/80/000000/nurse-male.png",
  });
}

function beerSheva() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: beerSheva_location,
  });
  new google.maps.Marker({
    position: beerSheva_location,
    map,
    title: "Opening hours: \n Sunday-Thursday \n 8:00 - 12:00 \n 17:00-22:00 ",
    icon: "https://img.icons8.com/dotty/80/000000/nurse-male.png",
  });
}

function ashkelon() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: ashkelon_location,
  });
  new google.maps.Marker({
    position: ashkelon_location,
    map,
    title: "Opening hours: \n Sunday-Thursday \n 8:00 - 12:00 \n 17:00-22:00 ",
    icon: "https://img.icons8.com/dotty/80/000000/nurse-male.png",
  });
}

function ashdod() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: ashdod_location,
  });
  new google.maps.Marker({
    position: ashdod_location,
    map,
    title: "Opening hours: \n Sunday-Thursday \n 8:00 - 12:00 \n 17:00-22:00 ",
    icon: "https://img.icons8.com/dotty/80/000000/nurse-male.png",
  });
}

function eilat() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: eilat_location,
  });
  new google.maps.Marker({
    position: eilat_location,
    map,
    title: "Opening hours: \n Sunday-Thursday \n 8:00 - 12:00 \n 17:00-22:00 ",
    icon: "https://img.icons8.com/dotty/80/000000/nurse-male.png",
  });
}
// end of south locations

// start of center locations
function telAviv() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: telAviv_location,
  });
  new google.maps.Marker({
    position: telAviv_location,
    map,
    title: "Opening hours: \n Sunday-Thursday \n 8:00 - 12:00 \n 17:00-22:00 ",
    icon: "https://img.icons8.com/dotty/80/000000/nurse-male.png",
  });
}

function rishonLezion() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: rishonLezion_location,
  });
  new google.maps.Marker({
    position: rishonLezion_location,
    map,
    title: "Opening hours: \n Sunday-Thursday \n 8:00 - 12:00 \n 17:00-22:00 ",
    icon: "https://img.icons8.com/dotty/80/000000/nurse-male.png",
  });
}

function netanya() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: netanya_location,
  });
  new google.maps.Marker({
    position: netanya_location,
    map,
    title: "Opening hours: \n Sunday-Thursday \n 8:00 - 12:00 \n 17:00-22:00 ",
    icon: "https://img.icons8.com/dotty/80/000000/nurse-male.png",
  });
}

function modiin() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: modiin_location,
  });
  new google.maps.Marker({
    position: modiin_location,
    map,
    title: "Opening hours: \n Sunday-Thursday \n 8:00 - 12:00 \n 17:00-22:00 ",
    icon: "https://img.icons8.com/dotty/80/000000/nurse-male.png",
  });
}

function mevaseretZion() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: mevaseretZion_location,
  });
  new google.maps.Marker({
    position: mevaseretZion_location,
    map,
    title: "Opening hours: \n Sunday-Thursday \n 8:00 - 12:00 \n 17:00-22:00 ",
    icon: "https://img.icons8.com/dotty/80/000000/nurse-male.png",
  });
}

function jerusalem() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: jerusalem_location,
  });
  new google.maps.Marker({
    position: jerusalem_location,
    map,
    title: "Opening hours: \n Sunday-Thursday \n 8:00 - 12:00 \n 17:00-22:00 ",
    icon: "https://img.icons8.com/dotty/80/000000/nurse-male.png",
  });
}

function holon() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: holon_location,
  });
  new google.maps.Marker({
    position: holon_location,
    map,
    title: "Opening hours: \n Sunday-Thursday \n 8:00 - 12:00 \n 17:00-22:00 ",
    icon: "https://img.icons8.com/dotty/80/000000/nurse-male.png",
  });
}

function ariel() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: ariel_location,
  });
  new google.maps.Marker({
    position: ariel_location,
    map,
    title: "Opening hours: \n Sunday-Thursday \n 8:00 - 12:00 \n 17:00-22:00 ",
    icon: "https://img.icons8.com/dotty/80/000000/nurse-male.png",
  });
}

function kfarSaba() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: kfarSaba_location,
  });
  new google.maps.Marker({
    position: kfarSaba_location,
    map,
    title: "Opening hours: \n Sunday-Thursday \n 8:00 - 12:00 \n 17:00-22:00 ",
    icon: "https://img.icons8.com/dotty/80/000000/nurse-male.png",
  });
}
// end of center locations

// end of locations + show on map functions //

// start of initMap functions:

function initMapNorth() {
  if (document.getElementById("צפון").value == "דפולטיבי") {
    general();
  } else if (document.getElementById("צפון").value == "קרית_שמונה") {
    kiryatShmona();
  } else if (document.getElementById("צפון").value == "קריות") {
    krayot();
  } else if (document.getElementById("צפון").value == "קצרין") {
    katzrin();
  } else if (document.getElementById("צפון").value == "עפולה") {
    afula();
  } else if (document.getElementById("צפון").value == "נהריה") {
    nahariya();
  } else if (document.getElementById("צפון").value == "כרמיאל") {
    carmiel();
  } else if (document.getElementById("צפון").value == "חיפה") {
    haifa();
  } else if (document.getElementById("צפון").value == "חדרה") {
    hadera();
  }
}

function initMapSouth() {
  if (document.getElementById("דרום").value == "דפולטיבי") {
    general();
  } else if (document.getElementById("דרום").value == "מצפה_רמון") {
    mitzpeRamon();
  } else if (document.getElementById("דרום").value == "ירוחם") {
    yeruham();
  } else if (document.getElementById("דרום").value == "באר_שבע") {
    beerSheva();
  } else if (document.getElementById("דרום").value == "אשקלון") {
    ashkelon();
  } else if (document.getElementById("דרום").value == "אשדוד") {
    ashdod();
  } else if (document.getElementById("דרום").value == "אילת") {
    eilat();
  }
}

function initMapCenter() {
  if (document.getElementById("מרכז").value == "דפולטיבי") {
    general();
  } else if (document.getElementById("מרכז").value == "תל_אביב") {
    telAviv();
  } else if (document.getElementById("מרכז").value == "ראשון_לציון") {
    rishonLezion();
  } else if (document.getElementById("מרכז").value == "נתניה") {
    netanya();
  } else if (document.getElementById("מרכז").value == "מודיעין") {
    modiin();
  } else if (document.getElementById("מרכז").value == "מבשרת_ציון") {
    mevaseretZion();
  } else if (document.getElementById("מרכז").value == "ירושלים") {
    jerusalem();
  } else if (document.getElementById("מרכז").value == "חולון") {
    holon();
  } else if (document.getElementById("מרכז").value == "אריאל") {
    ariel();
  } else if (document.getElementById("מרכז").value == "כפר_סבא") {
    kfarSaba();
  }
}

// end of initMap functions //

// start of auto complete degrees section :

var subjects = ["מרכז", "דרום", "צפון"];

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

autocomplete(document.getElementById("myInput"), subjects);

const wrapper = document.querySelector(".wrapper"),
  form = wrapper.querySelectorAll(".myForm"),
  submitInput = form[0].querySelector('input[type="submit"]');

function getDataForm(e) {
  e.preventDefault();

  var formData = new FormData(form[0]);
  var chosenPlace = formData.get("placeName");
  console.log(chosenPlace);

  if (chosenPlace == "צפון") {
    initMapNorth();
    document.getElementById("North_Form").hidden = false;
  } else if (chosenPlace == "דרום") {
    initMapSouth();
    document.getElementById("South_Form").hidden = false;
  } else if (chosenPlace == "מרכז") {
    initMapCenter();
    document.getElementById("Center_Form").hidden = false;
  } else console.log(chosenPlace);
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    submitInput.addEventListener("click", getDataForm, false);
  },
  false
);
