import '../content/dot.css'

const Blog = () => {
    return (
        <>
            <section id="blog" className="p-16 container text-white">
                <h3 className="text-5xl md:text-6xl font-groteck">
                    My blog
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 relative">
                    <button className="rounded-full bg-pink-500 font-medium mt-8 hover:bg-pink-600 px-4 w-1/3 h-12 py-2 font-manrope text-base md:text-lg text-white">
                        See all
                    </button>
                    <Article />
                </div>

            </section>
        </>
    )
}

const Article = () => {
    return (
        <>
            <article className="space-y-4 font-manrope">
                <img src="#" alt="" className="rounded-3xl" />
                <h4 className="font-groteck text-xl">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h4>
                <p className="font-manrope text-base">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facere aspernatur suscipit alias id, quae labore 
                    voluptatibus placeat blanditiis...
                </p>
                <a href="#" className="text-lg text-pink-500 mt-4 font-medium font-manrope">
                    Read more &gt;&gt;
                </a>
            </article>
        </>
    )
}

export default Blog;