import React from 'react'

var Hello = React.createClass({


    
    render : function () {
        
        return (
            <h1>Hello {this.props.name}!!</h1>
        )
        
    }
    
})

var App = React.createClass({

    getInitialState: function () {
        return {
            name: ''
        }
    },

    render: function () {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={this._change} />
                <Hello name={this.state.name} />
                </div>
        )
    },

    _change: function (event) {
        this.setState({
            name: event.target.value
        })
    }

})

export default App