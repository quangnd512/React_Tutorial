import React from "react";
import "./ChildComponent.scss";

// Stateless: Không có state
// StateFull: Có state

// Class component
// class ChildComponent extends React.Component {
//     render() {
//         // Lấy pros từ component cha
//         // pros từ component cha được truyền theo dạng object (key:value)
//         // VD: {name:'Quang', age:'25'} và ta phải truyền biến lần lượt theo dạng key:value
//         let {name, age, Job} = this.props;

//         return ( 
//             <>
//             {/* Lấy pros  */}
//                 <div>Child Info: Name: {name} - Age: {age}</div>
//                 <div className="job">
//                     {
//                         Job.map(( item, index )=>{
//                             return (

//                                 // Key giúp react xác định xem đối tượng nào đã được thay đổi và cập nhật nó thay vì
//                                 // phải cập nhật cả một mảng
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </>
//         )
//     }
// }

// function component 
const ChildComponent = (props) => {
	
	// Không cần truyền this.props vì this nó chỉ dùng để tham chiếu đến biến trong class
    let { Job } = props;

        return ( 
            <>
				{/* Lấy pros  */}
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
            </>
        )
}
export default ChildComponent;