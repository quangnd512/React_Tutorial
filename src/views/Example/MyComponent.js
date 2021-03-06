import React from "react";
import LoginName from "./LoginName";
import InputLogin from './InputLogin';
import ListJob from "./ListJob";

class MyComponent extends React.Component {
    // state
    state = {
        // Outputting Lists
        arrayJob: [
            {id: 1, title: 'developer', salary: '500'},
            {id: 2, title: 'tester', salary: '200'},
            {id: 3, title: 'BA', salary: '1000'}
        ]
    }   

    //function pros
    addNewJob = (job) => {
        // console.log('list: ', job);
        let currenJobs = this.state.arrayJob;
        currenJobs.push(job);
        this.setState({  
            // arrayJob: [...this.state.arrayJob, job]
            arrayJob: currenJobs
        })
    }

    //delete job
    deleteJob = (job) => {
        let currenJobs = this.state.arrayJob;
        currenJobs = currenJobs.filter(item => item.id !== job.id)
        this.setState({
            arrayJob: currenJobs
        })
    }
    render() {
        return ( 
            //Sử dụng thẻ ẩn bao quanh 2 thẻ chính
            <>
                {/* <LoginName /> */}
				<InputLogin 
                    addNewJob = {this.addNewJob}
                />
                <ListJob
                    Job = {this.state.arrayJob}
                    deleteJob = {this.deleteJob}
                />
            </>
        )
    }
}

// Sử dụng để export default để trả về 1 class MyComponent nằm trong file MyComponent
export default MyComponent;