

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CreditHour = ({selectData}) => {
    let remaining = 20;
    for(const data of selectData){
        remaining -= parseInt(data.credit_hour);
        if(remaining <= 0){
            toast('remaining cannot be zero')
        }

    }
   
    

    return (
        <div>
             <h2 className="font-bold text-2xl mb-3 text-blue-600 pb-3 border-gray-400 border-b-2">Credit Hour Remaining {`${remaining >=0 ? remaining + "hr": ''}`} </h2>
             <ToastContainer/>
        </div>
    );
};

export default CreditHour;