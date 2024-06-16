import { Switch } from "@chakra-ui/react";

const Addons = () => {
    return (
        <>
            <nav className="flex items-center space-x-4">
                <span className="font-manrope text-xs">Dark</span>
                <Switch colorScheme="pink" size="md" />
                <span className="font-manrope text-xs">Light</span>
                <button className="rounded-full px-6 py-2 bg-slate-50/10">
                    Contact me
                </button>
            </nav>
        </>
    )
}

export default Addons;