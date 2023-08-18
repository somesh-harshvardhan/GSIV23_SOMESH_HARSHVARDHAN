import Navbar from '@/components/details/Navbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default layout