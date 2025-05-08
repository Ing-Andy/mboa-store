"use client"
import { Telegram, WhatsApp } from '@mui/icons-material'
import { Facebook, Headphones, Instagram, LucidePlane, Youtube } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
    const [value,setValue] = useState<string>('')
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
  return (
    <footer className="flex flex-col justify-end items-center w-full h-[450px] mt-8 pb-0">
        <div className="flex justify-around items-center w-full dark:text-black bg-amber-300 h-18">
            <div className="flex items-center ">
                <LucidePlane className='w-8 h-8 mr-4' />
                <p className="text-xl font-medium">Inscivez vouz a <br/><span className='font-bold uppercase'>mboa devellopement</span></p>
            </div>
            <div className="flex w-[300px]">
                <span className=" text-md">... et <span className='ml-2 font-bold'>recevez 5% de reduction sur vos achats</span></span>
            </div>
            <div className="flex w-[400px] h-12 rounded-full overflow-hidden">
                <input type="email"
                       value={value}
                       onChange={handleChange}
                       placeholder='Entrez votre e-mail'
                       className='border-none outline-none pl-4 bg-white dark:bg-[#222] dark:text-gray-300 w-[70%]'
                />
                <button className='bg-[#444] w-[30%] border-none text-white'>S'abonner</button>
            </div>
        </div>
        <div className="flex justify-around items-center w-full  dark:text-gray-200">
            <div className="flex flex-col text-gray-500 ">
                <div className="h20  mb-4 mt-8">s</div>
                <div className="flex my-4">
                    <Headphones className='w-14 h-14 text-amber-300' />
                    <div className="flex flex-col">
                        <span>des question ? appelez nous 24/24,7/7</span>
                        <p>(+237) 6 58 43 13 59, (+237) 6 20 13 68 12</p>
                    </div>
                </div>
                <div className="flex flex-col my-4">
                    <p className='text-sm font-bold'>coordonner</p>
                    <span className='capitalize'>deido nouvelle route grand moullin, douala</span>
                </div>
                <div className="flex *:mr-4  mt-8 mb-6">
                    <Facebook className='w-8 h-8'/>
                    <Instagram className='w-8 h-8'/>
                    <Youtube className='w-8 h-8' />
                </div>
            </div>
            <div className="flexflex-colitems-centerpx-2pt-1 ">
                <h5 className='text-bold mb-4' >Trouver rapidement</h5>
                <ul className=" pl-2 *:hover:text-red-400 *:hover:scale-110 *:duration-500 *:hover:pl-2 ">
                    <li>ordinateur</li>
                    <li>ordinateur</li>
                    <li>ordinateur</li>
                    <li>ordinateur</li>
                    <li>ordinateur</li>
                    <li>ordinateur</li>
                    <li>ultraBooks</li>
                </ul>
            </div>
            <div className="flexflex-colitems-centerpx-2pt-1 ">
            <h5 className='text-bold mb-4' >Trouver rapidement</h5>
                <ul className=" pl-2 *:hover:text-red-400 *:hover:scale-110 *:duration-500 *:hover:pl-2 ">
                    <li>ordinateur</li>
                    <li>ordinateur</li>
                    <li>ordinateur</li>
                    <li>ordinateur</li>
                    <li>ordinateur</li>
                    <li>ordinateur</li>
                    <li>ultraBooks</li>
                </ul>
            </div>
            <div className="flexflex-colitems-centerpx-2pt-1 ">
            <h5 className='text-bold mb-4' >Trouver rapidement</h5>
                <ul className=" pl-2 *:hover:text-red-400 *:hover:scale-110 *:duration-500 *:hover:pl-2 ">
                    <li>ordinateur</li>
                    <li>ordinateur</li>
                    <li>ordinateur</li>
                    <li>ordinateur</li>
                    <li>ordinateur</li>
                    <li>ordinateur</li>
                    <li>ultraBooks</li>
                </ul>
            </div>
            <div className="flexflex-colitems-centerpx-2pt-1 ">
            <h5 className='text-bold mb-4' >Trouver rapidement</h5>
                <ul className=" pl-2 *:hover:text-red-400 *:hover:scale-110 *:duration-500 *:hover:pl-2 ">
                    <li>ordinateur</li>
                    <li>ordinateur</li>
                    <li>ordinateur</li>
                    <li>ordinateur</li>
                    <li>ordinateur</li>
                    <li>ordinateur</li>
                    <li>ultraBooks</li>
                </ul>
            </div>
        </div>
        <div className="flex w-full items-center h-8 border-2 bottom-0">
            <p> © 2025 fais par andy </p>
        </div>
    </footer>
  )
}
