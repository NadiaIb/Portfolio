const projectsArr = [
  {
    name: "GameGeek Reviews",
    image: "./public/gamegeek.jpeg",
    techStack: "React, CSS3, Express, PostgreSQL",
    hostedSite: "https://main--gamegeek-review.netlify.app/",
    frontend: "https://github.com/NadiaIb/GameGeek-FE",
    backend: "https://github.com/NadiaIb/GameGeek-BE",
    description:
      " Unleash the full potential of a React-based, full-stack games review app! Interact with a PostgreSQL back end through API calls, adding, deleting, and sorting comments on games by date, comment count, and votes. Engage, discover, and be part of a vibrant gaming community!",
  },
  {
    name: "Get Your Steps In",
    image: "./public/game.jpeg",
    techStack: "React, CSS3, Express, PostgreSQL",
    hostedSite: "https://getyourstepsin.netlify.app/",
    frontend: "https://github.com/NadiaIb/frontend-get-your-steps-in",
    backend: "https://github.com/NadiaIb/backend-get-your-steps-in",
    description:
      "Experience an all-encompassing, full-stack 3D platform game utilising physics and 3D graphics, all powered by JavaScript in the browser via React-Three-Fiber, a React wrapper for the Three.js library. Take on the challenge and see how your skills compare with others by submitting and storing your all-time and weekly high scores in a mongo.db database.",
  },
];

const skillsArr = [
  {
    title: "Frontend",
    image: "./public/checkmark.png",
    skill1: "JavaScript",
    skill2: "React",
    skill3: "HTML",
    skill4: "CSS",
    skill5: "React-Three-Fiber",
  },
  {
    title: "Backend",
    image: "./public/checkmark.png",
    skill1: "Node.js",
    skill2: "Jest",
    skill3: "PostgreSQL",
    skill4: "MongoDB",
  },
];

export { projectsArr, skillsArr };
