import axios from "axios";
import {useRef,useState} from "react";
const PostExp1=()=>{
    const [res,setRes]=useState();
    const ref1=useRef(null);
    const ref2=useRef(null);
    const ref3=useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
   
    const post_data=()=>{
        postEx();
    }
    const postEx=async ()=>{
        const res=await axios.post(`http://localhost:9000/save`,{"name":ref1.current.value,
        "course":ref2.current.value,
        "hibernate":ref3.current.value,
        "spring":ref4.current.value,
        "springboot":ref5.current.value});
        const {data}=res;
        res.status==200?setRes(data):"not inserted";
    }
    return(
        <>
      <center>
        <table border="0" style={{ padding: "10px", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td>Student Name:</td>
              <td><input type="text" ref={ref1} /></td>
            </tr>
            <tr>
              <td>Course:</td>
              <td><input type="text" ref={ref2} /></td>
            </tr>
            <tr>
              <td>Hibernate:</td>
              <td><input type="text" ref={ref3} /></td>
            </tr>
            <tr>
              <td>Spring:</td>
              <td><input type="text" ref={ref4} /></td>
            </tr>
            <tr>
              <td>Spring Boot:</td>
              <td><input type="text" ref={ref5} /></td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: "center" }}>
                <button onClick={post_data}>Post</button>
              </td>
            </tr>
          </tbody>
        </table>
        <p>{JSON.stringify(res)}</p>
      </center>
    </>
    )
}
export default PostExp1;