const Main = () => {
    return (
        <>
            <main className="flex relative">
                <section className="font-groteck p-20">
                    <h4 className="text-2xl">Fullstack Engineer</h4>
                    <h1 className="text-6xl font-medium">
                       Rashnotech
                    </h1>
                    <p className="text-base w-1/2 border-l pl-4 py-2 font-manrope border-slate-300 leading-5">
                        I'm a Fullstack Engineer with
                        a passion for building software
                        applications that solve 
                        real-world problems.
                    </p>
                </section>
                <section>

                </section>
                <div className="rounded-full absolute w-28 left-1/2 top-1/2">
                    <button className="w-24 absolute rounded-full animate-ping h-24 p-4 bg-sky-500/70"></button>
                    <button className="absolute rounded-full bg-sky-500 border w-24 h-24 p-4">
                        <img src="/images/arrow-down.svg" className="w-6 h-6" alt="arrow-down" />
                        <span className="font-semibold font-groteck text-2xl text-white">CV</span>
                    </button>
                </div>
                
            </main>
        </>
    )
}

export default Main