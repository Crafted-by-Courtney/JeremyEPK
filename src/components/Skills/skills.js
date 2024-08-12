import React from "react";
import "./skills.css";
import jeremy2 from "../images/jeremy2.jpeg";
import jeremy3 from "../images/jeremy3.jpeg";
import jeremy4 from "../images/jeremy4.jpeg";
import jeremy5 from "../images/jeremy5.jpg";
import { Link } from "react-scroll";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">
        As a master of the keys, I translate notes on a page into dynamic
        soundscapes that resonate with audiences. I often collaborate with other
        musicians, providing the harmonic foundation and melodic embellishments
        that enhance the overall musical experience.
      </span>

      <div className="skillBars">
        <div className="skillBar">
          <img src={jeremy5} alt="jeremy5" className="skillBarImg" />
          <div className="skillBarText">
            <h2>From the Beginning</h2>
            <p>
              Starting my musical education with classical piano lessons at age
              eight, Seaton won numerous musical awards during his childhood,
              including receiving superior ratings at solo and ensemble
              festivals. I was inspired early on by the greats in his parents’
              record collection, from Miles Davis to Stevie Wonder, and later,
              via listening to WJZZ 105.9 (one of the first U.S. stations to
              adopt the smooth jazz format), I became a fan of and inspired by
              the likes of Fourplay and Alex Bugnon.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={jeremy2} alt="jeremy2" className="skillBarImg" />
          <div className="skillBarText">
            <h2>The Artist</h2>
            <p>
              A pianist/keyboardist bringing music to life, blending technical
              precision with artistic expression to create captivating
              performances. They interpret compositions, infusing each piece
              with their unique style and emotion, whether in a classical
              concert, a jazz improvisation, or a pop performance.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={jeremy3} alt="jeremy3" className="skillBarImg" />
          <div className="skillBarText">
            <h2>The Musician</h2>
            <p>
              As a versatile musician, with a focus on jazz, I navigate a wide
              range of genres and styles, adapting my skills to different
              musical settings. From accompanying vocalists to leading a band, I
              play a crucial role in shaping the sound and feel of a
              performance, adding depth and texture through their keyboard work.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={jeremy4} alt="jeremy4" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Notable Performances</h2>
            <p>
              <ul>
                <li>Jazz on the River - Redford, MI</li>
                <li>The Limit Cocktail Lounge Jazz & Jam - Detroit, MI</li>
                <li>Firewater - Detroit, MI</li>
                <li>Chicago Blues Jazz and Blues night - Detroit, MI</li>
                <li>NAACP Grand Rapids Chapter at GVSU - Allendale, MI</li>
                <li>Fox 2 News Morning Show - Southfield, MI</li>
                <li>The Rhythm Universe Mother’s Day Jam - Detroit, MI</li>
                <li>Corvette Club Gala - Toledo, OH</li>
                <li>Subzero Intimate Affair - Atlanta, GA</li>
                <li>
                  MGM Grand Ballroom, Susan Sheridan Awards Ceremony DTE Energy
                  - Detroit, MI
                </li>
                <li>
                  Ritz Carlton T.H.A.W. Foundation Fundraiser - Dearborn, MI
                </li>
                <li>
                  Genettis Hole in the Wall Dinner Theatre Couture for a Cure
                  Fashion Show - Northville, MI
                </li>
                <li>
                  Corona Ranch, Laveen Village (Phoenix), opened for and played
                  behind Ronnie Laws
                </li>
                <li>
                  2019 Memorial Day Jazz Festival in Leimert Park, Los Angeles
                </li>
                <li>Opened for Samara Cyn at Arizona Stadium, Tucson, AZ</li>
                <li>
                  Opened for Teddy Swims, Coca Cola Sun Deck, Sun Devil Football
                  Stadium, Tempe, AZ
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
