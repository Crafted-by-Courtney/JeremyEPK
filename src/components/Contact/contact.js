import React, { useRef } from "react";
import "./contact.css";
import instgramIcon from "../images/instagramIcon.png";
import facebookIcon from "../images/facebookIcon.png";
import youtubeIcon from "../images/youtubeIcon.png";
import twitterIcon from "../images/twitterIcon.png";
import tiktokIcon from "../images/tiktokIcon.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lh27fpm",
        "template_iuq59pr",
        form.current,
        "csm-0oOdcXJR0KpqV"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Have a project in mind? Let's talk!
          <br />
          Please fill out the form below to discuss work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a href="https://www.instagram.com/jseatonmusic?igsh=NW1jYnk1MGJrdnJy&utm_source=qr">
              <img src={instgramIcon} alt="Instagram" className="link" />
            </a>
            <a href="https://www.facebook.com/jeremy.seaton.3?mibextid=LQQJ4d">
              <img src={facebookIcon} alt="Facebook" className="link" />
            </a>
            <a href="https://music.youtube.com/channel/UC4EOyfCIvIxyvHje38W2VpA?si=XmxbcwSWCkodxb2M">
              <img src={youtubeIcon} alt="YouTube" className="link" />
            </a>
            <a href="https://x.com/jseezie1205?s=21&t=uts0GLB8jZLP2XfFVud_vw">
              <img src={twitterIcon} alt="Twitter" className="link" />
            </a>
            <a href="https://www.tiktok.com/@jeremyseaton913?_r=1&_d=dm4dij3da28lb7&sec_uid=MS4wLjABAAAA-wwMVETyAVUgyd_7MUcJEgC9I7wGWQeQcdj570bwBe00TOTDuhQ-zr9oIEgSVLBC&share_author_id=6676212213680194565&sharer_language=en&source=h5_m&u_code=d5ejm4242hk302&ug_btm=b8727,b0&social_share_type=4&utm_source=copy&sec_user_id=MS4wLjABAAAA-wwMVETyAVUgyd_7MUcJEgC9I7wGWQeQcdj570bwBe00TOTDuhQ-zr9oIEgSVLBC&tt_from=copy&utm_medium=ios&utm_campaign=client_share&enable_checksum=1&user_id=6676212213680194565&share_link_id=066DAF79-C308-44EF-9E10-84CED6FE8B1D&share_app_id=1233">
              <img src={tiktokIcon} alt="TikTok" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
