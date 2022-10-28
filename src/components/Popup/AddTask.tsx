import React, { FC, useState, useEffect } from "react";
import PopupCard from "./Card";
import { HiChevronDown, HiChevronUpDown, HiXMark, } from "react-icons/hi2";
// import { HiChevronUpDown } from "react-icons/hi2"
import { HiPlusSm } from "react-icons/hi";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm, useFieldArray, SubmitHandler, useController } from "react-hook-form"
import { useGlobal, State } from "@/contexts/globalContext";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useRouter } from "next/router"
import toast from 'react-hot-toast'
const AddTask: FC = () => {
    const { state, setState } = useGlobal()
    const router = useRouter()
    interface FieldValues {
        title: string;
        description?: string;
        subTasks: Pick<FieldValues, "title">[],
        status: string
    }
    const columns = [
        "Todo"
        , "Doing"
        , "Inprogress"
        , "Done"
        , "Todo"
        , "Doing"
        , "Inprogress"
        , "Done"
    ]
    let schema = z.object({
        title: z.string().min(1, {
            message: "Title must contain at least 1 character(s)"
        }).max(50, {}),
        description: z.string().min(1, {
            message: "Description must contain at least 1 character(s)"
        }),
        subTasks: z.array(z.object(
            {
                title: z.string().min(1, {
                    message: "Subtask(s) must contain at least 1 character(s)"
                }).optional()
            }
        )).max(4),
        status: z.string().min(1),
    })
    let [subtaskCount, setSubtaskCount] = useState(1);
    // let [subtaskCount, setSubtaskCount] = useState(0);
    const form = useForm<FieldValues>({
        mode: "onSubmit",
        resolver: zodResolver(schema),
        defaultValues: {
            title: "",
            description: "",
            subTasks: [{ title: "" }],
            status: columns[0]
        }
    })
    const { insert, remove, update, fields, append } = useFieldArray({
        control: form.control,
        // @ts-ignore
        name: "subTasks",
    })
    const watchSubTasksArray = form.watch("subTasks");
    const controlledFields: Record<"id", string>[] = fields.map((field, index) => {
        return {
            ...field,
            ...watchSubTasksArray[index]
        };
    });
    // useEffect(() => {
    //     form.clearErrors('subTasks')
    // }, [fields])
    // console.log(watch("subTasks"))

    const status = useController({
        control: form.control,
        name: 'status'
    });
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        let done = toast.promise(new Promise(async (res, rej) => {
            setTimeout(() => {
                res(null)
                form.reset()
                router.back()
            }, 2000)
        }), {
            error: (e) => e.message,
            loading: "Adding  Task..",
            success: "Task Added"
        })
        return done
    }

    return (
        <PopupCard>
            <div className="text-white p-6 w-full min-h-min">
                <div className="mb-5 flex justify-between w-full items-center">
                    <h1 className="text-white font-medium text-base">Add New Task</h1>
                    <button onClick={() => {
                        if (router.query?.action == "add-task") {
                            router.back()
                        }
                    }} className="bg-gray-700 p-1 rounded-full shadow-2xl">
                        <HiXMark className="text-white" strokeWidth={1} size={15} />
                    </button>
                </div>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-5 mb-4">
                        <div>
                            <label htmlFor="title" className='block mb-2 text-base font-medium text-white'>Title</label>
                            <input type="text" id="title"
                                {...form.register('title')} className="bg-transparent border text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g Take a coffee break" autoComplete='off' aria-autocomplete='none' autoCorrect='off'></input>
                            {form.formState.errors?.title && (
                                <ErrorText text={form.formState.errors?.title.message} />
                            )}
                        </div>
                        <div>
                            <label htmlFor="description" className='block mb-2 text-base font-medium text-white'>Description</label>
                            <textarea {...form.register('description')} id="description" rows={5} className="block p-2.5 w-full text-sm text-gray-900 bg-transparent   rounded-lg border focus:ring-blue-500 focus:border-blue-500  border-gray-600 placeholder-gray-400 dark:text-white" placeholder="e.g It's always good to take a break. This 15 minute break will charge the battries a little."></textarea>
                            {form.formState.errors?.description && (
                                <ErrorText text={form.formState.errors?.description.message} />
                            )}
                        </div>
                        <div>
                            <label htmlFor="sub_tasks" className='block mb-2 text-base font-medium text-white'>Subtask(s)</label>
                            <ul className='flex flex-col gap-2 mb-4'>
                                {controlledFields.map((field, index) => (
                                    <>
                                        <li key={field.id} className='w-full flex items-center gap-3'>
                                            <input {...form.register(`subTasks.${index}.title` as const)} type="text" id="title" className="bg-transparent border text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g Make coffee" autoComplete='off' aria-autocomplete='none' autoCorrect='off'></input>
                                            <button type="button" onClick={() => {
                                                remove(index)
                                                setSubtaskCount(subtaskCount - 1)
                                            }} className='text-white opacity-[.9]'>
                                                <HiXMark size={20} />
                                            </button>
                                        </li>
                                        {/* {form.formState.errors?.subTasks?.[index]?.title && (
                                            <ErrorText key={index} text={form.formState.errors?.subTasks?.[index]?.title?.message} />
                                        )} */}
                                        {/* {form.formState.errors?.subTasks?.length! > 0 && (
                                            <ErrorText text={form.formState.errors?.subTasks?.message} />
                                        )} */}
                                    </>
                                ))}
                                {form.formState.errors?.subTasks?.length! > 0 && (
                                    <ErrorText text="Empty subtask(s) field(s) are not required!!" />
                                )}
                            </ul>
                            <button type="button" className='w-full text-site-purple justify-center inline-flex py-2 bg-white rounded-full text-[14.5px] font-medium items-center' onClick={() => {
                                if (fields.length < 4) {
                                    append({ title: '' }, { focusIndex: subtaskCount })
                                    setSubtaskCount(subtaskCount + 1)
                                }
                            }}>
                                <HiPlusSm size={18} />
                                Add New Subtask
                            </button>
                            {form.formState.errors?.subTasks && (
                                <p className="text-red-700 text-sm mt-1">{form.formState.errors?.subTasks.message}</p>
                            )}
                        </div>
                        <div>

                            <label htmlFor="status" className='block mb-2 text-base font-medium text-white'>Status</label>

                            <Listbox value={status.field.value} onChange={status.field.onChange}>
                                <div className="relative mt-1">
                                    {/* <Listbox.Button className="relative w-full cursor-default rounded-lg bg-transparent py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm text-white opacity-[.8] text-lg border border-white border-opacity-[.5]"> */}
                                    <Listbox.Button className="
                                    relative 
                                    text-left 
                                    bg-transparent 
                                    border rounded-lg 
                                    focus:border-blue-500 
                                    focus:ring-blue-500
                                    block w-full 
                                    p-2.5 border-gray-600 
                                    sm:text-sm text-white opacity-[.8] text-lg
                                    ">
                                        {status.field.value ? (
                                            <span className="block truncate">
                                                {status.field.value}
                                            </span>
                                        ) : "Select Person"}
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                            <HiChevronUpDown
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >

                                        <Listbox.Options className="absolute mt-1 max-h-32 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

                                            {columns.map((person, i) => (
                                                <Listbox.Option
                                                    key={i}
                                                    className={({ active }) =>
                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-gray-400 text-amber-900' : 'text-gray-900'
                                                        }`
                                                    }
                                                    value={person}
                                                >
                                                    {person}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>

                    </div>
                    <button type="submit" className='text-white bg-purple-700 inline-flex w-full justify-center font-medium hover:bg-purple-800 px-3 py-2 rounded-full' disabled={form.formState.isSubmitting}>
                        Create Task
                    </button>
                </form>
            </div>
        </PopupCard>
    )
}

export default AddTask;


const ErrorText: FC<{ text?: string }> = ({ text }) => {
    return (
        <p className="text-red-500 text-sm mt-1">{text}</p>
    )
}
