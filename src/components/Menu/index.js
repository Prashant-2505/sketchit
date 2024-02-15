import { FaPencilAlt, FaUndo, FaRedo, FaDownload, FaEraser } from "react-icons/fa";

const Menu = () => {

    const menuContainer = 'menuContainer absolute px-5 py-1 flex justify-between w-1/4  left-1/2 top-10 rounded-md border-2 border-black translate-x-[-50%] shadow-md bg-slate-300'

    const iconWraper = ' cursor-pointer flex justify-center items-center h-10 w-10  rounded-md hover:bg-purple-200 active:bg-purple-200'

    const icon = "text-amber-800 text-[20px]"

    return (
        <div className={menuContainer} >
            <div className={iconWraper}>
                <FaPencilAlt className={icon} />
            </div>
            <div className={iconWraper}>
                <FaUndo  className={icon}/>
            </div>
            <div className={iconWraper}>
                <FaRedo className={icon}/>
            </div>
            <div className={iconWraper}>
                <FaEraser className={icon}/>
            </div>
            <div className={iconWraper}>
                <FaDownload className={icon}/>
            </div>
        </div>
    )
}

export default Menu




