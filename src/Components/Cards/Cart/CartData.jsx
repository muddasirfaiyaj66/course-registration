
import CourseNames from "./CourseNames";
import CreditHour from "./CreditHour";

const CartData = ({selectData}) => {
    
    
    
    
    return (
        <div className="card h-max w-full bg-gray-200 ">
            {
                selectData.map((item)=> (
                    <div>
                        <CreditHour></CreditHour>
                        <CourseNames></CourseNames>
                    </div>
                    
                    
                )
                )
            }
            </div>
            

    );
};

export default CartData;