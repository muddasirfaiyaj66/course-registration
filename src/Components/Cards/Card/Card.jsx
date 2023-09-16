

const Card = ({card, handleClick}) => {
    const {img, title,description,price,credit_hour } =card;

    

  

    return (
        <div>
            <div className="card card-compact h-[450px] bg-base-100 shadow-xl">
  <figure className="p-2"> <img  src={img}  alt="banner image" /> </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="flex justify-between">
        <div>Price: {price}</div>
        <div>Credit:{credit_hour}hr</div>
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