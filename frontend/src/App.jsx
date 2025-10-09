import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import InfoSection from './components/Infosection'
import BookingForm from './components/BookingForm'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />      
      <InfoSection />
      <BookingForm />
      
      

    </div>
        
  )
}

export default App
