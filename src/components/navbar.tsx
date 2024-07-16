export default function Navbar() {
    return (
        <div className="absolute z-30 w-full h-16 bg-white flex justify-center sm:justify-between items-center px-10 shadow-lg">
            <div className=" text-2xl font-semibold text-blue-600 cursor-pointer" onClick={() => { window.location.reload() }}>accredian</div>
            <div className="hidden sm:flex gap-10">
                <div className="text-lg font-semibold text-blue-900 hover:text-blue-800 hover:underline transition-all cursor-pointer">Home</div>
                <div className="text-lg font-semibold text-blue-900 hover:text-blue-800 hover:underline transition-all cursor-pointer">About</div>
                <div className="text-lg font-semibold text-blue-900 hover:text-blue-800 hover:underline transition-all cursor-pointer">Contact</div>
            </div>
        </div>
    )
}