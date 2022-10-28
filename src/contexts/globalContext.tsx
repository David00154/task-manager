import React, { createContext, FC, ReactElement, useContext, useState } from 'react'
import { Toaster } from 'react-hot-toast'

type Task = {
    title: string;
    description: string;
    subTasks: Array<Pick<Task, "title">>;
    status: string;
}

type Status = string;

type Board = {
    name: string,
    tasks: Array<{ column: Status, items: Task[] }>
    // tasks: Record<"column", Task[]>[]
}
export type State = {
    tasks?: Pick<Board, "tasks">,
    columns?: Status[],
    boards?: Board[],
    enableAddTaskPopup: boolean
}

type GlobalProviderProps = {
    state: State,
    setState<T>(state: T | ((state: T) => T)): void;
}

const Global = createContext<GlobalProviderProps>(null!)

const GlobalProvider: FC<{ children: ReactElement }> = ({ children }) => {

    const initialState: State = {
        enableAddTaskPopup: false,
        // boards: [{ name: "x", tasks: [{ column: {} }] }]
    }

    const [state, setState] = useState<State>(initialState)

    const addTask = () => {

    }

    return (
        <Global.Provider value={{
            state,
            //@ts-ignore
            setState,
            addTask
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