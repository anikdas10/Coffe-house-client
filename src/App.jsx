import { useLoaderData } from "react-router-dom"
import Navbar from "./components/Navbar"
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";




function App() {

  const allCoffee = useLoaderData();
  console.log(allCoffee);

  const [coffees,setCoffees]= useState(allCoffee);
 
  return (
    <>
     <Navbar></Navbar>
     
     {/* card */}
    <div className="p-10 grid grid-cols-1 md:grid-cols-2  gap-4">
      {
        coffees.map(coffee=><CoffeeCard key={coffee._id}
        coffee={coffee}
        coffees={coffees}
        setCoffees={setCoffees}
        ></CoffeeCard>)
      }
    </div>
     
    </>
  )
}

export default App
