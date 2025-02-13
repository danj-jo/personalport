import {useEffect, useState} from "react";

export const Clock = () => {
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
    }, [seconds]);
    return (
        <div>
            <button>
                {`${hours}:${minutes}:${seconds}`}
            </button>
        </div>
    )
}