import { useRef, useState } from "react"

const Logic = () => {
    const [inpText, setInpText] = useState("")
    const [sliderInput,setSliderInput]= useState(5)
    const timerRef = useRef(null)

    const handleChange = (e) => {
        setInpText(e.target.value)
    }

    const submitHandler = async () => {
        if (!("Notification" in window)) {
            alert("This browser does not support notifications");
            return;
        }

        try {
            const permission = await Notification.requestPermission();
            
            switch (permission) {
                case "granted":

                    if (timerRef.current){
                        clearInterval(timerRef.current)
                    }
                    timerRef.current =setInterval(()=>{
                        new Notification("Mindfulness Alert", {
                        body: inpText || "Your notifications are now active",
                        }
                    )
                    },9000)
                    break;
                case "denied":
                    alert("Please enable notifications in browser settings");
                    break;
                default:
                    alert("Please allow notifications to use this feature");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong while setting up notifications");
        }
    };

    return (
        <div className="flex flex-col gap-4 p-10 text-white rounded-xl bg-gradient-to-bl from-violet-900 to-rose-900 border-1 border-white">
            <div className="flex flex-col gap-2">
                <div>Message to self</div>
                    <div>
                    <input 
                        type="text" 
                        value={inpText} 
                        placeholder="Enter Your message here"
                        onChange={handleChange}
                        className="flex w-xs h-10 rounded-md bg-gray-600 border-gray-400 border-2 text-white min-w-1/4 text-center placeholder:text-center"
                    />
                </div>
                </div>
            <div className=" flex flex-col gap-2">
                <div>You will be notified every {sliderInput} minutes</div>
                <input type="range" 
                min="1" max="60" 
                className="range range-primary" 
                value={sliderInput}
                onChange={(e)=>{setSliderInput(Number(e.target.value))}}>
                </input>
            </div>

            <div className="flex justify-center">
                <button 
                className="bg-indigo-500 rounded-md px-9 py-2 hover:bg-indigo-800 border-1 border-black" 
                onClick={submitHandler}
                > Get Notified</button>

            </div>
        </div>
    )
}

export default Logic