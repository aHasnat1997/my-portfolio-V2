import About from "./About";
import Header from "./Header";
import Projects from "./Projects";
import Quality from "./Quality";
import Services from "./Services";
import Skills from "./Skills";


const MainLayout = () => {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Quality />
    </>
  );
};

export default MainLayout;
