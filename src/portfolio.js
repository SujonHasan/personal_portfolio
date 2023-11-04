import emoji from "react-easy-emoji";

const greeting = {
    username: "Sujon Hasan",
    title1: "Hi, I'm",
    title2: "Sujon Hasan",
    SubTitle: (
        "As a MERN stack developer, I specialize in building full-stack web applications using MongoDB, Express, React, and Node.js. With a passion for coding and a dedication to clean, efficient, and well-organized code, I strive to create applications that deliver exceptional user experiences."
    ),
    resumeLink: "https://drive.google.com/uc?export=download&id=1yVUzjBRdPb3_Gt0KJ5Z9Xgf9eEUHWZ7e",
    displayGreeting: true,//set true to display this sectin, default to true
}

// Social Media Links
const socialMediaLinks = {
    github: "https://github.com/SujonHasan",
    linkedin: "https://www.linkedin.com/in/sujon-hasan/",
    gmail: "sujonhasan171@gmail.com",
    facebook: "https://web.facebook.com/sujon7020/",
    // display: true // Set true to display this section, defaults to false
};

const skillsSection = {

    title: "Proficient in:",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji(
            "⚡ C++"
        ),
        emoji("⚡ Javascript"),
        emoji(
            "⚡ Algorithmic Problem Solving (solved 500+ problems on various online platforms)"
        ),
        emoji("⚡ Data Structures and Algorithms"),
        emoji("⚡ Competitive Programming"),
        emoji("⚡ Full Stack Development"),
    ],
    softwareSkills: [
        {
            skillName: "html-5",
            fontAwesomeClassname: "fab fa-html5 fa-3x"
        },
        {
            skillName: "css3",
            fontAwesomeClassname: "fab fa-css3-alt fa-3x"
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js fa-3x"
        },
        {
            skillName: "reactjs",
            fontAwesomeClassname: "fab fa-react fa-3x"
        },
        {
            skillName: "nodejs",
            fontAwesomeClassname: "fab fa-node fa-3x"
        },
        {
            skillName: "npm",
            fontAwesomeClassname: "fab fa-npm fa-3x"
        },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "fas fa-database fa-3x"
        },
        {
            skillName: "firebase",
            fontAwesomeClassname: "fas fa-fire fa-3x"
        },
    ],
    display: true // Set false to hide this section, defaults to true
}

export {
    greeting,
    socialMediaLinks,
    skillsSection,
}