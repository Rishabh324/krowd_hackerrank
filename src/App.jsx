import { useState } from 'react'
import hricon from './assets/hackerrank.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  const [items, setItems] = useState([]);
  const [itemText, setItemText] = useState('');

  const handleAddItem = () => {
    if(itemText === '') {
      toast.warning('Please enter item text');
      return;
    }

    setItems([...items, itemText]);
    setItemText('');
  }

  return (
    <> 
      <div className='bg-gray-700 flex items-center justify-center p-4'>
        <header className="flex items-center justify-center gap-4">
          <img width={40} src={hricon} alt='hackerrank'/>
          <h1 className='font-bold text-green-500 text-2xl'>Item List Manager</h1>
        </header>
      </div>
      <main className='p-4 flex justify-center items-center'>
        <div className='w-4/12'>
          <h1 className='text-3xl font-semibold my-4'>Item List</h1>
          <div className='w-full'>
            <input type='text' value={itemText} placeholder='Enter List Items' className='py-2 px-4 border-2 border-solid bg-gray-100 w-full' onChange={(e)=>setItemText(e.target.value)}/>
            <button className='bg-green-500 text-white py-2 px-4 mt-2 w-full' onClick={handleAddItem}>Add Item</button>
          </div>
          <ul className='mt-4 list-disc'>
            {items?.map((item, index) => (
              <li key={index} className='bg-gray-100 p-2 my-2'>{item}</li>
            ))}
          </ul>
        </div>
      </main>
      <ToastContainer />
    </>
  )
}

export default App
