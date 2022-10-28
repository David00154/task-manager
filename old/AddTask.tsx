// import React, { FC, useState, useEffect } from "react";
// import PopupCard from "./Card";
// import { HiChevronDown, HiChevronUpDown, HiXMark } from "react-icons/hi2";
// import { HiPlusSm } from "react-icons/hi";
// import { z } from 'zod'
// // import { useForm, useFieldArray, SubmitHandler, useController } from "react-hook-form"
// import { useGlobal, State } from "@/contexts/globalContext";
// import { Listbox, Transition } from "@headlessui/react";
// import { Fragment } from "react";
// import { useRouter } from "next/router"
// import { v4 } from 'uuid';

// const AddTask: FC = () => {
//     const { state } = useGlobal()
//     const router = useRouter()
//     interface FieldValues {
//         title: string;
//         description?: string;
//         subTasks: Array<{ id: string, title: string }>,
//         // subTasks: Set<{id:string, title: string}>,
//         status: string
//     }
//     const columns = [
//         "Todo"
//         , "Doing"
//         , "Inprogress"
//         , "Done"
//         , "Todo"
//         , "Doing"
//         , "Inprogress"
//         , "Done"
//     ]
//     // type FieldState<T> = {

//     // }
//     let [subtaskCount, setSubtaskCount] = useState(1);
//     // let [subtaskCount, setSubtaskCount] = useState(0);
//     // const { handleSubmit, register, watch, control, setError, formState: { errors }, clearErrors, } = useForm<FieldValues>({
//     //     mode: "onSubmit",
//     //     reValidateMode: "onChange",
//     //     defaultValues: {
//     //         title: "",
//     //         description: "",
//     //         subTasks: [{ title: "" }],
//     //         status: columns[0]
//     //     }
//     // })
//     // const { insert, remove, update, fields, append } = useFieldArray({
//     //     control,
//     //     // @ts-ignore
//     //     name: "subTasks",
//     // })
//     // const watchSubTasksArray = watch("subTasks");
//     // const controlledFields: Record<"id", string>[] = fields.map((field, index) => {
//     //     return {
//     //         ...field,
//     //         ...watchSubTasksArray[index]
//     //     };
//     // });
//     // useEffect(() => {
//     //     clearErrors('subTasks')
//     // }, [fields])
//     // // console.log(watch("subTasks"))

//     // const {
//     //     field: { value, onChange }
//     // } = useController({
//     //     control: control,
//     //     name: 'status'
//     // });
//     // const [title, setTitle] = useState("");
//     // const [description, setDescription] = useState("");
//     // const [subtasks, setSubtask] = useState([]);
//     // const [status, setSatus] = useState("");

//     let initialValues: FieldValues = {
//         status: "",
//         subTasks: [{ id: v4(), title: "" }],
//         title: "",
//         description: ""
//     }
//     const [values, setValue] = useState(initialValues)
//     const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault()
//         console.log(values)
//     }
//     return (
//         <PopupCard>
//             <div className="text-white p-6 w-full min-h-min">
//                 <div className="mb-5 flex justify-between w-full items-center">
//                     <h1 className="text-white font-medium text-base">Add New Task</h1>
//                     <button onClick={() => {
//                         if (router.query?.action == "add-task") {
//                             router.back()
//                         }
//                     }} className="bg-gray-700 p-1 rounded-full shadow-2xl">
//                         <HiXMark className="text-white" strokeWidth={1} size={15} />
//                     </button>
//                 </div>
//                 <form onSubmit={(e) => onSubmit(e)}>
//                     <div className="flex flex-col gap-5 mb-4">
//                         <div>
//                             <label htmlFor="title" className='block mb-2 text-base font-medium text-white'>Title</label>
//                             <input value={values.title} onChange={(e) => setValue({ ...values, title: e.target.value })} type="text" id="title" className="bg-transparent border text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g Take a coffee break" autoComplete='off' aria-autocomplete='none' autoCorrect='off' />
//                         </div>
//                         <div>
//                             <label htmlFor="description" className='block mb-2 text-base font-medium text-white'>Description</label>
//                             <textarea value={values.description} onChange={(e) => setValue({ ...values, description: e.target.value })} id="description" rows={5} className="block p-2.5 w-full text-sm text-gray-900 bg-transparent   rounded-lg border focus:ring-blue-500 focus:border-blue-500  border-gray-600 placeholder-gray-400 dark:text-white" placeholder="e.g It's always good to take a break. This 15 minute break will charge the battries a little."></textarea>
//                         </div>
//                         <div>
//                             <label htmlFor="sub_tasks" className='block mb-2 text-base font-medium text-white'>Subtasks</label>
//                             <ul className='flex flex-col gap-2 mb-4'>
//                                 {/* {controlledFields.map((field, index) => (
//                                     <li key={field.id} className='w-full flex items-center gap-3'>
//                                         <input {...register(`subTasks.${index}.title` as const)} type="text" id="title" className="bg-transparent border text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g Make coffee" autoComplete='off' aria-autocomplete='none' autoCorrect='off'></input>
//                                         <button onClick={() => {
//                                             remove(index)
//                                             setSubtaskCount(subtaskCount - 1)
//                                         }} className='text-white opacity-[.9]'>
//                                             <HiXMark size={20} />
//                                         </button>
//                                     </li>
//                                 ))} */}
//                                 {values.subTasks.map((task, index) => (
//                                     <li key={task.id} className='w-full flex items-center gap-3'>
//                                         <input value={values.subTasks[index].title} onChange={(e) => {
//                                             let data = values.subTasks
//                                             let isAvailable = values.subTasks.filter(x => x.id == task.id)
//                                             isAvailable[0].title = e.target.value
//                                             data[index].title = isAvailable[0].title
//                                             setValue({
//                                                 ...values,
//                                                 subTasks: [
//                                                     ...data
//                                                 ]
//                                             })
//                                         }} type="text" id="title" className="bg-transparent border text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g Make coffee" autoComplete='off' aria-autocomplete='none' autoCorrect='off'></input>
//                                         <button onClick={() => {
//                                             //  setSubtaskCount(subtaskCount - 1)
//                                             let data = values.subTasks
//                                             let removed = data.splice(0, index)
//                                             setValue({
//                                                 ...values,
//                                                 subTasks: [...removed]
//                                             })
//                                         }} className='text-white opacity-[.9]'>
//                                             <HiXMark size={20} />
//                                         </button>
//                                     </li>
//                                 ))}
//                             </ul>
//                             <button type="button" className='w-full text-site-purple justify-center inline-flex py-2 bg-white rounded-full text-[14.5px] font-medium items-center' onClick={() => {
//                                 // if (fields.length >= 4) {
//                                 //     setError("subTasks", { message: "You can only add 4 subtasks" })
//                                 // } else {
//                                 //     append({ title: '' }, { focusIndex: subtaskCount })
//                                 //     setSubtaskCount(subtaskCount + 1)
//                                 // }
//                                 let data = { id: v4(), title: "" }
//                                 setValue({
//                                     ...values,
//                                     subTasks: [
//                                         ...values.subTasks,
//                                         data
//                                     ]
//                                 })
//                             }}>
//                                 <HiPlusSm size={18} />
//                                 Add New Subtask
//                             </button>
//                             {/* {errors?.subTasks && (
//                                 <p className="text-red-700 text-sm mt-1">{errors?.subTasks.message}</p>
//                             )} */}
//                         </div>
//                         {/* <div>
//                             <label htmlFor="status" className='block mb-2 text-base font-medium text-white'>Status</label>

//                             <Listbox value={value} onChange={onChange}>
//                                 <div className="relative mt-1">
//                                     <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm text-gray-700 text-lg border border-white">
//                                         {value ? (
//                                             <span className="block truncate">
//                                                 {value}
//                                             </span>
//                                         ) : "Select Person"}
//                                     </Listbox.Button>
//                                     <Transition
//                                         as={Fragment}
//                                         leave="transition ease-in duration-100"
//                                         leaveFrom="opacity-100"
//                                         leaveTo="opacity-0"
//                                     >

//                                         <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

//                                             {columns.map((person, i) => (
//                                                 <Listbox.Option
//                                                     key={i}
//                                                     className={({ active }) =>
//                                                         `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-gray-400 text-amber-900' : 'text-gray-900'
//                                                         }`
//                                                     }
//                                                     value={person}
//                                                 >
//                                                     {person}
//                                                 </Listbox.Option>
//                                             ))}
//                                         </Listbox.Options>
//                                     </Transition>
//                                 </div>
//                             </Listbox>
//                         </div> */}

//                     </div>
//                     <button type="submit" className='text-white bg-purple-700 inline-flex w-full justify-center font-medium hover:bg-purple-800 px-3 py-2 rounded-full'>
//                         Create Task
//                     </button>
//                 </form>
//             </div>
//         </PopupCard>
//     )
// }

// export default AddTask;

