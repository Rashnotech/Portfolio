import './icon.css'
import Hero from '../../assets/images/hero.png'

const Main = () => {
    return (
        <>
            <main className="flex md:flex-row flex-col-reverse relative p-12 md:p-16 mb-20 text-white">
                <section className="font-groteck md:p-20">
                    <h4 className="text-lg md:text-2xl">Fullstack Engineer</h4>
                    <h1 className="text-4xl md:text-5xl">
                       Rashnotech
                    </h1>
                    <p className="text-sm md:w-2/3 border-l pl-3 py-5 md:py-2 font-manrope border-slate-300 leading-5">
                        I'm a Fullstack Engineer with
                        a passion for building software
                        applications that solve 
                        real-world problems.
                    </p>
                </section>
                <section className="md:block hidden">
                    <img src={Hero} alt="Rashnotech" className="w-full h-full object-contain object-top" />
                </section>
                <div className="rounded-full absolute w-28 right-4 left-1/3 md:left-1/2 top-3/4 md:top-1/4">
                    <button className="w-24 absolute rounded-full animate-ping h-24 p-4 bg-pink-500/70"></button>
                    <button className="absolute rounded-full hover:bg-pink-500/35 bg-pink-500 w-24 h-24 p-4 flex flex-col items-center">
                        <span className="tabler--cloud-download"></span>
                        <span className="font-semibold font-groteck text-2xl text-white">CV</span>
                    </button>
                </div>
                
            </main>
        </>
    )
}

export default Main