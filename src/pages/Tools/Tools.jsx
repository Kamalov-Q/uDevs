"use client";
import { useEffect, useState } from "react";
import "./Tools.css";

//Tools Images Imported
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
} from "./tools";

import Image from "next/image";

const Tools = () => {

  const changeColor = (bg, classN) => {
    let tools = document.querySelectorAll(classN);
    tools = Array.from(tools);
    tools?.map((front) => (
      front.style.background = bg
    ));
  };

  const shortChangeColor = (type) => {
    const toolTypes = ["frontend", "backend", "devops", "testing", "ui", "infras", "mobile"];
    toolTypes.forEach(toolType => {
      changeColor(toolType === type ? "#a8bfff" : "#dbe5ff", `.${toolType}`);
    });
  };

  const filter = (e, type) => {
    shortChangeColor(type);
  };

  return (
    <div className="container Tools">
      <div className="row">
        <h1 className="title">Tools</h1>
      </div>
      <div className="row">
        <div className="toolsContainer">
          <div>
            <input
              type="radio"
              name="tool"
              id="frontends"
              value="frontend"
              onChange={(e) => filter(e, "frontend")}
            />
            <label htmlFor="frontends">Frontend</label>
          </div>
          <div>
            <input
              type="radio"
              name="tool"
              id="backend"
              value="backend"
              onChange={(e) => filter(e, "backend")}
            />
            <label htmlFor="backend">Backend</label>
          </div>
          <div>
            <input
              type="radio"
              name="tool"
              id="devopss"
              value="devops"
              onChange={(e) => filter(e, "devops")}
            />
            <label htmlFor="devopss">DevOps</label>
          </div>
          <div>
            <input
              type="radio"
              name="tool"
              id="testings"
              value="testing"
              onChange={(e) => filter(e, "testing")}
            />
            <label htmlFor="testings">Testing</label>
          </div>
          <div>
            <input
              type="radio"
              name="tool"
              id="uis"
              value="ui"
              onChange={(e) => filter(e, "ui")}
            />
            <label htmlFor="uis">UI/UX</label>
          </div>
          <div>
            <input
              type="radio"
              name="tool"
              id="infra"
              value="infras"
              onChange={(e) => filter(e, "infras")}
            />
            <label htmlFor="infra">Infratructure</label>
          </div>
          <div>
            <input
              type="radio"
              name="tool"
              id="mobile"
              value="mobiles"
              onChange={(e) => filter(e, "mobile")}
            />
            <label htmlFor="mobile">Mobile</label>
          </div>
        </div>
      </div>
      <div className="row toolsMainRow">
        <div className="col ToolsCol devops">
          <Image src={src1} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo ">Promotheus</div>
        </div>
        <div className="col ToolsCol devops">
          <Image src={src2} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo ">Loki</div>
        </div>
        <div className="col ToolsCol devops">
          <Image src={src3} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo ">Bitbucket</div>
        </div>
        <div className="col ToolsCol devops">
          <Image src={src4} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo ">GitLab</div>
        </div>
        <div className="col ToolsCol mobile">
          <Image src={src5} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Kotlin</div>
        </div>
        <div className="col ToolsCol mobile">
          <Image src={src6} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Android</div>
        </div>
        <div className="col ToolsCol mobile">
          <Image src={src7} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Java</div>
        </div>
        <div className="col ToolsCol infras">
          <Image src={src8} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Azure</div>
        </div>
        <div className="col ToolsCol infras">
          <Image src={src9} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">GCP</div>
        </div>
        <div className="col ToolsCol infras">
          <Image src={src10} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">DigitalOcean</div>
        </div>
        <div className="col ToolsCol infras">
          <Image src={src11} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">AWS</div>
        </div>
        <div className="col ToolsCol infras">
          <Image src={src12} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Kubernetes</div>
        </div>
        <div className="col ToolsCol devops">
          <Image src={src13} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">ELK</div>
        </div>
        <div className="col ToolsCol devops">
          <Image src={src14} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Grafana</div>
        </div>
        <div className="col ToolsCol devops">
          <Image src={src15} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Terraform</div>
        </div>
        <div className="col ToolsCol mobile">
          <Image src={src16} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">IOS</div>
        </div>
        <div className="col ToolsCol mobile">
          <Image src={src17} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Swift</div>
        </div>
        <div className="col ToolsCol mobile">
          <Image src={src18} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Flutter</div>
        </div>
        <div className="col ToolsCol frontend">
          <Image src={src19} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Next Js</div>
        </div>
        <div className="col ToolsCol frontend">
          <Image src={src20} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">React Js</div>
        </div>
        <div className="col ToolsCol frontend">
          <Image src={src21} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">JavaScript</div>
        </div>
        <div className="col ToolsCol ui">
          <Image src={src22} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Balsamic</div>
        </div>
        <div className="col ToolsCol ui">
          <Image src={src23} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Invision</div>
        </div>
        <div className="col ToolsCol ui">
          <Image src={src24} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Figma</div>
        </div>
        <div className="col ToolsCol devops">
          <Image src={src25} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Docker</div>
        </div>
        <div className="col ToolsCol backend">
          <Image src={src26} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo ">PostgreSQL</div>
        </div>
        <div className="col ToolsCol backend">
          <Image src={src27} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo ">Python</div>
        </div>
        <div className="col ToolsCol backend">
          <Image src={src28} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo ">Node Js</div>
        </div>
        <div className="col ToolsCol backend">
          <Image src={src29} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo ">PHP</div>
        </div>
        <div className="col ToolsCol backend">
          <Image src={src30} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo ">GO</div>
        </div>
        <div className="col ToolsCol frontend">
          <Image src={src31} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Ant Design</div>
        </div>
        <div className="col ToolsCol frontend">
          <Image src={src32} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Gatsby Js</div>
        </div>
        <div className="col ToolsCol frontend">
          <Image src={src33} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Vue Js</div>
        </div>
        <div className="col ToolsCol ui">
          <Image src={src34} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Principle</div>
        </div>
        <div className="col ToolsCol ui">
          <Image src={src35} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Sketch</div>
        </div>
        <div className="col ToolsCol ui">
          <Image src={src36} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Adobe Suite</div>
        </div>
        <div className="col ToolsCol testing">
          <Image src={src37} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">YouTrack</div>
        </div>
        <div className="col ToolsCol testing">
          <Image src={src38} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Appium</div>
        </div>
        <div className="col ToolsCol testing">
          <Image src={src39} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Cypress</div>
        </div>
        <div className="col ToolsCol testing">
          <Image src={src40} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Jmeter</div>
        </div>
        <div className="col ToolsCol backend">
          <Image src={src41} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">MongoDB</div>
        </div>
        <div className="col ToolsCol backend">
          <Image src={src42} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Cassandra</div>
        </div>
        <div className="col ToolsCol frontend">
          <Image src={src43} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">SASS</div>
        </div>
        <div className="col ToolsCol frontend">
          <Image src={src44} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Material UI</div>
        </div>
        <div className="col ToolsCol ui">
          <Image src={src45} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Zeplin</div>
        </div>
        <div className="col ToolsCol ui">
          <Image src={src46} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Illustrator</div>
        </div>
        <div className="col ToolsCol ui">
          <Image src={src47} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Lottie</div>
        </div>
        <div className="col ToolsCol ui">
          <Image src={src48} alt="" className="ToolsColImg" />
          <div className="ToolsColInfo">Photoshop</div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
