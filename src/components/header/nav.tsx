interface url {
    name: string,
    path: string
}

const Navbar = () => {
    const navitems: url[] = [
        { name: 'Home', path: '/' },
        { name: 'Project', path: '#projects' },
        { name: 'Blog', path: '#blog' },
        { name: 'Contact', path: '#contact' }
    ]

    return (
        <>
            <nav>
                <ul className="flex font-manrope space-x-8">
                   { navitems.map((item, index) => (
                        <li key={index}>
                            <a href={item.path}>{item.name}</a>
                        </li>
                    ))
                    }
                </ul>
            </nav>
        </>
    )
}

export default Navbar;