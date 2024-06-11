import Navbar from "./nav";
import Addons from "./addons";
import { ChakraProvider } from "@chakra-ui/react";

const Header = () => {
    return (
        <>
            <header className="text-white font-manrope py-2 pr-3 items-center container border-slate-50 flex justify-between text-sm font-medium rounded-full bg-black/20">
                <h1 className="font-groteck text-xl ml-6">
                    Rashnotech
                </h1>
                <Navbar />
                <ChakraProvider>
                    <Addons />
                </ChakraProvider>
            </header>
        </>
    )
}

export default Header;