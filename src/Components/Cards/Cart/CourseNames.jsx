const CourseNames = ({selectData}) => {
    return (
        <div className="border-b-2 pb-3 border-gray-400 ">
        <h1 className="text-2xl mb-4 font-bold">Course Name </h1>
        {
          selectData.map((data, idx) =>(
           <>
            <ol  className="mb-3 ">
              <li >{idx+1}. {data.title}</li>
            </ol>
           
           </>
            ))
        }
      </div>
    );
};

export default CourseNames;