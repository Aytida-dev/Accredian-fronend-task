import accredianSymbol from "@/assets/Link.png"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"

import ReferralForm from "./referralForm"

export const ReferSection = () => {
    return (
        <div className="relative overflow-hidden max-w-5xl rounded-2xl bg-student-image w-full h-full bg-no-repeat bg-cover bg-center flex flex-col gap-10 p-10">
            <div className="absolute z-10 inset-0 bg-gradient-to-b from-[#73adfe2e] via-[#1a73e846] to-[#1a73e872] pointer-events-none"></div>
            <div className="hidden sm:flex w-20 h-7 md:w-36 md:h-16 z-30 justify-center items-center bg-white rounded-lg">
                <img src={accredianSymbol} alt="Accredian Symbol" className="w-3/4 h-1/2 object-cover" />
            </div>
            <div className="text-white w-full h-full z-20 flex flex-col gap-16">
                <div className="text-xl sm:text-2xl md:text-4xl font-semibold leading-snug">
                    <span className="text-blue-900">Let's Learn and Earn , </span>
                    <br />
                    With our referral program
                </div>
                <div className=" text-sm sm:text-lg md:text-xl font-normal leading-snug">
                    Get a chance to win up to 10,000 INR 💰
                    <br />
                    Click refer now to get started
                </div>
            </div>
            <div className=" z-20 w-full flex justify-center sm:justify-start">
                <Dialog>
                    <DialogTrigger className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white flex justify-between items-center px-8 py-2 shadow-md hover:scale-105 transition-all">
                        <span className="text-xl font-semibold ">Refer now</span>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className="text-center">Referrals</DialogTitle>
                            <DialogDescription className="text-center">Fill the form to refer a friend</DialogDescription>
                        </DialogHeader>

                        <ReferralForm />

                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}