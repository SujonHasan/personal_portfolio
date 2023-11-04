import About from "../About/About";
import Achievments from "../Achievments/Achievments";
import Blogs from "../Blogs/Blogs";
import ContactMe from "../ContactMe/ContactMe";
import ProblemSolving from "../ProblemSolving/ProblemSolving";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Home/Home");

const Router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/achievments',
                element: <Achievments></Achievments>
            },
            {
                path: '/problem_solving',
                element: <ProblemSolving></ProblemSolving>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/contact',
                element: <ContactMe></ContactMe>
            }
        ]
    }
])

export default Router;