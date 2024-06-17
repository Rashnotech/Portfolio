import Cert from '../../assets/images/certification.png'

const Certification = () => {
    return (
        <>
            <section id="blog" className="p-16 container text-white">
                <h3 className="text-4xl md:text-6xl font-groteck">
                    Certification
                </h3>
                <div className="grid grid-cols-1 relative">
                    <article>
                        <a href="https://intranet.alxswe.com/certificate/MJpTr69eFC">
                            <figure className='flex md:flex-row flex-col items-center md:space-x-4'>
                                <img className='md:w-1/3' src={Cert} alt="certificate of completion" />
                                <figcaption>
                                    <h4 className="font-groteck text-lg">Certificate of Completion</h4>
                                    <p className='font-manrope mt-4'>
                                        For completing a 12 Month ALX Software Engineering Programme 
                                        with a specialization in Back-end.
                                    </p>
                                </figcaption>
                            </figure>
                        </a>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Certification;