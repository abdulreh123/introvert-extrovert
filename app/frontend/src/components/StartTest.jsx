import React from "react";
import styled from "styled-components";

const Start = styled.div`
width: 15rem;
margin: auto;
padding-top: 10rem;
`
const Button = styled.button` 
background-color: black;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 1rem 3rem
cursor: pointer;
&:hover{
    background: white;
    color: #01484a;
}
`
const Name = styled.input`
width: 100%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
`
const Label = styled.label`
color:white;
padding: 12px 0px;
`

const StartTest = (props) => {
    const handleChange = (e) => {
        const { value } = e.target
        props.setName(value)
    }
    const onStart=()=>{
        props.setStart(true)
    }
    return (
        <Start>
            <Label>Please enter your name:</Label>
          <Name type='text' name='name' onChange={handleChange}/>
          {props.name?
          <Button onClick={()=>onStart()}>Start Quiz</Button>:null}
        </Start>
    );
}

export default StartTest;
