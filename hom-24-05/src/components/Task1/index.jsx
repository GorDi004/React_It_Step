import React, { useEffect, useState } from 'react'
import style from './style.module.scss'

const Task1 = () => {
    const colors = ["black", "red", "green", "blue", "pink", "grey", "yellow"]
    const [backColor, setBackColor] = useState(0)
    const handleClick = () => {
        setBackColor(Math.floor(Math.random()*colors.length))
    }
    return (
        <div className={style.block} onClick={handleClick} style={{backgroundColor:colors[backColor]}}>

        </div>
    )
}

export default Task1