import { FaDollarSign, FaBookOpen } from "react-icons/fa";
import './Course.css'

const Course = ({course}) => {

    const {course_title, course_details, course_img, credit_hrs, price} = course;

    return (
        <div className="p-4 bg-white rounded-xl">
            <img className="max-w-full w-full object-contain" src={course_img} alt="" />
            <h3 className="font-semibold text-lg mt-4 mb-3">{course_title}</h3>
            <p className="text-gray-600 mb-5">{course_details}</p>
            <div className="flex items-center justify-between mb-6">  
                <p className="flex items-center justify-between">
                    <FaDollarSign/> <span className="ml-2 text-gray-600">Price: {price}</span>
                </p>
                <p className="flex items-center justify-between">
                    <FaBookOpen/> <span className="ml-2 text-gray-600">Credit: {credit_hrs} hrs</span>
                </p>
            </div>
            <button className="bg-blue-600 w-full text-lg text-white rounded-xl py-2.5 selectBtn">Select</button>
        </div>
    );
};

export default Course;