import React from "react";
import "./works.css";
import exoticNights from "../images/exoticNights.png";
import firstTime from "../images/firstTime.png";
import appleMusicIcon from "../images/appleMusicIcon.png";
import youtubeMusicIcon from "../images/youtubeMusicIcon.png";
import spotifyIcon from "../images/spotifyIcon.png";
import amazonMusicIcon from "../images/amazonMusicIcon.png";
import tidalIcon from "../images/tidalIcon.png";
import pandoraIcon from "../images/pandoraIcon.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Music</h2>
      <span className="worksDesc">
        Welcome to the sonic realm of{" "}
        <span className="introName">
          <span>Jeremy</span>
        </span>
        , where music transcends boundaries and emotions find their melody. — a
        diverse collection of soulful melodies, powerful instuments, and
        innovative compositions that paint a vibrant picture of artistic
        expression. Explore the melodies that define moments and narratives that
        resonate, as Jeremy invites you on a captivating auditory experience
        through this portfolio.
      </span>
      <div className="worksImgs">
        <a href="https://music.apple.com/us/album/exotic-nights-feat-david-marq-john-barnhill-iv-single/1644255711">
          <img src={exoticNights} alt="" className="worksImg" />
        </a>
        <a href="https://open.spotify.com/artist/7r8WVl50lxXxYJh6PcRcFi?si=Yy_Xx-uqRXWb0HOSgFAqTQ">
          <img src={firstTime} alt="" className="worksImg" />
        </a>
      </div>
      <h2 className="streamingPlatforms">Listen Now</h2>
      <div className="links" role="navigation">
        <a
          href="https://music.apple.com/us/artist/jeremy-seaton/1610885784"
          aria-label="Apple Music"
        >
          <img src={appleMusicIcon} alt="Apple Music" className="link" />
        </a>
        <a
          href="https://music.youtube.com/channel/UC4EOyfCIvIxyvHje38W2VpA?si=XmxbcwSWCkodxb2M"
          aria-label="YouTube Music"
        >
          <img src={youtubeMusicIcon} alt="YouTube Music" className="link" />
        </a>
        <a
          href="https://open.spotify.com/artist/7r8WVl50lxXxYJh6PcRcFi?si=Yy_Xx-uqRXWb0HOSgFAqTQ"
          aria-label="Spotify"
        >
          <img src={spotifyIcon} alt="Spotify" className="link" />
        </a>
        <a
          href="https://music.amazon.com/artists/B084128YWK?ref=dm_sh_S5cpT5QUDY2HCF3rqWRdBmOfg"
          aria-label="Amazon Music"
        >
          <img src={amazonMusicIcon} alt="Amazon Music" className="link" />
        </a>
        <a href="https://tidal.com/artist/24312148?u" aria-label="Tidal">
          <img src={tidalIcon} alt="Tidal" className="link" />
        </a>
        <a href="https://pandora.app.link/DWoz9tTEqLb" aria-label="Pandora">
          <img src={pandoraIcon} alt="Pandora" className="link" />
        </a>
      </div>
    </section>
  );
};

export default Works;
