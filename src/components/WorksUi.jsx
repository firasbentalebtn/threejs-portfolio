import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import showcaseLinkIcon from "../assets/link.png"
import { SectionWrapper } from "../hoc";
import { projectsUi } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  behance_link
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl tex'
          />
          


          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(behance_link, "_blank")}
              className='black-gradient bg-white	 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <div
              onClick={() => window.open(showcase_link, "_blank")}
              className='bg-white w-10 ml-2 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={showcaseLinkIcon}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
           
            
          </div>
          
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};


const WorksUi = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My UI Design</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        > Discover my collection of UI design projects, tailored to the user's needs with clean aesthetics and intuitive functionality. From mobile apps to web interfaces, my designs prioritize seamless user experiences that elevate your digital presence.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projectsUi.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(WorksUi, "");
