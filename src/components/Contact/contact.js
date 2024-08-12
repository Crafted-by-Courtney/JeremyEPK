import React, { useRef } from "react";
import "./contact.css";
import instgramIcon from "../images/instagramIcon.png";
import facebookIcon from "../images/facebookIcon.png";
import youtubeIcon from "../images/youtubeIcon.png";
import twitterIcon from "../images/twitterIcon.png";
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
            <a
              href="https://www.facebook.com/jeremy.seaton.3?mibextid=LQQJ4d
"
            >
              <img src={facebookIcon} alt="Facebook" className="link" />
            </a>
            <a href="https://music.youtube.com/channel/UC4EOyfCIvIxyvHje38W2VpA?si=XmxbcwSWCkodxb2M">
              <img src={youtubeIcon} alt="YouTube" className="link" />
            </a>
            <a href="https://x.com/jseezie1205?s=21&t=uts0GLB8jZLP2XfFVud_vw">
              <img src={twitterIcon} alt="Twitter" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
