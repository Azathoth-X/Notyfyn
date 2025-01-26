import { useState } from "react"

const Logic = () => {
    const [inpText, setInpText] = useState("")

    const handleChange = (e) => {
        setInpText(e.target.value)
    }

    return (
        <div className="flex flex-col gap-4 p-10 text-white rounded-xl bg-gradient-to-bl from-violet-900 to-rose-700">
            <div className="flex flex-col gap-2">
                <div>Message to self</div>
                    <div>
                    <input 
                        type="text" 
                        value={inpText} 
                        placeholder="Enter Your message here"
                        onChange={handleChange}
                        className="flex w-xs h-10 rounded-md bg-gray-600 border-gray-400 text-white min-w-1/4 text-center placeholder:text-center"
                        
                    />
                </div>
                </div>
            <div className=" flex flex-col gap-2">
                <div>You will be notified every __ minutes</div>
                <input type="range" min="1" max="60"></input>
            </div>

            <div className="flex justify-center">
                <button className="bg-indigo-500 rounded-md px-9 py-2 hover:bg-indigo-800"> Get Notified</button>

            </div>
        </div>
    )
}

export default Logic