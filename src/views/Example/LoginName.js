import React from "react";

class LoginName extends React.Component {
    // State
    state = {
        name: 'Quang ND',
        age: 27
    }

    // setState
    onChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    render () {
        // JSX
        let name = 'AHT';
        
        return(
            <>
                {/* call jsx */}
                <div className="first"> Hello {name} </div>
                <div className="secord"> {name} JSC </div>

                <div className="info-input">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.onChangeName(event)}
                    />
                    <input value={this.state.age} type="number" 
                        onChange={(event) => this.onChangeAge(event)}
                    />
                </div>

                {/* call state */}
                <div className="title">Name: {this.state.name}, Age: {this.state.age}</div>
            </>
        )
    }
}

export default LoginName;