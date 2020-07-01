import React from 'react'
import './questionElement.css'

class QuestionElement extends React.Component
{
    constructor(props)
    {
        super(props);
        
    }

    render()
    {
        return (
            <div className="question-container">
                <h2>{this.props.question.title}</h2>
                <h3>{this.props.question.content}</h3>
            </div>
        );
    }
}

export default QuestionElement;