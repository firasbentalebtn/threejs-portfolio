import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const handleChange = (e) => {
    const {name,value} = e.target;
    setForm({...form,[name]:value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_hbxnizv','template_kwvkfin',{
      from_name:form.name,
      to_name:'Firas',
      from_email:form.email,
      to_email:'bentaleb.firas.dev@gmail.com',
      message:form.message,

    },'aRlEtrct_5dus23LT'
    )
    .then(()=>{
      setLoading(false)
      alert('I have Received your request and i will get back to you as soon as possible !')
      setForm({
        name:'',
        email:'',
        message:''
      })
    },(error)=>{
      setLoading(false)
      console.log('error occured')
      alert('something went wrong')
    })
  };

  const [Loading, setLoading] = useState(false);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  return (
    <div className="xl:mt-10 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl 	"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <h4  className="text-white font-medium text-[1.4rem] "> Firasbentaleb@hotmail.com</h4>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-10"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="10"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="py-3 px-8 bg-tertiary outline-none w-fit text-white font-bold shadow-md rounded-xl shadow-primary"
          >
            {Loading ? "sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    
    
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
