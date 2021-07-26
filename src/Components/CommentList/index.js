import React, { Component } from 'react';
import Comment from './Comment'
import accordion from '../../decorators/accordion';


class CommentList extends Component {

    render() {
        return (
            <div className="comments">
                <button className = "btn btn-primary btn-lg" onClick = {this.props.handleClick} style = {{margin: '20px'}}>Comments</button>
                {this.props.isOpen && this.body}
            </div>
        )
    }

    get body() {
        const { comments } = this.props
        console.log(comments)

        const body = comments && comments.length ? (
            
            <ul>
                
                {comments.map((comment) =>
                    <li key={comment.id}>
                        <Comment comment={comment} />
                    </li>)}
            </ul>) :
            (<h3>No comments yet</h3>)
        return (
            <div className="comments__inner">
                {body}
            </div>
        )

    }
}

export default accordion(CommentList)