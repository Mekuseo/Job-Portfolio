import React from "react";
import Title from "../layouts/Title";
import {
  spaceTravellersHub,
  calculator,
  bookStore,
  projectTwo,
  projectThree,
} from "../../assets/index";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={spaceTravellersHub}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="Book Store App"
          des="The Book Store App is a user-friendly mobile application designed for avid readers to discover, 
          purchase and read their favorite books on the go"
          src={bookStore}
          github={
            <a
              href="https://github.com/Mekuseo/bookstore-app"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          }
          website={
            <a
              href="https://bookstore-app-eyyy.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGlobe />
            </a>
          }
        />
        <ProjectsCard
          title="Calculator App"
          des="Check out an app I build using React, Js, Css, and Html.
Math Magicians is an educational app designed to help children develop their math skills in a fun and interactive way"
          src={calculator}
          github={
            <a
              href="https://github.com/Mekuseo/Math-Magicians-App"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          }
          website={
            <a
              href="https://math-magicians-app-we8z.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGlobe />
            </a>
          }
        />
        <ProjectsCard
          title="Space Traveller's Hub"
          des="The Space Traveller's Hub project is a web application that helps space enthusiasts book rocket 
          launches and participate in space missions."
          src={spaceTravellersHub}
          github={
            <a
              href="https://github.com/Mekuseo/Space-Travellers-Hub"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          }
          website={
            <a
              href="https://space-x-vv8h.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGlobe />
            </a>
          }
        />
      </div>
    </section>
  );
};

export default Projects;
