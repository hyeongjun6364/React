import React from 'react'
const students =[{
    name:'inje',
    id:1
},
{
    name:'steve',
    id:2
},
{
    name:'Bill',
    id:3
},
{
    name:'jeff',
    id:4
}
]
//map함수 사용시 key값 항상 넣어줘야함 
function AttendanceBook(props) {
    return (
      <ul>
        {students.map((student)=>{
            return <li key={student.id}>{student.name}</li>;
        })
        }
      </ul>
    );
}
export default AttendanceBook;

