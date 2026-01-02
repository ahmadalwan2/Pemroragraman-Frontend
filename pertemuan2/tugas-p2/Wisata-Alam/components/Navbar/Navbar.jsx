function Navbar({ NusaGo, home, about, service}) {
    return (
        <nav>
            <h3>{NusaGo}</h3>
            <ul>
                <li>{home}</li>
                <li>{about}</li>
                <li>{service}</li>
            </ul>
                <button style={{border: "none", background: "blue", color: "white"}}>Logout</button>
        </nav>
    )
}

export default Navbar;