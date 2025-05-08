"use client"
import { Heart, MapPinIcon, Menu, Moon, Settings, ShoppingBag, Sun } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ContactMail, Mail, Map, Phone, Search } from "@mui/icons-material";
import { useState } from "react";


export default function header() {
    const { theme, setTheme } = useTheme();
    const [value,setValue] = useState<string>('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

  return (
    <div className="flex flex-col items-center justify-between w-full border-2 h-[175px]">
        <div className="flex w-full justify-between items-center relative h-8 px-2 shadow bg-gray-200 dark:bg-black dark:text-gray-400">
            <ul className="flex gap-4 *:flex *:items-center">
                <li><Phone  className="dark:text-yellow-300 w-4 h-6" />Bienvenue chez Worldwide</li>
                <li><Mail  className="dark:text-yellow-300 w-4 h-6" />Electronics Store</li>
            </ul>

            <div className="flex justify-between w-[550px]">
                <ul className="flex gap-4 *:flex *:items-center">
                    <li><MapPinIcon className="dark:text-yellow-300 w-4 h-6" /><Link href=''>Emplacement du magasin</Link></li>
                    <li><ContactMail className="dark:text-yellow-300 w-4 h-6" /><Link href=''>contactez nous</Link> ou <Link href=''>inscrivez vous</Link></li>
                </ul>
                
                <Accordion type="single" collapsible >
                    <AccordionItem value="item-1">
                        <AccordionTrigger><Sun  className="dark:text-amber-300"/></AccordionTrigger>
                        <div className="absolute w-12 flex flex-col bg-amber-50 dark:bg-black ">
                            <AccordionContent> <Sun  className="dark:text-amber-300 cursor-pointer text-center" onClick={()=> {setTheme('light')}}/></AccordionContent>
                            <AccordionContent> <Moon className="dark:text-white cursor-pointer text-center" onClick={()=> {setTheme('dark')}}/></AccordionContent>
                            <AccordionContent><Settings className="cursor-pointer text-center" onClick={()=> setTheme('system')} /></AccordionContent>
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
        <div className="flex justify-between items-center w-full px-4 ">
            <div className="flex w-8"></div>
            <div className="flex items-center mt-4">
                <Menu className="text-gray-400" width='50px'/>
                <div className="flex border-2 rounded-full  border-gray-200 overflow-hidden dark:border-amber-300">
                    <input 
                        type="text"
                        placeholder="votre rechercher"
                        value={value}
                        onChange={handleChange}
                        className="dark:bg-black dark:text-gray-300 w-[500px] h-10  px-4 border-none  focus:outline-none focus:bg-[#ddd] dark:border-amber-300 dark:focus:bg-[#333] dark:t    ext-black"
                    />
                    <button className="bg-gray-300 w-20 dark:bg-amber-300 text-black"><Search /></button>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Heart className="dark:text-gray-400"/>
                <ShoppingBag className="dark:text-gray-400"/>
            </div>
        </div>
        <div className="flex justify-between items-center px-4 bg-amber-300 text-black w-[90%] h-12 z-20 rounded-md mb-[-20px] ">
            <ul className="flex items-center gap-2">
                <li><Link href='' className="hover:underline duration-300">Acceuil</Link></li>
                <li><Link href='' className="hover:underline duration-300">marque et vedette</Link></li>
                <li><Link href='' className="hover:underline duration-300">style tendance</Link></li>
                <li><Link href='' className="hover:underline duration-300">carte cadeaux</Link></li>
            </ul>
            <p>livraison gratuite pour les commande de 100k</p>
        </div>
    </div>
    )
}
