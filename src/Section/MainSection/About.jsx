import Title from "../../components/Title";

const About = () => {
  return (
    <section className="section">
      <div>
        <Title heading={'About'} />
      </div>
      <div className='w-full'>
        <h2 className='text-4xl lg:text-6xl'>Every great design begin with an even better story</h2>
        <p className="mt-4 text-xl">Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</p>
      </div>
    </section>
  );
};

export default About;
