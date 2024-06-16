import { useState } from 'react'
import { useToast  } from '@chakra-ui/react'
import './dot.css'

const Contact = () => {
    const toast = useToast()
    const [process, setProcess] = useState(false);

    const [form, setForm] = useState({
        fullname: '',
        email: '',
        message: ''
    })

    const handleChange = (event: { target: { name: any; value: any } }) => {
        const {name, value} = event.target
        setForm(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = async (event: { preventDefault: () => void }, data: any) => {
        event?.preventDefault();
        setProcess(true);
        const res = await fetch(`${import.meta.env.BASE_URL}/api/v1/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json());
        if (res.status === 'success') {
            toast({
                title: res.message,
                position: 'top-right',
                status: res.status,
                isClosable: true,
            });
        } else {
            toast({
                title: res.message,
                position: 'top-right',
                status: res.status,
                isClosable: true
            });
        }
        setProcess(false);
    }
    
    return (
        <>
            <section id="contact" className="md:container relative md:p-16 text-white">
                <h4 className="font-groteck text-4xl mb-2 md:text-6xl text-center">Contact me</h4>
                <form onSubmit={(e) => handleSubmit(e, form)} action='' className="md:w-1/2 w-3/4 space-y-3 mx-auto  font-manrope">
                    <div className="flex flex-col">
                        <label className="text-sm ml-4 font-medium" htmlFor="fullname">Full name</label>
                        <input name="fullname" onChange={handleChange} placeholder="Enter your full name..." type="text" className="form-style" id="" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm ml-4 font-medium" htmlFor="email">Email*</label>
                        <input onChange={handleChange} className="form-style" placeholder="Enter your email..." type="email" name="email"  id="" />
                    </div>
                    <div>
                        <label className="text-sm ml-4 font-medium" htmlFor="message">Message*</label>
                        <textarea onChange={handleChange} className="bg-slate-50/10 w-full rounded-2xl focus:outline-none p-4 placeholder:text-white text-sm" placeholder="Enter your message..." name="message" id="" cols={10} rows={4} />
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="rounded-full hover:bg-pink-600 bg-pink-500 font-medium w-36 text-white text-lg px-4 py-3">
                            {process && `<i className=''></i>`} Send
                        </button>
                    </div>
                    
                </form>
                <div className="dot-pattern absolute rotate-90 top-1/2 -z-10 h-40 -right-16 md:right-0"></div>
            </section>
        </>
    )
}

export default Contact