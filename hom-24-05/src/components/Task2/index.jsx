import React, { useState } from 'react'
import style from './style.module.scss'

const Task2 = () => {
    const [image, setImage] = useState(0)
    const pictures = [
        "https://images.pexels.com/photos/1477166/pexels-photo-1477166.jpeg?cs=srgb&dl=pexels-ameruverse-digital-marketing-media-1477166.jpg&fm=jpg",
        "https://e0.pxfuel.com/wallpapers/244/160/desktop-wallpaper-chamomile-flowers-bloom.jpg",
        "https://img.freepik.com/premium-photo/abstract-flower-pattern-petals-ornament-design-nature-leaf-illustration-drawing-digital-floral-print_611870-2969.jpg",
        "https://cdn.shopify.com/s/files/1/0565/7080/6458/products/1blossoms-in-deep-pool-wall-mural.jpg?v=1666242661",
        "https://i.etsystatic.com/25401407/r/il/a929b0/2901466992/il_fullxfull.2901466992_8me0.jpg",
        "https://cdn.hovia.com/app/uploads/pink-photographic-oversized-dark-moody-floral-wallpaper-mural-Plain-820x532.jpg",
        "https://cdn.shopify.com/s/files/1/0565/7080/6458/products/flower-wall-wallpaper-mural_42c75a42-4e81-43a7-8411-581943f90c3d.jpg?v=1659073445",
        "https://i.pinimg.com/736x/52/0e/1c/520e1cdc0a8c5ee63140cf23358c146b.jpg"
    ]
    const onForward = () => {
        if (image < pictures.length - 1)
            setImage(image + 1)
        else
            setImage(0)
    }
    const onBack = () => {
        if (image > 0)
            setImage(image - 1)
        else
            setImage(pictures.length - 1)
    }
    return (
        <div className={style.box}>
            <button onClick={onBack} className={style.button}>&lt;</button>
            <img className={style.image} src={pictures[image]} />
            <button onClick={onForward} className={style.button}>&gt;</button>
        </div>
    )
}

export default Task2