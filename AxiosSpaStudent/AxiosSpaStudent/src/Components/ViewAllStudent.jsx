import { useEffect,useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

const GetAll=()=>{
    const [arr,setArr]=useState([]);

    const getData=async ()=>{
        const res=await axios.get(`http://localhost:9000/getall`);
        const {data}=res;
        setArr(data);
    }
    useEffect(()=>{
        getData();
    },[]);
    return(
        <>
        <center>
        <h1>DISPLAY ALL STUDENT DETAILS</h1>
             <div className="container mt-5">
                <table border={1}>
                    <thead>
                        <tr>
                            <th>STUDENT ID</th>
                            <th>STUDENT NAME</th>
                            <th>COURSE</th>
                            <th>HIBERNATE</th>
                            <th>SPRING</th>
                            <th>SPRING BOOT</th>
                            <th>TOTAL</th>
                            <th>PERCENTAGE</th>
                            <th>GRADE</th>
                            <th>RESULT</th>
                            <th>DELETE</th>
                            <th>UPDATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((element,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{element.sid}</td>
                                        <td>{element.name}</td>
                                        <td>{element.course}</td>
                                        <td>{element.hibernate}</td>
                                        <td>{element.spring}</td>
                                        <td>{element.springboot}</td>
                                        <td>{element.total}</td>
                                        <td>{element.percentage}</td>
                                        <td>{element.grade}</td>
                                        <td>{element.result}</td>
                                        <td><Link to="/deletestudent" className="nav-link">Delete Student</Link></td>
                                        <td><Link to="/updatestudentdetails" className="nav-link">Update Student Details</Link></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <tfoot></tfoot>
                </table>
             </div>
             </center>
        </>
    )
}
export default GetAll;