import { useEffect, useState } from 'react';
import axios from 'axios';

function BookingForm() {
    const [bookings, setBookings] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:3001/kihasznaltsag')
        .then(response => setBookings(response.data))
        .catch(error => console.error(error));
    }, []);
  
    return (
      <div>
        <h2>A szobák kihasználtsága</h2>
        <table>
          <thead>
            <tr>
              <th>Szoba neve</th>
              <th>Vendégek száma</th>
              <th>Vendégéjszakák száma</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.sznev}</td>
                <td>{booking.vendeg}</td>
                <td>{booking.vendegejszakak}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default BookingForm;