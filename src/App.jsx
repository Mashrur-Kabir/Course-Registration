import { useState } from 'react'
import './App.css'
import CourseLog from './Components/CourseLog/CourseLog'
import Courses from './Components/Courses/Courses'
import Swal from 'sweetalert2'; //imported sweetalert >> "npm install sweetalert2"

function App() {

  const [logs, setLogs] = useState([]); // add to log function state

  const [remaining, setRemaining] = useState(20); // credit hour count function state

  const [price, setPrice] = useState(0); // add price function state

  const [hours, setHours] = useState(0)

  // add to log function
  const handleAddToLog = (course) => {
      const newLogs = [...logs, course];
      setLogs(newLogs);
  }

  // add to price
  const handleAddToLogPrice = (cPrice) => {
      const newPrice = price + cPrice;
      setPrice(newPrice);
  }

  // add credit hour
  const handleAddHours = (creditHour) => {
    const newHours = hours + creditHour;
    setHours(newHours);
  }

  //credit Hour count function (remaining hours)
  const handleCreditHourCount = (hrs) => {
    if (hrs <= remaining) {
      handleAddHours(hrs);
      setRemaining(remaining - hrs);
      return true; // Course was successfully added
    } else {
      Swal.fire({
        title: 'Warning!',
        text: 'Credit limit has been reached',
        icon: 'warning',
        confirmButtonText: 'Okay',
        customClass: {
          popup: 'rounded-lg p-6', // Popup styling with Tailwind
          confirmButton: 'custom-swal-button', // Custom button class with no border
        },
        buttonsStyling: false // Disable SweetAlert2 default button styling
      });
    /* We need to modify the handleCreditHourCount function so it returns a value that informs whether the course was successfully added. Based on this result, you can control whether the button gets disabled or not. */
    return false; // course was not successfully added
    }
};

  return (
    <div>
      {/* Header */}
      <h2 className="text-4xl text-center mt-9 mb-8 font-bold">Course Registration</h2>

      {/* Main Section */}
      <div className='flex gap-6'>
          <div className="w-3/4">
            <Courses handleAddToLog={handleAddToLog} handleCreditHourCount={handleCreditHourCount} handleAddToLogPrice={handleAddToLogPrice}></Courses> {/* where ill go to establish drilling and receive argument */}
          </div>
          <div className="w-1/4">
            <CourseLog logs={logs} remaining={remaining} price={price} hours={hours}></CourseLog> {/* where ill show stuff */}
          </div>
      </div>
    </div>
  )
}

export default App
