const Contact = () => {
    return (
        <>
            <section id="contact" className="container p-16 text-white">
                <h4 className="font-groteck text-6xl text-center">Contact me</h4>
                <form action="" className="w-1/2 space-y-3 mx-auto  font-manrope">
                    <div className="flex flex-col">
                        <label className="text-sm ml-4 font-medium" htmlFor="fullname">Full name</label>
                        <input placeholder="Enter your full name..." type="text" className="form-style" name="" id="" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm ml-4 font-medium" htmlFor="email">Email*</label>
                        <input className="form-style" placeholder="Enter your email..." type="email" name="email"  id="" />
                    </div>
                    <div>
                        <label className="text-sm ml-4 font-medium" htmlFor="message">Message*</label>
                        <textarea className="bg-slate-50/10 w-full rounded-2xl focus:outline-none p-4 placeholder:text-white text-sm" placeholder="Enter your message..." name="message" id="" cols={10} rows={4} />
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="rounded-full hover:bg-pink-600 bg-pink-500 font-medium w-36 text-white text-lg px-4 py-3">
                            Send
                        </button>
                    </div>
                    
                </form>
            </section>
        </>
    )
}

export default Contact