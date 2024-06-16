import { socialProps } from "../interface"
import Social from "../socials/social"
import './iconify.css'

const socials: socialProps[] = [
    {
        link: "https://twitter.com/rashnotech",
        color: "pink",
        logo: "entypo-social--twitter"
    },
    {
        link: "https://www.instagram.com/rashnotech",
        color: "pink",
        logo: "bxl--instagram"
    },
    {
        link: "https://www.linkedin.com/in/abdulrashnotech/",
        color: "pink",
        logo: "entypo-social--linkedin"
    },
    {
        link: "https://github.com/Rashnotech",
        color: "pink",
        logo: "entypo-social--github"
    },
    {
        link: 'https://discord.com/rashnotech_1',
        color: 'pink',
        logo: 'bxl--discord-alt'
    },
    {
        link: 'https://web.facebook.com/rashnotechcodez/',
        color: 'pink',
        logo: 'bxl--facebook'
    },
    {
        link: 'https://wa.me/2348172992396',
        color: 'pink',
        logo: 'bxl--whatsapp'
    },
    {
        link: 'https://t.me/Rashnotech',
        color: 'pink',
        logo: 'bxl--telegram'
    }
]
    

const Follow = () => {
    return (
        <>
            <section className="flex md:flex-row flex-col container p-16 items-center text-white justify-between">
                <h3 className="font-groteck text-6xl">Follow me</h3>
                <div className="grid md:w-1/2 w-full grid-cols-4 gap-4">
                    {socials.map((item, idx) => (<Social
                            key={idx}
                            link={item.link}
                            color={item.color}
                            logo={item.logo}
                        />))
                    }
                </div>
                
            </section>
        </>
    )
}

export default Follow