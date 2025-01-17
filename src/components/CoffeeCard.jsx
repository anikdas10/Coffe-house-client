import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({coffee,coffees,setCoffees}) => {
    console.log(coffee);
    const {name,quantity,supplier,taste,category,details,photoURL,_id} = coffee;

    const handleDelete = id =>{
        console.log(id);

        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`http://localhost:5000/coffee/${id}`,{
        method:'DELETE',
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.deletedCount>0)
        {
            Swal.fire({
            title: "Deleted!",
            text: "Your coffee has been deleted.",
            icon: "success"
         });

         const remaining = coffees.filter(coff=>coff._id!==id);
         setCoffees(remaining);
        }
    })
  }
});
    }
    return (
         <div className="card card-side bg-base-100 shadow-xl p-5">
    <figure>
    <img
      src={photoURL}
      alt="Movie" />
  </figure>
  <div className="flex items-center justify-between w-full p-4">
   <div>
     <h2 className="card-title">Name:{name}</h2>
    <p>Quantity:{quantity}</p>
    <p>Supplier:{supplier}</p>
    <p>Taste:{taste}</p>
   </div>
    <div className="join join-vertical gap-4">
  <button className="btn ">View</button>
  
  <Link to={`/updateCoffee/${_id}`}>
  <button className="btn ">Edit</button>
  </Link>
  <button 
  onClick={()=>handleDelete(_id)}
  className="btn ">X</button>
        </div>
  </div>
    </div>
    );
};

export default CoffeeCard;