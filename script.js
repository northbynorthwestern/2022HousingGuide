const dorms = [
<<<<<<< Updated upstream
  { name: "1838 Chicago Ave.", size: "120", type: "Hall" },
  { name: "2303 Sheridan Rd. (CCS)", size: "40", type: "College" },
  { name: "2303 Sheridan Rd. (GREEN House)", size: "40", type: "Hall" },
  { name: "2349 Sheridan Rd.", size: "<100", type: "Hall" },
  { name: "560 Lincoln St.", size: "422", type: "Hall" },
  { name: "Allison Hall", size: "363", type: "Hall" },
  { name: "Ayers Hall", size: "170", type: "College" },
  { name: "Bobb-McCulloch Hall", size: "496", type: "Hall" },
  { name: "Chapin Hall", size: "72", type: "College" },
  { name: "East Fairchild", size: "109", type: "College" },
  { name: "Elder Hall", size: "345", type: "Hall" },
  { name: "Foster-Walker Complex", size: "582", type: "Hall" },
  { name: "Hobart House", size: "50", type: "College" },
  { name: "Jones Hall", size: "121", type: "Hall" },
  { name: "Kemper Hall", size: "165", type: "Hall" },
  { name: "Lindgren House", size: "37", type: "Hall" },
  { name: "North Mid-Quads", size: "88", type: "College" },
  { name: "Rogers House", size: "49", type: "Hall" },
  { name: "Sargent Hall", size: "157", type: "Hall" },
  { name: "Shepard Hall", size: "153", type: "Hall" },
  { name: "Slivka Hall", size: "140", type: "College" },
  { name: "South Mid-Quads", size: "88", type: "College" },
  { name: "West Fairchild", size: "106", type: "College" },
  { name: "Willard Hall", size: "261", type: "College" },
=======
  { name: "Allison Hall", size: "363", type: "Hall", location: "South", dining: "yes", firstyear: "yes", ac: "yes", suite: "no", elevator: "yes", singles: "yes", doubles: "yes", triples: "yes", },
  { name: "Ayers Hall", size: "170", type: "College", location: "North", dining: "no", firstyear: "yes", ac: "yes", suite: "no", elevator: "yes", singles: "yes", doubles: "yes", triples: "no", },
  { name: "Bobb-McCulloch Hall", size: "496", type: "Hall", location: "North", dining: "no", firstyear: "yes", ac: "yes", suite: "no", elevator: "no", singles: "no", doubles: "yes", triples: "yes", },
  { name: "Chapin Hall", size: "72", type: "College", location: "South", dining: "no", firstyear: "yes", ac: "yes", suite: "no", elevator: "yes", singles: "yes", doubles: "yes", triples: "yes", },
  { name: "East Fairchild", size: "109", type: "College", location: "South", dining: "no", firstyear: "yes", ac: "yes", suite: "no", elevator: "yes", singles: "yes", doubles: "yes", triples: "no", },
  { name: "Elder Hall", size: "345", type: "Hall", location: "North", dining: "yes", firstyear: "yes", ac: "yes", suite: "no", elevator: "yes", singles: "yes", doubles: "yes", triples: "no", },
  { name: "Foster-Walker Complex", size: "582", type: "Hall", location: "South", dining: "yes", firstyear: "yes", ac: "yes", suite: "no", elevator: "yes", singles: "yes", doubles: "no", triples: "no", },
  { name: "Goodrich House", size: "<100", type: "Hall", location: "North", dining: "no", firstyear: "no", ac: "yes", suite: "no", elevator: "no", singles: "yes", doubles: "yes", triples: "no", },
  { name: "Hobart House", size: "50", type: "College", location: "South", dining: "no", firstyear: "yes", ac: "yes", suite: "no", elevator: "no", singles: "yes", doubles: "yes", triples: "yes", },
  { name: "Jones Hall", size: "121", type: "Hall", location: "South", dining: "no", firstyear: "yes", ac: "yes", suite: "no", elevator: "yes", singles: "yes", doubles: "yes", triples: "no", },
  { name: "Kemper Hall", size: "165", type: "Hall", location: "North", dining: "no", firstyear: "yes", ac: "yes", suite: "yes", elevator: "yes", singles: "yes", doubles: "yes", triples: "no", },
  { name: "Lindgren House", size: "37", type: "Hall", location: "North", dining: "no", firstyear: "yes", ac: "no", suite: "no", elevator: "no", singles: "yes", doubles: "no", triples: "no", },
  { name: "North Mid-Quads", size: "88", type: "College", location: "South", dining: "no", firstyear: "yes", ac: "yes", suite: "no", elevator: "no", singles: "yes", doubles: "yes", triples: "no", },
  { name: "Rogers House", size: "49", type: "Hall", location: "South", dining: "no", firstyear: "yes", ac: "no", suite: "no", elevator: "no", singles: "yes", doubles: "yes", triples: "no", },
  { name: "Sargent Hall", size: "157", type: "Hall", location: "North", dining: "yes", firstyear: "yes", ac: "no", suite: "no", elevator: "no", singles: "yes", doubles: "yes", triples: "no", },
  { name: "Shepard Hall", size: "153", type: "Hall", location: "South", dining: "no", firstyear: "yes", ac: "yes", suite: "no", elevator: "no", singles: "yes", doubles: "yes", triples: "no", },
  { name: "Slivka Hall", size: "140", type: "College", location: "North", dining: "no", firstyear: "yes", ac: "yes", suite: "no", elevator: "yes", singles: "yes", doubles: "yes", triples: "no", },
  { name: "South Mid-Quads", size: "88", type: "College", location: "South", dining: "no", firstyear: "yes", ac: "yes", suite: "no", elevator: "no", singles: "yes", doubles: "yes", triples: "no", },
  { name: "West Fairchild", size: "106", type: "College", location: "South", dining: "no", firstyear: "yes", ac: "yes", suite: "no", elevator: "no", singles: "yes", doubles: "yes", triples: "no", },
  { name: "Willard Hall", size: "261", type: "College", location: "South", dining: "no", firstyear: "yes", ac: "yes", suite: "no", elevator: "yes", singles: "yes", doubles: "yes", triples: "yes", },
  { name: "1838 Chicago Ave.", size: "120", type: "Hall", location: "South", dining: "no", firstyear: "yes", ac: "yes", suite: "no", elevator: "no", singles: "yes", doubles: "yes", triples: "no", },
  { name: "636 Emerson", size: "<100", type: "Hall", location: "South", dining: "no", firstyear: "yes", ac: "no", suite: "no", elevator: "no", singles: "yes", doubles: "yes", triples: "no", },
  { name: "640 Emerson", size: "<100", type: "Hall", location: "South", dining: "no", firstyear: "yes", ac: "no", suite: "no", elevator: "no", singles: "yes", doubles: "yes", triples: "no", },
  { name: "710 Emerson Ave", size: "<100", type: "Hall", location: "South", dining: "no", firstyear: "yes", ac: "no", suite: "no", elevator: "no", singles: "yes", doubles: "yes", triples: "no", },
  { name: "1856 Orrington Ave.", size: "<100", type: "Hall", location: "South", dining: "no", firstyear: "no", ac: "no", suite: "no", elevator: "no", singles: "yes", doubles: "yes", triples: "no", },
  { name: "2303 Sheridan Rd. (CCS)", size: "40", type: "College", location: "North", dining: "no", firstyear: "yes", ac: "yes", suite: "no", elevator: "no", singles: "yes", doubles: "yes", triples: "yes", },
  { name: "2303 Sheridan Rd. (GREEN House)", size: "40", type: "Hall", location: "North", dining: "no", firstyear: "yes", ac: "yes", suite: "no", elevator: "no", singles: "yes", doubles: "yes", triples: "yes", },
  { name: "2307 Sheridan Rd.", size: "<100", type: "Hall", location: "North", dining: "no", firstyear: "yes", ac: "no", suite: "no", elevator: "no", singles: "yes", doubles: "yes", triples: "no", },
  { name: "2347 Sheridan Rd.", size: "<100", type: "Hall", location: "North", dining: "no", firstyear: "no", ac: "yes", suite: "no", elevator: "no", singles: "yes", doubles: "yes", triples: "no", },
  { name: "2349 Sheridan Rd.", size: "<100", type: "Hall", location: "North", dining: "no", firstyear: "yes", ac: "no", suite: "no", elevator: "no", singles: "no", doubles: "yes", triples: "no", },
  { name: "560 Lincoln St.", size: "422", type: "Hall", location: "North", dining: "no", firstyear: "yes", ac: "yes", suite: "yes", elevator: "yes", singles: "yes", doubles: "yes", triples: "no", },
>>>>>>> Stashed changes
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
    newItem.innerHTML = `<td class="dorm-name">${dorms[i].name}</td> <td class="dorm-size">${dorms[i].size}</td> <td class="dorm-type">${dorms[i].type}</td>`;
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
  //clear classlist
  Object.values(document.querySelectorAll("tr")).map((d, i) => {
    if (i % 2 === 1) {
      d.style.backgroundColor = "rgb(114, 66, 175, 25%)";
    } else d.style.backgroundColor = "white";
  });

  console.log(filterArr);
  const locationsCheck = filterArr.filter((i) => i == "South" || i == "North");
  const collegeCheck = filterArr.filter((i) => i == "Hall" || i == "College");

  const dormsFiltered = dorms
    .filter((dorm) => collegeCheck.includes(dorm.type))
    .map((d) => d.name);

  //check the part of campus
  const dormSelection = Object.values(document.querySelectorAll("tr")).filter(
    (d) => dormsFiltered.includes(d.className)
  );

  console.log(dormSelection);

  for (let i = 0; i < dormSelection.length; i++) {
    dormSelection[i].style.backgroundColor = "lightGreen";
  }
}

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

function createDorm() {}
