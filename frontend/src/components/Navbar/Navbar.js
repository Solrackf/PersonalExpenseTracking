import { styled } from 'styled-components'
import avatar from '../../img/avatar.jpg'
import { bell, signout } from '../../utils/Icons'

function Navbar() {
  return (
    <NavbarStyled>
      <section className="search__navbar">
        <input type="text" placeholder="Search..." />
        <section className="alerts">
          {bell}
        </section>
        <section className="signOut">
          {signout}
        </section>
      </section>
      <section className='userInfoSection'>
        <p><span className='italic__text text__300'>Hola </span><span className='text__600'></span></p>
        {/* <img src={avatar} alt="" className='avatarUser'/> */}
      </section>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  height: 5vh;
  width: 100%;
  grid-area: 2 / 2 / 3 / 20;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .search__navbar{
    flex-grow: 1;
    margin-right: .5rem;
    height: 100%;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .5rem;
    .alerts{
      height: 100%;
      aspect-ratio: 1 / 1;
      background: var(--color-blue);
      color: var(--color-blue-light);
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: 1px solid var(--color-blue-light);
    }
    .signOut{
      height: 100%;
      aspect-ratio: 1 / 1;
      background: var(--color-red);
      color: var(--color-red-light);
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--color-red-light);
    }
    input{
      width: 100%;
      height: 100%;
      background: var(--secondary-color);
      outline: none;
      border: none;
      border-radius: 0.5rem;
      font-family: "Poppins", sans-serif;
      padding: 0 1.5rem;
    }
  }
  .avatarUser{
    height: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 100%;
  }
  .userInfoSection{
    display: flex;
    align-items: center;
    height: 100%;
    gap: 1.5rem;
    padding: 0 0 0 1.5rem;
    border-left: 1px solid #33363F;
    width: fit-content;
  }
`

export default Navbar