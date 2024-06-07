import Navbar from "./nav";
import Addons from "./addons";

const Header = () => {
    return (
        <>
            <header className="text-white font-manrope py-2 pr-3 items-center container ring-slate-50 ring-1 flex justify-between text-sm font-medium rounded-full bg-black/20 ">
                <h1 className="font-groteck text-xl ml-6">
                    Rashnotech
                </h1>
                <Navbar />
                <Addons />
            </header>
        </>
    )
}

export default Header;