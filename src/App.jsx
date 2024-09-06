import { useState } from 'react';
import './App.css';
import CourseLog from './Components/CourseLog/CourseLog';
import Courses from './Components/Courses/Courses';
import Swal from 'sweetalert2';

function App() {
  const [logs, setLogs] = useState([]); // add to log function state
  const [remaining, setRemaining] = useState(20); // credit hour count function state
  const [price, setPrice] = useState(0); // add price function state
  const [hours, setHours] = useState(0); // add hours function state

  // add to log function
  const handleAddToLog = (course) => {
    const newLogs = [...logs, course];
    setLogs(newLogs);
  };

  // add to price
  const handleAddToLogPrice = (cPrice) => {
    const newPrice = price + cPrice;
    setPrice(newPrice);
  };

  // add credit hour
  const handleAddHours = (creditHour) => {
    const newHours = hours + creditHour;
    setHours(newHours);
  };

  // credit Hour count function (remaining hours)
  const handleCreditHourCount = (hrs) => {
    if (hrs <= remaining) {
      handleAddHours(hrs);
      setRemaining(remaining - hrs);
      return true; // Course was successfully added
    } else {
      Swal.fire({
        title: 'Warning!',
        text: 'Credit limit has been reached. You can deselect courses to adjust your choice',
        icon: 'warning',
        confirmButtonText: 'Okay',
        customClass: {
          popup: 'rounded-lg p-6',
          confirmButton: 'custom-swal-button',
        },
        buttonsStyling: false,
      });
      return false; // course was not successfully added
    }
  };

  // remove course function
  const handleRemovalCourse = (cprice, creditHour, id) => {
    const filteredLogs = logs.filter((course) => course.id !== id);
    setLogs(filteredLogs);

    const newPrice = price - cprice;
    setPrice(newPrice);

    const newCreditHour = hours - creditHour;
    setHours(newCreditHour);

    const remainingAfterDeselect = remaining + creditHour;
    setRemaining(remainingAfterDeselect);
  };


  return (
    <div>
      {/* Header */}
      <h2 className="text-4xl text-center mt-9 mb-8 font-bold">Course Registration</h2>

      {/* Main Section */}
      <div className='flex gap-6'>
          <div className="w-3/4">
            <Courses handleAddToLog={handleAddToLog} handleCreditHourCount={handleCreditHourCount} handleAddToLogPrice={handleAddToLogPrice} handleRemovalCourse={handleRemovalCourse}></Courses> {/* where ill go to establish drilling and receive argument */}
          </div>
          <div className="w-1/4">
            <CourseLog logs={logs} remaining={remaining} price={price} hours={hours}></CourseLog> {/* where ill show stuff */}
          </div>
      </div>
    </div>
  )
}

export default App
