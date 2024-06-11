import { socialProps } from "../interface";

const Social: React.FC<socialProps> = ({link, color, logo}) => {
    return (
        <>
            <section className={`rounded-full hover:bg-${color}-700 w-16 h-16 flex items-center justify-center bg-${color}-500`}>
                <a href={link} target='_blank'>
                    <span className={`${logo}`}></span>
                </a>
            </section>
        </>
    )
}

export default Social;