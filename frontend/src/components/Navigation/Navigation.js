import React, { useState } from 'react'
import styled from 'styled-components'
import { menuItems } from '../../utils/menuItems'
import avatar from '../../img/avatar.jpg'
import { signout } from '../../utils/Icons'

function Navigation({active,setActive}) {
  
  return (
    <NavStyled>
      <div className='user-con'>
        <img src={avatar} alt="" style={{width:"3rem", height: "3rem", borderRadius: "100%"}}/>
        <div>
          <h2>Jane Doe</h2>
          <p>Your Money</p>
        </div>
      </div>
      <ul className='menu-items'>
        {menuItems.map((item)=>{
          return (
          <li key={item.id}
          onClick={()=> setActive(item.id)}
          className={active === item.id ? 'active' : ''}
          >
            {item.icon}
            <span>{item.title}</span>
          </li>)
        })}
      </ul>
      <div className="bottom-nav">
        {signout} Cerrar Sesión
      </div>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
  padding: 2rem;  
  width:25vw;
  height: 100vh;
  background: var(--secondary-color);
  display:flex ;
  flex-direction: column;
  justify-content: space-between;
  .user-con{
    display: flex;
    align-items: flex-start;
    flex-grow: 1;
  }
  .menu-items{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    flex-direction: column;
    flex-grow: 1;
    .active{
      font-weight:500;
      color: var(--color-blue-light);
      background: var(--color-blue);
      border-left: 2px solid var(--color-blue-light);
    }
    li{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      cursor: pointer;
      font-weight: 200;
      width: 100%;
      padding: 0.75rem 1rem;
      border-radius: 0 0.25rem 0.25rem 0;
      border-left: 2px solid transparent;
    }
  }
  i{
    width: 1rem;
    height: 1rem;
  }
  span{
    font-size: 1rem;
  }
  .bottom-nav{
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
  }
`

export default Navigation