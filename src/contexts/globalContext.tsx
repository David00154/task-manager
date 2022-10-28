import React, { createContext, FC, ReactElement, useContext, useState } from 'react'
import { Toaster } from 'react-hot-toast'
export type State = {
    tasks?: [],
    columns?: [],
    boards?: [],
    enableAddTaskPopup: boolean
}

type GlobalProviderProps = {
    state: State,
    setState<T>(state: T | ((state: T) => T)): void;
}

const Global = createContext<GlobalProviderProps>(null!)

const GlobalProvider: FC<{ children: ReactElement }> = ({ children }) => {

    const initialState: State = {
        enableAddTaskPopup: false
    }

    const [state, setState] = useState<State>(initialState)

    return (
        <Global.Provider value={{
            state,
            //@ts-ignore
            setState
        }}>
            <Toaster position="top-right" reverseOrder={false} />
            {children}
        </Global.Provider>
    )
}

export default GlobalProvider

export const useGlobal = () => {
    let context = useContext(Global)
    return context
}