import React, { FC, useState, useEffect } from "react";
import PopupCard from "./Card";
import { HiChevronDown, HiChevronUpDown, HiEllipsisHorizontal, HiEllipsisVertical, HiXMark, } from "react-icons/hi2";
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
const ViewTask: FC = () => {
    // const { state, setState } = useGlobal()
    const router = useRouter()
    // interface FieldValues {
    //     title: string;
    //     description?: string;
    //     subTasks: Pick<FieldValues, "title">[],
    //     status: string
    // }
    // const columns = [
    //     "Todo"
    //     , "Doing"
    //     , "Inprogress"
    //     , "Done"
    //     , "Todo"
    //     , "Doing"
    //     , "Inprogress"
    //     , "Done"
    // ]
    // let schema = z.object({
    //     title: z.string().min(1, {
    //         message: "Title must contain at least 1 character(s)"
    //     }),
    //     description: z.string().min(1, {
    //         message: "Description must contain at least 1 character(s)"
    //     }),
    //     subTasks: z.array(z.object(
    //         { title: z.string() }
    //     )).max(4),
    //     status: z.string().min(1),
    // })
    // let [subtaskCount, setSubtaskCount] = useState(1);
    // // let [subtaskCount, setSubtaskCount] = useState(0);
    // const form = useForm<FieldValues>({
    //     mode: "onSubmit",
    //     resolver: zodResolver(schema),
    //     defaultValues: {
    //         title: "",
    //         description: "",
    //         subTasks: [{ title: "" }],
    //         status: columns[0]
    //     }
    // })
    // const { insert, remove, update, fields, append } = useFieldArray({
    //     control: form.control,
    //     // @ts-ignore
    //     name: "subTasks",
    // })
    // const watchSubTasksArray = form.watch("subTasks");
    // const controlledFields: Record<"id", string>[] = fields.map((field, index) => {
    //     return {
    //         ...field,
    //         ...watchSubTasksArray[index]
    //     };
    // });

    // const status = useController({
    //     control: form.control,
    //     name: 'status'
    // });
    // const onSubmit: SubmitHandler<FieldValues> = (data) => {
    //     let done = toast.promise(new Promise(async (res, rej) => {
    //         setTimeout(() => {
    //             res(null)
    //             form.reset()
    //             router.back()
    //         }, 2000)
    //     }), {
    //         error: (e) => e.message,
    //         loading: "Adding  Task..",
    //         success: "Task Added"
    //     })
    //     return done
    // }

    return (
        <PopupCard>
            <div className="text-white p-6 w-full min-h-min">
                {/* <div className="mb-5 flex justify-between w-full items-center">
                    <h1 className="text-white font-medium text-base">Add New Task</h1>
                    <button onClick={() => {
                        if (router.query?.action == "view-task") {
                            router.back()
                        }
                    }} className="bg-gray-700 p-1 rounded-full shadow-2xl">
                        <HiXMark className="text-white" strokeWidth={1} size={15} />
                    </button>
                </div> */}
                <div className="flex justify-between w-full items-stretch mb-5">
                    <h1 className="text-white font-medium text-[15.9px] w-[90%]">Build something cool during the weekend</h1>
                    <button className="inline-flex">
                        <HiEllipsisVertical className="text-white opacity-[.6]" size={24.3} />
                    </button>
                </div>
                <p className="text-white opacity-[.6] font-normal text-sm mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto, ipsam even</p>
                <span className='inline-flex text-white font-normal text-sm'>Subtasks (0 of 0)</span>
            </div>
        </PopupCard >
    )
}

export default ViewTask;

