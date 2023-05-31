import React from 'react'
import style from './style.module.scss'

const Card = (props) => {
    return(
        <div className={style.card}>
            <h1>#{props.id} {props.name}</h1>
            <img className={style.image} src={props.image}/>
        </div>
    )
}

export default Card