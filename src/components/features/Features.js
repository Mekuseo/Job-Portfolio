import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaReact, FaGit } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="FullStack Development"
          des="As a full-stack developer, I bring comprehensive expertise to the development process, building end-to-end solutions that are scalable, secure, and optimized for performance."
          icon={<FaReact />}
        />
        <Card
          title="App Development"
          des="I leverage cutting-edge technologies and design principles to create engaging, user-friendly applications that meet business objectives and drive user engagement."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des=" I use data-driven strategies to improve website visibility and search engine rankings, driving organic traffic and boosting overall online presence."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="I specialize in developing intuitive and high-performing mobile applications that elevate the user experience and drive business growth."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des=" I use a human-centered approach to design intuitive and engaging interfaces that meet user needs and business objectives, leveraging industry best practices and user research to drive successful outcomes."
          icon={<SiAntdesign />}
        />
        <Card
          title="Version Controls"
          des="I have extensive experience in version control, collaborative development, and project management, ensuring efficient and streamlined workflows for successful project outcomes."
          icon={<FaGit />}
        />
      </div>
    </section>
  );
};

export default Features;
