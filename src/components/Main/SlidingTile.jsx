import { useState } from "react"
import tile1 from "../../media/images/main/slider1.png"
import tile2 from "../../media/images/main/slider3.png"
import tile3 from "../../media/images/main/slider4.png"

const SlidingTile = () => {

    const [currSlide, setCurrSlide] = useState()
    
    const slideImages = [{ slide: tile1 }, { slide: tile2 }, { slide: tile3 }]

    const slider = () => {
        for (let i = 0; i < slideImages.length; i++) {
            console.log(slideImages[i])
            setCurrSlide(slideImages[i].slide)
        }

    }

    slider()

    return (
        <div className="pr-3">
            <img className="rounded-md w-full h-4/5 object-fill" src={currSlide} />

        </div>
    )

}

export default SlidingTile