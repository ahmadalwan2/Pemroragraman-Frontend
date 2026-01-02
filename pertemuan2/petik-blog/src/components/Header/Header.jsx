function Header({ nama, tentang, login}) {
    return (
      <nav>
        <ul>
          <li>Home {nama}</li>
          <li>About {tentang}</li>
          <li>Login {login}</li>
        </ul>
      </nav>
    )
}

export default Header;