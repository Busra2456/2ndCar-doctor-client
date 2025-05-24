import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const BookService = () => {
      const service = useLoaderData();
      console.log(service)
      const {title, _id, price, img,} = service;
      const {user} = useContext(AuthContext);
      
      
      const handleBookService = event =>{
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const date = form.date.value;
            const email = user?.email;
            const booking = {
                  customerName : name,
                  email,
                  img,
                  date,
                  service: title,
                  service_id:_id,
                 price: price
            }
            console.log(booking);
            fetch('http://localhost:5000/doctorsBook',{
                  method: 'POST',
                  headers:{
                        'content-type' : 'application/json'

                  },
                  body: JSON.stringify(booking)

            })
            .then(res => res.json())
            .then(data =>{
            console.log(data);
            if(data.insertedId){
                  alert('service book successfully')
            }

            })
      }
      return (
            <div className="mt-10">
            <h2 className="text-center text-3xl font-bold"> {title} </h2>

            <form onSubmit={handleBookService}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 ">
          
          
   <div className=" ">
  
    <input type="text" name="name" defaultValue={user?.displayName} className="input w-full" placeholder="Service Name" />
    
   </div>
   <div>
   
   <input type="date" name="date" className="input w-full" placeholder="date" />
   </div>
   
  
    <div>
   
    <input type="text" name="email" className="input w-full" defaultValue={user?.email} de  placeholder="email"  />
    
    </div>
    <div>
   
    <input type="text"
    
     defaultValue={'$'+price} className="input w-full" placeholder="Due amount" />
   
    </div>
  
  
</div>

<div className="my-6">
      <input  className="btn btn-neutral bg-[#FF3811]  border-[#FF3811] w-full" type="submit" value="Order Confirm" />
</div>
          
            </form>
          
           

</div>
      );
};

export default BookService;