const dorms = [
  {
    name: "Allison Hall",
    address: "1820 Chicago Ave",
    size: "363",
    type: "Hall",
    location: "South",
    dining: "yes",
    firstyear: "yes",
    ac: "yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "yes",
    tech: "11 mi / 22 km",
    norris: "6",
    rock: "3",
    allgender: "yes",
  },
  {
    name: "Ayers Hall",
    address: "2324 Campus Dr",
    size: "170",
    type: "College",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    tech: "7",
    norris: "13",
    rock: "16",
    allgender: "no",
  },
  {
    name: "Bobb-McCulloch Hall",
    address: "2305 Sheridan Rd",
    size: "496",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "yes",
    suite: "no",
    elevator: "no",
    singles: "no",
    doubles: "yes",
    triples: "yes",
    tech: "3",
    norris: "11",
    rock: "12",
    allgender: "no",
  },
  {
    name: "Chapin Hall",
    address: "726 University Pl",
    size: "72",
    type: "College",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "yes",
    tech: "13",
    norris: "10",
    rock: "6",
    allgender: "yes",
  },
  {
    name: "East Fairchild",
    address: "1855 Sheridan Rd",
    size: "109",
    type: "College",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    tech: "13",
    norris: "5",
    rock: "2",
    allgender: "no",
  },
  {
    name: "Elder Hall",
    address: "2400 Sheridan Rd",
    size: "345",
    type: "Hall",
    location: "North",
    dining: "yes",
    firstyear: "yes",
    ac: "yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    tech: "6",
    norris: "13",
    rock: "14",
    allgender: "yes",
  },
  {
    name: "Foster-Walker Complex",
    address: "1927 Orrington Avenue",
    size: "582",
    type: "Hall",
    location: "South",
    dining: "yes",
    firstyear: "yes",
    ac: "yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "no",
    triples: "no",
    tech: "9",
    norris: "7",
    rock: "5",
    allgender: "yes",
  },
  {
    name: "Goodrich House",
    address: "2321 Sheridan Rd",
    size: "<100",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "no",
    ac: "yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    allgender: "no",
  },
  {
    name: "Hobart House",
    address: "630 Emerson St",
    size: "50",
    type: "College",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "yes",
    tech: "11",
    norris: "7",
    rock: "4",
    allgender: "no",
  },
  {
    name: "Jones Hall",
    address: "1820 Sheridan Rd",
    size: "121",
    type: "Hall",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    tech: "15",
    norris: "7",
    rock: "5",
    allgender: "no",
  },
  {
    name: "Kemper Hall",
    address: "2420 Campus Dr",
    size: "165",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "yes",
    suite: "yes",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    tech: "7",
    norris: "12",
    rock: "14",
    allgender: "yes",
  },
  {
    name: "Lindgren House",
    address: "2309 Sheridan Rd",
    size: "37",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "no",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "no",
    triples: "no",
    tech: "3",
    norris: "10",
    rock: "13",
    allgender: "no",
  },
  {
    name: "North Mid-Quads",
    address: "650 Emerson St",
    size: "88",
    type: "College",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    tech: "12",
    norris: "9",
    rock: "5",
    allgender: "no",
  },
  {
    name: "Rogers House",
    address: "647 University Pl",
    size: "49",
    type: "Hall",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "no",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    tech: "12",
    norris: "8",
    rock: "4",
    allgender: "no",
  },
  {
    name: "Sargent Hall",
    address: "2245 Sheridan Rd",
    size: "157",
    type: "Hall",
    location: "North",
    dining: "yes",
    firstyear: "yes",
    ac: "no",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    tech: "2",
    norris: "10",
    rock: "11",
    allgender: "no",
  },
  {
    name: "Shepard Hall",
    address: "626 University Pl",
    size: "153",
    type: "Hall",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    tech: "12",
    norris: "8",
    rock: "4",
    allgender: "no",
  },
  {
    name: "Slivka Hall",
    address: " 2332 Campus Dr",
    size: "140",
    type: "College",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    tech: "6",
    norris: "13",
    rock: "14",
    allgender: "yes",
  },
  {
    name: "South Mid-Quads",
    address: "655 University Pl",
    size: "88",
    type: "College",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    tech: "13",
    norris: "9",
    rock: "5",
    allgender: "no",
  },
  {
    name: "West Fairchild",
    address: "1861 Sheridan Rd",
    size: "106",
    type: "College",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    tech: "12",
    norris: "6",
    rock: "2",
    allgender: "yes",
  },
  {
    name: "Willard Hall",
    address: "1865 Sherman Ave",
    size: "261",
    type: "College",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "yes",
    tech: "14",
    norris: "11",
    rock: "7",
    allgender: "yes",
  },
  {
    name: "1838 Chicago Ave",
    size: "120",
    type: "Hall",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    address: "1838 Chicago Ave",
    tech: "12",
    norris: "6",
    rock: "2",
    doublePrice: "",
    singlePrice: "",
    description: "description",
    testimonial: "testimonial",
    allgender: "no",
  },
  {
    name: "636 Emerson",
    address: "636 Emerson",
    size: "<100",
    type: "Hall",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "no",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    allgender: "no",
  },
  {
    name: "640 Emerson",
    address: "640 Emerson",
    size: "<100",
    type: "Hall",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "no",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    allgender: "no",
  },
  {
    name: "710 Emerson Ave",
    address: "710 Emerson Ave",
    size: "<100",
    type: "Hall",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "no",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    allgender: "no",
  },
  {
    name: "1856 Orrington Ave",
    address: "1856 Orrington Ave",
    size: "<100",
    type: "Hall",
    location: "South",
    dining: "no",
    firstyear: "no",
    ac: "no",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    allgender: "no",
  },
  {
    name: "2303 Sheridan Rd (CCS)",
    address: "2303 Sheridan Rd",
    size: "40",
    type: "College",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "yes",
    tech: "3",
    norris: "12",
    rock: "12",
    allgender: "no",
  },
  {
    name: "2303 Sheridan Rd (GREEN House)",
    address: "2303 Sheridan Rd",
    size: "40",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "yes",
    tech: "3",
    norris: "12",
    rock: "12",
    allgender: "no",
  },
  {
    name: "2307 Sheridan Rd",
    address: "2307 Sheridan Rd",
    size: "<100",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "no",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    allgender: "no",
  },
  {
    name: "2347 Sheridan Rd",
    address: "2347 Sheridan Rd",
    size: "<100",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "no",
    ac: "yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    allgender: "no",
  },
  {
    name: "2349 Sheridan Rd",
    address: "2349 Sheridan Rd",
    size: "<100",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "no",
    suite: "no",
    elevator: "no",
    singles: "no",
    doubles: "yes",
    triples: "no",
    allgender: "no",
  },
  {
    name: "2313 Sheridan Rd",
    address: "2313 Sheridan Rd",
    size: "36",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "no",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    tech: "8",
    norris: "14",
    rock: "16",
    allgender: "no",
  },
];

const dorm_names = document.querySelector("#dorms");
const filters = document.querySelector("#filters");

const makeDorms = () => {
  let table_rows = document.createElement("tr");
  table_rows.innerHTML = `<th class="dorm-name">Hall</th> <th class="dorm-size">Size</th> <th class="dorm-type">Type</th>`;
  dorm_names.appendChild(table_rows);
  for (let i = 0; i < dorms.length; i++) {
    let newItem = document.createElement("tr");
    newItem.className = `${dorms[i].name}`;
    newItem.innerHTML = `<td class="dorm-name" onclick="makePage(${[i]});">${
      dorms[i].name
    }</td> <td class="dorm-size">${dorms[i].size}</td> <td class="dorm-type">${
      dorms[i].type
    }</td>`;
    dorm_names.appendChild(newItem);
  }
  let form = document.createElement("form");
  form.innerHTML = ``;

  filters.appendChild(form);
};
makeDorms();

const checkboxes = Object.values(
  document.querySelectorAll("input[type=checkbox]")
);

//get all currently checked filters
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () =>
    getCurrDormsByFilter(
      Object.values(document.querySelectorAll("input[type=checkbox]"))
        .filter((c) => c.checked)
        .map((c) => c.id)
    )
  );
});

function getCurrDormsByFilter(filterArr) {
  // console.log(filterArr);
  //clear classlist
  Object.values(document.querySelectorAll("tr")).map((d, i) => {
    if (i % 2 === 1) {
      d.style.backgroundColor = "rgb(114, 66, 175, 25%)";
    } else d.style.backgroundColor = "white";
  });

  const locationsCheck = filterArr.filter(
    (i) => i === "South" || i === "North"
  );

  const collegeCheck = filterArr.filter((i) => i === "Hall" || i === "College");

  const sizeCheck = filterArr.filter(
    (i) => i === "verysmall" || i === "small" || i === "medium" || i === "large"
  );

  const roomCheck = filterArr.filter(
    (i) => i === "singles" || i === "doubles" || i === "triples"
  );

  const filterDormsByLocation = (filterArr, dorm) => {
    return locationsCheck.length === 0
      ? true
      : (filterArr.includes("North") && dorm.location === "North") ||
          (filterArr.includes("South") && dorm.location === "South");
  };
  const filterDormsByType = (filterArr, dorm) => {
    return collegeCheck.length === 0
      ? true
      : (filterArr.includes("Hall") && dorm.type === "Hall") ||
          (filterArr.includes("College") && dorm.type === "College");
  };
  const filterDormsBySize = (filterArr, dorm) => {
    return sizeCheck.length === 0
      ? true
      : (filterArr.includes("verysmall") && dorm.size < 50) ||
          (filterArr.includes("small") && dorm.size === "<100") ||
          (filterArr.includes("small") &&
            dorm.size >= 50 &&
            dorm.size <= 100) ||
          (filterArr.includes("medium") &&
            dorm.size >= 101 &&
            dorm.size <= 200) ||
          (filterArr.includes("large") && dorm.size > 200);
  };

  const filterDormsByRoom = (filterArr, dorm) => {
    return roomCheck.length === 0
      ? true
      : (filterArr.includes("singles") && dorm.singles === "yes") ||
          (filterArr.includes("doubles") && dorm.doubles === "yes") ||
          (filterArr.includes("triples") && dorm.triples === "yes");
  };

  const filterDormsByGender = (filterArr, dorm) => {
    return filterArr.includes("all_gender") ? dorm.allgender == "yes" : true;
  };
  const filterDormsByDining = (filterArr, dorm) => {
    return filterArr.includes("dining_hall") ? dorm.dining === "yes" : true;
  };
  const filterDormsByFreshmen = (filterArr, dorm) => {
    return filterArr.includes("freshman") ? dorm.firstyear === "yes" : true;
  };
  const filterDormsByElevator = (filterArr, dorm) => {
    return filterArr.includes("elevator") ? dorm.elevator === "yes" : true;
  };
  const dormsFiltered = dorms
    .filter((dorm) => filterDormsByLocation(filterArr, dorm))
    .filter((dorm) => filterDormsByType(filterArr, dorm))
    .filter((dorm) => filterDormsBySize(filterArr, dorm))
    .filter((dorm) => filterDormsByGender(filterArr, dorm))
    .filter((dorm) => filterDormsByDining(filterArr, dorm))
    .filter((dorm) => filterDormsByFreshmen(filterArr, dorm))
    .filter((dorm) => filterDormsByElevator(filterArr, dorm))
    .filter((dorm) => filterDormsByRoom(filterArr, dorm))
    .map((d) => d.name);

  const dormSelection = Object.values(document.querySelectorAll("tr")).filter(
    (d) => dormsFiltered.includes(d.className)
  );

  for (let i = 0; i < dormSelection.length; i++) {
    dormSelection[i].style.backgroundColor = "#43e674";
  }
}

const makePage = (i) => {
  let content = document.querySelector("#content");
  content.innerHTML = "";
  content.innerHTML = `<h1 id="title">${dorms[i].name}</h1>
  <input id="back-button" type="button" value="< back" onClick="document.location.reload(true)">

  <div class="dorm-container">
    <div id="left">
      <h2>${dorms[i].address}</h2>
      <h4>${dorms[i].location}</h4>
      <h4>Residential ${dorms[i].type}</h4>
      <div id="map" style="height: 30vh; margin-top: 20px;"></div>
      <h3>VITAL STATS</h3>
      <h5>${dorms[i].norris} walk to Norris</h5>
      <h5>${dorms[i].rock} walk to Rock</h5>
      <h5>${dorms[i].tech} walk to Tech</h5>
      <h5>Air Conditioning: ${dorms[i].ac}</h5>
      <h5>${dorms[i].doublePrice}</h5>
      <h5>${dorms[i].singlePrice}</h5>
      <h5>${dorms[i].size} Residents</h5>
      <br>
    </div>

    <div id="right">
      <p>${dorms[i].description}</p>
      <img>
      <p>WHAT RESIDENTS SAY
      ${dorms[i].testimonial}
      </p>
      <p>
      "The dorm has really nice facilities and a lot of great social spaces. Despite that, I feel like 1838's size lends itself to smaller friendship groups instead of a larger dorm community. South campus is great because it makes access to Evanston really convenient, and puts Medill and Comm kids right next to their classes. That being said, the walk up Sheridan does make you feel like you're missing out on most of the social happenings on campus."
      Luke Holey, Communication freshman
      </p>

    </div>`;
};

let latitude = 42.0566723;
let longitude = -87.6750685;
let mymap;
mymap = L.map("map").setView([latitude, longitude], 14);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoibmF0aGFuaWFsdG8iLCJhIjoiY2t3OXcyemF2MmNwZzJvbXAwNTF2Njk5aSJ9.g5JkFBgSBUAFUELfSubtpg",
  }
).addTo(mymap);
