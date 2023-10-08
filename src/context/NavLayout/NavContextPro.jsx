import React, { createContext, useState } from 'react';



export const NavContext = createContext()
const NavContextPro = ({ children }) => {


    const [collapsed, setCollapsed] = useState(true);
    return (
        <NavContext.Provider value={{ collapsed, setCollapsed }}>

            {children}
        </NavContext.Provider>

    );
};


export default NavContextPro;