import FreshGreens from "./FreshGreens"
import MainLongTile from "./MainLongTile"
import MainTiles from "./MainTiles"
import SlidingTile from "./SlidingTile"

const Main = () => {

    return (
        <>
        
            <div className="flex flex-row w-3/4 mx-auto py-5">
                <SlidingTile></SlidingTile>
                <FreshGreens></FreshGreens>
            </div>

            {/* TILES */}
            <MainTiles></MainTiles>

            {/* Long tile */}
            <MainLongTile></MainLongTile>
        </>
    )

}

export default Main