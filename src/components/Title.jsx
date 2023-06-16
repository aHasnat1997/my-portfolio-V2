

const Title = ({ heading }) => {
  return (
    <>
      <h2 style={{
        "WebkitTextStroke": ".5px #f4c7dc"
      }}
      className='uppercase text-transparent text-6xl md:text-9xl tracking-widest leading-none text-center lg:text-left my-16'>
        {heading}
      </h2>
    </>
  );
};

export default Title;
