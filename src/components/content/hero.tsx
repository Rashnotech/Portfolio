import './icon.css'

const Main = () => {
    return (
        <>
            <main className="flex relative p-16 text-white">
                <section className="font-groteck p-20">
                    <h4 className="text-2xl">Fullstack Engineer</h4>
                    <h1 className="text-5xl">
                       Rashnotech
                    </h1>
                    <p className="text-base w-2/3 border-l pl-2 py-2 font-manrope border-slate-300 leading-5">
                        I'm a Fullstack Engineer with
                        a passion for building software
                        applications that solve 
                        real-world problems.
                    </p>
                </section>
                <section className="border w-3/4 h-full">
                    <img src="#" alt="my pix" className="w-full h-full object-cover" />
                </section>
                <div className="rounded-full absolute w-28 left-1/2 top-1/2">
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