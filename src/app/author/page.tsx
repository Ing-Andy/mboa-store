
import Footer from "@/components/mycomponents/footer"
import Header from "@/components/mycomponents/header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Facebook, Instagram } from "lucide-react"

export default function Author() {
  return (
    <div className="flex flex-col">
        <Header />
          <main className="flex w-full border-2 my-6 min-h-[500px] px-4">
            <span></span>
          </main>
        <Footer />
    </div>
  )
}
