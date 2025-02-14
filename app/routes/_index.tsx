import type { MetaFunction } from "@remix-run/node";
import {Form} from "@remix-run/react";
import {useState} from "react";
import {Modal} from "antd";

export const meta: MetaFunction = () => {
  return [
    { title: "Danjo" },
    { name: "Personal Page", content: "A description of Dana's journey and work." },
  ];
};

export default function Index() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

 return (
<>
    <div className="homepage-container">
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


        <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form className="email-form" method="POST">
            <input className="email-field email-from" type="email" placeholder="Email" required/>
            <input className="email-field email-subject" type="subject" placeholder="subject" required/>
            <textarea className="email-field email-from" placeholder={"Message"}></textarea>
            </Form>
        </Modal>


        <div className={"dock-items"}>
        <a href="https://github.com/danj-jo" className="github-button dock-button">
                <img src="../../public/github-mark-white.svg" alt="background"/>
            </a>
            <a href="https://www.linkedin.com/in/danj-jo/" className="linkedin-button dock-button">
                <img src="../../public/linkedin.png" alt="background"/>
            </a>
            <button className="gmail-button dock-button" onClick={showModal}>
                <img src="../../public/gmail.png" alt="background"/>
            </button>
            <button className="music-button dock-button">
                <img src="../../public/player.png" alt="background"/>
            </button>
        </div>


    </div>

</>

 )
}
