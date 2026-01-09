import ScrollProgress from './ScrollProgress'

export default function Header() {

  function closeNavbar() {
    const navbar = document.getElementById('navbarNav')
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show')
    }
  }

  return (
    <header className="sticky-top border-1">
      <nav className="navbar navbar-expand-lg  position-relative">
        <div className="container-fluid">
          <a className="navbar-brand fs-2 align-text-center" href="#inicio" onClick={closeNavbar}>
            <img
              src="/img/logoNutri.png"
              alt="Logo Nutrição"
              width="60"
              height="60"
              className="d-inline-block align-text-center"
            />
          </a>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-solid fa-bars fs-2"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" onClick={closeNavbar} aria-current="page" href="#inicio">Início</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={closeNavbar} href="#sobre">Sobre o projeto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={closeNavbar} href="#erv-esp">Ervas e Especiarias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={closeNavbar} href="#apr-ali">Aproveitando os Alimentos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={closeNavbar} href="#pancs">PANCs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" tabIndex="-1" aria-disabled="true" onClick={closeNavbar} href="#videos">Conteúdo adicional</a>
              </li>
            </ul>
          </div>
        </div>
        <ScrollProgress />
      </nav>
    </header>
  )
}