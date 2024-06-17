import About from "../components/content/about"
import Certification from "../components/content/certification"
import Contact from "../components/content/contact"
import Main from "../components/content/hero"
import Skills from "../components/content/skills"
import Follow from "../components/footer/follow"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import Blog from "../components/project/blog"
import Projects from "../components/project/myproject"

const Home = () => {
    return (
        <>
            <Header />
            <Main />
            <About />
            <Skills />
            <Certification />
            <Projects />
            <Blog />
            <Contact />
            <Follow />
            <Footer />
        </>
    )
}

export default Home