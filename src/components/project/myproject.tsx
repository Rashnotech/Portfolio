import { FC, MouseEvent, useState } from "react";
import mega from '../../assets/images/mega.gif'
import drug from '../../assets/images/drug.png';
import pense from '../../assets/images/pense.png';
import ncws from '../../assets/images/ncws.png';
import View from "./view";

const data = [{
    id: 1,
    title: 'MT Solutions',
    date: 'April 2024',
    image: mega,
    description: '',
    link: '',
    open: false
}, {
    id: 2,
    title: 'Rev Tax',
    date: 'March 2024',
    image: drug,
    description: '',
    link: '',
    open: false
}, {
    id: 3,
    title: 'SYF',
    date: 'February 2024',
    image: drug,
    description: '',
    link: '',
    open: false
}, {
    id: 4,
    title: 'Pense',
    date: 'November 2023',
    image: pense,
    description: '',
    link: '',
    open: false
}, {
    id: 5,
    title: 'Smart Identity',
    date: 'January 2023',
    image: '#',
    description: '',
    link: '',
    open: false
}, {
    id: 6,
    title: 'NCWS',
    date: 'April 2022',
    image: ncws,
    description: '',
    link: '',
    open: false
}]


const Projects = () => {
    const [show, setShow] = useState(3);

    return (
        <>
            <section id="projects" className="container p-8 md:p-16 text-white">
                <h3 className="text-4xl md:text-6xl font-groteck mb-8 text-right mr-10">
                    My Projects
                </h3>
                <section className="grid md:w-3/4 mx-auto align-middle grid-cols-1 gap-20">
                    {data.map((item, idx) => {
                        if (idx < show) return <Project key={idx} {...item} />
                    })}
                    {data.length > show && 
                        <p 
                            className="text-pink-500 cursor-pointer font-manrope font-medium text-center"
                            onClick={() => setShow(prev => prev + 1)}
                        >
                            See more projects
                        </p>
                    }
                </section>
            </section>
        </>
    )
}


export interface ProjectProps {
    id: number;
    image: string;
    title: string;
    date: string;
    description: string;
    link: string;
    open: boolean;
};


const Project: FC<ProjectProps> = (props) => {
    const [dt, setData] = useState({...props});

    const handleClick = () => {
        setData(prev => ({...prev, open: !prev.open}))
    }

    const handleClose = () => {
        setData(prev => ({...prev, open: !prev.open}));
    }

    return (
        <>
            <article onClick={handleClick} className="relative cursor-pointer">
                <img src={props.image} alt={props.title} loading="lazy" className="md:w-1/2 h-52 ml-4 rounded-2xl object-cover"  />
                    <div className="absolute top-1/3 right-0 md:left-1/2">
                        <h4 className="text-xl md:text-3xl text-slate-100 font-groteck">{props.title}</h4>
                        <p className="font-manrope md:text-lg font-medium">{props.date}</p>
                    </div>
                <div className="dot-pattern absolute -bottom-10 left-8 -z-10 h-40"></div>
            </article>
            <View {...dt} setOpen={handleClose} />
        </>
    )
}

export default Projects