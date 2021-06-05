import React, { useRef,useEffect } from 'react'
import anime from 'animejs'
const Title = () => {
    const divRef = useRef()
    useEffect(() => {
       
        anime({
            targets:divRef.current,
            translateX:[-200,0],
            opacity:[0,1],
            delay:1500,
            duration:1200,
        })
    }, [])
 
    return (
        <div ref={divRef}>
            <h1 className="text-primary capitalize bg-white p-2  font-bold   transform skew-x-12 lg:text-2xl">Find your <span className="transform scale-50 ">perfect</span> image</h1>
        </div>
    )
}

export default Title

