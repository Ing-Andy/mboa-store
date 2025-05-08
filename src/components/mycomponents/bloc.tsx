import { ChevronRight } from '@mui/icons-material'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { Heart } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export default function Bloc() {
    return (
        <div className="flex flex-col justify-start group h-full hover:z-10 Shadow1 ">
            <Card className='w-44 min-h-60 max-h-60 h-60 mt-0 rounded-none group-hover:shadow-none' >
                <CardHeader className=' gap-0 '>
                    <CardTitle className='inter text-[12px] ' >Marque </CardTitle>
                    <CardDescription className='text-blue-500 inter text-[14px] font-bold ' >En magasin </CardDescription>
                </CardHeader>
                <CardContent >
                    <div className="flex bg-blue-800 w-full h-20"></div>
                </CardContent>
                <CardFooter className='flex justify-between items-center' >
                    <div className="flex flex-col">
                        <p className='font-bold'> 15 000 F</p>
                        <s className='text-sm text-red-500'>18 000 f</s>
                    </div>
                    <div className="flex justify-center items-center rounded-full hover:bg-amber-300 w-8 h-8 hover:text-red-400 ">
                        <ChevronRight />
                    </div>
                </CardFooter>
            </Card>
            <div className="flex justify-center items-center h-full gap-2">
                <Dialog >
                    <DialogTrigger className='' > <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999"><path d="M466-170v-190q0-6 4-10t10-4q6 0 10 4t4 10v190l90-90q4-4 9.5-4.5T604-260q5 5 5 10t-5 10L501-137q-5 5-10 7t-11 2q-6 0-11-2t-10-7L356-240q-4-4-4.5-9.5T356-260q5-5 10-5t10 5l90 90ZM170-466l90 90q4 4 4.5 9.5T260-356q-5 5-10 5t-10-5L137-459q-5-5-7-10t-2-11q0-6 2-11t7-10l103-103q4-4 9.5-4.5T260-604q5 5 5 10t-5 10l-90 90h190q6 0 10 4t4 10q0 6-4 10t-10 4H170Zm620 0H600q-6 0-10-4t-4-10q0-6 4-10t10-4h190l-90-90q-4-4-4.5-9.5T700-604q5-5 10-5t10 5l103 103q5 5 7 10t2 11q0 6-2 11t-7 10L720-356q-4 4-9.5 4.5T700-356q-5-5-5-10t5-10l90-90ZM466-790l-90 90q-4 4-9.5 4.5T356-700q-5-5-5-10t5-10l103-103q5-5 10-7t11-2q6 0 11 2t10 7l103 103q4 4 4.5 9.5T604-700q-5 5-10 5t-10-5l-90-90v190q0 6-4 10t-10 4q-6 0-10-4t-4-10v-190Z"/></svg> </DialogTrigger>
                    <DialogContent className='flex  h-80'>
                        <div className="h-full w-[30%] bg-blue-600">sdsddsadasdas   dsfsfsdf v s sdv</div>
                        <div className="flex flex-col justify-between w-[70%] h-full gap-2">
                            <header>
                                <p className='font-bold text-2xl'>Titre du film</p>
                                <p className='font-medium text-xs inetr text-gray-400'>maison d'edition</p>
                            </header>
                            <section className="inter mt-[-4px]">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi sed vero deserunt mollitia aliquam. Fuga eaque veritatis exercitationem dolorem, odit assumenda sapiente laboriosam veniam facilis, ea molestiae reprehenderit quis amet.
                            </section>
                            <div className="flex gap-2">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"></path></svg></AvatarFallback>
                                </Avatar>
                                <p className='uppercase h-full flex items-end'>andy l'ecrivain</p>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
                <Heart className='text-gray-400'/>
            </div>
        </div>
    )
}
//   return (
//     <div className="flex flex-col justify-around items-center h-[260px] w-[175px] px-2 py-1 hover:h-[300px] hover:shadow1 z-30 duration-500 group">
//         <div className="flex flex-col w-full">
//             <h6 className="text-gray-400 text-sm text-shadow-md uppercase  w-full">la maison d'edition</h6>
//             <p className='text-blue-400 dark:text-gray-300 text-lg  w-full'>nombre de vente </p>
//         </div>

//         <div className="flex bg-cyan-400 h-[75px] w-[75px]"></div>

//         <div className="flex justify-between w-full">
//             <div className="flex flex-col">
//                 <p className="text-red-500 text-xl">10800 F</p>
//                 <p className="text-sm text-gray-400"><s>12800 F</s></p>
//             </div>
//             <div className="rounded-full w-10 h-10 flex justify-center items-center duration-500 group-hover:bg-amber-300 "><ChevronRight /></div>
//         </div>
//     </div>
//   )
// }