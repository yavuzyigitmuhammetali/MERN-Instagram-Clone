import React from 'react';



function NavbarItem({children,name,active=false}) {
    return (
        <div style={active?{fontWeight:"bolder"}:null}>
        <svg className="navbar-items-comp"  color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24"
             role="img" viewBox="0 0 24 24" width="24">
            {children}
        </svg>
           {name}
        </div>
    );
}

export default NavbarItem;