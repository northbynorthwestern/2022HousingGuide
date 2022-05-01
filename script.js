const dorms = [
  {
    name: "Allison Hall",
    address: "1820 Chicago Ave",
    size: "363",
    type: "Hall",
    location: "South",
    dining: "yes",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "yes",
    prices: "Double: 10,581",
    description: "Don't make the same mistake I did: Allison does NOT have ten floors, only four. Room 1005 is on the first floor. Known for having the best south dining hall and gender-open housing on the first floor. Allison's hallways look like an orange color that belongs in American Horror Story. Does induce hallucinations. So many doors on the stairs for no reason. The rooms are super nice, but the bathroom showers always leak and the bathrooms are super gross. No one calls it Hotel Allison, but everyone says it's called that. Would recommend it to a friend — unless you have asthma or respiratory issues, because the entire dorm is carpet except for the bathrooms. ",
    testimonial: "",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],
    tech: "0.7 mi / 1.13 km",
    norris: "0.4 mi / 0.64 km",
    rock: "0.2 mi / 0.32 km",
    allgender: "yes",
    latitude: 42.0504413,
    longitude: -87.6782071,
  },
  {
    name: "Ayers Hall",
    address: "2324 Campus Dr",
    size: "170",
    type: "College",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,663; Double: 10,581",

    tech: "0.3 mi / 0.48 km",
    norris: "0.6 mi / 0.97 km",
    rock: "0.7 mi / 1.13 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "no",
    latitude: 42.0604281,
    longitude: -87.6751294,
  },
  {
    name: "Bobb-McCulloch Hall",
    address: "2305 Sheridan Rd",
    size: "496",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "no",
    singles: "no",
    doubles: "yes",
    triples: "yes",
    prices: "Double: 9,960",

    tech: "0.2 mi / 0.32 km",
    norris: "0.6 mi / 0.97 km",
    rock: "0.7 mi / 1.13 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],
    allgender: "no",
    latitude: 42.0596659,
    longitude: -87.6757728,
  },
  {
    name: "Chapin Hall",
    address: "726 University Pl",
    size: "72",
    type: "College",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "yes",
    prices: "Single: 12,633; Double: 10,581",

    tech: "0.7 mi / 1.13 km",
    norris: "0.5 mi / 0.8 km",
    rock: "0.3 mi / 0.48",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "yes",
    latitude: 42.0510376,
    longitude: -87.6812987,
  },
  {
    name: "East Fairchild (CRC)",
    address: "1855 Sheridan Rd",
    size: "109",
    type: "College",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 10,581",

    tech: "0.6 mi / 0.97 km",
    norris: "0.2 mi / 0.32 km",
    rock: "0.1 mi / 0.16 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],
    allgender: "no",
    latitude: 42.0508277,
    longitude: -87.6751223,
  },
  {
    name: "Elder Hall",
    address: "2400 Sheridan Rd",
    size: "345",
    type: "Hall",
    location: "North",
    dining: "yes",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 10,581",

    tech: "0.3 mi / 0.48 km",
    norris: "0.7 mi / 1.13 km",
    rock: "0.7 mi / 1.13 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "yes",
    latitude: 42.0611101,
    longitude: -87.6778,
  },
  {
    name: "Foster-Walker Complex/Plex",
    address: "1927 Orrington Avenue",
    size: "582",
    type: "Hall",
    location: "South",
    dining: "yes",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "no",
    triples: "no",
    prices: "Single: 12, 633",

    tech: "0.5 mi / 0.8 km",
    norris: "0.4 mi / 0.64 km",
    rock: "0.2 mi / 0.32 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "yes",
    latitude: 42.0529164,
    longitude: -87.6786691,
  },
  {
    name: "Goodrich House",
    address: "2321 Sheridan Rd",
    size: "34",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "no",
    ac: "Yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 10,581",

    tech: "0.2 mi / 0.32 km",
    norris: "0.6 mi / 0.97 km",
    rock: "0.7 mi / 1.13 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "no",
    latitude: 42.0599659,
    longitude: -87.6764206,
  },
  {
    name: "Hobart House",
    address: "630 Emerson St",
    size: "50",
    type: "College",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "yes",
    prices: "Single: 12,633; Double: 10,581",

    tech: "0.6 mi / 0.97 km",
    norris: "0.4 mi / 0.64 km",
    rock: "0.4 mi / 1.32 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "no",
    latitude: 42.0517682,
    longitude: -87.6788937,
  },
  {
    name: "Jones Hall",
    address: "1820 Sheridan Rd",
    size: "121",
    type: "Hall",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 10,581",

    tech: "0.8 mi / 1.29 km",
    norris: "0.4 mi / 0.64 km",
    rock: "0.2 mi / 0.32 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "no",
    latitude: 42.0493805,
    longitude: -87.6749707,
  },
  {
    name: "Kemper Hall",
    address: "2420 Campus Dr",
    size: "165",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "yes",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 11,274",

    tech: "0.3 mi / 0.48 km",
    norris: "0.6 mi / 0.97 km",
    rock: "0.7 mi / 1.13 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "yes",
    latitude: 42.061023,
    longitude: -87.674979,
  },
  {
    name: "Lindgren House",
    address: "2309 Sheridan Rd",
    size: "37",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "No",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "no",
    triples: "no",
    prices: "Single: 11,937",

    tech: "0.2 mi / 0.32 km",
    norris: "0.6 mi / 0.97 km",
    rock: "0.6 mi / 0.97 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "no",
    latitude: 42.059585,
    longitude: -87.6764203,
  },
  {
    name: "North Mid-Quads (PARC)",
    address: "650 Emerson St",
    size: "88",
    type: "College",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 10,581",

    tech: "0.6 mi / 0.97 km",
    norris: "0.4 mi / 0.64 km",
    rock: "0.2 mi / 0.32 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "no",
    latitude: 42.0518342,
    longitude: -87.6798217,
  },
  {
    name: "Rogers House",
    address: "647 University Pl",
    size: "49",
    type: "Hall",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "No",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 10,581",

    tech: "0.6 mi / 0.97 km",
    norris: "0.4 mi / 0.64 km",
    rock: "0.2 mi / 0.32 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "no",
    latitude: 42.0514227,
    longitude: -87.6793585,
  },
  {
    name: "Sargent Hall",
    address: "2245 Sheridan Rd",
    size: "157",
    type: "Hall",
    location: "North",
    dining: "yes",
    firstyear: "yes",
    ac: "No",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 11,937; Double: 9,960",

    tech: "0.2 mi / 0.32 km",
    norris: "0.5 mi / 0.80 km",
    rock: "0.6 mi / 0.97 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "no",
    latitude: 42.0587738,
    longitude: -87.6755147,
  },
  {
    name: "Shepard Hall",
    address: "626 University Pl",
    size: "153",
    type: "Hall",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 10,581",

    tech: "0.6 mi / 0.97 km",
    norris: "0.4 mi / 0.64 km",
    rock: "0.2 mi / 0.32 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "no",
    latitude: 42.0508464,
    longitude: -87.6788743,
  },
  {
    name: "Slivka Hall",
    address: " 2332 Campus Dr",
    size: "140",
    type: "College",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 11,274",

    tech: "0.3 mi / 0.48 km",
    norris: "0.6 mi / 0.97 km",
    rock: "0.7 mi / 1.13 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "yes",
    latitude: 42.0604994,
    longitude: -87.6757217,
  },
  {
    name: "South Mid-Quads (Shepard Res)",
    address: "655 University Pl",
    size: "88",
    type: "College",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 10,581",

    tech: "0.6 mi / 0.97 km",
    norris: "0.4 mi / 0.64 km",
    rock: "0.2 mi / 0.32 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "no",
    latitude: 42.0514089,
    longitude: -87.6797458,
  },
  {
    name: "West Fairchild (ISRC)",
    address: "1861 Sheridan Rd",
    size: "106",
    type: "College",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 10,581",

    tech: "0.6 mi / 0.97 km",
    norris: "0.2 mi / 0.32 km",
    rock: "0.1 mi / 0.16 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "yes",
    latitude: 42.0510565,
    longitude: -87.6756823,
  },
  {
    name: "Willard Hall",
    address: "1865 Sherman Ave",
    size: "261",
    type: "College",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "yes",
    prices: "Single: 12,633; Double: 11,274",

    tech: "0.7 mi / 1.13 km",
    norris: "0.5 mi / 0.80 km",
    rock: "0.3 mi / 0.48 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "yes",
    latitude: 42.0517582,
    longitude: -87.6810996,
  },
  {
    name: "1838 Chicago Ave",
    size: "120",
    type: "Hall",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 10,581",

    address: "1838 Chicago Ave",
    tech: "0.5 mi / 0.80 km",
    norris: "0.3 mi / 0.48 km",
    rock: "0.1 mi / 0.16 km",
    doublePrice: "",
    singlePrice: "",
    description: "description",
    testimonial: "testimonial",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "no",
    latitude: 42.050951,
    longitude: -87.677995,
  },
  {
    name: "636 Emerson",
    address: "636 Emerson",
    size: "37",
    type: "Hall",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "No",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 11,937; Double: 10,581",

    tech: "0.6 mi / 0.97 km",
    norris: "0.4 mi / 0.64 km",
    rock: "0.2 mi / 0.32 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "no",
    latitude: 42.051917,
    longitude: -87.679059,
  },
  {
    name: "640 Emerson",
    address: "640 Emerson",
    size: "33",
    type: "Hall",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "No",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 11,937; Double: 10,581",

    tech: "0.6 mi / 0.97 km",
    norris: "0.4 mi / 0.64 km",
    rock: "0.2 mi / 0.32 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "no",
    latitude: 42.051918,
    longitude: -87.679442,
  },
  {
    name: "710 Emerson Ave",
    address: "710 Emerson Ave",
    size: "27",
    type: "Hall",
    location: "South",
    dining: "no",
    firstyear: "yes",
    ac: "No",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 11,937; Double: 10,581",

    tech: "0.6 mi / 0.97 km",
    norris: "0.4 mi / 0.64 km",
    rock: "0.3 mi / 0.48 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "no",
    latitude: 42.0518445,
    longitude: -87.6804867,
  },
  {
    name: "560 Lincoln St",
    address: "560 Lincoln St",
    size: "422",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "yes",
    elevator: "yes",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 11,274",

    tech: "0.4 mi / 0.64 km",
    norris: "0.7 mi / 1.13 km",
    rock: "0.8 mi / 1.29 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "yes",
    latitude: 42.061379,
    longitude: -87.675364,
  },
  {
    name: "1856 Orrington Ave",
    address: "1856 Orrington Ave",
    size: "26",
    type: "Hall",
    location: "South",
    dining: "no",
    firstyear: "no",
    ac: "No",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 12,633; Double: 9,960",

    tech: "0.6 mi / 0.97 km",
    norris: "0.4 mi / 0.64 km",
    rock: "0.3 mi / 0.48 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "no",
    latitude: 42.05166275,
    longitude: 	-87.67915964,
  },
  // {
  //   name: "2303 Sheridan Rd (CCS)",
  //   address: "2303 Sheridan Rd",
  //   size: "40",
  //   type: "College",
  //   location: "North",
  //   dining: "no",
  //   firstyear: "yes",
  //   ac: "yes",
  //   suite: "no",
  //   elevator: "no",
  //   singles: "yes",
  //   doubles: "yes",
  //   triples: "yes",
  //   tech: "3",
  //   norris: "12",
  //   rock: "12",
  //   allgender: "yes",
  // },
  {
    name: "2303 Sheridan Rd (GREEN House/CCS)",
    address: "2303 Sheridan Rd",
    size: "40",
    type: "College",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "Yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "yes",
    prices: "Single: 12,633; Double: 10,581",

    tech: "0.2 mi / 0.32 km",
    norris: "0.6 mi / 0.97 km",
    rock: "0.6 mi / 0.97 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "yes",
    latitude: 42.059101,
    longitude: -87.676668,
  },
  {
    name: "2307 Sheridan Rd",
    address: "2307 Sheridan Rd",
    size: "32",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "No",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 11,937; Double: 10,581",

    tech: "0.2 mi / 0.32 km",
    norris: "0.6 mi / 0.97 km",
    rock: "0.6 mi / 0.97 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "no",
    latitude: 42.0596108,
    longitude: -87.6761629,
  },
  {
    name: "2347 Sheridan Rd",
    address: "2347 Sheridan Rd",
    size: "25",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "no",
    ac: "Yes",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "Single: 11,937; Double: 9,960",

    tech: "0.3 mi / 0.48 km",
    norris: "0.6 mi / 0.97 km",
    rock: "0.7 mi / 1.13 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "no",
    latitude: 42.060801,
    longitude: -87.67614,
  },
  {
    name: "2349 Sheridan Rd",
    address: "2349 Sheridan Rd",
    size: "41",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "No",
    suite: "yes",
    elevator: "no",
    singles: "no",
    doubles: "yes",
    triples: "no",
    prices: "Double: 10,581",

    tech: "0.3 mi / 0.48 km",
    norris: "0.6 mi / 0.97 km",
    rock: "0.7 mi / 1.13 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "no",
    latitude: 42.061053,
    longitude: -87.676167,
    
  },
  {
    name: "2313 Sheridan Rd",
    address: "2313 Sheridan Rd",
    size: "36",
    type: "Hall",
    location: "North",
    dining: "no",
    firstyear: "yes",
    ac: "No",
    suite: "no",
    elevator: "no",
    singles: "yes",
    doubles: "yes",
    triples: "no",
    prices: "tba",

    tech: "0.2 mi / 0.32 km",
    norris: "0.6 mi / 0.97 km",
    rock: "0.6 mi / 0.97 km",
    images: [ {img: "macarthur.jpg", caption: "macarthur"}, {img: "chita_house.jpg", caption: "house"}, {img: "chita_outside.jpg", caption: "plants"}],

    allgender: "no",
    latitude: 42.059568,
    longitude: -87.676621,
  },
];

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

const dorm_names = document.querySelector("#dorms");
const filters = document.querySelector("#filters");

const makeDorms = () => {
  let table_rows = document.createElement("tr");
  table_rows.innerHTML = `<th class="dorm-name">Hall</th> <th class="dorm-size">Size</th> <th class="dorm-type">Type</th>`;
  dorm_names.appendChild(table_rows);
  for (let i = 0; i < dorms.length; i++) {
    let marker = L.marker([dorms[i].latitude,  dorms[i].longitude]).addTo(mymap);
    marker.bindPopup(`<b>${dorms[i].name} - ${dorms[i].address}</b>`)

    let newItem = document.createElement("tr");
    newItem.className = `${dorms[i].name}`;
    newItem.innerHTML = `<td class="dorm-name" onclick="makePage(${[i]});">${
      dorms[i].name
    }</td> <td class="dorm-size">${dorms[i].size}</td> <td class="dorm-type">${
      dorms[i].type
    }</td>`;

    newItem.onmouseover = function(){
      marker.openPopup()
      .autoPan = "True";
      console.log(dorms[i].latitude);

      // mymap.flyTo([dorms[i].latitude,  dorms[i].longitude], 17);
  }

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

var count;
var images;
count = 0;
const currentImage = document.querySelector('#featured_image');
const currentCaption = document.querySelector('#featured_caption');


const makePage = (i) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  images = dorms[i].images;
  image_length = images.length;
  
  let content = document.querySelector("#content");
  content.innerHTML = "";
  content.innerHTML = `<h1 id="title">${dorms[i].name}</h1>
  <input id="back-button" type="button" value="< BACK" onClick="document.location.reload(true)">

  <div class="dorm-container">
    <div id="left">
      <h2>${dorms[i].address}</h2>
      <h4>${dorms[i].location}</h4>
      <h4>Residential ${dorms[i].type}</h4>
      <!-- <div id="map" style="height: 30vh; margin-top: 20px;"></div> -->
      <div id="features"><h3 id="filter-title">Features</h3>
      <p>Residents: <mark>${dorms[i].size}</mark></p>
      <p>Air Conditioning: <mark>${dorms[i].ac}</mark></p>

      <p>Walk to Norris: <mark>${dorms[i].norris}</mark></p>
      <p>Walk to Rock: <mark>${dorms[i].rock}</mark></p>
      <p>Walk to Tech: <mark>${dorms[i].tech}</mark></p>
      <p>Prices: <mark>${dorms[i].prices}</mark></p>
      <p>*Residential Services has yet to update the 2022-2023 dorm rates so prices were taken from 2021-2022 rates</p>
      </div>
    </div>

    <div id="right">
      <p>${dorms[i].description}</p>
      <h3>WHAT RESIDENTS SAY</h3>
      <p>${dorms[i].testimonial}
      </p>
      <p>
      "The dorm has really nice facilities and a lot of great social spaces. Despite that, I feel like 1838's size lends itself to smaller friendship groups instead of a larger dorm community. South campus is great because it makes access to Evanston really convenient, and puts Medill and Comm kids right next to their classes. That being said, the walk up Sheridan does make you feel like you're missing out on most of the social happenings on campus."
      Luke Holey, Communication freshman
      </p>
      <!-- preview panel -->
      <button class="prev" onclick="getPrevImage()">&lsaquo;</button>
      <button class="next" onclick="getNextImage()">&rsaquo;</button>
      <div id="featured_image" style="background-image: url('${images[0].img}');"></div>
      <div id="featured_caption"><p>${images[0].caption}</p></div>
      <!-- thumbnails -->
    </div>`;
};

function makeLocations() {
  for (i=0; i < dorms.length; i++){

      let marker = L.marker([dorms[i].latitude,  dorms[i].longitude]).addTo(mymap);
      marker.bindPopup(`<b>${dorms[i].name} - ${dorms[i].address}</b>`)
  } 
}

const getFirstImage = (term) => {
    
    currentImage.style.backgroundImage = createImage(images[1]);
    currentCaption.innerHTML += createCaption(images[1]);

}
const getNextImage = (term) => {
    const currentImage = document.querySelector('#featured_image');
    const currentCaption = document.querySelector('#featured_caption');

    console.log(count)
    if (count < image_length - 1)
        count += 1;
    else
        count = 0;
    currentImage.innerHTML = "";
    // caption.innerHTML = "";
    // set div background image to said image
    // currentImage.innerHTML += createImage(images[i]);
    currentImage.style.backgroundImage = createImage(images[count]); 
    currentCaption.innerHTML = createCaption(images[count]);
    console.log(images[count].img)
    
}

const getPrevImage = (term) => {
    const currentImage = document.querySelector('#featured_image');
    const currentCaption = document.querySelector('#featured_caption');

    if (count > 0)
        count -= 1;
    else
        count = (image_length - 1);
    currentImage.innerHTML = "";
    currentImage.style.backgroundImage = createImage(images[count]);  
    currentCaption.innerHTML = createCaption(images[count]);
  
}

const createImage = (data) => {

    return `url('${data.img}')`;

    };

const createCaption = (data) => {

    return `<p>${data.caption}</p>`;

    };
