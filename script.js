const dorms = [
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
];

const dorm_names = document.querySelector("#dorms");
const filters = document.querySelector("#filters");

function makeDorms() {
  let table_rows = document.createElement("tr");
  table_rows.innerHTML = `<th class="dorm-name">Hall</th> <th class="dorm-size">Size</th> <th class="dorm-type">Type</th>`;
  dorm_names.appendChild(table_rows);
  for (let i = 0; i < dorms.length; i++) {
    let newItem = document.createElement("tr");
    newItem.innerHTML = `<td class="dorm-name">${dorms[i].name}</td> <td class="dorm-size">${dorms[i].size}</td> <td class="dorm-type">${dorms[i].type}</td>`;
    dorm_names.appendChild(newItem);
  }
  let form = document.createElement("form");
  form.innerHTML = ``;

  filters.appendChild(form);
}

function dorm_type() {
  // console.log(hall_check.checked);
  //  console.log(college_check.checked);

  let dormselection = document.querySelectorAll("tr");
  for (let i = 0; i < dormselection.length; i++) {
    let hall_check = document.querySelector("#hall");
    let college_check = document.querySelector("#college");
    if (hall_check.checked) {
      dormselection[i].style.backgroundColor = "green";
    }

    dormselection[i].classList.add("green");
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
