import twitterPhoto from "./images/twitter.png";
import todoPhoto from "./images/todo-list.png";
import simpsonsPhoto from "./images/simpsons.png";
import battleshipPhoto from "./images/battleship.png";
import fanPhoto from "./images/fan.jpeg";
import paigePhoto from "./images/paige.jpeg";
import connorPhoto from "./images/connor.jpeg";

export const projects = {
  TWITTER_CLONE: {
    name: "Twitter Clone",
    description:
      "A Full stack implementation of Twitter's core functionality and style.",
    skills: [
      "RESTful API",
      "Authentication and protected routes",
      "CRUD Operations",
    ],
    github: "https://github.com/jdonahue135/odin-twitter",
    live: "https://afternoon-fjord-78280.herokuapp.com/home",
    photo: twitterPhoto,
  },
  TODO_LIST: {
    name: "React Todo List",
    description: "A Full stack implementation of a todo list.",
    skills: ["Dynamic UI", "Data Synchronization", "CRUD Operations"],
    github: "https://github.com/jdonahue135/todo-list",
    live: "https://shielded-mesa-41166.herokuapp.com/",
    photo: todoPhoto,
  },
  SIMPSONS_WALDO: {
    name: "Where's Waldo: The Simpsons",
    description: "A photo-tagging app based on the children's game.",
    skills: ["DOM Manipulation", "Validation", "API requests"],
    github: "https://github.com/jdonahue135/wheres-waldo",
    live: "https://infinite-headland-08203.herokuapp.com/",
    photo: simpsonsPhoto,
  },
  BATTLESHIP: {
    name: "Battleship",
    description: "A single page application based on the board game.",
    skills: ["Test Driven Development", "DOM Manipulation", "OOP Principles"],
    github: "https://github.com/jdonahue135/battleship",
    live: "https://jdonahue135.github.io/battleship/",
    photo: battleshipPhoto,
  },
};

export const testimonials = [
  {
    name: "Fan Bi",
    title: "CEO, Blank Label",
    text:
      "In a fast-moving world, it's great to have someone like Jake who has a demonstrated track record of being adaptive to new challenges.",
    photo: fanPhoto,
  },
  {
    name: "Paige Connell",
    title: "President, Blank Label",
    text:
      "Jake's performance is consistently top notch and his adaptability and problem solving capabilities made him a huge asset to our team.",
    photo: paigePhoto,
  },
  {
    name: "Connor Lees",
    title: "Director of Operations, Blank Label",
    text:
      "Strong, analytical problem-solving skills were the cornerstone of his successes. Extremely reliable and hard-working, and a great teammate.",
    photo: connorPhoto,
  },
];
