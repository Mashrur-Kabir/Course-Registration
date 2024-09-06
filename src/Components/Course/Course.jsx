import PropTypes from 'prop-types';
import { FaDollarSign, FaBookOpen } from 'react-icons/fa';
import './Course.css';
import { useState } from 'react';
import garbage from '../../assets/recycling-bin.png'

const Course = ({ course, handleAddToLog, handleCreditHourCount, handleAddToLogPrice, handleRemovalCourse }) => {
  const { course_title, course_details, course_img, credit_hrs, price, id } = course;

  const [isDisabled, setIsDisabled] = useState(false);

  // Function to handle adding course
  const handleClick = () => {
    const canAddCourse = handleCreditHourCount(credit_hrs);
    if (canAddCourse) {
      handleAddToLog(course);
      handleAddToLogPrice(price);
      setIsDisabled(true); 
    }
  };

  // Function to handle removing course
  const handleDeselect = () => {
    handleRemovalCourse(price, credit_hrs, id);
    setIsDisabled(false); // Re-enable the button after deselecting
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
            <div className='flex items-center justify-between'>
            <button onClick={handleClick} disabled={isDisabled} className={`bg-blue-600 w-3/4 text-lg text-white rounded-xl py-2.5 selectBtn ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}> {/* isDisabled = false. so, no change. and the 'opacity-50 cursor-not-allowed' will be applied otherwise*/}
                {isDisabled ? 'Selected' : 'Select'}
            </button>
            <button disabled={!isDisabled} onClick={handleDeselect} className={`p-2 font-medium text-white rounded-lg bg-orange-300 hover:bg-rose-200 dselectBtn ${!isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}> 
                <img src={garbage} alt=""/> 
            </button>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddToLog: PropTypes.func.isRequired,
    handleCreditHourCount: PropTypes.func.isRequired,
    handleAddToLogPrice: PropTypes.func.isRequired,
    handleRemovalCourse: PropTypes.func.isRequired
};

export default Course;

/* explanation: isDisabled is false (button on) for <Select Button> . <deselect> button is disabled (!isDisabled = true)

after clicking <Select Button>, isDisabled is true for <Select Button>. and <deselect> is enabled (!isDisable = false because isDisabled was true) */