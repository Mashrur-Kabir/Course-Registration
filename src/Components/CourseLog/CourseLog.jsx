
const CourseLog = () => {
    return (
        <div className="bg-white rounded-lg p-6">
            <h2 className="text-sky-700 text-lg mb-4 font-bold">Credit Hour Remaining: <span>0</span> hrs</h2>
            <hr className="border-gray-300" />

            <h2 className="font-bold text-xl mt-4 mb-5">Course Log: </h2>

            <hr className="border-gray-300 mt-6" />

            <h2 className="my-4 text-gray-500 text-[1rem]">Total Credit Hour: </h2>
            <hr className="border-gray-300" />

            <h2 className="mt-4 text-gray-600 font-semibold text-[1rem]">Total Price: </h2>
        </div>
    );
};

export default CourseLog;