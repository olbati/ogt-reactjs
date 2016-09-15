import React from 'react';

var HelloText = React.createClass({

    render: function () {
        return (
            <h1>Hello {this.props.name}</h1>
        );
    }

});

var HelloInput = React.createClass({

    getInitialState: function () {
        return {
            value: ''
        }
    },

    render: function () {
       return (
           <input type="text" value={this.state.value} onChange={this._onChange} />
       )
    },
    
    _onChange: function (event) {
        this.setState({
            value: event.target.value
        });
        this.props.onChange(event.target.value)

    }

});

var App = React.createClass({

    getInitialState: function () {
        return {
            value: ''
        }
    },

    render: function () {
        return (
            <div>
                <HelloInput onChange={this.onChange} />
                <HelloText name={this.state.value} />
            </div>
        );
    },
    
    onChange: function (val) {
        this.setState({
            value: val
        })
    }



});

export default App;
