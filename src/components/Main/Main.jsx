import FreshGreens from "./FreshGreens"
import SlidingTile from "./SlidingTile"

const Main = () => {

    return (
        <>
            <div className="flex flex-row w-2/3 mx-auto gap-8">
                <SlidingTile></SlidingTile>
                <FreshGreens></FreshGreens>
            </div>
        </>
    )

}

export default Main