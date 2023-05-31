import React, { useEffect, useState } from 'react'
import style from './style.module.scss'
import Task2 from '../Task2';
import Task3 from '../Task3';

// Необходимо изменить цвет фона страницы в зависимости от
// времени суток. Для этого нужно использовать useEffect, который будет следить
// за текущим временем и при изменении времени будет менять цвет фона.

const Task1 = () => {
    const [backgroundColor, setBackgroundColor] = useState('');

    useEffect(() => {
        const getCurrentTime = () => {
            const currentHour = new Date().getHours();
            if (currentHour >= 6 && currentHour < 12) {
                setBackgroundColor('lightblue');
            } else if (currentHour >= 12 && currentHour < 18) {
                setBackgroundColor('lightyellow');
            } else {
                setBackgroundColor('darkblue');
            }
        };

        getCurrentTime();

        const interval = setInterval(getCurrentTime, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ backgroundColor, minHeight: '100vh' }}>
            <Task2/>
            <Task3/>
        </div>
    );
}

export default Task1