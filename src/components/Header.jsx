import React from 'react'


const Header = () => {

    const showDate = new Date();
    const dt=showDate.toDateString();
    return (
        <div>
        <left>
        {dt}
        </left>
        </div>
    )
}
export default Header;