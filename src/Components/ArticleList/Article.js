import React, { Component } from 'react'
import CommentList from '../CommentList'
import accordion from '../../decorators/accordion'

class Article extends Component {
    state = {
        error: null
    }

    componentDidCatch(error) {
        this.setState({error})
    }

    componentWillMount() {
        console.log('----', 'mounting')
    }

    render() {
        const { article } = this.props
        

        return (
            
            <div className="card mx-auto" style = {{margin: '20px'}}>
                <div className="card-hader">
                    <h2 className="card-hader__title">{article.title}</h2>
                    <button onClick={this.props.handleClick} className = "btn btn-primary btn-lg">{this.props.isOpen ? 'Close' : 'Open'}</button>
                </div>
                {this.body}
            </div>
            
        )
        
    }


    get body () {
        const { article } = this.props
        const text = this.props.isOpen && <div className = "card-text">{article.text}</div>
        return (
            <div className="card-body">
                {text}
                <CommentList comments = {article.comments}/>
            </div>
        )
    }

}



export default accordion(Article)