import type { MetaFunction } from "@remix-run/node";
import Navbar from "../components/Navbar"
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
        <Navbar/>
        <div className="works">
            <figure>
                <button className="folder-icon">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24" fill="currentColor"
                         className="size-12">
                        <path
                            d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z"/>
                    </svg>
                </button>
            </figure>
            <figcaption>
                Works
            </figcaption>

            <figure>
                <button className="resume">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-12">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
                    </svg>
                </button>
            </figure>
            <figcaption> Resume</figcaption>
        </div>

    </div>

</>

 )
}
