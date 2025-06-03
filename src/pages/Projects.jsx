import { motion } from "framer-motion";
import LineGradient from "../Components/LineGradient";
import ProjectOne from "../assets/ProjectOne.png";
import ProectTwo from "../assets/ProjectTwo.png";
import projectThree from "../assets/projectThree.png";
import carbizAdmin from "../assets/carbiz-admin.png";
import carbizFrontend from "../assets/carbiz-frontend.png";

const Projects = () => {
  return (
    <section id="projects" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex flex-col justify-center items-center w-full"
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">PROJECTS</span>
          </p>
          <LineGradient width="w-1/3" />
          <div className="flex items-center justify-center  w-full mt-10 flex-wrap gap-10">
            <a
              className="hover:opacity-50 transition duration-500 hover:scale-110"
              href="https://carbiz-app-frontend.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border-red border rounded-lg overflow-clip">
                <img
                  src={carbizFrontend}
                  alt={carbizFrontend}
                  className="max-w-[400px]"
                />

                <div className="p-2">
                  <h3>Carbiz Frontend</h3>
                </div>
              </div>
            </a>
            <a
              className="hover:opacity-50 transition duration-500 hover:scale-110"
              href="https://carbiz-admin.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border-red border rounded-lg overflow-clip">
                <img
                  src={carbizAdmin}
                  alt={carbizAdmin}
                  className="max-w-[400px]"
                />

                <div className="p-2">
                  <h3>Carbiz Admin</h3>
                </div>
              </div>
            </a>
            <a
              className="hover:opacity-50 transition duration-500 hover:scale-110"
              href="https://image-gallery-awesome.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border-red border rounded-lg overflow-clip">
                <img
                  src={ProjectOne}
                  alt={ProjectOne}
                  className="max-w-[400px]"
                />

                <div className="p-2">
                  <h3>Image Gallery</h3>
                </div>
              </div>
            </a>

            <a
              className="hover:opacity-50 hover:scale-110 transition duration-500"
              href="https://movie-app.awesomedursky.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border-red border rounded-lg overflow-clip">
                <img
                  src={ProectTwo}
                  alt={ProectTwo}
                  className="max-w-[400px] h-2/4"
                />
                <div className="p-2">
                  <h3>Movie App</h3>
                </div>
              </div>
            </a>
            <a
              className="hover:opacity-50 hover:scale-110 transition duration-500"
              href="https://crwn-app-roan.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border-red border rounded-lg overflow-clip">
                <img
                  src={projectThree}
                  alt={projectThree}
                  className="max-w-[400px] h-2/4"
                />
                <div className="p-2">
                  <h3>Crwn App</h3>
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
