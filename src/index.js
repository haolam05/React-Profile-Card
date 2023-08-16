import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function Avatar(props) {
  return <img className="avatar" src={props.path} alt={props.name} />;
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.introduction}</p>
    </div>
  );
}

function SkillList(props) {
  const skills = props.skills.map((info, idx) => (
    <Skill
      key={idx}
      skill={info.skill}
      backgroundColor={info.color}
      emoji={info.emoji}
    />
  ));
  return <ul className="skill-list">{skills}</ul>;
}

function Skill(props) {
  return (
    <li className="skill" style={{ backgroundColor: props.backgroundColor }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </li>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar path="Profile.png" name="Profile Picture" />
      <div className="data">
        <Intro
          name="Hao Tuong Lam"
          introduction="Full-stack web developer and Embedded engineer. When I am free, I like to working out, reading, playing billiards and hanging out with my brothers."
        />
        <SkillList
          skills={[
            { skill: "HTML", color: "red", emoji: "💪" },
            { skill: "CSS", color: "yellow", emoji: "🫵" },
            { skill: "JS", color: "burlywood", emoji: "🫰" },
            { skill: "Node", color: "pink", emoji: "👌" },
            { skill: "Express", color: "coral", emoji: "🤛" },
            { skill: "React", color: "orange", emoji: "✌️" },
            { skill: "Ruby", color: "lightblue", emoji: "🫴" },
            { skill: "Computer Architechture", color: "cyan", emoji: "👋" },
            {
              skill: "Assembly (x86-64, RISC-V)",
              color: "chocolate",
              emoji: "🙌",
            },
            { skill: "C/C++", color: "darkkhaki", emoji: "🙏" },
            { skill: "IoT", color: "cornflowerblue", emoji: "👐" },
            { skill: "FPGA", color: "violet", emoji: "🫶" },
            { skill: "Trilingual", color: "aquamarine", emoji: "🤲" },
          ]}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
