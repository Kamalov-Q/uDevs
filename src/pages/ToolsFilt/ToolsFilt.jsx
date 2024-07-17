"use client";
import "./ToolsFilt.css";
import Image from "next/image";

// Tools Images Imported
import {
  src1,
  src2,
  src3,
  src4,
  src5,
  src6,
  src7,
  src8,
  src9,
  src10,
  src11,
  src12,
  src13,
  src14,
  src15,
  src16,
  src17,
  src18,
  src19,
  src20,
  src21,
  src22,
  src23,
  src24,
  src25,
  src26,
  src27,
  src28,
  src29,
  src30,
  src31,
  src32,
  src33,
  src34,
  src35,
  src36,
  src37,
  src38,
  src39,
  src40,
  src41,
  src42,
  src43,
  src44,
  src45,
  src46,
  src47,
  src48,
} from "./ToolsImages";
const ToolsFilt = () => {
  const changeColor = (bg, classN) => {
    let tools = document.querySelectorAll(classN);
    tools = Array.from(tools);
    tools?.map((front) => (front.style.background = bg));
  };

  const shortChangeColor = (type) => {
    const toolTypes = [
      "frontend",
      "backend",
      "devops",
      "testing",
      "uI",
      "infrastructure",
      "mobile",
    ];
    toolTypes.forEach((toolType) => {
      changeColor(toolType === type ? "#a8bfff" : "#dbe5ff", `.${toolType}`);
    });
  };

  const filter = (e, type) => {
    shortChangeColor(type);
  };

  return (
    <div className="container Tools" id="tools">
      <div className="row">
        <h1 className="title">Tools</h1>
      </div>
      <div className="row toolsContainerRow">
        <div className="toolsContainer">
          {[
            "frontend",
            "backend",
            "devops",
            "testing",
            "uI",
            "infrastructure",
            "mobile",
          ].map((type, index) => (
            <div key={index} className="filterTools">
              <input
                type="radio"
                name="tool"
                id={type}
                value={type}
                onChange={(e) => filter(e, type)}
              />
              <label htmlFor={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="row toolsMainRow">
        {[
          { src: src1, type: "devops", name: "Prometheus" },
          { src: src2, type: "devops", name: "Loki" },
          { src: src3, type: "devops", name: "Bitbucket" },
          { src: src4, type: "devops", name: "GitLab" },
          { src: src5, type: "mobile", name: "Kotlin" },
          { src: src6, type: "mobile", name: "Android" },
          { src: src7, type: "mobile", name: "Java" },
          { src: src8, type: "infrastructure", name: "Azure" },
          { src: src9, type: "infrastructure", name: "GCP" },
          { src: src10, type: "infrastructure", name: "DigitalOcean" },
          { src: src11, type: "infrastructure", name: "AWS" },
          { src: src12, type: "infrastructure", name: "Kubernetes" },
          { src: src13, type: "devops", name: "ELK" },
          { src: src14, type: "devops", name: "Grafana" },
          { src: src15, type: "devops", name: "Terraform" },
          { src: src16, type: "mobile", name: "iOS" },
          { src: src17, type: "mobile", name: "Swift" },
          { src: src18, type: "mobile", name: "Flutter" },
          { src: src19, type: "frontend", name: "Next.js" },
          { src: src20, type: "frontend", name: "React.js" },
          { src: src21, type: "frontend", name: "JavaScript" },
          { src: src22, type: "uI", name: "Balsamiq" },
          { src: src23, type: "uI", name: "InVision" },
          { src: src24, type: "uI", name: "Figma" },
          { src: src25, type: "devops", name: "Docker" },
          { src: src26, type: "backend", name: "PostgreSQL" },
          { src: src27, type: "backend", name: "Python" },
          { src: src28, type: "backend", name: "Node.js" },
          { src: src29, type: "backend", name: "PHP" },
          { src: src30, type: "backend", name: "Go" },
          { src: src31, type: "frontend", name: "Ant Design" },
          { src: src32, type: "frontend", name: "Gatsby.js" },
          { src: src33, type: "frontend", name: "Vue.js" },
          { src: src34, type: "uI", name: "Principle" },
          { src: src35, type: "uI", name: "Sketch" },
          { src: src36, type: "uI", name: "Adobe Suite" },
          { src: src37, type: "testing", name: "YouTrack" },
          { src: src38, type: "testing", name: "Appium" },
          { src: src39, type: "testing", name: "Cypress" },
          { src: src40, type: "testing", name: "Jmeter" },
          { src: src41, type: "backend", name: "MongoDB" },
          { src: src42, type: "backend", name: "Cassandra" },
          { src: src43, type: "frontend", name: "SASS" },
          { src: src44, type: "frontend", name: "Material UI" },
          { src: src45, type: "uI", name: "Zeplin" },
          { src: src46, type: "uI", name: "Illustrator" },
          { src: src47, type: "uI", name: "Lottie" },
          { src: src48, type: "uI", name: "Photoshop" },
        ].map((tool, index) => (
          <div key={index} className={`col ToolsCol ${tool.type}`}>
            <Image src={tool.src} alt={tool.name} className="ToolsColImg" />
            <div className="ToolsColInfo">{tool.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsFilt;
