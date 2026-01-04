import { useRef, useState } from "react";
import axios from "axios";

const GetOne = () => {
  const [consumerData, setConsumerData] = useState(null); // State to hold the consumer data
  const ref1 = useRef(null);

  // Function to fetch data from the server
  const oneData = async () => {
    try {
      const res = await axios.get(`http://localhost:9000/getone/${ref1.current.value}`);
      setConsumerData(res.data); // Set the actual data from the response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const one_data = () => {
    oneData();
  };

  return (
    <>
    <center>
      <h1>DISPLAY ONE STUDENT DETAILS</h1>
      
      <div className="container mt-5">
        <input type="text" ref={ref1} placeholder="Enter Consumer ID" />
        <button onClick={one_data}>Get Consumer Details</button>

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
            </tr>
          </thead>
          <tbody>
            {consumerData ? (
              <tr>
                <td>{consumerData.sid}</td>
                <td>{consumerData.name}</td>
                <td>{consumerData.course}</td>
                <td>{consumerData.hibernate}</td>
                <td>{consumerData.spring}</td>
                <td>{consumerData.springboot}</td>
                <td>{consumerData.total}</td>
                <td>{consumerData.percentage}</td>
                <td>{consumerData.grade}</td>
                <td>{consumerData.result}</td>
              </tr>
            ) : (
              <tr>
                <td colSpan="7">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      </center>
    </>
  );
};

export default GetOne;
