import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Dashboard({children}) {
  return (
    <div>
      Dashboard
      <UserButton/>
        {children}
    </div>
  )
}

export default Dashboard