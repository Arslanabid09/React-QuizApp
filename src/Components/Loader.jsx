import React, { useEffect } from 'react'
import { DotLoader } from 'react-spinners'

const Loader = ({loading}) => {
  return (
    <div className='bg-neutral-700 h-screen flex justify-center items-center'>
        <DotLoader
        color={'blue'}
        loading={loading}
        cssOverride={''}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
        />

    </div>
  )
}

export default Loader