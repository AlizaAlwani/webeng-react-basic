import { UseEffectComponents } from '@/components/useEffectComponents'
import { UseStateComponent } from '@/components/useStateComponents'
import React from 'react'

const Home = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      {/* <UseStateComponent/> */}
      <UseEffectComponents/>
    </div>
  )
}

export default Home
