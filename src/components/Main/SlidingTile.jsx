import { useEffect, useState } from "react"
import tile1 from "../../media/images/main/slider1.png"
import tile2 from "../../media/images/main/slider3.png"
import tile3 from "../../media/images/main/slider4.png"
import { BsArrowRight } from "react-icons/bs"

const SlidingTile = () => {

    const [currSlide, setCurrSlide] = useState(0)
    const slideImages = [{
        image: tile1, title: "Fresh Garden Products", price: "$24.25", buttonCaption: "Check Products", priceColor: "text-red-500", buttonColor: "bg-green-500"
    },
    { image: tile2, title: "Fresh Vegetables", price: "$31.99", buttonCaption: "See Products", priceColor: "text-orange-400" },
    { image: tile3, title: "Fresh Fruits", price: "$19.55", buttonCaption: "Buy Products", priceColor: "text-green-700" }]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrSlide((prevIndex) =>
                prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1

            );
            console.log(currSlide)
        }, 999999);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrSlide((prevSlide) =>
            prevSlide === slideImages.length - 1 ? 0 : prevSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrSlide((prevSlide) =>
            prevSlide === 0 ? slideImages.length - 1 : prevSlide - 1
        );
    };

    return (
        <div className="h-4/5 p-2 max-sm:h-full">

            <div className="relative flex h-full max-sm:h-96 z-10">
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2 rounded-full"
                    onClick={prevSlide}
                >
                    &lt;
                </button>

                {slideImages.map((slide, index) => (
                    <>
                        <div className={`${index === currSlide ? "text-white absolute top-32 left-32 max-sm:top-40 max-sm:left-12" : "hidden"}`}>
                            <div className="flex flex-col content-center">
                                <div className="text-4xl max-sm:text-2xl font-medium w-72 h-24 max-sm:h-12">{slide.title}</div>
                                <div className={`${slide.priceColor} " text-4xl max-sm:text-2xl font-medium flex flex-row "`}>
                                    <span className="text-xs font-normal self-center ">FROM</span> {slide.price}
                                </div>
                                <div className="text-sm h-24 font-extralight">
                                    <p>Freshly squeezed juices from our
                                        <br></br>
                                        organic fruits delivered to your door</p>
                                </div>
                                <div><button className={`${slide.buttonColor} " flex rounded py-2 px-7 items-center text-sm font-medium justify-between "`}>
                                    {slide.buttonCaption}<BsArrowRight className="ml-3"/>
                                </button></div>
                            </div>
                        </div>
                        <img
                            key={index}
                            src={slide.image}
                            alt={`Slide ${index}`}
                            className={`rounded-md w-full object-cover max-sm:h-128 ${index === currSlide ? '' : 'hidden'
                                }`}
                        />
                    </>
                ))}

                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2 rounded-full"
                    onClick={nextSlide}
                >
                    &gt;
                </button>
            </div>
        </div>

    )

}

export default SlidingTile