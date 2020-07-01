import React from 'react'
import './SelectionElement.css'
import QuestionDisplayer from './question/questionDisplayer';

class SelectionElement extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            questions : []
        }
    }

    componentDidMount()
    {
        fetch("http://localhost:8080/question-list")
            .then(response => response.json())
            .then(data => {
                this.setState({questions: data});
                console.log(data);
            });
    }

    changeDisplay(display)
    {
        this.setState({
            selected: display
        })
    }

    render()
    {
        return (
            <div>
                <QuestionDisplayer questions={this.state.questions}/>
            </div>
        );
    }
}

export default SelectionElement;