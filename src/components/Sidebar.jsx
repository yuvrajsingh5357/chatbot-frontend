import React from 'react'
import ChatLinks from './ChatLinks'

function Sidebar() {
    // const [sidebarOpen, setSidebarOpen] = useState(false)


  return (
    <div className='h-screen bg-gray-900 mt-5 w-1/4'>
        <ChatLinks />
    </div>
  )
}

export default Sidebar