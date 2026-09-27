import Mycard from '@/components/Mycard'
import Savebutton from '@/components/Savebutton'

import React from 'react'

function page() {
  return (
    <div >
      <h1 className='text-red-200' >Page is runing</h1>
      < Savebutton />
      < Mycard  />
    </div>
  )
}

export default page
