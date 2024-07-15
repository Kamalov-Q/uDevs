import "./Team.css";
import teamImg from '@/../../public/Team/team1.svg'
import Image from "next/image";

const Team = () => {
  return (
    <div className="container Team" id="command">
      <div className="row">
        <h1 className="title">Team</h1>
      </div>
      <div className="row TeamRow">
        <div className="col-lg-6 TeamCol">
            <p className="TeamColInfo">For each project, we form a team that includes a project manager, business analyst, UI / UX designer, DevOps, QA engineer, backend and front-end developers.</p>
            <div className="countUp">100+</div>
            <p className="TeamColPar">Dedicated Team</p>
        </div>
        <div className="col-lg-6 TeamCol" data-aos="zoom-in">
            <Image src={teamImg} alt=""  className="TeamImg"/>
        </div>
      </div>
    </div>
  );
};

export default Team;
