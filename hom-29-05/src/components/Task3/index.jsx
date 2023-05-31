import React, { useEffect, useState } from 'react'
import style from './style.module.scss'

// Необходимо реализовать функцию, которая будет подсчитывать
// количество символов в поле ввода и отображать его на странице. Каждый раз,
// когда пользователь вводит символ, состояние компонента должно обновляться
// и отображать количество символов

const Task3 = () => {
    const [inputValue, setInputValue] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    useEffect(() => {
        setCharacterCount(inputValue.length);
    }, [inputValue]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <h2>Symbols count</h2>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <p>Count of symbols: {characterCount}</p>
        </div>
    );
}

export default Task3