import BoardMenu from "@/components/BoardMenu"
import AddTask from "@/components/Popup/AddTask"
import { State, useGlobal } from "@/contexts/globalContext"
import { useEffect } from "react"
import { FC, ReactElement, ReactComponentElement, useState } from "react"
import { HiSun, HiMoon } from "react-icons/hi2"
import { useRouter } from "next/router"
import ViewTask from "@/components/Popup/ViewTask"

const BaseLayout: FC<{ children: ReactElement }> = function ({ children }): ReactElement {

    const { state } = useGlobal()
    const router = useRouter()
    useEffect(() => {
        document.onkeydown = function (evt) {
            evt = evt || window.event;
            if (evt.keyCode == 27 && router.query?.action) {
                switch (router.query?.action) {
                    case "add-task":
                    case "view-task":
                        router.back()
                        break;
                    default:
                        break;
                }
            }
        };
    }, [router])
    return (
        <>
            <div className="grid grid-cols-5 h-screen">
                <SideBar />
                {children}
            </div>
            {router.query?.action == "add-task" && (
                <AddTask />
            )}
            {router.query?.action == "view-task" && (
                <ViewTask />
            )}
        </>
    )
}

export default BaseLayout

const SideBar: FC = () => {
    const [checked, setChecked] = useState(true)
    return (
        <nav className="flex flex-col h-screen bg-light-primary">
            <header className="h-16">
            </header>
            <BoardMenu />
            <footer className="h-36">
                <div className="bg-light-secondary px-4 py-3 mx-5 rounded-md shadow-lg justify-center flex gap-4">
                    <HiSun aria-hidden="true" size={23} className='text-[#fff] opacity-[.6]' />
                    <label htmlFor="checked-toggle" className="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox" value="" id="checked-toggle" className="sr-only peer" onChange={() => setChecked(!checked)} checked={checked} />
                        <div className="w-11 h-6 rounded-full peer peer-focus:ring-4  peer-focus:ring-transparent bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-purple-700"></div>
                        {/* <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Checked toggle</span> */}
                    </label>
                    <HiMoon size={20} className='text-[#fff] opacity-[.6]' />
                </div>
            </footer>
        </nav >
    )
}