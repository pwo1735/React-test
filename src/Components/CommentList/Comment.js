import React, { Component } from 'react';

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
            <div className="article-list__comment">
                <div className = "article-list__comment-user">{comment.user}</div>
                <div className = "article-list__comment-text">{comment.text}</div>
                
                
            </div>
        )
    }
}

export default Comment