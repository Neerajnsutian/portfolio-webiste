import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Comfy Store",
    img: "https://plus.unsplash.com/premium_photo-1683798464819-d1376249293e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Comfy Store is a cutting-edge e-commerce project built using JavaScript, React, React Router 6.4+, React Query, Redux Toolkit, and Axios for shopping furniture in one Go. Discover the perfect blend of style and comfort at our online furniture store. Designed with elegance and functionality in mind, our website offers a curated collection of premium furniture pieces to enhance every corner of your home.",
    project: "https://comfy-store-netlify.netlify.app/",
  },
  {
    id: 2,
    title: "Mix Master",
    img: "https://plus.unsplash.com/premium_photo-1671647122910-3fa8ab4990cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ja3RhaWx8ZW58MHx8MHx8fDA%3D",
    desc: "MixMaster the ultimate party sidekick app built using React Router 6.4+, React Query that fetches cocktails from the hilarious Cocktails DB API. With a flick of your finger . Our Website unlock a treasure trove of enchanting drink recipes that'll make your taste buds dance and your friends jump with joy. Get ready to shake up your mixology game, one fantastical mocktail at a time, and let the laughter and giggles flow!",
    project: "https://mix-master-app-netlify.netlify.app/",
  },
  {
    id: 3,
    title: "Forkify",
    img: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    desc: "A web application that helps you search for recipes and save them . Implemented Fetching data and Sending data back to API asynchronously using HTML , CSS and JAVASCRIPT . Discover new and exciting recipes categorized by cuisine, dietary preferences, ingredients, and more, tailored to your taste.",
    project: "https://recipe-fetching-app-netlify.netlify.app/",
  },
  {
    id: 4,
    title: "Mapty",
    img: "https://images.unsplash.com/photo-1480179087180-d9f0ec044897?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJ1bm5pbmd8ZW58MHx8MHx8fDA%3D",
    desc: "Mapty is a web application that allows you to track and record your workouts using an interactive map . The app uses Geolocation API , and various external Libraries for fectching data and presenting results . Track your distance , duration , Cadence , type of activity in real-time for Access your data anytime, anywhere, across desktop and mobile devices for seamless integration into your fitness routine .",
    project: "https://exercise-tracking-app-mapty.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.project} target="_blank">
                See Demo
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
