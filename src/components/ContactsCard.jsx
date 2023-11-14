import { deleteDoc, doc } from 'firebase/firestore'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleLine } from 'react-icons/ri'
import { db } from '../config/firebase'
import AddAndUpdate from './AddAndUpdate'
import useDisclouse from '../hooks/useDisclouse'
import { toast } from 'react-toastify'

const ContactsCard = ({contact}) => {
  const {isOpen , onClose , onOpen} = useDisclouse();


  const deleteContact = async (id) =>{
    try {
      await deleteDoc(doc(db,"contacts" , id))
      toast.success("Contact Deleted Sucessfully");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
    <div>
         <div key={contact.id} className='flex items-center bg-yellow justify-between rounded-lg p-2'>
            <div className='flex gap-1'>
              <HiOutlineUserCircle className='text-orange text-4xl ' />

              <div className=''>
                <h2 className='font-medium'>{contact.name}</h2>
                <p className='text-sm'>{contact.email}</p>
              </div>
            </div>
            <div className='flex text-3xl gap-2'>
              <RiEditCircleLine className='cursor-pointer' onClick={onOpen} />
              <IoMdTrash onClick={() => deleteContact(contact.id)} className='text-orange cursor-pointer' />
            </div>
          </div>
    </div>

    <AddAndUpdate 
    contact={contact}
     isUpdate
     isOpen={isOpen}
     onClose={onClose}
     />
    </>
  )
}

export default ContactsCard
