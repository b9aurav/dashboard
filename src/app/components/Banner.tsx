import React from 'react'
import BoltIcon from '@mui/icons-material/Bolt';

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className="bg-[#282828] text-white p-8 grid grid-cols-1 md:grid-cols-4 text-center md:text-left rounded-xl m-4">
        <div className='col-span-3'>
      <h2 className="text-xl font-bold mb-2">Unlock premium stats</h2>
      <p className="mb-4">Get up to 10TB of storage for a limited time</p>
      </div>
      <div className='flex md:justify-end justify-center items-center w-full h-full'>
      <button className="bg-white text-[#282828] px-4 py-2 rounded-[20px] hover:bg-gray-200">
        <BoltIcon />
        Upgrade
      </button>
      </div>
    </div>
  )
}

export default Banner