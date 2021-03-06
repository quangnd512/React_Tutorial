import React from "react";

class ListJob extends React.Component {

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

    //Delete data
    eventDelete = (job) => {
        // console.log(job)
        this.props.deleteJob(job)
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
										{item.title} - {item.salary} $ <span onClick={() => this.eventDelete(item)}>x</span>
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

export default ListJob;