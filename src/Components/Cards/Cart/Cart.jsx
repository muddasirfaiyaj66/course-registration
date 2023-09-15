

const Cart = () => {
    return (
        <div>
           <div className="card w-96 bg-gray-200 ">
  <div className="card-body items-center text-center ">
    <h2 className="font-bold text-2xl mb-3 text-blue-600 pb-3 border-gray-400 border-b-2">Credit Hour Remaining hr</h2>
    <div className="border-b-2 pb-3 border-gray-400 ">
      <h1 className="text-2xl mb-4 font-bold">Course Name</h1>
      <p className="mb-3"></p>
    </div>
    <div className="border-b-2 pb-3 border-gray-400">
      <h3 className="text-2xl font-semibold my-3">Total Credit Hour: </h3>
    </div>
    <div>
      <h2 className="text-2xl font-bold ">Total Price: USD</h2>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Cart;