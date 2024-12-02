import Swal from "sweetalert2";


const AddCoffee = () => {

    const handleAddCoffee = e =>{
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

        fetch("http://localhost:5000/coffee",{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId)
            {
                Swal.fire({
                title: "Success",
                text: "Coffee added successfully",
                icon: "success",
                confirmButtonText: "Close"
});
            }
        })

    }
    return (
        <div className="mt-20 p-5">
            <h2 className="text-center font-extrabold text-3xl">Add Coffee</h2>
            <div className="card mx-auto bg-base-100 w-full shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleAddCoffee}>
        {/* row-1 */}
       <div className="flex gap-4">
         <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Coffee name</span>
          </label>
          <input type="text" placeholder="Coffee name" 
          name="name"
          className="input input-bordered w-full" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input type="text" 
          name="quantity"
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
          className="input input-bordered w-full" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <input type="text" 
          name="taste"
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
          className="input input-bordered w-full" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" 
          name="details"
          placeholder="Enter coffee details" className="input input-bordered w-full" required />
          
        </div>
       </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" 
          name="photoURL"
          placeholder="Enter photo url" className="input input-bordered w-full" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add coffee</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default AddCoffee;