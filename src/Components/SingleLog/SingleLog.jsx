import PropTypes from 'prop-types';

const SingleLog = ({log}) => {
    
    const {course_title} = log;
    
    return (
        <div>
            <h2> {course_title} </h2>
        </div>
    );
};

SingleLog.propTypes = {
    log: PropTypes.object.isRequired,  // Assuming log is an object with course_title property
}

export default SingleLog;