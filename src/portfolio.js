import emoji from "react-easy-emoji";
import { codeforces, hackerRank, competitive_Programming } from "./assets";

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

// const manuItems = <>
//     <li> <Link className='py-3 px-2 inline-block' to="/" >Home</Link> </li>
//     <li> <Link className='py-3 px-2 inline-block' to="/about" >About</Link> </li>
//     <li> <Link className='py-3 px-2 inline-block' to="/projects" >Projects</Link> </li>
//     <li> <Link className='py-3 px-2 inline-block' to="/skills" >Skills</Link> </li>
//     <li> <Link className='py-3 px-2 inline-block' to="/achievments" >Achievments</Link> </li>
//     <li> <Link className='py-3 px-2 inline-block' to="/problem_solving" >Problem Solving</Link> </li>
//     <li> <Link className='py-3 px-2 inline-block' to="/blogs" >Blogs</Link> </li>
//     <li> <Link className='py-3 px-2 inline-block' to="/contact" >Contact me</Link> </li>
// </>

const manuItems = [

    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Project", link: "/projects" },
    { name: "Skills", link: "/skills" },
    { name: "Achievments", link: "/achievments" },
    { name: "Problem Solving", link: "/problem_solving" },
    { name: "Blogs", link: "/blogs" },
    { name: "Contact", link: "/contact" },
]

const skillsSection = {

    title: "Proficient in:",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji(
            "⚡ C++"
        ),
        emoji("⚡ Javascript"),
        emoji(
            "⚡ Algorithmic Problem Solving (solved 950+ problems on various online platforms)"
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

const problemSolving = {

    title: "Problem Solving Activities",
    subTitle: "My Competitive Programming Journey",
    site: [
        {
            icon: codeforces,
            title: "Newbie",
            subTitle: "Highest Rating 1073",
            link: "https://codeforces.com/profile/sujon_hasan",
            name: "sujon_hasan",
        },
        {
            icon: hackerRank,
            title: "200+ Problems Solved",
            subTitle: "Data Structure and Algorithmic Problem solved",
            link: "https://www.hackerrank.com/profile/Sujon_Hasan",
            name: "sujon_hasan"
        },
        {
            icon: competitive_Programming,
            title: "950+ Problems Solved",
            subTitle: "Competitive Programming Problems(Algorithmic, Data Structure Based and Others)",
            link: "https://github.com/SujonHasan/ProblemSolvingStats",
            name: "link"
        },
    ]
}

const contactMe = {

    title: "Reach Out to me!",
    subTitle: "IF YOU WANT TO HIRE ME OR HAVE OTHER QUERIES, THEN KNOCK ME ANYTIME. I TRY TO REPLY WITHIN 24 HOURS.",
    mail: "sujonhasan171@gmail.com",
}

export {
    greeting,
    socialMediaLinks,
    skillsSection,
    problemSolving,
    contactMe,
    manuItems,
}