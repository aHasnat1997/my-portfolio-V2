import { FaHome, FaUserAlt, FaRegAddressCard, FaServer, FaTools, FaBoxes } from "react-icons/fa";

const Header = () => {
  return (
    <header className="my-16 lg:my-2 lg:min-h-screen flex items-center justify-between">
      <div>
        <h3 className="text-4xl lg:text-6xl">Say Hi from,</h3>
        <h1 className="text-6xl lg:text-8xl my-4 text-primary font-extrabold">A.Hasnat</h1>
        <p className="text-xl w-3/4">Skilled full-stack web developer proficient in HTML, CSS, JavaScript, React, Tailwind, Bootstrap,Node, Express, and MongoDB. Passionate about clean code and delivering high-quality solutions.</p>
        <button className="mt-8 btn btn-primary btn-lg btn-outline font-extrabold text-xl">Download Resume</button>
      </div>
      <ul className="border rounded-full py-4 px-2 hidden lg:block">
        <li><a href="#" className="btn btn-circle btn-lg btn-ghost text-4xl"><FaHome /></a></li>
        <li><a href="#" className="btn btn-circle btn-lg btn-ghost text-4xl"><FaUserAlt /></a></li>
        <li><a href="#" className="btn btn-circle btn-lg btn-ghost text-4xl"><FaRegAddressCard /></a></li>
        <li><a href="#" className="btn btn-circle btn-lg btn-ghost text-4xl"><FaServer /></a></li>
        <li><a href="#" className="btn btn-circle btn-lg btn-ghost text-4xl"><FaTools /></a></li>
        <li><a href="#" className="btn btn-circle btn-lg btn-ghost text-4xl"><FaBoxes /></a></li>
      </ul>
    </header>
  );
};

export default Header;
