import { useState } from "react"

const Logic = () => {
    const [inpText, setInpText] = useState("")

    const handleChange = (e) => {
        setInpText(e.target.value)
    }

    return (
        <div>
            <input 
                type="text" 
                value={inpText} 
                placeholder="Enter Your message here"
                onChange={handleChange}
                className="rounded-lg bg-gray-600 border-gray-400 text-white"
            />
        </div>
    )
}

export default Logic