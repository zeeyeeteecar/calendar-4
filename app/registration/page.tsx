import React from 'react'

import SearchClass from './components/SearchClass'
import SearchMember from './components/SearchMember'

export default function registration() {

  


  return (
    <div className='w-screen h-screen border-4 flex flex-row'>
      <div className="w-1/3 border-2 m-1">
        <SearchMember />
      </div>
      <div className="w-1/3 border-2 m-1">
        <SearchClass />
      </div>
      <div className="w-1/3 border-2 m-1">

      </div>

    </div>
  )
}
