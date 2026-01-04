import { Link } from 'react-router-dom';
import './header.css';  // Import the CSS file8

const Header = () => {
    return (
        <>
            <center>
                <div className="center-header">
                    <h1>Welcome To Student Management System</h1>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/addnewstudent" className="nav-link">Add New Student</Link>
                    <Link to="/getstudent" className="nav-link">Get Student</Link>
                    <Link to="/viewallstudent" className="nav-link">View All Students</Link>
                    <Link to="/deletestudent" className="nav-link">Delete Student</Link>
                    <Link to="/updatestudentdetails" className="nav-link">Update Student Details</Link>
                </div>
            </center>
        </>
    );
}

export default Header;
