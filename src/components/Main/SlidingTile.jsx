import { useEffect, useState } from "react"
import tile1 from "../../media/images/main/slider1.png"
import tile2 from "../../media/images/main/slider3.png"
import tile3 from "../../media/images/main/slider4.png"

const SlidingTile = () => {

    const [currSlide, setCurrSlide] = useState(0)
    const slideImages = [tile1, tile2, tile3]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrSlide((prevIndex) =>
                prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1

            );
            console.log(currSlide)
        }, 999999);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="pr-3 h-4/5">
            {/* <img className="rounded-md w-full h-4/5 object-fill" src={tile1} /> */}

            <div className="relative flex">
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2 rounded-full"
                    onClick={"prevSlide"}
                >
                    &lt;
                </button>

                {slideImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className={`rounded-md w-full object-cover ${index === currSlide ? '' : 'hidden'
                            }`}
                    />
                ))}

                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2 rounded-full"
                    onClick={"nextSlide"}
                >
                    &gt;
                </button>
            </div>
        </div>

    )

}

export default SlidingTile