import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import NoContacts from "./components/NoContacts"
import { FiSearch } from 'react-icons/fi'
import { AiFillPlusCircle } from 'react-icons/ai'
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from './config/firebase'
import ContactsCard from './components/ContactsCard'
import Model from './components/Model'
import AddAndUpdate from './components/AddAndUpdate'
import useDisclouse from './hooks/useDisclouse'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const [contacts, setContact] = useState([]);
 const {isOpen , onOpen , onClose} = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");
        
        onSnapshot(contactRef , (snapshot) =>{
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            }
          });
          setContact(contactLists);
          return contactLists;
        })
     
      } catch (error) {

      }};
    getContacts();
  }, [])

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactRef = collection(db, "contacts");
        
    onSnapshot(contactRef , (snapshot) =>{
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContact(filteredContacts);
      return filteredContacts;
    
  });
  }

  return (
    <>
    <div className='mx-auto max-w-[370px]'>
      <Navbar />
      <div className='flex gap-2'>
        <div className='flex flex-grow relative items-center'>
          <FiSearch className='text-white absolute text-3xl ml-1 ' />
          <input onChange={filterContacts} type="text" className=' border h-10 flex-grow bg-transparent border-white rounded-md text-white text-lg pl-9' />
        </div>

        <div>
          <AiFillPlusCircle onClick={onOpen} className='text-5xl text-white cursor-pointer' />
        </div>
      </div>

      <div className='mt-4 flex flex-col gap-3'>
        {contacts.length <= 0 ? <NoContacts /> : contacts.map((contact) => (

       <ContactsCard key={contact.id} contact={contact} />

        ))}
      </div>
    </div>
   <AddAndUpdate isOpen={isOpen} onClose={onClose} />
   <ToastContainer />
    </>
  )
}

export default App
