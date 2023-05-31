import React, { useState } from 'react'
import style from './style.module.scss'

const Task4 = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
        if (username.trim() === '') {
            validationErrors.username = 'Enter your nickname';
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            validationErrors.email = 'Enter correct email';
        }

        if (gender === '') {
            validationErrors.gender = 'Select gender';
        }

        if (age === '' || isNaN(age) || age <= 0) {
            validationErrors.age = 'Enter correct age';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log('Form is submitted');
            setUsername('');
            setEmail('');
            setGender('');
            setAge('');
            setErrors({});
        }
    };

    return (
        <div className={style.form}>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Nickname:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {errors.gender && <p>{errors.gender}</p>}
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    {errors.age && <p>{errors.age}</p>}
                </div>
                <button className={style.button} type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Task4