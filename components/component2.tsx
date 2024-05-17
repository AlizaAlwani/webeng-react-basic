import React, { useEffect } from 'react'

export const Component2 = () => {
    useEffect(() => {
        console.log("Component 2 is mounted")
    })
  return (
    <div>
        Component 2

    </div>
  )
}
