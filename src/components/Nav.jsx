import { FaBars } from "react-icons/fa";
import Tilt from 'react-parallax-tilt';


const Nav = () => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Tilt
          className="parallax-effect-glare-scale"
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1.02}
        >
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button btn-circle btn-lg text-4xl">
            <FaBars />
          </label>
        </Tilt>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">

            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>

          </ul>
          
      </div>
    </div>
  );
};

export default Nav;
