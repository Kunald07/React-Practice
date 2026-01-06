import { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Card = () => {

    const [val, setVal] = useState(false)

    const [swing, setSwing] = useState(false)

    const [rotate, setRotate] = useState(false)

    return (
        <div className='w-full h-screen bg-blue-200 flex justify-center gap-15 items-center'>
            <div className='relative w-80 h-48 rounded-md overflow-hidden flex'>
                <img className={`w-full transition-transform duration-700 ease-in-out ${val === false ? "translate-x-0" : "-translate-x-full"} shrink-0 h-full object-cover`}
                    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww" alt="" />
                <img className={`w-full transition-transform duration-700 ease-in-out ${val === false ? "translate-x-0" : "-translate-x-full"} shrink-0 h-full object-cover`}
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <span onClick={() => setVal(() => !val)} className='w-8 h-8  flex items-center justify-center rounded-full bg-[#dadada8b] absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                    <FaArrowRightLong size={"0.7em"} />
                </span>
            </div>

            <div className='relative w-80 h-48 rounded-md overflow-hidden flex'>
                <img className={`w-full transition-transform duration-700 ease-in-out ${swing === false ? "translate-x-0" : "-translate-x-full"} shrink-0 h-full object-cover`}
                    src="https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <img className={`w-full transition-transform duration-700 ease-in-out ${swing === false ? "translate-x-0" : "-translate-x-full"} shrink-0 h-full object-cover`}
                    src="https://plus.unsplash.com/premium_photo-1666792562882-8bd04befec7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <span onClick={() => setSwing(() => !swing)} className='w-8 h-8  flex items-center justify-center rounded-full bg-[#dadada8b] absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                    <FaArrowRightLong size={"0.7em"} />
                </span>
            </div>

              <div className='relative w-80 h-48 rounded-md overflow-hidden flex'>
                <img className={`w-full transition-transform duration-700 ease-in-out ${rotate === false ? "translate-x-0" : "-translate-x-full"} shrink-0 h-full object-cover`}
                    src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <img className={`w-full transition-transform duration-700 ease-in-out ${rotate === false ? "translate-x-0" : "-translate-x-full"} shrink-0 h-full object-cover`}
                    src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <span onClick={() => setRotate(() => !rotate)} className='w-8 h-8  flex items-center justify-center rounded-full bg-[#dadada8b] absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                    <FaArrowRightLong size={"0.7em"} />
                </span>
            </div>

        </div>
    )
}

export default Card
