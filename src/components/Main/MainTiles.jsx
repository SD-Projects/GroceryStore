import tile1 from "../../media/images/main/tile1.png"
import tile2 from "../../media/images/main/tile2.png"
import tile3 from "../../media/images/main/tile3.png"

const MainTiles = () => {

    return (
        <div className="flex flex-row w-4/5 h-64 mx-auto">
            <div className="flex-1">
                <img className="w-full h-full rounded-md object-cover" src={tile1} />

            </div>

            <div className="px-3 flex-1">
                <img className="w-full h-full rounded-md object-cover" src={tile2} />

            </div>

            <div className="flex-1">
                <img className="w-full h-full rounded-md object-fill" src={tile3} />

            </div>
        </div>
    )

}

export default MainTiles