import React from 'react'
import MiniBloc from './miniBloc'

export default function BLocPhare() {
  return (
    <section className="flex w-full justify-between items-center mt-10 px-4 py-2 ">
    <div className="flex flex-col">
      <div className="flex flex-col py-1 justify-center m-0">
          <h3 className="mb-4">Assortissement</h3>
          <hr className="bg-amber-300 w-20" />
          <hr className="bg-gray-800"/>
      </div>
      <MiniBloc />
      <MiniBloc />
      <MiniBloc />
    </div>
    <div className="flex flex-col">
      <div className="flex flex-col py-1 justify-center m-0">
          <h3 className="mb-4">Assortissement</h3>
          <hr className="bg-amber-300 w-20" />
          <hr className="bg-gray-800"/>
      </div>
      <MiniBloc />
      <MiniBloc />
      <MiniBloc />
    </div>
    <div className="flex flex-col">
      <div className="flex flex-col py-1 justify-center m-0">
          <h3 className="mb-4">Assortissement</h3>
          <hr className="bg-amber-300 w-20" />
          <hr className="bg-gray-800"/>
      </div>
      <MiniBloc />
      <MiniBloc />
      <MiniBloc />
    </div>
    <div className="flex bg-amber-300 w-60 h-80"></div>
  </section>
  )
}
