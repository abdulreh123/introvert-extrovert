import React, { useState, useEffect } from "react";
import axios from 'axios'
import styled from "styled-components";


const ResultContainer = styled.div`
width: 67vw;
margin: auto;
padding-top: 2rem;`

const Result = (props) => {
    const [answer, setAnswer] = useState({})
    const getAnswer = (name) => {
        axios.get(`http://localhost:8000/user/answers/${name}`,)
            .then(api => {
                setAnswer(api.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(() => {
        getAnswer(props.name)
    }, [props.name])
    return (
        <ResultContainer>
            <h1 style={{color:'white'}}>{answer.type}</h1>
            <div style={{color:'white'}}>{answer.content}</div>
        </ResultContainer>
    );
}

export default Result;
