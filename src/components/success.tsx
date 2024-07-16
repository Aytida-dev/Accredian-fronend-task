import ConfettiExplosion from "react-confetti-explosion"
import { toast } from "sonner"

export default function Success({ referralCode }: { readonly referralCode: String }) {
    function copyText() {
        navigator.clipboard.writeText(referralCode as string)
        toast.success("Referral code copied to clipboard")
    }

    return (
        <div className="flex flex-col items-center gap-6 py-10 px-4 bg-white shadow-lg rounded-lg max-w-lg mx-auto">
            <ConfettiExplosion zIndex={200} />
            <div className="text-3xl font-semibold text-blue-900 mb-4">
                Referral Created Successfully
            </div>
            <div className="text-lg font-medium text-gray-700 mb-2">
                Your referral code is:
            </div>
            <div className="text-3xl font-bold text-blue-600 bg-blue-50 py-2 px-4 rounded-lg cursor-pointer" onClick={() => copyText()}>
                {referralCode}
            </div>
            <div className="text-sm font-medium text-gray-400 mb-2">
                You will receive shortly receive a confirmation mail

            </div>
        </div>
    )
}
