import logo from '../assets/images/logo.svg'

export default function Header() {
  return (
    <header>
        <h1>
            <a href="/">
                <img src={logo} alt="logo" />
            </a>
        </h1>
        <nav>
          <ul>
            <li><a href="#">home</a></li>
            <li><a href="#">New</a></li>
            <li><a href="#">Popular</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Categories</a></li>
          </ul>
        </nav>
    </header>
  )
}
