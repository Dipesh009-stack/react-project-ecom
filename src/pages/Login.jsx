import React from 'react'
import Title from '../components/Title'
import Input from '../components/Input'

export default function Login() {

    // const customstyle = {
    //     fontsize : '20px',
    //     background: 'black',
    //     color : 'white',
    //     margin :'10px',
    //     padding : '5px'
    // }
    return (
        <div>
            <Title classes={"title"} text={"login page"}/>
            <hr />
            <Input 
                type={"text"}
                placeholder={"Enter Username"}
            />
        </div>
    )
}