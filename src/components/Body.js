import React from 'react';
import NavbarPage from './component';
const height = {
    height:"100vh"
}
function Body()
{
    return(
        <div className = "Body" style = {height}>
            <NavbarPage/>
        </div>
    )
}

export default Body