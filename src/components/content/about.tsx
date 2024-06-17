import './dot.css';
import Funded from '../../assets/images/funded.jpg';


const About = () => {
    return (
        <>
            <section id='about' className="flex md:flex-row container text-white flex-col p-12 md:p-16 justify-center space-x-5 items-center relative">
                <article className="w-72 h-72">
                    <img src={Funded} className='border w-full h-full object-top object-cover rounded-full' alt='Rashnotech' />
                </article>
                <article className="font-manrope md:p-8 md:w-1/2 text-sm font-medium leading-7"> 
                    <p className="my-4">
                        I am a dedicated Fullstack Engineer. 
                        My experience in the field enables me to effectively bridge the gap between conceptual ideas and their practical implementation using cutting-edge technologies.
                        I am committed to staying at the forefront of the industry, consistently seeking opportunities to contribute to advancements in both AI/ML.
                        My fervor for AI/ML technologies is evident, as I am deeply passionate about leveraging these advancements to provide innovative solutions to complex problems.
                    </p>
                    <a href='#contact' className="font-medium text-white hover:bg-pink-600 bg-pink-500 rounded-full px-4 py-2">
                        Contact me
                    </a>
                </article>
                <h3 className="font-groteck text-5xl md:text-6xl absolute -top-10">
                    About me 
                </h3>
                <div className="dot-pattern absolute bottom-0 right-5 md:right-20"></div>
            </section>
        </>
    )
}

export default About;