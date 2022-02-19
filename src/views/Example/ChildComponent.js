import React from "react";

class ChildComponent extends React.Component {
    render() {
        // Lấy pros từ component cha
        // pros từ component cha được truyền theo dạng object (key:value)
        // VD: {name:'Quang', age:'25'} và ta phải truyền biến lần lượt theo dạng key:value
        let {name, age, Job} = this.props;

        return ( 
            <>
            {/* Lấy pros  */}
                <div>Child Info: Name: {name} - Age: {age}</div>
                <div className="job">
                    {
                        Job.map(( item, index )=>{
                            return (

                                // Key giúp react xác định xem đối tượng nào đã được thay đổi và cập nhật nó thay vì
                                // phải cập nhật cả một mảng
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}
export default ChildComponent;