import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className='h-auto'>
      <Link
        className ={`
        py-2 px-2 font-main-font text-white
        ${
          match 
          ? 'text-orange'  
          : ''
        }
        `}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;