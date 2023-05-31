import React, { useState } from 'react'
import style from './style.module.scss'

// Создать компонент, который отображает список дел в виде чекбоксов и количество отмеченных. Список дел хранить в массиве.

const Task2 = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Buy products', checked: false },
        { id: 2, text: 'Cook dinner', checked: true },
        { id: 3, text: 'Do homework', checked: false },
        { id: 3, text: 'Read book', checked: true },
        { id: 3, text: 'Walk the dog', checked: false },
    ]);

    const handleCheckboxChange = (todoId) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === todoId) {
                return { ...todo, checked: !todo.checked };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const checkedCount = todos.filter((todo) => todo.checked).length;

    return (
        <div className={style.box}>
            <h2>To do list</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.checked}
                                onChange={() => handleCheckboxChange(todo.id)}
                            />
                            {todo.text}
                        </label>
                    </li>
                ))}
            </ul>
            <p>Done: {checkedCount}</p>
        </div>
    );
}

export default Task2