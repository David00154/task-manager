import TaskColumn, { NewTaskColumn } from '@/components/TaskColumn'
import { State, useGlobal } from '@/contexts/globalContext'
import BaseLayout from '@/layouts/BaseLayout'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { HiOutlineSquaresPlus } from "react-icons/hi2"
import { useRouter } from "next/router"

const Home: NextPage = () => {
  const { state, setState } = useGlobal()
  const { push } = useRouter()
  return (
    <>
      <Head>
        <title>Task Manager</title>
      </Head>
      <BaseLayout>
        <main className='col-span-4 bg-light-secondary opacity-[1] w-full'>
          <header className="h-16 py-9 bg-light-primary  border-b border-l border-b-white/20 border-l-white/20 w-full px-7 flex items-center justify-between">
            <h1 className='text-white text-xl font-medium'>Platform Launch</h1>
            {/* bg-site-purple */}
            {/* <button onClick={() => setState((state: State) => ({ ...state, enableAddTaskPopup: !state.enableAddTaskPopup }))} className='text-white bg-purple-700 hover:bg-purple-800 text-base font-medium px-4 py-3 rounded-lg flex items-center gap-1'> */}
            <button onClick={() => push('/?action=add-task')} className='text-white bg-purple-700 hover:bg-purple-800 text-base font-medium px-4 py-3 rounded-lg flex items-center gap-1'>
              <HiOutlineSquaresPlus size={20} />
              Add New Task
            </button>
          </header>
          <div className="px-7 overflow-x-hidden overflow-y-auto h-[93vh] w-full mb-5">

            <Splide
              aria-label='My Tasks Columns'
              className='' options={{
                perPage: 4,
                drag: true,
                perMove: 1,
                arrows: false,
                pagination: false,
                autoWidth: true,
                start: 5,
                gap: "20px",
                height: "93vh",
                useScroll: true,
                focus: 'center',
                keyboard: "global",
                fixedHeight: "90vh"
                // autoHeight: true
              }}>
              {/* <SplideTrack> */}
              <TaskColumn colorScheme='yellow' columnName='Todo' tasks={[
                {
                  name: "Build Ui for onboarding"
                },
                {
                  name: "Build UI for search"
                },
                {
                  name: "Build settings UI"
                },
                {
                  name: "QA and test all major user journeys"
                },
              ]} />
              <TaskColumn colorScheme='green' tasks={[
                {
                  name: "Design settings and search pages"
                },
                {
                  name: "Add account management endpoints"
                },
                {
                  name: "Design onboarding flow"
                },
                {
                  name: "Add search enpoints"
                },
                {
                  name: "Add authentication endpoints"
                },
                {
                  name: "Research pricing points of various competitors and trial different business models"
                },
              ]} columnName='Doing' />
              <TaskColumn colorScheme='green' tasks={[
                {
                  name: "Design settings and search pages"
                },
                {
                  name: "Add account management endpoints"
                },
                {
                  name: "Design onboarding flow"
                },
                {
                  name: "Add search enpoints"
                },
                {
                  name: "Add authentication endpoints"
                },
                {
                  name: "Research pricing points of various competitors and trial different business models"
                },
              ]} columnName='Doing' />
              <TaskColumn colorScheme='#fff' tasks={[
                {
                  name: "Conduct 5 wireframe tests"
                },
                {
                  name: "Create wireframe prototype"
                },
                {
                  name: "Review result of useability test and iterate"
                },
                {
                  name: "Create paper prototype and conduct 10 usability tests with potential customers"
                },
                {
                  name: "Market discovery"
                },
                {
                  name: "Competitor analysis"
                },
                {
                  name: "Research the market"
                },
                {
                  name: "Competitor analysis"
                },
              ]} columnName='Done' />
              {/* <SplideSlide>

              </SplideSlide>
              <SplideSlide>

              </SplideSlide> */}
              <SplideSlide>
                <NewTaskColumn />
              </SplideSlide>
            </Splide>
          </div>
        </main>
      </BaseLayout>
    </>
  )
}

export default Home
