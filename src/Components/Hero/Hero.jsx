import React from 'react';
import "./Hero.css";
import new_hero_image from "../../assets/new_hero_image.png"; // Import the new hero image
import hero_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import Header from '../Header/Header';
import { Link } from "react-scroll";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id='home'>
      <div className="blur hero-blur"></div>

      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best">
          <motion.div
            initial={{ left: mobile ? "178px" : '238px' }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>Track your fitness</span>
        </div>
        {/* Hero text */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Achieve </span>
            <span>Your</span>
          </div>
          <div>
            <span>Best Self</span>
          </div>
          <div>
            <span>
              In here we will help you to achieve your best self and
              track your fitness
            </span>
          </div>
        </div>

        {/* experience figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay={4} preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={878} delay={4} preFix="+" />
            </span>
            <span>Members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} delay={2} preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-btns">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-h">
        <Link className="btn"
          to="contact"
          spy={true}
          smooth={true}
        >
          Join now
        </Link>

        {/* heart rate */}
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="Heart rate icon" />
          <span>Heart Rate</span>
          <span>112 bpm</span>
        </motion.div>

        {/* hero images */}
        <img className="hero-img" src={new_hero_image} alt="Hero" /> {/* Use the new hero image */}
        <motion.img
          initial={{ right: mobile ? "11rem" : '11rem' }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          className="hero-back"
          src={hero_back}
          alt="Hero background"
        />

        {/* calories */}
        <motion.div
          initial={{ right: "32rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={calories} alt="Calories burned icon" />
          <div>
            <span>Calories burned</span>
            <span>230 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
