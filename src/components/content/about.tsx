const About = () => {
    return (
        <>
            <section className="flex container justify-center space-x-5 items-center relative">
                <article className="border w-60 h-60  rounded-full">
                    <img src="./" alt="about" />
                </article>
                <article className="font-manrope w-1/2 border text-sm font-medium leading-7"> 
                    <p>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Expedita culpa optio unde 
                        blanditiis ipsum. Doloribus molestias maiores
                        illum vel asperiores possimus quos 
                        dignissimos tenetur repellat eveniet. Id aspernatur rem et?
                    </p>
                    <button className="font-medium text-white bg-pink-500 rounded-full px-4 py-2">
                        Contact me
                    </button>
                </article>
                <h3 className="font-groteck text-6xl font-extrabold absolute top-0">
                    About me 
                </h3>
            </section>
        </>
    )
}

export default About;