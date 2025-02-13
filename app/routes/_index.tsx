import type { MetaFunction } from "@remix-run/node";
export const meta: MetaFunction = () => {
  return [
    { title: "Danjo" },
    { name: "Personal Page", content: "A description of Dana's journey and work." },
  ];
};

export default function Index() {
 return (
<>
    <div className="homepage-container">
        <img className="background-image" src="../../public/windows9999.jpeg" alt="background"/>
            <div className="works">
                <button>
                    <img className="folder-icon" src="../../public/folder.png" alt="projects"/>
                    <span style={{color: "white", fontSize: ".5em"}}> PROJECTS </span>
                </button>
        </div>
            <div className="resume">
                    <button>
                        <img className="resume-icon" src="../../public/file.png" alt="resume"/>
                        <span style={{color: "white", fontSize: ".5em"}}> RESUME </span>
                    </button>

            </div>
        <div className="dock">

        </div>
        <div className={"dock-items"}>
            <button className="github-button dock-button">
                <img src="../../public/github-mark.svg" alt="background"/>
            </button>
            <button className="linkedin-button dock-button">
                <img src="../../public/linkedin.png" alt="background"/>
            </button>
            <button className="linkedin-button dock-button">
                <img src="../../public/gmail.png" alt="background"/>
            </button>
            <button className="linkedin-button dock-button">
                <img src="../../public/player.png" alt="background"/>
            </button>
        </div>


    </div>


</>

 )
}
