"use client";
import "./ToolsFilt.css";
import Image from "next/image";
import src1 from '@/../../public/Tools/1.svg'
import src2 from '@/../../public/Tools/2.svg'
import src3 from '@/../../public/Tools/3.svg'
import src4 from '@/../../public/Tools/4.svg'
import src5 from '@/../../public/Tools/5.svg'
import src6 from '@/../../public/Tools/6.svg'
import src7 from '@/../../public/Tools/7.svg'
import src8 from '@/../../public/Tools/8.svg'
import src9 from '@/../../public/Tools/9.svg'
import src10 from '@/../../public/Tools/10.svg'
import src11 from '@/../../public/Tools/11.svg'
import src12 from '@/../../public/Tools/12.svg'
import src13 from '@/../../public/Tools/13.svg'
import src14 from '@/../../public/Tools/14.svg'
import src15 from '@/../../public/Tools/15.svg'
import src16 from '@/../../public/Tools/16.svg'
import src17 from '@/../../public/Tools/17.svg'
import src18 from '@/../../public/Tools/18.svg'
import src19 from '@/../../public/Tools/19.svg'
import src20 from '@/../../public/Tools/20.svg'
import src21 from '@/../../public/Tools/21.svg'
import src22 from '@/../../public/Tools/22.svg'
import src23 from '@/../../public/Tools/23.svg'
import src24 from '@/../../public/Tools/24.svg'
import src25 from '@/../../public/Tools/25.svg'
import src26 from '@/../../public/Tools/26.svg'
import src27 from '@/../../public/Tools/27.svg'
import src28 from '@/../../public/Tools/28.svg'
import src29 from '@/../../public/Tools/29.svg'
import src30 from '@/../../public/Tools/30.svg'
import src31 from '@/../../public/Tools/31.svg'
import src32 from '@/../../public/Tools/32.png'
import src33 from '@/../../public/Tools/33.svg'
import src34 from '@/../../public/Tools/34.svg'
import src35 from '@/../../public/Tools/35.svg'
import src36 from '@/../../public/Tools/36.svg'
import src37 from '@/../../public/Tools/37.svg'
import src38 from '@/../../public/Tools/38.svg'
import src39 from '@/../../public/Tools/39.svg'
import src40 from '@/../../public/Tools/40.svg'
import src41 from '@/../../public/Tools/41.svg'
import src42 from '@/../../public/Tools/42.svg'
import src43 from '@/../../public/Tools/43.svg'
import src44 from '@/../../public/Tools/44.svg'
import src45 from '@/../../public/Tools/45.svg'
import src46 from '@/../../public/Tools/46.svg'
import src47 from '@/../../public/Tools/47.svg'
import src48 from '@/../../public/Tools/48.svg'

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
