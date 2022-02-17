import React from "react";

class InputLogin extends React.Component {

    // state
    state = {
        fname: '',
        lname: ''
    }

    // event 
    onChangeFname = (event) => {
        this.setState({
            fname: event.target.value
        })
    }

    onChangeLname = (event) => {
        this.setState({
            lname: event.target.value
        })
    }

    onSubmitName = (event) => {
        event.preventDefault() // Hàm preventDefault() giúp không tải lại trang
        console.log('First name: ', this.state.fname,' Last name: ', this.state.lname);
    }

    render(){
        return(
            <>
            <form action="/action_page.php"/>
                <label for="fname">First name:</label>
                <input type="text" value={this.state.fname} onChange={(event) => this.onChangeFname(event)}/><br/>
                <label for="lname">Last name:</label>
                <input type="text" value={this.state.lname} onChange={(event) => this.onChangeLname(event)} /><br/>

                {/* submit event */}
                <input type="submit" value="Submit" onClick={(event) => this.onSubmitName(event)}/>
            <form/>
            </>
        )
    }
}
export default InputLogin;