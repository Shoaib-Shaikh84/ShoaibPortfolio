import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="Web designing is the process of planning, conceptualizing, and implementing the plan for designing a website in a way that is functional and offers a good user experience."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Mobile Application"
        subTitle="Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="Graphic Design"
        subTitle="Graphic designers create visual communications such as adverts, branding, publicity materials and magazine layouts."
      />
    </div>
  );
};

export default MyServices;
