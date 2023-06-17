import { FaHome, FaUserAlt, FaServer, FaTools, FaBoxes } from "react-icons/fa";
import pdf from '../../assets/ABUL_HASNAT_Resume.pdf'

const Header = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdf;
    link.download = 'ABUL_HASNAT_RESUME.pdf';
    link.click();
  };


  return (
    <header id="home" className="max-w my-16 lg:my-2 lg:min-h-screen flex items-center justify-between">
      <div>
        <h3 className="text-4xl lg:text-6xl">Say Hi from,</h3>
        <h1 className="text-6xl lg:text-8xl my-4 text-primary font-extrabold">A.Hasnat</h1>
        <p className="text-xl text-justify md:w-3/4">Skilled Web Developer proficient in HTML, CSS, JavaScript, React, Tailwind, Bootstrap, Node, Express, and MongoDB. Passionate about clean code and delivering high-quality solutions.</p>
        <button onClick={handleDownload} className="mt-8 btn btn-primary btn-lg btn-outline font-extrabold text-xl">Download Resume</button>
      </div>
      <ul className="border rounded-full py-4 px-2 hidden lg:block">
        <li><a href="#home" className="btn btn-circle btn-lg btn-ghost text-4xl"><FaHome /></a></li>
        <li><a href="#about" className="btn btn-circle btn-lg btn-ghost text-4xl"><FaUserAlt /></a></li>
        <li><a href="#services" className="btn btn-circle btn-lg btn-ghost text-4xl"><FaServer /></a></li>
        <li><a href="#skills" className="btn btn-circle btn-lg btn-ghost text-4xl"><FaTools /></a></li>
        <li><a href="#projects" className="btn btn-circle btn-lg btn-ghost text-4xl"><FaBoxes /></a></li>
      </ul>
    </header>
  );
};

export default Header;
