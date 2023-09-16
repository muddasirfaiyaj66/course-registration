import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const TotalCreditHour = ({selectData}) => {

    let totalCredit = 0;
    

    
    
    for(const data of selectData){
      
       if(totalCredit < 20){
        totalCredit += data.credit_hour;

       }else{
        toast('You do not have enough credit hour');

       }

    }

    
    return (
        <div className="border-b-2 pb-3 border-gray-400">
           <h3 className="text-2xl font-semibold my-3">Total Credit Hour: {totalCredit} </h3>
           <ToastContainer></ToastContainer>
           
         </div>
    );
};
TotalCreditHour.propTypes ={
    selectData:PropTypes.object.isRequired
}
export default TotalCreditHour;