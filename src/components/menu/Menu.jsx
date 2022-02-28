import React from 'react'
import "./menu.scss";

export default function Menu({open,setopen}) {
  return (
    <div className={"menu " + (open && 'active')}>
      <ul>
          <li onClick={()=>setopen(!open)}>
              <a  href="https://www.srmist.edu.in/placement/">Home</a>
          </li>
          
          <li onClick={()=>setopen(!open)}>
              <a href="https://www.srmist.edu.in/placement/overview">Career Centre</a>
          </li>

          <li onClick={()=>setopen(!open)}>
              <a href="https://www.srmist.edu.in/placement/">Placement</a>
          </li>

          <li onClick={()=>setopen(!open)}>
              <a href="https://www.srmist.edu.in/placement/recruiters">Recruiters</a>
          </li>

          <li onClick={()=>setopen(!open)}>
              <a href="https://www.srmist.edu.in/placement/contacts">Contacts</a>
          </li>
      </ul>
    </div>
  )
}
