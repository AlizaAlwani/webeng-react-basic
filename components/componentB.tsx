import React from 'react'
import ComponentC from './componentC';

 
type  ComponentType = {
    counter: number;
    setcounter: React.Dispatch<React.SetStateAction<number>>
}
 
const ComponentB = ({counter, setcounter}: ComponentType) => {
  return (
    <div className='border border-black bg-red-700 h-[75%] w-[75%] rounded-lg items-center justify-center flex flex-col'>
        ComponentB
        <ComponentC counter= {counter} setcounter= {setcounter} />
     
    </div>
  )
}
 
export default ComponentB