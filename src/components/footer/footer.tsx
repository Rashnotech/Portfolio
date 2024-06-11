import Navbar from "../header/nav";


const Footer = () => {
    return (
        <>
            <footer className="p-16 text-white">
                <div className="flex pt-2 border-t-pink-500 border-t-2 container items-center justify-between">
                    <h3 className="text-2xl font-groteck">Rashnotech</h3>
                    <Navbar />
                </div>
                <ul className="text-sm mt-5 font-manrope space-x-8 mb-1 flex items-center float-right">
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