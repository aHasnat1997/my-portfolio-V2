import Title from "../../components/Title";

const Services = () => {
  const servicesData = [
    {
      "name": "MERN Stack",
      "description": "Full-stack web development using MongoDB, Express.js, React.js, and Node.js."
    },
    {
      "name": "E-commerce Development",
      "description": "Creating online stores with features like product listings, shopping carts, and payment integration."
    },
    {
      "name": "Customized Web App Development",
      "description": "Building tailored web applications to meet specific business requirements."
    },
    {
      "name": "PSD/Figma to HTML Development",
      "description": "Converting designs from PSD or Figma into high-quality HTML code."
    }
  ];

  return (
    <section className="section">
      <div>
        <Title heading={'Services'} />
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16'>
        {
          servicesData.map((services, i) => <div key={i} className="card shadow-[.5rem_.5rem_1rem_#00000086] duration-500 hover:-translate-y-6 hover:shadow-[1rem_1rem_1rem_#000]">
            <div className="card-body">
              <h2 className="card-title">{services.name}</h2>
              <p>{services.description}</p>
            </div>
          </div>)
        }
      </div>
    </section>
  );
};

export default Services;
