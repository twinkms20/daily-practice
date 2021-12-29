import React, { Component } from 'react'

class Count extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count : 0
        }
    }

    increament = () => {
        this.setState (prevState => {
            return {count : prevState.count + 1}
        })
    }

    render() {
        const {count} = this.state
        return (
            <div>
                {this.props.children(this.state.count, this.increament)}
            </div>
        )
    }
}

export default Count
