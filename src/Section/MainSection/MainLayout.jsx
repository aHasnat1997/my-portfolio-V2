import About from "./About";
import Header from "./Header";
import Projects from "./Projects";
import Quality from "./Quality";
import Services from "./Services";


const MainLayout = () => {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Projects />
      <Quality />
    </>
  );
};

export default MainLayout;
