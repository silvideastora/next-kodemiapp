import React from 'react'
import styled from 'styled-components'
import menu from '../../config/menu.json'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 900px) {
    flex-flow: column nowrap;
    background-color: #4e4e4e;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fbfbfb;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      {
        menu.map(({ title }, index ) => (
          <li 
            className='hover:text-cyan-ka'
            key={index}
          >
            {title}
          </li>
        ))
      }
    </Ul>    
  )
}

export default RightNav
