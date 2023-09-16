import PropTypes from 'prop-types';
const CourseNames = ({selectData}) => {
    return (
        <div className="border-b-2 pb-3 border-gray-400 ">
        <h1 className="text-2xl mb-4 font-bold">Course Name </h1>
        {
          selectData.map((data, idx) =>(
           <>
            <ol key={idx} className="mb-3 ">
              <li >{idx+1}. {data.title}</li>
            </ol>
           
           </>
            ))
        }
      </div>
    );
};
CourseNames.propTypes ={
  selectData:PropTypes.object.isRequired
}
export default CourseNames;