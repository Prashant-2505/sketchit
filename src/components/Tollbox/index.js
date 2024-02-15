
const Toolbox = () => {

    const toolBox = "toolBox p-5 absolute top-1/4 left-5 w-64 rounded-md  shadow-lg border-[1px] border-gray-200 bg-slate-200 "

    const colorBox = "colorBox  h-5 w-5 mr-1 rounded-sm border-[2px] hover:cursor-pointer hover:border-[1.5px] hover:shadow-lg hover:shadow-gray-400 duration-200 ease-in"

    const toolText = ' text-[11px]'
    const itemContainer = "itemContainer flex justify-between mt-2"

    const updateBrushSize = () => {

    }
    return (
        <div className={toolBox}>
            <div className="toolItem mb-5">
                <h4 className={toolText}> Stroke Color</h4>
                <div className={itemContainer}>
                    <div className={`${colorBox} bg-red-400`}></div>
                    <div className={`${colorBox} bg-blue-400`}></div>
                    <div className={`${colorBox} bg-green-400`}></div>
                    <div className={`${colorBox} bg-yellow-400`}></div>
                </div>
            </div>

            <div className="">
                <h4 className={toolText}> Brush Size</h4>
                <div className="">
                    <input className=""
                        type="range"
                        min={1} max={10} step={1}
                        onChange={updateBrushSize}
                    />
                </div>
            </div>
        </div>
    )
}
export default Toolbox