
const hikeList = [
  {
    id: 1,
    name: "Bechler Falls",
    imgSrc: "falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    difficulty: "Easy",
    description: "Beautiful short hike along the Bechler river to Bechler Falls",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec rutrum dui. Sed egestas est sit amet tortor mollis, id mattis sapien ullamcorper. Etiam consequat, neque nec volutpat vehicula, massa velit commodo erat, a venenatis tellus dolor at purus. Duis sed lorem dignissim, interdum sapien nec, suscipit eros. Curabitur ante enim, tincidunt sed felis tristique, maximus auctor neque. Morbi non diam pharetra, condimentum magna non, eleifend turpis. Sed dui lorem, ultrices sit amet varius bibendum, pulvinar nec tellus. Nulla scelerisque, elit nec tempus condimentum, tellus tellus suscipit libero, ac scelerisque nunc ipsum non risus.",
    directions: "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
  },
  {
    id: 2,
    name: "Teton Canyon",
    imgSrc: "falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    difficulty: "Easy",
    description: "Beautiful short (or long) hike through Teton Canyon.",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec rutrum dui. Sed egestas est sit amet tortor mollis, id mattis sapien ullamcorper. Etiam consequat, neque nec volutpat vehicula, massa velit commodo erat, a venenatis tellus dolor at purus. Duis sed lorem dignissim, interdum sapien nec, suscipit eros. Curabitur ante enim, tincidunt sed felis tristique, maximus auctor neque. Morbi non diam pharetra, condimentum magna non, eleifend turpis. Sed dui lorem, ultrices sit amet varius bibendum, pulvinar nec tellus. Nulla scelerisque, elit nec tempus condimentum, tellus tellus suscipit libero, ac scelerisque nunc ipsum non risus.",
    directions: "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
  },
  {
    id: 3,
    name: "Denanda Falls",
    imgSrc: "falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "7 miles",
    difficulty: "Moderate",
    description: "Beautiful hike through Bechler meadows river to Denanda Falls",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec rutrum dui. Sed egestas est sit amet tortor mollis, id mattis sapien ullamcorper. Etiam consequat, neque nec volutpat vehicula, massa velit commodo erat, a venenatis tellus dolor at purus. Duis sed lorem dignissim, interdum sapien nec, suscipit eros. Curabitur ante enim, tincidunt sed felis tristique, maximus auctor neque. Morbi non diam pharetra, condimentum magna non, eleifend turpis. Sed dui lorem, ultrices sit amet varius bibendum, pulvinar nec tellus. Nulla scelerisque, elit nec tempus condimentum, tellus tellus suscipit libero, ac scelerisque nunc ipsum non risus.",
    directions: "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
  }
];


export default class HikeModel {
  constructor() { }

  getAllHikes() {
    return hikeList;
  }

  getHike(name) { 
    return hikeList.find((hike) => hike.name.toLowerCase() === name.toLowerCase());
  }
}


