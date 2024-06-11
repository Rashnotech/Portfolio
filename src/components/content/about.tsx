import './dot.css'

const About = () => {
    return (
        <>
            <section className="flex container text-white p-16 justify-center space-x-5 items-center relative">
                <article className="border w-1/2 h-1/2  rounded-full">
                    <img src="./" alt="about" />
                </article>
                <article className="font-manrope p-8 w-1/2 text-sm font-medium leading-7"> 
                    <p className="my-4">
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
                <h3 className="font-groteck text-6xl absolute -top-10">
                    About me 
                </h3>
                <div className="dot-pattern absolute bottom-0 right-0"></div>
            </section>
        </>
    )
}

export default About;