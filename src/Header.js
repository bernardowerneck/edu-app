import React from 'react'
import './Header.css'

class Header extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="header">

                <div className="header-right">
                    <HeaderContent name="oi" />
                    <HeaderContent name="tchau" />
                </div>
            </div>
        )
    }
}

function Logo(props)
{

}

function HeaderContent(props)
{
    return (
        <div className="header-content">
            {props.name}
        </div>
    )
}

export default Header;