import PropTypes from 'prop-types';
import { FaDollarSign, FaBookOpen } from "react-icons/fa";
import './Course.css'
import { useState } from 'react';


const Course = ({course, handleAddToLog, handleCreditHourCount, handleAddToLogPrice}) => {

    const {course_title, course_details, course_img, credit_hrs, price} = course;

    const [isDisabled, setIsDisabled] = useState(false);

    // Function to handle button click
    const handleClick = () => {
        const canAddCourse = handleCreditHourCount(credit_hrs); //checking if the course can be added as a test. if limit exceeds it will return false

        if(canAddCourse) {
            handleAddToLog(course);
            handleAddToLogPrice(price);
            setIsDisabled(true); // Disable the button after it's clicked
        }
    };

    return (
        <div className="p-4 bg-white rounded-xl">
            <img className="max-w-full w-full object-contain" src={course_img} alt="" />
            <h3 className="font-semibold text-lg mt-4 mb-3">{course_title}</h3>
            <p className="text-gray-600 mb-5">{course_details}</p>
            <div className="flex items-center justify-between mb-6">  
                <p className="flex items-center justify-between">
                    <FaDollarSign/> <span className="ml-1.5 text-gray-600">Price: {price}</span>
                </p>
                <p className="flex items-center justify-between">
                    <FaBookOpen/> <span className="ml-2 text-gray-600">Credit: {credit_hrs} hrs</span>
                </p>
            </div>
            <button onClick={handleClick} disabled={isDisabled} className={`bg-blue-600 w-full text-lg text-white rounded-xl py-2.5 selectBtn ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                {isDisabled ? 'Selected' : 'Select'}
            </button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddToLog: PropTypes.func.isRequired,
    handleCreditHourCount: PropTypes.func.isRequired,
    handleAddToLogPrice: PropTypes.func.isRequired
};

export default Course;