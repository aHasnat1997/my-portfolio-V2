import Title from "../../components/Title";
import { FaSlackHash } from "react-icons/fa";


const Quality = () => {
  return (
    <section className="section">
      <div>
        <Title heading={'Quality'} />
      </div>
      <div className="flex flex-col md:flex-row gap-16">
        <div>
          <h2 className="text-4xl lg:text-6xl">Courses/Certificate</h2>
          <div className="mt-8 flex items-baseline gap-2 ">
            <span className='text-2xl font-bold translate-y-1'><FaSlackHash /></span>
            <div>
              <h3 className="text-2xl font-bold">Complete Web Development Course</h3>
              <p className="">Programming-Hero</p>
              <p>[ Jan, 2023 - Jun, 2023 ]</p>
            </div>
          </div>
          <div className="mt-8 flex items-baseline gap-2 ">
            <span className='text-2xl font-bold translate-y-1'><FaSlackHash /></span>
            <div>
              <h3 className="text-2xl font-bold">Web Design</h3>
              <p className="">BASIS Institute of Technology & Management (BITM)</p>
              <p>[ [Jun,2022 - Sep,2022 ]</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-4xl lg:text-6xl">Education</h2>
          <div className="mt-8 flex items-baseline gap-2 ">
            <span className='text-2xl font-bold translate-y-1'><FaSlackHash /></span>
            <div>
              <h3 className="text-2xl font-bold">Bachelor's In CSE</h3>
              <p className="">National University, Bangladesh</p>
              <p>[ 2017 - Running ]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
