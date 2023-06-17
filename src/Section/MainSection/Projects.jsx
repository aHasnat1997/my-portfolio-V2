import Title from "../../components/Title";
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';


const Projects = () => {
  return (
    <section id="projects" className="section">
      <div>
        <Title heading={'Projects'} />
      </div>
      <div className="flex flex-col gap-16">

        <div className="card lg:h-96 md:card-side shadow-[.5rem_.5rem_1rem_#00000086] duration-500 hover:-translate-y-6 hover:shadow-[1rem_1rem_1rem_#000] overflow-hidden group">
          <div className="md:w-1/2 h-60 md:h-96 overflow-hidden">
            <img src={project1} alt="Album" className="duration-[6000ms] group-hover:-translate-y-[34rem] lg:group-hover:-translate-y-[54rem]" />
          </div>
          <div className="card-body md:w-1/2">
            <div>
              <h2 className="card-title md:text-4xl">Melody Masters</h2>
              <p>It is a Single Page Application that office some courses for learning musical instruments.</p>
              <ul className="list-disc ml-6">
                <li>The client site was built with React JS and Tailwind.</li>
                <li>Express JS is used for the server and MongoDB is used for the database.</li>
                <li>For authentication and hosting I use Firebase.</li>
              </ul>
            </div>
            <div className="card-actions justify-end">
              <a href="https://melody-masters-project.web.app/" target="_blank" className="btn btn-secondary btn-outline font-bold">Live Site</a>
            </div>
          </div>
        </div>

        <div className="card lg:h-96 md:card-side md:flex-row-reverse shadow-[.5rem_.5rem_1rem_#00000086] duration-500 hover:-translate-y-6 hover:shadow-[1rem_1rem_1rem_#000] overflow-hidden group">
          <div className="md:w-1/2 h-60 md:h-96 overflow-hidden">
            <img src={project2} alt="Album" className="duration-[6000ms] group-hover:-translate-y-[28rem] lg:group-hover:-translate-y-[48rem]" />
          </div>
          <div className="card-body md:w-1/2">
            <div>
              <h2 className="card-title md:text-4xl">Heroic Toys</h2>
              <p>It is a Single Page Application that showcases some action figures. Anyone can upload, update and delete products by opening an account. Only login users can upload, update and delete their products.</p>
              <ul className="list-disc ml-6">
                <li>The client site was built with React JS and Tailwind. Also used some npm packages like AOS for animation</li>
                <li>Express JS is used for the server and MongoDB is used for the database.</li>
                <li>For authentication and hosting I use Firebase.</li>
              </ul>
            </div>
            <div className="card-actions justify-end">
              <a href="https://heroic-toys.web.app/" target="_blank" className="btn btn-secondary btn-outline font-bold">Live Site</a>
            </div>
          </div>
        </div>

        <div className="card lg:h-96 md:card-side shadow-[.5rem_.5rem_1rem_#00000086] duration-500 hover:-translate-y-6 hover:shadow-[1rem_1rem_1rem_#000] overflow-hidden group">
          <div className="md:w-1/2 h-60 md:h-96 overflow-hidden">
            <img src={project3} alt="Album" className="duration-[6000ms] group-hover:-translate-y-[34rem] lg:group-hover:-translate-y-[54rem]" />
          </div>
          <div className="card-body md:w-1/2">
            <div>
              <h2 className="card-title md:text-4xl">Yum Yum Cuisine</h2>
              <p>Single Page Application that showcases chef recipes. Visitors can view the chef' best recipes</p>
              <ul className="list-disc ml-6">
                <li>React JS and Tailwind for the client site. Some npm packages like Swiper JS were used in this project</li>
                <li>For the server, Express JS is used and the database used MongoDB</li>
                <li>For authentication and hosting I use Firebase.</li>
              </ul>
            </div>
            <div className="card-actions justify-end">
              <a href="https://yum-yum-cuisine.web.app/" target="_blank" className="btn btn-secondary btn-outline font-bold">Live Site</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
