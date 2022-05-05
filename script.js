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
    link: "https://www.northwestern.edu/living/residential-experience/housing-options/res-halls/allison.html",
    description: "Don't make the same mistake I did: Allison does NOT have ten floors, only four. Room 1005 is on the first floor. Known for having the best south dining hall and gender-open housing on the first floor. Allison's hallways look like an orange color that belongs in American Horror Story. Does induce hallucinations. So many doors on the stairs for no reason. The rooms are super nice, but the bathroom showers always leak and the bathrooms are super gross. No one calls it Hotel Allison, but everyone says it's called that. Would recommend it to a friend — unless you have asthma or respiratory issues, because the entire dorm is carpet except for the bathrooms. ",
    testimonial: `
    "The room is big, it's a great location and it's so convenient to live on top of a dining hall."<br>
    - Class of 2025
    <br><br>
    "I have met most people at Allison outside of Allison. Lots of people come to hang out in the first floor lounge. Allison is definitely less social than other dorms. I would maybe prefer to live North Campus like in Elder just so I could get to classes at Tech faster."
    <br>- Class of 2025
    <br><br>
    "The vibe in Allison is very chill. I like how it's clean and new. The dining hall is also very accessible. The only thing I dislike about Allison is that there's not enough lighting and ventilation."
    <br>- Class of 2024
    <br><br>
    "The dorm isn't too old so it's still pretty clean. I didn't have a choice to live anywhere else. Allison is pretty good. I like how it's super close to the dining hall so you can always get food in your pajamas. However, I wish there could be better lighting."
    <br>- Class of 2024
    <br><br>
    "It's super quiet. You don't really get to know the people in Allison. But the dorms are super nice, and the bathrooms are cool, and the dining hall is downstairs, so the amenities make up for the lack of social life. Also love having laundry on the same floor. But the dorm is quiet and probably isn't the place to make a lot of friends. I'm not sure if I would change because the dorm is really nice, but I would like to live somewhere more social."
    <br>- Class of 2024
    <br><br>
    "I like how it's right on top of a dining hall and close to all my classes on South Campus. Even if my classes are at Bienen or Swift Hall, they are still very walkable from Allison. I wish my room could be bigger and closer to the laundry room and the elevator."
    <br>- Class of 2024
    `,
    images: [ {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_8400.JPEG", caption: "Double Room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/lincoln1.jpg", caption: "Double Room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/lincoln2.jpg", caption: "Suite Common Area"}, {img: "https://northbynorthwestern.com/content/images/2022/05/lincoln3.jpg", caption: "Suite Bathroom"}, {img: "https://northbynorthwestern.com/content/images/2022/05/lincoln4.jpg", caption: "Suite Bathroom"},],
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
    description: "",
    testimonial:  `
    "Ayers is friendly, quiet, calm, nice. I like that it's chill, they give us food on Sundays (res college superiority). I don't like the washers or the halls that look like prisons. The bathrooms are fine. I like living in Ayers. The dorms are big, and I have a lot of friends there." 
    <br>
    - Class of 2025
    <br><br>
    "I think my dorm is chill, quiet and friendly. I like the size of the rooms, the number of people in my dorm and the free stuff. I dislike the facilities like the bathrooms, broken washing machines and old kitchen. I wouldn't change my decision, I like my dorm a lot."
    <br>
    - Class of 2025
    <br><br>
    "I would say that Ayers is very friendly and calm. I like that we have very spacious rooms, which is something that is rare for North Campus. It is also nice that we have basic amenities like an elevator and air conditioning. One complaint I have is that laundry can be very frustrating, and the walls are a bit thin, but that's no problem if you invest in some good earplugs for sleepy time. I would not want to live anywhere else. I will admit that I have fallen in love with Ayers despite its minor flaws."
    <br>- Class of 2025
    `,
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
    description: "",
    testimonial: `
    "Bobb is pretty social. The bathrooms are the worst but I have made a ton of friends on my floor. I wouldn't have wanted to live anywhere else."
    <br> - Class of 2025
    <br><br>
    "Bobb is social, fun, lively, lowkey dirty but nice rooms. It has bad bathrooms but nice people. It gets loud at night, especially on weekends. If I had to do it over I would live in Bobb again." 
    <br>- Class of 2025
    <br><br>
    "It's loud, social but in a cliquey way, very much for the stereotypical north person. I like the location near dining halls, the library and SPAC, dislike the people. I would rather live somewhere else." 
    <br>- Class of 2025
    `,
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
    description: "",
    testimonial:`
    "We have the largest doubles on campus, which allows for spacious living, and even the bathrooms are very big and clean. One drawback is that it's pretty far from some classes because it's at the southwest corner of campus, especially in winter quarter. If you engage with the community it's really nice, and it's across from Willard, where you can be part of the southwest area community."
    <br> - Class of 2025
    <br><br>
    "I would describe the vibe as quaint, cute, quirky, quiet. The building definitely has character. I love the ceilings. Likes: rooms are big and bathrooms are nice, close to downtown. Dislikes: generally antisocial, no AC, as far from classes as you can live. I think Chapin is generally underrated. There are definitely better dorms on campus, but it's nice."
    <br> - Class of 2025
    <br><br>
    "I would maybe describe Chapin as a little bit nerdy. It's an eclectic mix of students: musical-minded, writers, STEM majors, you name it. I love the fancy plaster ceilings, the plentitude of sofas in the lounges, the spacious rooms, the clean bathrooms and all the free-food events. I don't like the fact that the first floor washer and dryer have been broken for several quarters now and the fact that people don't know how to keep the kitchen looking decent."
    <br>- Class of 2025
    `,
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
    description: "",
    testimonial: `
    "It's a smaller dorm and the rooms are smaller, but it is a really great community, and I have made a lot of good friends on my floor. Only bad thing is that there's no elevator, so if you live on the second or third floor that can be annoying."
    <br><br>
    "I like the location - East Fairchild is super close to Norris, Main Library and a lot of the South Campus buildings where people have their classes. The rooms and the facilities are not the best, and not having an elevator isn't great, but overall it is a fine dorm."
    <br><br>
    "I would say the vibe of CRC is quirky core because there are a lot of little random things, like the bright red bathroom stalls and the movie theater off the main lounge that make it super unique. The small rooms are definitely not it, but there are a lot of welcome surprises within CRC that I didn't know when I was choosing housing, and they make it worth it!"
    `,
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
    description: "",
    testimonial: `
    "Elder is just ok. Having a dining hall under is very convenient. Rooms are not bad, relatively spacious. Bathrooms and facilities are not great and have a lot of plumbing issues/water leaks/no hot water days. I would choose somewhere else to live."
    <br> - Class of 2024.
    <br><br>
    "There is an absurd amount of noise early in the morning and sometimes even late at night in the back parking lot. Whether it's garbage trucks, food delivery trucks or construction, it's all uncalled for and highly inconsiderate. This is a huge issue, making it difficult to get enough/proper sleep. Wouldn't live here again."
    <br> - Class of 2024
    <br><br>
    "I like having a dining hall so close to my room, but the layout of Elder is not great. The laundry is very far, and I can hear both the cars on the road and the hand dryers in the bathroom from my room, so it can be pretty loud at times. Overall, the rooms and bathrooms are pretty decent though, and the location is close to SPAC and Tech, so I would still choose to live here."
    <br> - Class of 2024
    <br><br>
    "Elder is definitely very social. I've made so many friends here as a freshman. The bathrooms are pretty old, and the second floor L wing has coed bathrooms, so just be aware of that. The rooms are also fairly small, probably some of the smallest doubles on campus but fine if you get along with your roommate."
    <br> - Class of 2025
    <br><br>
    "Elder is great vibes. You meet a lot of people, so it's a good first-year dorm. The rooms are way better if you loft your bed. The bathrooms aren't great, but you get used to it. I wouldn't mind living there again next year. I would highly recommend it over Lincoln for first years because you'll make more friends in Elder, but for second years I'd recommend Lincoln. If I had known this I would've ranked Elder first instead of second last year, but it's always been ranked high for me."
    <br>- Class of 2025
    <br><br>
    "Elder is pretty fun, and it's super easy to make friends here. The bathrooms suck though, and the furniture is dark wood, so it sometimes brings the vibe/light of the room down. If I could do it again I would get a suite just for the private bathroom."
    <br>- Class of 2025
    
    
    
    
    `,
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
    description: "",
    testimonial: `
    "The vibe depends on which floor you're on. Some floors are very outgoing, and they get to know each other a lot, and they'll be loud at night, but in a good way. Some floors are very keep to yourself, quiet, everybody does their own thing. There's something about the roommate experience that you miss out on, for sure, but I think there are a lot of other aspects that make up for it, especially the fact that the whole building is singles. You get to know people, nobody's like hiding in their room, away from everyone else. You have the food and the convenience store and the laundry, which is very convenient. My least favorite part about living here would be that the walls are very thin. It's in the perfect spot on campus, because it's South Campus, which is by most of the classes, but it's the northernmost part of South Campus, so it's still not far from any of the north buildings. If you have a hard time making friends, though, I might not recommend it."
    <br>- Class of 2025
    <br><br>
    "It's pretty lowkey, pretty chill. Not too much goes on in Plex. I think if you're a relatively social person in the first place, living in Plex isn't that bad of a decision for making friends, because you meet people in all sorts of places, and it's nice to be able to come back to your own room, and not have a roommate. The walls are super thin, which isn't great, and the bathrooms aren't super nice, but they do the job."
    <br> - Class of 2025
    <br><br>
    "It's very chill, it's very friendly. I would say most of the friends I have come from Plex. It's the Plex ecosystem. I think there's a stigma because of Plex being kind of an isolation dorm because of Covid and because it's all singles, but I actually found it very easy to make friends because no one had that instant roommate connection, so everyone was always out in the hallways."
    <br> - Class of 2025
    <br><br>
    "Honestly, I was a bit hesitant when I first moved in because it's just a dorm full of singles, and everyone called it the prison dorm or the quarantine dorms, but after moving in I realized that my floor has a cute little community. My least favorite thing is how thin the walls are, because I'm kind of loud, and I feel bad especially because of my loud friends. I love that the dining hall and package center are right downstairs. It's kind of in the middle of campus, so it's not too far from either end, and it's closer to downtown when I have to do things there. My favorite thing is having a single dorm that's pretty cute. We have brick walls and windows that don't have bars on them, which is pretty cool."
    <br> - Class of 2025
    `,
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
    description: "",
    testimonial: `"It's pretty calm and quiet. I like that it's peaceful, and the people are nice. It would be nice if there were more bonding, though. It's not very social. I can't really hear parties or things like that going on around here. The walk south can be tedious."
    <br>- Class of 2024    `,
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
    description: "",
    testimonial: `
    "I've heard a lot of people describe Hobart as cottagecore. Generally it's very cozy and homey! There are some issues with people leaving dishes all over the sink and wildly inconsistent room sizes though. If I had the chance to do it over again, I would still live in Hobart. I love it."
    <br> - Class of 2024
    <br><br>
    "The vibe of the dorm is very home-y! Hobart creates a great sense of community and friends within the dorm. I love the amenities of the dorm. We have a kitchen, library, lounge area and basement filled with other rooms like our computer lab and exercise area. I don't dislike anything about the dorm, really. I would live in Hobart again, but the only reason I'm moving out is so I can have a single room next year. Hobart has singles, but they were all chosen before I was able to select one."
    <br>- Class of 2025
    <br><br>
    "The vibe is cottagecore or cozy and close-knit, friendly. It's an older building, and you can tell, but it also offers a lot of charm in the architecture and stuff! The laundry is in the basement, and laundry maintenance is not great, and the carpeting should be replaced, but there are so many spaces to be social and have guests. There's a general con of community living in terms of kitchens and bathrooms, but it's only slightly better in suite-style living. A smaller dorm is less daunting because it's not like total strangers in the bathroom. If I were to select dorms again maybe I would want something closer to my classes, but even then I would be a non-res at Hobart because the community is so nice and welcoming."
    <br>- Class of 2024
    `,
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
    description: "",
    testimonial: "",
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
    description: "",
    testimonial: "",
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
    description: "",
    testimonial: "",
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
    description: "",
    testimonial: `
    "People at NMQ are super friendly and sociable. They are always hanging around in the lounge or chatting in the hallways. The rooms, kitchen and lounge areas are all quite nice. The staircase smells sometimes, but other than that, there is nothing else I dislike. I would stay in NMQ!"
    <br>- Class of 2025
    <br><br>
    "NMQ is kind of small, but it's relaxing and familial. I would live here again!"
    <br>- Class of 2025
    <br><br>
    "I like the environment and the events hosted by the res college exec (especially the free food). It's in a decent location, and the facilities are pretty nice. I wish NMQ had an elevator though. The only place I'd maybe rather live is Kemper or Lincoln."
    <br>- Class of 2025
    <br><br>
    "It's a comfy and quaint dorm. I like the bathrooms, but I wish they had paper towels. Also the events that give free food are things to look forward to. I wouldn't mind living here again, but I would like to live in other dorms."
    <br>- Class of 2025
    <br><br>
    "It's alright. It is not very social, but it has really nice amenities, and the rooms are large. The bathrooms, kitchen and lounges are nice. I like the sorority quad, and it can get really pretty outside."
    <br>- Class of 2025
    `,
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
    description: "",
    testimonial: `
    "Rogers is a very homey, quiet dorm that can be social if you try. I like that it's so small, so there's never really any people around. The only major thing that I dislike is the washer/dryer situation, since it is a little hard to get laundry in. I'd choose Rogers again."
    <br> - Class of 2025
    <br><br>
    "It's not the most modern dorm, but it's nice and old-feeling in a cozy, vintage way. We have some warm, exposed wood in our room that I personally love. I also like how small it is. I know most of the people on my floor, and it feels more homey than some of the other dorms I've been in. I like the non-carpeted floors, the abundance of counter space in the bathrooms and the location! I don't love the shared laundry and kitchen space (I would definitely prefer a separate kitchen with natural lighting), the occasional bug problems and the lack of air conditioning."
    <br> - Class of 2025
    `,
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
    description: "",
    testimonial: `
    "Sargent is a social place, but it feels a bit freshman-y. It's nice to have the dining hall, but it's pretty far from my South Campus classes."
    <br>- Class of 2024
    <br><br>
    "I think it's nice, especially because I lived in Bobb last year, so it feels like a step up. It has a lot of character. It doesn't feel soulless. It's nicer living in a corner room, there's two windows and more space. Sometimes the bathrooms are dirty, but every dorm is like that. It's nice to live above the dining hall, especially in the winter. It's nicer to have carpet than a hardwood floor."
    <br>- Class of 2024
    <br><br>
    "Best location on campus. Dining hall, SPAC, tech."
    <br>- Class of 2025
    <br><br>
    "I don't like how there's only one common room, and people party down there, so if I want a public place to study, Sarge is not it. No one's hangry around here. Everyone's well-fed, so they're happy."
    <br>- Class of 2024
    <br><br>
    "Part of the unique Sarge experience is taking a shower and still not feeling clean because nothing about Sarge ever really feels clean. It can be homey and cozy, but grimy and gross at the same time."
    <br>- Class of 2024
    `,
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
    description: "",
    testimonial: `
    "I think the vibe of my dorm is very chill and quiet, especially my floor. It's not very social, but the people are nice and will say hi and stuff when you pass them walking. I like the cleanliness and how modern the bathrooms are. I like that there is a nice study room and lounge. I don't have any problem with the dorm itself, just wish it was a tad more social. The only place I would pick over my current dorm would be Lincoln, I honestly really like my dorm."
    <br> - Class of 2025
    <br><br>
    "I think this is one of the nicest dorms on campus. Really nice amenities and lots of daylight. Also that each floor has a study room and more study rooms in the basement. Amazing that there is laundry on each floor too. Shepard Hall definitely has a more relaxed and calm vibe than dorms on North Campus. Pretty good location since you're next to downtown Evanston and Allison dining hall. Most of the people are super nice and welcoming. It is much more social than I had thought, which was a plus. Although it is far from Tech and I am a STEM major, it is a great way to get to know downtown Evanston your first year."
    <br>- Class of 2025
    <br><br>
    "Building-wise, Shepard is beautiful: everything is fairly clean and new, and it's hard to feel disappointed by its ambience. It's a bit worse community-wise, though, since the residents generally stick to themselves / their friend groups and bonding events are basically nonexistent. It's hard to reach out and become close with other Shepard residents - especially later in the school year. The only candidate I would rank above Shepard would be Willard, as it shares both benefits of a nice ambience + a closer community."
    <br>- Class of 2025
    <br><br>
    "Neat and clean, modern, chill but maybe a little antisocial across floors. The facilities are great, and the entire dorm looks modern and renovated! I think having nice bathrooms really makes a difference for the whole "living on campus" experience. The rooms aren't huge, but it's more than enough space (it looks much smaller on the website than it does in person). If I had to nitpick, having microwaves on each floor would be really nice, as would an elevator when you're lugging suitcases up to the fourth floor."
    <br><br>
    "Everything is pretty clean, but it doesn't feel super social. People don't really hang out in the common areas in a casual way, but the people are nice. I like the location of Shepard and the bathrooms for sure. The basement is also super nice to have because there are a lot of nice facilities and study spaces down there. I don't like that it's a little antisocial and there isn't an elevator there, but honestly you get used to having to go up the stairs - coming from someone who lived on the fourth floor. It's definitely a great place to live - especially if South Campus is your vibe."
    <br> - Class of 2025
    `,
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
    description: "",
    testimonial: `
    "It's nerdy and pretty quiet except for events. The facilities are well-kept. I like the suite-style and lounges, good kitchens, but singles can be small. I'm definitely staying in Slivka."
    <br> - Class of 2025
    <br><br>
    "I really enjoy living in Slivka because I like the suites. I like the larger community too, but it's nice having the smaller community of a few suitemates. I get along well with them. We mostly use the suite to hang out. In the rec lounge there are usually the same people, so it's easy to get to know some of the people who live here, but you definitely can't get to know everyone because not all of them come to events. The vibe is super friendly and welcoming."
    <br> - Class of 2025
    <br><br>
    "Suites are always awesome, and it's above Lisa's which is a plus. The bedrooms themselves are a bit small, but the huge lounge and bathrooms make up for it. There's something going on every night: movies, game night, that kind of stuff."
    <br> - Class of 2023
    <br><br>
    "Slivka has a very distinct culture, and your enjoyment of it will really depend on how well you gel with it. Gaming, anime, tabletop gaming and general nerd culture was embraced there. There was almost always someone playing Smash or Guitar Hero in the rec lounge. Facilities-wise I have no complaints, but Slivka is pricey. One cool perk is that it has a music practice room in the basement. Overall I'd highly recommend living there since I've made some of my best friends living in Slivka."
    <br> - Class of 2022
    `,
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
    description: "",
    testimonial: `
    "Such a fun and engaging community! A diverse group of people and always so much going on. You can be as involved or uninvolved as you want, but even aside from events there are always people playing video games or studying downstairs, and everyone is so friendly! I like that so many people in the dorm make an effort to get to know others, and everyone is friendly and kind.
    I dislike that there are only three sets of washers and dryers for 75 people. I got randomly assigned to SMQ, but I'm so glad I did."
    <br> - Class of 2024
    <br><br>
    "SMQ is very social, community-based, supportive and fun. It's the kind of dorm where you can ask your neighbors for sugar and play Just Dance in the lounge. It's the best dorm on campus in my opinion. Super great location for people who want to live on South Campus. The sorority quad is beautiful. Being a res college, the weekly events are so fun and great for getting to know people. The only thing I dislike is the laundry machines because they don't work half the time. I did incredibly thorough research on dorms before doing the housing selection. SMQ seemed like the best option, and it absolutely still is."
    <br>- Class of 2025
    <br><br>
    "It's welcoming, quirky, close-knit and energetic. The community is really great - everyone is very friendly, and it's easy to meet people. There are multiple social events per week, which are very fun and bring people together. Logistically, it's easy for sophomores to get single rooms, provided they have enough points from events, and the bathrooms are nice too. I wouldn't want to live anywhere else! I only have good things to say about SMQ."
    <br> - Class of 2025
    <br><br>
    
    "I like the community atmosphere that comes in a res college and that everyone is really friendly. While I would say SMQ is very chill, it is not antisocial at all. Res colleges are definitely the move. Don't be worried about choosing a South Campus dorm if you're a STEM student. Tech to South Campus is not that far, and it's nice to get to meet a lot of new people who may not be in your classes."
    <br> - Class of 2025
    `,
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
    description: "",
    testimonial: `
    "I feel like the vibe is kind of like, we're working with what we have. And we've built up, at least on our floor, a pretty good community, despite the struggles. It's a great location. The exec board does a great job. There's lots of activities that you can engage in to help you get more involved, and you'll probably enjoy your experience here a little more."
    <br> - Class of 2025
    <br><br>
    "I feel like there's just two different vibes - there's energetic, 'Let's have fun, let's have conversation, let's talk all day type - and then there's just the side that's like 'Let me just relax in my room and enjoy some solitude.' So you have both, and you get to choose which one you want. Going to do the laundry if you live on the third floor is six flights of stairs. This building is old, it's a little bit run-down, it should be demolished, but it still exists, so taking that into consideration I think I would pass. It's the people who are great. The building itself? No."
    <br> - Class of 2025
    <br><br>
    "I think that West Fairchild is very friendly. There are four communal lounges on each floor, which is super amazing because any time during the week or on the weekends people will just be there studying or hanging out, and it's so easy to walk by and join in on a conversation. Everyones super nice and super fun to hang out with. I think that the executive board and the residential college really fosters friendship among residents, and you also get to do a lot of cool stuff as a residential college member outside of the dorm as well. There are a lot of fun trips you can go on that you're only privy to if you're a residential college member."
    <br> - Class of 2025
    <br><br>
    "Although West Fairchild has subpar living conditions, I really appreciate its location and its proximity to all of my classes, as well as dining halls, downtown Evanston and the Lakefill. I also really appreciate the residential college environment and the community that has been fostered throughout my time living here. Overall, I would say come here if you don't care about your living conditions and would like the convenience of classes and the tight-knit community of a res college."
    <br> - Class of 2023
    <br><br>
    "It's cute, people are chill, but also it's so old that it shouldn't have people living in it. It's leaky. I would rather live in one of the Shepards."
    <br> - Class of 2023`,
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
    description: "Willard is a non-thematic residential college, nestled in the end of the sorority quad and housing the infamous Fran's, a late night haunt for students that serves quesadillas and shakes. In the basement near Fran's is a lounge to hang with your friends, although be warned that students love to show off on the grand piano there. Since Willard is a res college, it has regular programming organized by the exec, along with a quarterly formal.",
    testimonial: `It's the kind of place where you can say hi to people you pass by in the lounge and even sit down and study with them. I would live in an apartment if I didn't live in Willard because I wouldn't be able to find the same kind of community in any other dorm. 
    <br>- Jess Wu, Willard PR Chair, Class of 2024 <br><br>

    "What I like about Willard is how diverse the student population is and the events they host. Willard has some fun ones like their Firesides, High Tables and their Willard Formal. I definitely wouldn't live anywhere else!"
    <br>- Veronica Carmen, Class of 2023 <br><br>

    "It's really amazing to be a part of a dorm that's so united, and it's so easy to meet people because there are so many events that are held and people are always willing to talk when you say hi to them." 
    <br>- Anthony Kang, Class of 2024
    `,
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
    testimonial: `
    "1838 Chicago is a very quiet dorm, making it the perfect place to sleep. I enjoy that I have a quiet space to come home to after hanging out with friends. If you're looking for a dorm with a social life, I would not recommend living here."
    <br>- Class of 2025
    <br><br>
    "1838 is definitely quiet, but I think people get the impression that quiet equals antisocial, which is not the case. Most of the time when I walk through the lobby there are people hanging out in the kitchen or hanging out on the couches in the lounge. I really like the amenities that come with the dorm. It's great that we have a gym and a full kitchen. It's also really nice to be so close to Allison and Shepard so that we can use the amenities in those buildings as well."
    <br>- Class of 2024
    <br><br>
    "It's good vibe in 1838. People definitely mind their business, but the atmosphere is social enough that it doesn't feel gloomy or isolating. I like the layout of the rooms, proximity to the dining hall, the gym, and the bathrooms. The lounges aren't great and don't welcome that much social hangout space. It is also possible that you can get stuck in a smaller double, and it does feel cramped at times, especially with the one small window."
    <br>- Class of 2024
    
    
    
    `,
    images: [ {img: "https://northbynorthwestern.com/content/images/2022/05/Screen-Shot-2022-03-01-at-10.08.30-PM.png", caption: "Double room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_4513.png", caption: "Double room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/Screen-Shot-2022-03-01-at-10.13.37-PM.png", caption: "Double room"},  {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_4487.png", caption: "Bathroom"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_4489.png", caption: "Bathroom"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_4493.png", caption: "Common Area"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_4501.png", caption: "Common area"},  {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_4502.png", caption: "Common area"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_4504.png", caption: "Common area"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_4508.png", caption: "Common area"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_4510.png", caption: "Kitchen"}, ],

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
    description: "",
    testimonial: `
    "636 has charm! The vibes are good, I like the people here, and it's a super pretty building from the outside. Our lounges are quite nice too. The location is nice (right between Plex and Allison, so we've got our choice of dining hall), and it's really not a far walk from Tech, where the majority of my classes have been. However, THIS DORM WAS NOT READY TO BE LIVED IN! The so-called renovations were rushed. Some highlights are the bathroom flooding three times from the same place, the radiators from HELL that thunk extremely loudly at all hours of the night and the front door to the building malfunctioning twice. If not for those problems, 636 would be a decent dorm."
    <br> - Class of 2025
    <br><br>
    "It's very small, quiet and cozy. For people seeking a vibrant social scene, 636 probably isn't the best option - but if you'd like a more solitary dorm experience, this is the way to go. I really like the common spaces in the dorm. The atmosphere is pretty homey, and it's nice to have a living room with a TV. Major downsides to this dorm are that it doesn't have AC and things are frequently breaking/flooding/otherwise in disrepair." 
    <br>- Class of 2024
    <br><br>
    "It's small and usually quiet. Likes: quiet, never have to wait to pee or shower. Dislikes: no AC, no ventilation, have to go to the basement for the water fountain and laundry, showers are SO SMALL, our bathroom ceiling leaks a ton."
    <br> - Class of 2025
    <br><br>
    "The view of the sorority quad from our window is beautiful, and it's pretty quiet. If there's ever a problem, maintenance is very kind. 636 is not a party dorm. I have not been kept up by my neighbors ever. It's one of the cheapest dorms to live in, which is nice. The rooms are decently large. And our washers/dryers are brand new! However - the dorm is renovated in the most general sense. They stuck in some ugly modern furniture and swept a bit, and that was it. Surprisingly, I have enjoyed my time at 636 Emerson. It's been a blast." 
    <br>- Class of 2024

    `,
    images: [ {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-3245.jpg", caption: "Double room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-3246.jpg", caption: "Double room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-3244.jpg", caption: "Common area"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-3247.jpg", caption: "Bathroom"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-3248.jpg", caption: "Bathroom"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-3249.jpg", caption: "Bathroom"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-3250.jpg", caption: "Common Area"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-3251.jpg", caption: "Common Area"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-3252.jpg", caption: "Common Area"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-3243.jpg", caption: "Kitchen"}],

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
    description: "",
    testimonial: `
    "It's kinda close knit. The sophomores kinda stick to themselves. The bathrooms are nice, I think they just renovated. I haven't disliked much here. It's a bit small, so you don't see that many people."
    <br>- Class of 2025
    `,
    images: [ {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6038-2.jpg", caption: "Common area"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6040.jpg", caption: "Common area"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6041.jpg", caption: "All-gender bathroom"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6042.jpg", caption: "Laundry room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6039.jpg", caption: "Common area"},],

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
    description: "",
    testimonial: `
    "710 is pretty laid back, people just hanging out. It can get fairly social at times, especially on the weekends. I like the quickness of going in and out and the pool table. I also like the common areas. I don't love being on South Campus because it can be a bit of a trek north."
    <br>- Class of 2024
    `,
    images: [ {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6128.jpg", caption: "Double room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6129.jpg", caption: "Double room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6127.jpeg", caption: "Double room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6125.jpg", caption: "Laundry room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6123.jpg", caption: "Common area"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6124.jpg", caption: "Kitchen"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6126.jpg", caption: "Common area"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6117.jpg", caption: "Common area"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-6118.jpg", caption: "Common are"},],

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
    description: "",
    testimonial: `
    "Pretty chill but not very tight because of how big it is. The single rooms are really small. The amenities are nice (laundry on every floor). It is very far north which gets annoying when you need to go to South Campus. Lincoln is a good place to live!"
    <br>- Class of 2023
    <br><br>
    "It's a good mix of social and isolated. Most people hang out in lounges or have people over, as the suite style rooms enable hosting. Being at the north end of campus can sometimes get tiring, especially during a quarter where all of your classes are south. I really enjoy having an elevator, my own bathroom and a kitchen on every floor. It's a super bright and clean dorm, which makes it feel homier."
    <br>- Class of 2025
    <br><br>
    "Love love love the amenities that come with Lincoln. The rooms are so nice, and the bathroom area is so clean and nice and private! The nice kitchens and lounges on each floor are also great for studying or watching a movie with friends! The one thing about Lincoln is that the suite style is not conducive for making friends. It's hard to meet people and befriend people on your floor. Lots of people I know in other dorms made most of their friends at first from where they lived, but that isn't the case in Lincoln. Amenities > everything, you'll make your friends elsewhere anyway."
    <br>- Class of 2025
    <br><br>
    "It's chill, open, pretty quiet. I like the space, view, not having to leave the room to go to the bathroom/shower, having suitemates, lounges, easy access to kitchens and laundry. There have been some problems with the fire alarm, and it's the northernmost dorm (so kinda far from stuff)."
    <br>- Class of 2025
    `,
    images: [ {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_8400.JPEG", caption: "Double room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/lincoln1.jpg", caption: "Double room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/lincoln2.jpg", caption: "Suite common area"}, {img: "https://northbynorthwestern.com/content/images/2022/05/lincoln3.jpg", caption: "Suite bathroom"}, {img: "https://northbynorthwestern.com/content/images/2022/05/lincoln4.jpg", caption: "Suite bathroom"},],

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
    description: "",
    testimonial: "",
    images: [ {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-4214.JPEG", caption: "Double room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-4220.JPEG", caption: "Double room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-4215.JPEG", caption: "Double room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG-4213.JPEG", caption: "Double room"}],

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
    description: "",
    testimonial: `
    "It is very community-centered and it feels homey. I like that I can come down to the lounge and there will be people in it. I don't like how much the lights in the lounge break. I like that it's clean, there's no mold in any of the showers, and it feels relatively new." 
    <br>- Class of 2024
    <br><br>
    "We are a small dorm with a big community. There are always events going on for CCS and GREEN House. I like that the nature of CCS and GREEN House both attract lots of open-minded people. Even though we are a res college, we have residents of all majors and from all over the world. Not the biggest fan of how long it takes to walk to the kitchen. I met so many amazing people through CCS and it has the best location on campus."
    <br>- Class of 2024
    <br><br>
    "Chill vibe. Super fun! Super tight-knit but welcoming community. CCS has the ability to bring in non-residents from all over. The most underrated dorm on north campus. I will say, I live on the fifth floor and there is no elevator. Other than that, I like that we have a lot of great amenities like lounges and basements to hang out in. We are close to Sargent and Elder dining halls, SPAC, Tech and Mudd."
    <br>- Class of 2025
    <br><br>
    "North campus's hidden gem, lively down-to-earth lounge community. There are great community events between GREEN House, RAs and CCS. GREEN House seems to be on the up and up. Water pressure in faucets is WEAK though."
    <br>- Class of 2023
    `,
    images: [ {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_3009.jpg", caption: "Double room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_3011.jpg", caption: "Double room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_3012.jpg", caption: "Double room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2982.jpg", caption: "Common room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2983.jpg", caption: "Common room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2984.jpg", caption: "Common room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2987.jpg", caption: "Common room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2989.jpg", caption: "Common room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2994.jpg", caption: "Basement"},  {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2995.jpg", caption: "Basement"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2996.jpg", caption: "Basement"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2997.jpg", caption: "Kitchen"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_2999.jpg", caption: "Kitchen"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_3001.jpg", caption: "kitchen"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_3005.jpg", caption: "bathroom"}, {img: "https://northbynorthwestern.com/content/images/2022/05/IMG_3007.jpg", caption: "bathroom"},],

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
    description: "",
    testimonial: "",
    images: [ {img: "https://northbynorthwestern.com/content/images/2022/05/68EFA956-DC63-4EF6-ACC7-EDEA476CDB56.jpeg", caption: "Double room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/05063333-24CF-47A5-9CBC-551E43912E1C.jpeg", caption: "Double room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/A4DE90E1-D182-498D-A0E9-A24B9660A1CB.jpeg", caption: "Double room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/4E4877FD-49CD-474E-B5A0-5FD353931CF2.jpeg", caption: "Bathroom"}, {img: "https://northbynorthwestern.com/content/images/2022/05/8F0B0416-0169-4B80-BFCC-05D3379CA3EC.jpeg", caption: "Bathroom"}, {img: "https://northbynorthwestern.com/content/images/2022/05/400788C8-545A-4E63-82C9-78E409BA1BB2.jpeg", caption: "bathroom"}, {img: "https://northbynorthwestern.com/content/images/2022/05/786ECE72-0FAF-4211-AE48-12C35008D858.jpeg", caption: "Bathroom"}, {img: "https://northbynorthwestern.com/content/images/2022/05/40A60993-8B11-492E-8BB7-A710672E459C.jpeg", caption: "Common room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/0BD38018-2616-45BB-9327-56CB0804B890.jpeg", caption: "Common room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/518304D2-4577-4325-A07C-ACB091E93347.jpeg", caption: "Common room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/605387CB-2E28-4314-94C3-D4A1D11E7F40.jpeg", caption: "Common room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/B0EF3109-BC76-4F21-A446-44EE276C382E.jpeg", caption: "Common room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/D6C8D1DF-69AF-468D-889F-8E9115515540.jpeg", caption: "Common room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/8199C0F2-56DD-4FE2-BAFD-186CEA7E6E3A.jpeg", caption: "Common room"}, {img: "https://northbynorthwestern.com/content/images/2022/05/AF1DC4B5-8C47-4BF2-AA23-E33D5CFEB562.jpeg", caption: "Laundry room"},],

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
    description: "",
    testimonial: "",
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
    description: "",
    testimonial: "",
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
    description: "",
    testimonial: "",
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
      <br>
      <h3>WHAT RESIDENTS SAY</h3>
      <p>${dorms[i].testimonial}
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
