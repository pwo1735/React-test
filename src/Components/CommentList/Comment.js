import React, { Component } from 'react'

class Comment extends Component {
    render () {
        return (
            <div className ="comments__item">        
                {this.body}
            </div>
        )
    }

    get body () {
        const {comment} = this.props
        
        return (
            <div>
                <div className = "comment__user">{comment.user}</div>
                <div className = "comment__text">{comment.text}</div>
                
                
            </div>
        )
    }
}

export default Comment