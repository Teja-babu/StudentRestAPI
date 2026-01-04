import axios from "axios";
import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import AddNewStudent from "./AddNewStudent";
import GetStudent from "./GetStudent";
import ViewAllStudent from "./ViewAllStudent";
import DeleteStudent from "./DeleteStudent";
import UpdateStudentDetails from "./UpdateStudentDetails";
import './body.css';  // Import the CSS file here

const Body = () => {
    return (
        <div className="body-container">
            <Routes>
                <Route path="/" element={<div className="route-content"><Home /></div>} />
                <Route path="/addnewstudent" element={<div className="route-content"><AddNewStudent /></div>} />
                <Route path="/getstudent" element={<div className="route-content"><GetStudent /></div>} />
                <Route path="/viewallstudent" element={<div className="route-content"><ViewAllStudent /></div>} />
                <Route path="/deletestudent" element={<div className="route-content"><DeleteStudent /></div>} />
                <Route path="/updatestudentdetails" element={<div className="route-content"><UpdateStudentDetails /></div>} />
            </Routes>
        </div>
    );
}

export default Body;
