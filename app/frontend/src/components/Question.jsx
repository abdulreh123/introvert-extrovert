import React, { useState, useEffect } from "react";
import axios from 'axios'
import styled from "styled-components";


const QuestionContainer = styled.div`
width: 67vw;
margin: auto;
padding-top: 2rem;`

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
const QuestionAnswer = (props) => {
    const user = props.name
    const [questions, setQuestions] = useState([])
    const [selected, setSelect] = useState([]);
    const handleChange = (event) => {
        const value = event.target.value;
        setSelect([...selected,value]);
    };
    const getQuestions = () => {
        axios.get(`http://localhost:8000/questions`,)
            .then(api => {
                setQuestions(api.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const submitAnswer =async()=>{
        const data = {
            user:user,
            answers:selected
        }
        await axios.post(`http://localhost:8000/answers`,data)
        props.setFinish(true)
    }
    useEffect(() => {
        getQuestions()
    }, [])
    return (
        <QuestionContainer>
            {questions.map(question => (
                <>
                <div style={{color:'white'}}>{question?.question}</div>
                    <div style={{padding: '1rem 2rem'}}>
                {question.answers.map((answer,index)=>(
                     <div key={index} style={{padding: '0.5rem 0rem'}}>
                    <input onChange={handleChange} type="radio" value={answer.id} name={question.question}/>
                    <span style={{color:'white'}}>{answer.answer}</span>
                  </div>
                ))}</div>
                </>
            ))
            }
            {selected.length===questions.length? 
            <Button onClick={()=>submitAnswer()}>Submit</Button>:null}
        </QuestionContainer>
    );
}

export default QuestionAnswer;
