import React,{useState} from "react";
import styled from "styled-components";
import Start from './StartTest'
import Question from './Question'
import Result from './Result'

const Container = styled.div`
    background:url(${process.env.PUBLIC_URL + '/background.jpg'});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
`
const LandingPage = () => {
    const[name,setName]=useState(null)
    const[start,setStart]=useState(false)
    const[finish,setFinish]=useState(false)
    return (
        <Container>
          {start? 
          <>
          {finish? <Result name={name}/> :<Question name={name} setFinish={setFinish}/>}</>
          :
          <Start setName={setName} setStart={setStart} name={name}/> 
          }
        </Container>
    );
}

export default LandingPage;
