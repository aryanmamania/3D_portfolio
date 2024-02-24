import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text pb-20">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Aryan Mamania
        </span>{" "}
        👋
      </h1>

      <p className="text-slate-500 mb-2 leading-relaxed">
        Welcome to my about page, where I'm excited to share my journey in the
        world of technology. With a passion for learning and a drive for
        excellence, I've dedicated myself to mastering a diverse range of skills
        and acquiring certifications to stay at the forefront of this dynamic
        field. From programming languages like JavaScript, Python, and Java to
        frameworks and tools such as React, Node.js, and Docker, I've honed my
        expertise to deliver robust and innovative solutions. My commitment to
        continuous learning is evident in my collection of certifications, which
        include courses in web development, cloud computing, and cybersecurity.
      </p>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-20">
          {skills.map((skill) => (
            <div
              className="block-container w-44 h-44 flex flex-col items-center justify-center"
              key={skill.name}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex flex-col items-center justify-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/4 h-1/4 object-contain"
                />
                <div className="mt-2">{skill.name}</div>
                <div className="mt-1">{skill.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Certification Courses</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500"></div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.Issued_By}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.Issued_By}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    Course Offered By- {experience.Company}
                  </p>

                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    Certificate Issued By- {experience.Issued_By}
                  </p>
                  <p>
                    <a
                      href={experience.link}
                      className="text-blue-600 hover:underline"
                    >
                      View Certificate
                    </a>
                  </p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
