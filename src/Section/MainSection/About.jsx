import Title from "../../components/Title";

const About = () => {
  return (
    <section id="about" className="section">
      <div>
        <Title heading={'About'} />
      </div>
      <div className='w-full'>
        {/* <h2 className='text-4xl lg:text-6xl'>Every great design begin with an even better story</h2> */}
        <p className="mt-4 text-xl text-justify first-letter:text-8xl first-letter:font-bold first-letter:mr-2 first-letter:-mt-3  first-letter:float-left">Welcome! to my portfolio website! I'm a skilled Web Developer with over one year of experience, specializing in HTML, CSS, JavaScript, React, Tailwind, Bootstrap, Node, Express, and MongoDB. I create engaging and dynamic websites that prioritize user experience. With a keen eye for design and a meticulous approach to coding, I deliver clean, efficient, and responsive websites that work seamlessly across devices. Collaboration is vital to my work ethic, as I believe open communication and strong partnerships with clients lead to successful outcomes. Whether it's building websites from scratch, revamping existing ones, or developing web applications, I'm dedicated to delivering high-quality work that showcases my skills. Feel free to explore my projects and reach out for potential collaborations. Let's create something amazing together!</p>
      </div>
    </section>
  );
};

export default About;
