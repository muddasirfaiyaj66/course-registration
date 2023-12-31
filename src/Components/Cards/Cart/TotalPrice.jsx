import PropTypes from 'prop-types';
const TotalPrice = ({selectData}) => {
    let total = 0;
    for(const data of selectData){
       total += data.price;

    }
    return (
        <div>
           <h2 className="text-2xl font-bold ">Total Price:{total} USD</h2>
         </div>
    );
};
TotalPrice.propTypes ={
    selectData:PropTypes.object.isRequired
}
export default TotalPrice;