import React from 'react'
import style from './style.module.scss'
import Card from './Card'

const Task3 = () => {
    const bands = [
        {
            id:1,
            name:"Океан Ельзи",
            image:"https://lh3.googleusercontent.com/PrWqTesPR27YYZc4baKkRAe_m8KIOhtn7iLy0mniqmFa7YTFUh57HATTKltGxoBX__WAc7e5m0YyyKg=w2880-h1200-p-l90-rj"
        },
        {
            id:2,
            name:"MONATIK",
            image:"https://33kanal.com/wp-content/uploads/2022/06/81a8019f2b3b5b74273f18af92671861-quality_70xresize_crop_1xallow_enlarge_0xw_750xh_463.jpg"
        },
        {
            id:3,
            name:"Артем Пивоваров",
            image:"https://fakty.com.ua/wp-content/uploads/sites/3/2023/04/10/artem-pyvovarov-yn.png"
        },
        {
            id:4,
            name:"Тіна Кароль",
            image:"https://uainfo.org/static/ckef/img/tina-karol-snoop-dogg1.jpg"
        },
        {
            id:5,
            name:"Michael Jackson",
            image:"https://images.rtl.fr/~c/770v513/rtl/www/1359776-michael-jackson-en-concert-en-1988.jpg"
        },
    ]
    return(
        <div>
            <h1 className={style.header}>Мої улюблені співаки</h1>
            {bands.map(band=><Card key={band.id} id={band.id} name={band.name} image={band.image}/>)}
        </div>
    )
}

export default Task3