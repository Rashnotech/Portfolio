interface url {
    name: string,
    path: string
}

const navbar = () => {
    const navitems: url[] = [
        { name: 'Home', path: '/' },
        { name: 'Project', path: '#projects' },
        { name: 'Blog', path: '#blog' },
        { name: 'Contact', path: '#contact' }
    ]

    return (
        <>
            <nav>
                <ul>
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

export default navbar;