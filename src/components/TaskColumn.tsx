import { SplideSlide } from '@splidejs/react-splide';
import React from 'react'
import { FC } from 'react'
import { HiEllipsisHorizontal, HiOutlineSquaresPlus } from "react-icons/hi2"
import { useRouter } from "next/router"
interface Task {
    name: string;
    subtasks?: Pick<Task, "name">[]
}

const TaskColumn: FC<{ columnName?: string, tasks: Task[], colorScheme?: string }> = ({ columnName = "Todo", tasks = [], colorScheme }) => {
    return (
        <SplideSlide className='overflow-y-auto'>
            <div className='min-h-[50vh] flex flex-col gap-3 my-5 overflow-y-auto scroll-bar'>
                <div className='flex items-center pl-2'>
                    <div className='w-4 h-4 circle rounded-full' />
                    <span className='inline-flex text-white opacity-[.6] font-medium text-sm pl-4'>{columnName.toUpperCase()} (2)</span>
                </div>
                <ul className='flex flex-col gap-5'>
                    {tasks.map((task, i) => {
                        return (
                            <TaskCard key={i} task={task} />
                        )
                    })}
                </ul>
            </div>
            <style jsx>{`
            .scroll-bar::-webkit-scrollbar{
                width: 0;
            }
            .scroll-bar{
                scrollbar-width: none !important;
            }
            .circle{
                background-color: ${colorScheme};
            }
        `}</style>
        </SplideSlide>
    )
}

export default TaskColumn

const TaskCard: FC<{ task: Task }> = ({ task }) => {

    const router = useRouter()
    return (
        <li className='bg-light-primary py-4 px-4 rounded-md shadow-xl w-[227px] min-h-min'>
            <div className='w-full justify-end flex items-center mb-2'>
                <button onClick={() => router.push('/?action=view-task')} className="inline-flex text-white opacity-[.9]">
                    <HiEllipsisHorizontal size={20} />
                </button>
            </div>
            <h2 className='text-white break-words mb-3 font-normal text-[15px] leading-[1.3]'>{task.name}</h2>
            <span className='inline-flex text-white opacity-[.6] font-normal text-sm'>0 of {task.subtasks?.length ?? 0} subtasks</span>
        </li>
    )
}

export const NewTaskColumn: FC = () => {
    return (
        <div className='mt-12 bg-light-primary opacity-[.7] h-[70%] justify-center flex flex-col text-center rounded-xl  cursor-pointer shadow-md w-[227px]'>
            <h3 className='text-white opacity-[.6] font-normal text-lg flex items-center justify-center gap-2'>
                <HiOutlineSquaresPlus size={23} />
                New Column</h3>
        </div>
    )
}