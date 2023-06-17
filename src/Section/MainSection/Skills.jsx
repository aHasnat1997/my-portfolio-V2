import Marquee from "react-fast-marquee";
import Title from "../../components/Title";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNode } from "react-icons/fa";
import { SiJavascript, SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandTailwind, TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div>
        <Title heading={'Skills'} />
      </div>
      <Marquee>
        <span className="text-9xl my-16"><FaHtml5 /></span>
        <span className="text-9xl my-16"><FaCss3Alt /></span>
        <span className="text-9xl my-16"><SiJavascript /></span>
        <span className="text-9xl my-16"><TbBrandTailwind /></span>
        <span className="text-9xl my-16"><FaBootstrap /></span>
        <span className="text-9xl my-16"><FaReact /></span>
        <span className="text-9xl my-16"><FaNode /></span>
        <span className="text-9xl my-16"><SiExpress /></span>
        <span className="text-9xl my-16"><SiMongodb /></span>
        <span className="text-9xl my-16"><TbBrandNextjs /></span>
      </Marquee>
    </section>
  );
};

export default Skills;
