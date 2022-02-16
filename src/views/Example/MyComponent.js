import React from "react";

class MyComponent extends React.Component {
    
    // State
    state = {
        name: 'Quang ND',
        age: 27
    }
    
    render() {
        // JSX
        let name = 'AHT';


        return ( 
            //Sử dụng thẻ ẩn bao quanh 2 thẻ chính
            <>
                {/* call jsx */}
                <div className="first"> Hello {name} </div>
                <div className="secord"> {name} JSC </div>

                {/* call state */}
                <div className="title">Name: {this.state.name}, Age: {this.state.age}</div>
            </>
        )
    }
}

// Sử dụng để export default để trả về 1 class MyComponent nằm trong file MyComponent
export default MyComponent;