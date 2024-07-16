import { Toaster } from "sonner"
import Navbar from "./components/navbar"
import { ReferSection } from "./components/referSection"
import referrerImg from "@/assets/referrer.png"

function App() {
  return (
    <>
      <Toaster richColors />

      <Navbar />
      <div className="flex flex-col gap-10 items-center min-h-screen bg-blue-200 p-2 pt-20 ">
        <ReferSection />

        <div className="md:w-1/2">
          <img src={referrerImg} alt="" className="w-full h-full" />
        </div>

      </div>
    </>
  )
}

export default App
