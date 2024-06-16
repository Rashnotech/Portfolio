import Navbar from "./nav";
import Addons from "./addons";
import { useDisclosure, DrawerBody, Drawer, DrawerOverlay, DrawerCloseButton, DrawerContent } from "@chakra-ui/react";
import './hamburger.css';
import { useState } from "react";

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [active, ] = useState(isOpen);

    return (
        <>
            <header className="text-white sticky top-10 z-20 font-manrope py-2 pr-3 items-center container border border-slate-50 flex justify-between text-sm font-medium rounded-full bg-black/20">
                <h1 className="font-groteck text-lg md:text-xl ml-6">
                    Rashnotech
                </h1>
                <div className="hidden md:flex items-center space-x-4">
                    <Navbar />
                    <Addons /> 
                </div>   
                
                <div className="md:hidden block">
                    <button onClick={onOpen} className={`hamburger z-40 hamburger--elastic ${active && 'is-active'}`} type="button"
                            aria-label="Menu" aria-controls="navigation">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>    
            </header>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent bgColor={'black'}>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Hamburger />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

const Hamburger = () => {
    return (
        <>
            <ul className="text-2xl mt-8 space-y-4 font-groteck text-white">
                <li><a href='#'>Home</a></li>
                <li><a href='#projects'>Project</a></li>
                <li><a href='#blog'>Blog</a></li>
                <li><a href='#contact'>Contact us</a></li>
            </ul>
        </>
    )
}

export default Header;