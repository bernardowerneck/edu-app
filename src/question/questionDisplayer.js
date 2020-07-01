import React from 'react'
import './questionDisplayer.css'
import QuestionElement from './questionElement'

class QuestionDisplayer extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="displayer">
                {this.props.questions.map((question)=>{
                    return <QuestionElement key={question.index} question={question}/>
                })}
            </div>
        );
    }
}

export default QuestionDisplayer