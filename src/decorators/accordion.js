import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        isOpen: true
        
    }
    handleClick = () => {

        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render () {
        return <OriginalComponent {...this.props} {...this.state} handleClick = {this.handleClick}/>
    }
}