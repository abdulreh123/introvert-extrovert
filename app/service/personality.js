const questions = require('../models/questions.model')
const answers = require("../models/answers.model");
const userAnswers = require("../models/userAnswers.model");

const getQuestions =async()=>{
    const question = await questions.findAll({
        include: [
          {
            model: answers,
            as: "answers",
            attributes:['id','answer','type']
          },
        ]
      });
      return question
}
const getresult =async(user)=>{
    const Answer = await userAnswers.findAll({
        where:{
         user:user
        },
        attributes:['id','user'],
        include: [
          {
            model: answers,
            as: "userAnswers",
            attributes:['id','answer','type'],
            include: [
                {
                  model: questions,
                  as: "question",
                  attributes:['question',]
                },
              ]
          },
        ]
      });
      const countIntrovertAnswers= await Answer.filter(answer=>answer.userAnswers.type==='introvert')
      let result
      if(countIntrovertAnswers.length/Answer.length===0.5){
           result={
              type:`${user} you are more of an ambivert`,
              content:'You are comfortable hanging out with people and being in party-like situations. However, you limit yourself and stick to the deadline at a particular time. You like discussions and like to chat, but you know your limits and cannot bear banter that goes on for long.'
          } 
      }else  if(countIntrovertAnswers.length/Answer.length<0.5){
        result={
           type:`${user} you are more of an extrovert`,
           content:'Whether at work or at home, you are a leader, the head of the pack. You are the type of person who is at ease with everyone — with the grocer, the doctor, a managing director or a waiter. You have an opinion about just about everything and you like to share your knowledge around, even imposing it on others if they haven’t asked for it'
       } 
   }else  if(countIntrovertAnswers.length/Answer.length>0.5){
    result={
       type:`${user} you are more of an introvert`,
       content:' more comfortable focusing on their inner thoughts and ideas, rather than whats happening externally. They enjoy spending time with just one or two people, rather than large groups or crowds'
   } 
}
      return result
}

const postResult =async(data)=>{
  await data.answers.map(async(answer)=>{
    await userAnswers.create({
      user:data.user,
      answerId:answer
    })
  })
    return 'data created'
}
module.exports =  {
     getQuestions,
     getresult,
     postResult
};