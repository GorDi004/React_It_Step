import React, { useState } from 'react'
import style from './style.module.scss'

// Дан абзац и две кнопки. Пусть по клику на первую кнопку абзац переходит в режим редактирования, а по клику на вторую - в режим показа.

const Task2 = () => {
    const [text, setText] = useState('Note...');
    const [editing, setEditing] = useState(false);

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleShowClick = () => {
        setEditing(false);
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className={style.box}>
            <div className={style.block}>
                {editing ? (
                    <textarea value={text} onChange={handleChange} />
                ) : (
                    <p>{text}</p>
                )}
            </div>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleShowClick}>Show</button>
        </div>
    );
}

export default Task2