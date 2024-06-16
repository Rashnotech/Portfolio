import Navbar from "../header/nav";


const Footer = () => {
    return (
        <>
            <footer className="md:p-16 p-10 text-white">
                <div className="flex pt-2 border-t-pink-500 border-t-2 text-xs md:text-sm container items-center justify-between">
                    <h3 className="text-2xl font-groteck">Rashnotech</h3>
                    <div className="hidden md:block">
                        <Navbar />
                    </div>
                    
                </div>
                <ul className="md:text-sm text-xs md:mt-5 font-manrope space-x-3 md:space-x-8 mb-1 flex items-center float-right">
                    <li>
                        &copy; {new Date().getFullYear()} &nbsp;
                        Rashnotech. All right reserved
                    </li>
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                </ul>
            </footer>
        </>
    )
}

export default Footer;