import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="2019 - 2019"
          title="Web Developer"
          subTitle="NareshIT."
          des="NareshIT - Software Training Institute Hyderabad offers professional online & classroom trainings for the latest trending IT technologies like Software Testing, Data Science,!"
        />
        <ResumeCard
          badge="2019 - 2019"
          title="Front-end Developer"
          subTitle="NareshIT."
          des="NareshIT - Software Training Institute Hyderabad offers professional online & classroom trainings for the latest trending IT technologies like Software Testing, Data Science,!!"
        />
        {/* <ResumeCard
          badge="2009 - 2010"
          title="Senior Developer"
          subTitle="ReactBD.com."
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        /> */}
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2017 - 2019"
          title="A.I.E.T.P College"
          subTitle="SHRIRAMPUR"
          des="DIPLOMA IN COMPUTER SCIENCE!"
        />
        <ResumeCard
          badge="2020 - 2023"
          title="DY PATIL COLLEGE PUNE"
          subTitle="PUNE"
          des="BTECH IN COMPUTER SCIENCE!"
        />
        {/* <ResumeCard
          badge="2019 - 2020"
          title="WEB Developer"
          subTitle="HYDRABAD"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        /> */}
      </div>
    </div>
  );
};

export default Education;
