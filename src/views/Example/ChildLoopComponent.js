import React from "react";

class ChildLoopComponent extends React.Component {

    // State bool
    state = {
        showJob: false
    }

    // Event onclick
    eventOnclick = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    } 
    render() {
        let { Job } = this.props;
        let { showJob } = this.state;

        // Toán tử 3 ngôi
        let check = showJob === true ? 'showJob = true' : 'showJob = false'
        return(
            <>
                {showJob === false ? 
				<div>
					<button onClick={()=>this.eventOnclick()}>Show</button>
				</div>
                :
					<>
						<div className="job">
						{
							Job.map(( item, index )=>{
								return (
									<div key={item.id}>
										{item.title} - {item.salary} $
									</div>
								)
							})
						}
						</div>
						<div><button onClick={()=>this.eventOnclick()}>Hide</button></div>
					</>
				}
            </>
        )
    };
}

export default ChildLoopComponent;