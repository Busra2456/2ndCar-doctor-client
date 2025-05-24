import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
 "react-router-dom";

const Bookings = () => {
      const [bookings,setBookings] = useState([]);
      const {user} = useContext(AuthContext)
      const url =`http://localhost:5000/doctorsBook?email=${user?.email}`;

      useEffect(() =>{
            fetch(url)
            .then(res => res.json())
            .then(data =>setBookings(data)
            )
      }, [url])


      const handleDelete = id => {
            const proceed = confirm('Are You Sure you Want to delete');
            if(proceed){
                  fetch(`http://localhost:5000/doctorsBook/${id}`, {
                        method: 'DELETE'
      })
      .then(res =>res.json())
      .then(data =>{
            console.log(data);
            if(data.deletedCount > 0){
                  alert('deleted successfully');
                  const remaining = bookings.filter(booking => booking._id !== id);
                  setBookings(remaining)
                        }
                  })

            }
      }

      const handleBookingConfirm = id => {
            fetch(`http://localhost:5000/doctorsBook/${id}`, { method: 'PATCH',
              headers:{
                    'content-type' : 'application/json'

              },
              body: JSON.stringify({status: 'confirm'})
                    })
                    .then(res =>res.json())
                    .then(data =>{
                          console.log(data);
                          if(data.modifiedCount > 0){
                                //update state 
                                // alert('deleted successfully');
                                const remaining = bookings.filter(booking => booking._id !== id);
                                const updated = bookings.find(booking => booking._id === id)
                                
                                updated.status = 'confirm'
                                const newBooking = [updated,...remaining];
                                setBookings(newBooking)
                          }
                    })
  
              }
        



      return (
            <div>
            <h2 className="text-5xl">your bookings: {bookings.length} </h2>

            <div className="overflow-x-auto">
<table className="table">
<thead>
<tr>
  <th>
  <label>
          <input type="checkbox" className="checkbox" />
        </label>
  </th>
  <th>Image</th>
  <th>Service</th>
  <th>Date</th>
  <th>Price</th>
  <th>Status</th>
</tr>



{
bookings.map(booking => <BookingRow
key={booking._id}
booking={booking}
handleDelete={handleDelete}
handleBookingConfirm ={handleBookingConfirm}
></BookingRow>)
}




</thead>
</table>
</div>
      </div>
);
};

export default Bookings;