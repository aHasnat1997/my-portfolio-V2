

const Title = ({ heading }) => {
  return (
    <>
      <h2 style={{
        "WebkitTextStroke": ".5px #f4c7dc"
      }}
      className='uppercase text-transparent text-5xl md:text-9xl tracking-widest leading-none text-center lg:text-left mb-16 font-extrabold'>
        {heading}
      </h2>
    </>
  );
};

export default Title;
