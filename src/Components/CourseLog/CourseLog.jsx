import PropTypes from 'prop-types';
import SingleLog from "../SingleLog/SingleLog";

const CourseLog = ({logs, remaining, price, hours}) => {
    return (
        <div className="bg-white rounded-lg p-6">
            <h2 className="text-sky-700 text-lg mb-4 font-bold">Credit Hour Remaining: {remaining} hrs</h2>
            <hr className="border-gray-300"/>

            <h2 className="font-bold text-xl mt-4 mb-5">Course Log: {logs.length} </h2>
            {
                logs.map((log, idx) => <SingleLog key={idx} log={log}></SingleLog> )
            }

            <hr className="border-gray-300 mt-6" />

            <h2 className="my-4 text-gray-500 text-[1rem]">Total Credit Hour: {hours}</h2>
            <hr className="border-gray-300" />

            <h2 className="mt-4 text-gray-600 font-semibold text-[1rem]">Total Price: {price} USD</h2>
        </div>
    );
};

CourseLog.propTypes = {
    logs: PropTypes.array.isRequired,
    remaining: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    hours: PropTypes.number.isRequired
};

export default CourseLog;