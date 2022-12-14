import React from 'react';
import {Link} from 'react-router-dom'

const SidebarArchives = ({archives}) => {
  return (
      archives.map((archive) => (
        <Link 
        to={`cases/${archive.title.split(" ").join("-").toLowerCase()}`}
        style={{display: 'block', marginTop: 10, color: 'rgb(249, 211, 66)', textDecoration: 'none'}} 
        key={archive.title}
        >
          {archive.title}
        </Link>
    ))
  )
}

export default SidebarArchives