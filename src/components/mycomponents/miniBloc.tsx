import React from 'react'

export default function MiniBloc() {
  return (
    <div className="flex w-60 my-4">
        <div className="w-20 h-20 bg-cyan-300"></div>
        <div className="flex flex-col pl-2">
            <p className='text-md text-blue-600 uppercase font-bold dark:text-gray-300'>nom du produit</p>
            <p className='text-md dark:text-blue-600 text-gray-500'>18100 F <s className='text-sm pl-2 text-red-500'>2000 F</s></p>
        </div>
    </div>
  )
}
