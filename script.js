const dorms = [
  {
    name: "Allison Hall",
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
    tech: "11",
    norris: "6",
    rock: "3",
  },
  {
    name: "Ayers Hall",
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
  },
  {
    name: "Bobb-McCulloch Hall",
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
  },
  {
    name: "Chapin Hall",
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
  },
  {
    name: "East Fairchild",
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
  },
  {
    name: "Elder Hall",
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
  },
  {
    name: "Foster-Walker Complex",
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
  },
  {
    name: "Goodrich House",
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
  },
  {
    name: "Hobart House",
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
  },
  {
    name: "Jones Hall",
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
  },
  {
    name: "Kemper Hall",
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
  },
  {
    name: "Lindgren House",
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
  },
  {
    name: "North Mid-Quads",
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
  },
  {
    name: "Rogers House",
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
  },
  {
    name: "Sargent Hall",
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
  },
  {
    name: "Shepard Hall",
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
  },
  {
    name: "Slivka Hall",
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
  },
  {
    name: "South Mid-Quads",
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
  },
  {
    name: "West Fairchild",
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
  },
  {
    name: "Willard Hall",
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
  },
  {
    name: "1838 Chicago Ave.",
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
    address: "1838 Chicago Ave.",
    tech: "12",
    norris: "6",
    rock: "2",
    doublePrice: "",
    singlePrice: "",
    description: "description",
    testimonial: "testimonial",
  },
  {
    name: "636 Emerson",
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
  },
  {
    name: "640 Emerson",
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
  },
  {
    name: "710 Emerson Ave",
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
  },
  {
    name: "1856 Orrington Ave.",
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
  },
  {
    name: "2303 Sheridan Rd. (CCS)",
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
  },
  {
    name: "2303 Sheridan Rd. (GREEN House)",
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
  },
  {
    name: "2307 Sheridan Rd.",
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
  },
  {
    name: "2347 Sheridan Rd.",
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
  },
  {
    name: "2349 Sheridan Rd.",
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
  },
  {
    name: "560 Lincoln St.",
    size: "422",
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
    tech: "8",
    norris: "14",
    rock: "16",
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
    .filter((dorm) => filterDormsByDining(filterArr, dorm))
    .filter((dorm) => filterDormsByFreshmen(filterArr, dorm))
    .filter((dorm) => filterDormsByElevator(filterArr, dorm))
    .filter((dorm) => filterDormsByRoom(filterArr, dorm))
    .map((d) => d.name);

  const dormSelection = Object.values(document.querySelectorAll("tr")).filter(
    (d) => dormsFiltered.includes(d.className)
  );

  for (let i = 0; i < dormSelection.length; i++) {
    dormSelection[i].style.backgroundColor = "lightGreen";
  }
}

const makePage = (i) => {
  let content = document.querySelector("#content");
  content.innerHTML = "";
  content.innerHTML = `<h1 id="title">${dorms[i].name}</h1>
  <div class="dorm-container">
    <div id="left">
      <h2>${dorms[i].address}</h2>
      <h4>${dorms[i].location}</h4>
      <h4>Residential ${dorms[i].type}</h4>
      <div id="map" style="height: 30vh; margin-top: 20px;"></div>
      <h3>VITAL STATS</h3>
      <h5>${dorms[i].norris} Minute Walk To Norris</h5>
      <h5>${dorms[i].rock} Minute Walk To Rock</h5>
      <h5>${dorms[i].tech} Minute Walk To Tech</h5>
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
