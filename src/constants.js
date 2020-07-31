import twitterPhoto from "./images/twitter.png";
import simpsonsPhoto from "./images/simpsons.png";
import battleshipPhoto from "./images/battleship.png";

export const constants = {
  TWITTER_CLONE: {
    name: "Twitter Clone",
    description:
      "A build of Twitter's main functionality from the ground up. Using NodeJS/Express for the back end, MongoDB as database, and ReactJS for client side views. Deployed on Heroku, using AWS S3 to save user uploaded photos.",
    github: "https://github.com/jdonahue135/odin-twitter",
    live: "https://afternoon-fjord-78280.herokuapp.com/home",
    photo: twitterPhoto,
  },
  SIMPSONS_WALDO: {
    name: "Where's Waldo: The Simpsons",
    description:
      "A simple photo-tagging app. Find The Simpson's family in a large photo. Using node.js/Express as a backend and React.js as frontend framework.",
    github: "https://github.com/jdonahue135/wheres-waldo",
    live: "https://infinite-headland-08203.herokuapp.com/",
    photo: simpsonsPhoto,
  },
  BATTLESHIP: {
    name: "Battleship",
    description: "A single-page app of the game Battleship.",
    github: "https://github.com/jdonahue135/battleship",
    live: "https://jdonahue135.github.io/battleship/",
    photo: battleshipPhoto,
  },
};
