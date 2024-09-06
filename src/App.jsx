import './App.css'
import CourseLog from './Components/CourseLog/CourseLog'
import Courses from './Components/Courses/Courses'

function App() {

  return (
    <div>
      {/* Header */}
      <h2 className="text-4xl text-center mt-9 mb-8 font-bold">Course Registration</h2>

      {/* Main Section */}
      <div className='flex gap-6'>
          <div className="w-3/4">
            <Courses></Courses>
          </div>
          <div className="w-1/4">
            <CourseLog></CourseLog>
          </div>
      </div>
    </div>
  )
}

export default App
