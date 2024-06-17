import { Switch } from "@chakra-ui/react";

const Addons = () => {
    return (
        <>
            <nav className="flex items-center space-x-4">
                <span className="font-manrope text-xs">Dark</span>
                <Switch colorScheme="pink" size="sm" />
                <span className="font-manrope text-xs">Light</span>
                <a href="#contact" className="rounded-full px-6 py-2 hover:bg-black/75 bg-slate-50/10">
                    Contact me
                </a>
            </nav>
        </>
    )
}

export default Addons;