import {useEffect, useState} from "react";


export const Navbar = () => {
    const [hours, setHours] = useState("00:");
    const [minutes, setMinutes] = useState("00:");
    const [seconds, setSeconds] = useState("00");``
    useEffect(() => {
        const now = new Date();
        setHours(now.getHours().toString().padStart(2, "0"))
        setMinutes(now.getMinutes().toString().padStart(2, "0"))
       setSeconds(now.getSeconds().toString().padStart(2, "0"))

        setInterval(() => {
            setHours(now.getHours().toString().padStart(2, "0"))
            setMinutes(now.getMinutes().toString().padStart(2, "0"))
            setSeconds(now.getSeconds().toString().padStart(2, "0"))
        }, 1000)
    }, [seconds, minutes, hours,]);
    return (
        <>
            <div className="navbar-container"></div>
            <nav className="nav-list">
                <ul className="nav-left">
                    <li>
                        <button> Github</button>
                        <button> About</button>
                        <button> Contact</button>
                    </li>
                </ul>
                <p>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24"
                             style={{
                                 position: "relative",

                             }}
                             strokeWidth={1.5}
                             stroke="currentColor"
                             className="size-6">
                            <path strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"/>
                        </svg>
                </p>
                <p> {`${hours}:${minutes}:${seconds}`} </p>
            </nav>

        </>
    )
}
export default Navbar