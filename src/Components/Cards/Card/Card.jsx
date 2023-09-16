const Card = ({card, handleClick}) => {
    const {img, title,description,price,credit_hour,d_icon,b_icon } =card;

    

  

    return (
        <div>
            <div className="card card-compact md:h-[450px] bg-base-100 shadow-xl">
  <figure className="p-2"> <img  src={img}  alt="banner image" /> </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="flex justify-between ">
        <div className="flex">Price: <span><img  className="w-5 mx-1" src="dollar-sign 1.png"/> </span>   {price}</div>
        <div className="flex">Credit: <span><img className="w-5 mx-1"  src="Frame.png"/> </span>  {credit_hour}hr</div>
    </div>
    <div className="card-actions justify-end">
      <button onClick={()=> handleClick(card)} className="btn w-full btn-primary">Select</button>
      
    </div>
  </div>
  
</div>
</div>
         
    );

  };
export default Card;