import React from "react";
import "./footer.scss";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <main>
        <a href="#home">
          <AiOutlineArrowUp />
        </a>
        <p className="text-sm text-gray-600">
          &copy; Copyright 2023. All Rights Reserved by Sameer.
        </p>
      </main>

      <div>
        <img
          src={
            "https://avatars.githubusercontent.com/u/175853243?s=400&u=3d5145e547cce62412649564b2639b424d68d99a&v=4"
          }
          alt="Founder"
        />

        <h2>Mohd Sameer</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/mohd-sameer-2074a5231" target={"blank"}>
            <AiFillLinkedin style={{ backgroundColor: "blue" }} />
          </a>
          <a href="https://www.instagram.com/mr_sam.eer_?igsh=OWprbDc3bGx6aGdu" target={"blank"}>
            <AiFillInstagram
              style={{
                backgroundColor: "#fa058c",
                height: "32px",
                marginLeft: "5px",
                marginRight: "5px",
              }}
            />
          </a>
          <a href="https://github.com/Sameer-ts-tech" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
    </footer>
  );
};

export default Footer;
