import tile1 from "../../media/images/main/tile1.png"
import tile2 from "../../media/images/main/tile2.png"
import tile3 from "../../media/images/main/tile3.png"

const MainTiles = () => {

    return (
        <div className="flex flex-row w-4/5 h-64 mx-auto max-sm:flex-col max-sm:w-full">
            <div className="flex-1 p-2">
                <img className="w-full h-full rounded-md object-cover max-sm:h-80" src={tile1} />

            </div>

            <div className="flex-1 p-2">
                <img className="w-full h-full rounded-md object-cover max-sm:h-80" src={tile2} />

            </div>

            <div className="flex-1 p-2">
                <img className="w-full h-full rounded-md object-fill max-sm:h-80" src={tile3} />

            </div>
        </div>
    )

}

export default MainTiles