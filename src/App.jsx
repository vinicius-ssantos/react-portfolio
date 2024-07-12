import styles from "./App.module.css";
import {Navbar} from "./components/Navbar/Navbar.jsx";
import {Hero} from "./components/Hero/Hero.jsx";
import {About} from "./components/about/About.jsx";
import {Experience} from "./components/Experience/Experience.jsx";
import {Projects} from "./components/projects/Projects.jsx";
import {Contact} from "./components/Contact/Contact.jsx";

function App() {

    return (<div className={styles.App}>
        <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact />
    </div>);
}

export default App;
