import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    console.log(coffee);
    const {name,quantity,supplier,taste,category,details,photoURL,_id} = coffee;

     const handleUpdateCoffee = e =>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoURL = form.photoURL.value;

        const newCoffee = {name,quantity,supplier,taste,category,details,photoURL};
        console.log(newCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(
                data.modifiedCount>0)
            {
                Swal.fire({
                title: "Success",
                text: "Coffee Updated successfully",
                icon: "success",
                confirmButtonText: "Close"
});
            }
        })

    }

    return (
       <div className="mt-20 p-5">
            <h2 className="text-center font-extrabold text-3xl">Update Coffee :{name}</h2>
            <div className="card mx-auto bg-base-100 w-full shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleUpdateCoffee}>
        {/* row-1 */}
       <div className="flex gap-4">
         <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Coffee name</span>
          </label>
          <input type="text" placeholder="Coffee name" 
          name="name"
          defaultValue={name}
          className="input input-bordered w-full" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input type="text" 
          name="quantity"
          defaultValue={quantity}
          placeholder="Available Quantity" className="input input-bordered w-full" required />
          
        </div>
       </div>
        {/* row-2 */}
       <div className="flex gap-4">
         <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <input type="text" placeholder="Enter coffee supplier" 
          name="supplier"
          defaultValue={supplier}
          className="input input-bordered w-full" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <input type="text" 
          name="taste"
          defaultValue={taste}
          placeholder="Enter coffee taste" className="input input-bordered w-full" required />
          
        </div>
       </div>
        {/* row-1 */}
       <div className="flex gap-4">
         <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" placeholder="Enter coffee category" 
          name="category"
          defaultValue={category}
          className="input input-bordered w-full" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" 
          name="details"
          defaultValue={details}
          placeholder="Enter coffee details" className="input input-bordered w-full" required />
          
        </div>
       </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" 
          name="photoURL"
          defaultValue={photoURL}
          placeholder="Enter photo url" className="input input-bordered w-full" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update coffee</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default UpdateCoffee;