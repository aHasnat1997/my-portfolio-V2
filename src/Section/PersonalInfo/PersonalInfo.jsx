import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";
import Tilt from 'react-parallax-tilt';
// import './ParallaxEffectGlareScale.scss';
import myImg from '../../assets/my-img.png'

const PersonalInfo = () => {
  return (
    <section className='w-full min-h-[90vh] border px-8 rounded-2xl lg:sticky top-16 flex justify-center items-center text-white'>
      <div className="flex flex-col justify-center items-center gap-8">
        <div>
          <h1 className='text-5xl uppercase font-bold text-center'>A.Hasnat</h1>
          <h3 className='text-xl uppercase font-bold text-center'>Full-Stack Developer</h3>
        </div>
        <Tilt
          className="parallax-effect-glare-scale rounded-full"
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1.02}
        >
          <div className='rounded-full overflow-hidden border border-neutral w-60 h-60 mx-auto'>
            <img src={myImg} alt="Image" />
          </div>
        </Tilt>
        <div className='text-center'>
          <p className='text-xl'>a.hasnat.dev1@gmail.com</p>
          <p>Dhaka, Bangladesh</p>
          <div className="flex justify-center gap-4 py-4">
            <a href="https://www.facebook.com/profile.php?id=100011488991039" className="btn btn-ghost btn-circle text-3xl" target="_blank"><FaFacebookF /></a>
            <a href="https://github.com/aHasnat1997" target="_blank" className="btn btn-ghost btn-circle text-3xl"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/a-hasnat/" target="_blank" className="btn btn-ghost btn-circle text-3xl"><FaLinkedinIn /></a>
          </div>
          <p className='text-gray-300'>© 2023 A.Hasnat. All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
