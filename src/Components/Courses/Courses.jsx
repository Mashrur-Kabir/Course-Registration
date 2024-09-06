import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import Course from "../Course/Course";

const Courses = ({handleAddToLog, handleCreditHourCount, handleAddToLogPrice}) => {

    const [courses, setCourses] = useState([])

    useEffect( () => {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div className="grid grid-cols-3 gap-6">
            {
                courses.map(course => <Course handleAddToLog={handleAddToLog} handleCreditHourCount={handleCreditHourCount} handleAddToLogPrice={handleAddToLogPrice} key={course.id} course={course} ></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handleAddToLog: PropTypes.func.isRequired,
    handleCreditHourCount: PropTypes.func.isRequired,
    handleAddToLogPrice: PropTypes.func.isRequired
}

export default Courses;