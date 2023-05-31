import React, { useState } from 'react'
import style from './style.module.scss'

// Пусть в массиве храниться список городов. Виведите с помощью цикла випадающий список єтих городов. При виборе пункта списка отобразить соотвествующую картинку в компоненте 

const Task1 = () => {
    const [theCity, setTheCity] = useState('')
    const cities = [
        { id: 1, name: "London", image: "https://cdn.wallpapersafari.com/44/60/OfXatW.jpg" },
        { id: 2, name: "New York", image: "https://w0.peakpx.com/wallpaper/332/358/HD-wallpaper-manhattan-new-york-city-manhattan-new-york-world-city.jpg" },
        { id: 3, name: "Paris", image: "https://wallpapercave.com/wp/4TE7kqZ.jpg" },
        { id: 4, name: "Madrid", image: "https://wallpapercave.com/wp/wp1916468.jpg" },
        { id: 5, name: "Tokio", image: "https://wallpaperaccess.com/full/19067.jpg" },
    ]

    const handleCityChange = (event) => {
        const selectedIndex = event.target.value;
        setTheCity(cities[selectedIndex]);
    };

    return (
        <div>
            <select onChange={handleCityChange}>
                <option value="">Select city</option>
                {cities.map((city, index) => (
                    <option key={index} value={index}>
                        {city.name}
                    </option>
                ))}
            </select>
            {theCity && (
                <div className={style.box}>
                    <h1>{theCity.name}</h1>
                    <img className={style.image} src={theCity.image} alt={theCity.name} />
                </div>
            )}
        </div>
    );
}

export default Task1