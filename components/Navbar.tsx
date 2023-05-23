import React, { useState } from 'react'

import { MdMenu, MdMenuOpen } from 'react-icons/md';

const Navbar = () => {
    const [openSidebar, setOpenSidebar] = useState<boolean>(true);
    return (
        <nav className='flex justify-between md:hidden px-2 items-center'>
            <div className='text-xl'>
                <button className='hover:text-gray-900' type='button' onClick={() =>{setOpenSidebar(!openSidebar)}}>{openSidebar ? <MdMenuOpen />: <MdMenu /> }
                </button>
            </div>
            <div>Nombre</div>
            <div>Logo</div>
        </nav>
        
      );
};

export {Navbar};