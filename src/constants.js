import twitterPhoto from "./images/twitter.png";
import simpsonsPhoto from "./images/simpsons.png";
import battleshipPhoto from "./images/battleship.png";

export const projects = {
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

export const testimonials = [
  {
    name: "Fan",
    title: "CEO, Blank Label",
    text:
      "n a fast-moving world, it's great to have someone like Jake who has a demonstrated track record of being adaptive to new challenges. In the span of a few years, he started as client-facing sales person, grew to manage people, and ended up creating a brand new inside sales program from scratch that is now at the core of our business strategy. The best part is throughout all of this he was very proactive, resourceful and able to learn on his own.",
  },
  {
    name: "Paige",
    title: "President, Blank Label",
    text:
      "Jake is a passionate, committed and detail-oriented professional. At his time at Blank Label Jake spearheaded a new program that has changed the way we view inside sales. His performance was consistently top notch and I would not hesitate to work with him on any project big or small. His adaptability and problem solving capabilities made him a huge asset to our team. ",
  },
  {
    name: "Connor",
    title: "Director of Operations, Blank Label",
    text:
      "Strong, analytical problem-solving skills were the cornerstone of his successes. Always prepared to back up his decisions with well thought out arguments and knowledge. Worked collaboratively across teams to build, teach, and implement a successful inside sales strategy that reshaped the entire business model at Blank Label. Extremely reliable and hard-working, and a great teammate to have in the office. Would recommend without hesitation.",
  },
];
