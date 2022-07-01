import logo from '../../../public/images/logo.svg'

export default function Header() {
  return (
    <header className='header'>
      <img src={logo} className='logo' alt='headed westtt logo' />
      <div>
        <h1>headed westtt</h1>
        <p>a parent company</p>
      </div>
    </header>
  )
}
