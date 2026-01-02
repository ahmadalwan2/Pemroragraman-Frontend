function Header({Hero}) {
    return (
        <div>
            <h3>{Hero}</h3>
            <button style={{border: "none", backgroundColor: "yellow"}}>Pesan Sekarang</button>
        </div>
    )
}

export default Header;