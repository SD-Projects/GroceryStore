import sliderRight from "../../media/images/main/sliderRight.png"

const FreshGreens = () => {

    return (
        <div className="flex-initial p-2 max-sm:h-80 text-white">
            <div className="flex flex-col absolute p-5">
                <div className="flex flex-col gap-2 content-center">
                    <p className="text-xs">3 products</p>
                    <p className="font-medium">Fresh Greens</p>
                    <div><button className="text-sm rounded py-2 px-5 bg-green-600">Check Products</button></div>
                </div>
            </div>
            <img className="rounded-md w-full object-cover max-sm:h-full" src={sliderRight} />
        </div >

    )

}

export default FreshGreens