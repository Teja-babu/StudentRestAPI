import axios from "axios";
import { useRef,useState } from "react";

const UpdateEmployee=()=>{
    const [res,setRes] = useState();
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const update_data=()=>{
        updateEx();
    }
    const updateEx = async ()=>{
        const res = await axios.put(`http://localhost:9000/update/${ref1.current.value}`,{
        "name":ref2.current.value,
        "course":ref3.current.value,
        "hibernate":ref4.current.value,
        "spring":ref5.current.value,
        "springboot":ref6.current.value});
        const {data} = res;
        setRes(data);
    }
    return(<>
        <div style={{ textAlign: "center", border: "double", borderColor: "red", marginLeft: 200, marginRight: 200, marginTop: 50 }}>
          <table style={{ margin: "0 auto", padding: "10px", borderCollapse: "collapse", width: "60%" }}>
            <tbody>
              <tr>
                <td>Student Id:</td>
                <td><input type="text" ref={ref1} /></td>
              </tr>
              <tr>
                <td>Student Name:</td>
                <td><input type="text" ref={ref2} /></td>
              </tr>
              <tr>
                <td>Course:</td>
                <td><input type="text" ref={ref3} /></td>
              </tr>
              <tr>
                <td>Hibernate:</td>
                <td><input type="text" ref={ref4} /></td>
              </tr>
              <tr>
                <td>Spring:</td>
                <td><input type="text" ref={ref5} /></td>
              </tr>
              <tr>
                <td>Spring Boot:</td>
                <td><input type="text" ref={ref6} /></td>
              </tr>
              <tr>
                <td colSpan="2" style={{ textAlign: "center" }}>
                  <button onClick={update_data}>Update</button>
                </td>
              </tr>
            </tbody>
          </table>
          <p>{JSON.stringify(res)}</p>
        </div>
      </>
      )
}
export default UpdateEmployee;