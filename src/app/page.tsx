import Header from "@/components/mycomponents/header";
import AsidePage from "@/components/mycomponents/asidePage";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Bloc from "@/components/mycomponents/bloc";
import MiniBloc from "@/components/mycomponents/miniBloc";
import BLocPhare from "@/components/mycomponents/bLocPhare";
import Footer from "@/components/mycomponents/footer";


export default function page() {
  return (
    <div className="flex flex-col justify-start items-center w-full h-full ">
        <Header />
        <div className="flex items-center justify-center h-[400px] w-full bg-white">
          <Carousel className="h-full w-full flex items-center justify-center overflow-hidden">
            <CarouselContent className="flex  items-center w-[100vw] h-[100vh] m-0 headerAffiche ">
              <CarouselItem className="flex items-center justify-start">
                {/* <div > */}
                <div className="flex flex-col flex-wrap justify-around h-[300px] items-center w-[50%] backdrop-blur-sm">
                  <span className="text-blue-400 text-xl">Achetez  pour obtenir ce que vous aimez </span>
                  <p className="text-black text-3xl text-center"> Des livres <br/> de <span className="text-shadow-2xs uppercase font-bold">devellopement personnels</span> a votre disposition en un click <br />quoi de mieux que d'investire sur vous meme</p>
                  <Button className="bg-amber-300 text-black px-8 py-4 duration-500 hover:bg-blue-400">Achetez maintenant</Button>
                {/* </div> */}
              </div>
              </CarouselItem>
              {/* <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem> */}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <main className="flex w-full justify-around mt-10 ">
          <aside className="flex flex-col shadow-sm w-[20%]">
                <AsidePage />
                <div className="flex bg-cyan-500 w-full h-[300px] mt-20"></div>
          </aside>
          <section className="flex flex-col w-[75%] ">
            <div className="flex flex-col py-1 justify-center m-0">
                  <h3 className="mb-4 text-2xl">Produit phares du mois </h3>
                  <hr className="bg-amber-300 mb-[-1px] w-[20%]" />
                  <hr className="bg-gray-800"/>
              </div>
              <ul className=" flex flex-wrap *:h-60 *:hover:h-68 *:duration-300 *:hover:z-20 *:ease-in-out *:mr-2 *:overflow-hidden ">
                <li className="hover:shadow-Shadow1"><Bloc /></li>
                <li><Bloc /></li>
                <li><Bloc /></li>
                <li><Bloc /></li>
                <li className="border-none"><Bloc /></li>
                <li><Bloc /></li>
                <li><Bloc /></li>
                <li><Bloc /></li>
                <li><Bloc /></li>
                <li className="border-none"><Bloc /></li>
                <li><Bloc /></li>
                <li><Bloc /></li>
                <li><Bloc /></li>
                <li><Bloc /></li>
                <li className="border-none"><Bloc /></li>
              </ul>
          </section>
        </main>
        <BLocPhare />
        <section className="w-full flex Shadow justify-center items-center px-4 relative py-4">
          <Carousel className="max-w-6xl  w-full px-4">
            <CarouselContent className="-ml-1">
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 flex justify-center text-4xl text-gray-400 uppercase">netflix</CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 flex justify-center text-4xl text-gray-400 uppercase">orange</CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 flex justify-center text-4xl text-gray-400 uppercase">mtn</CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 flex justify-center text-4xl text-gray-400 uppercase">brasserie</CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 flex justify-center text-4xl text-gray-400 uppercase">kadie</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
        <Footer />
    </div>
  )
}

