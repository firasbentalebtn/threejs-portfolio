import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import {SectionWrapper} from '../hoc'
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
const ServiceCard = ({index,title,icon}) =>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card" variants={fadeIn("right","spring",0.5* index,0.74)}>
        <div options={{
          max:45,
          scale:1,
          speed:450
        }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
      </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p className="mt-4 text-secondary text-[17px] leading-[30px] max-w-3xl" variants={fadeIn("", "", 0.1, 1)}>
        As a front-end web developer, I specialize in building responsive and
        dynamic user interfaces using the latest web technologies. With a keen
        eye for design and a passion for clean and efficient code, I am
        dedicated to creating engaging and intuitive web experiences that
        delight users and drive business success. Whether working independently
        or as part of a team, I am committed to delivering high-quality
        solutions that exceed client expectations and contribute to the
        advancement of the web development industry.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((services,index) =>(
          <ServiceCard key={services.title} index={index}{...services}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About,"about") ;
