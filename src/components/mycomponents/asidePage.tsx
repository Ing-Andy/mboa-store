import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export default function AsidePage() {
  return (
    <div className="flex p-2 shadow-monShadow1 rounded-sm dark:shadow-monShadow1-none dark:bg-[#333] dark:text-gray-300">
        <div className="flex flex-col w-full">
            <div className="flex flex-col py-1 justify-center m-0">
                <h3 className="mb-4">Assortissement</h3>
                <hr className="bg-amber-300 mb-[-1px] w-20" />
                <hr className="bg-gray-800"/>
            </div>
            <ul className="listeAsidePage flex flex-col ">
                <li>
                    <Link href=''>valeur du jour</Link>
                </li>
                <hr className="bg-gray-800"/>
                <li>
                    <Link href=''>top 100 des offres</Link>
                </li>
                <hr className="bg-gray-800"/>
                <li>
                    <Link href=''>nouveautes</Link>
                </li>
                <hr className="bg-gray-800"/>
                <li>
                    <Accordion type="single" collapsible className="w-full h-full flex items-center" >
                        <AccordionItem value="items-1" className="w-full" >
                            <AccordionTrigger className="m-0 p-0 w-[100%] flex items-center"> Devellopement personnels </AccordionTrigger>
                            <AccordionContent className="pl-2 mt-4"><Link href=''/>connaitre ses atouts</AccordionContent>
                            <AccordionContent className="pl-2"><Link href=''/>connaitre ses failles</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </li>
                <hr className="bg-gray-800"/>
                <li>
                    <Accordion type="single" collapsible className="w-full h-full flex items-center" >
                        <AccordionItem value="items-1" className="w-full" >
                            <AccordionTrigger className="m-0 p-0 w-[100%] flex items-center"> Devellopement du buss </AccordionTrigger>
                            <AccordionContent className="pl-2 mt-4"><Link href=''/>connaitre ses atouts</AccordionContent>
                            <AccordionContent className="pl-2"><Link href=''/>connaitre ses failles</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </li>
                <hr className="bg-gray-800"/>
                <li>
                    <Accordion type="single" collapsible className="w-full h-full flex items-center" >
                        <AccordionItem value="items-1" className="w-full" >
                            <AccordionTrigger className="m-0 p-0 w-[100%] flex items-center"> Devellopement des faculte </AccordionTrigger>
                            <AccordionContent className="pl-2 mt-4"><Link href=''/>connaitre ses atouts</AccordionContent>
                            <AccordionContent className="pl-2"><Link href=''/>connaitre ses failles</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </li>
                <hr className="bg-gray-800"/>
            </ul>
        </div>
    </div>
  )
}
