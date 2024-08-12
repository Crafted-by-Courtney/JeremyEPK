import React from "react";
import "./intro.css";
import jeremyintronobg from "../images/jeremyintronobg.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <>
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm{" "}
            <span className="introName">
              <span>Jeremy</span>
              <br />
            </span>{" "}
            Jazz Pianist and Keyboardist
          </span>
          <p className="introPara">
            An eclectic music artist with a unique blend of talents that
            captivate audiences around the world. Hailing from Detroit, my
            journey in the music industry began at a young age, fueled by a
            passion for creativity and self-expression. My solo album, Hidden
            Treasures, is an soulful mix of styles featuring collaborations with
            talented musicians. I'm thrilled to finally showcase the full range
            of my musical abilities and connect with audiences on a deeper
            level. Thank you for joining me on this journey!
          </p>
          <Link>
            <button className="btn"> Hire Me </button>
          </Link>
        </div>
        <img src={jeremyintronobg} alt="Profile" className="bg" />
      </section>
    </>
  );
};

export default Intro;
