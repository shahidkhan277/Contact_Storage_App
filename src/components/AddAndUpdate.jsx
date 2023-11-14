import { ErrorMessage, Field, Form, Formik } from 'formik'
import Model from './Model'
import {addDoc, collection, doc, updateDoc} from "firebase/firestore";
import {db} from "../config/firebase";
import { toast } from 'react-toastify';
import * as Yup from "yup";

const AddAndUpdate = ({isOpen , onClose , isUpdate , contact}) => {

  const contactSchemaValidation = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email("Invalid Email").required("Email is Required")
  });

  const addContact = async (contact) =>{
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef , contact);
      onClose();
      toast.success("Contact Added Sucessfully");

    } catch (error) {
      console.log(error);
    }
  }
  const updateContact = async (contact ,id) =>{
    try {
      const contactRef = doc(db, "contacts" , id);
      await updateDoc(contactRef , contact);
      onClose();
      toast.success("Contact Updated Sucessfully");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
     <Model isOpen={isOpen} onClose={onClose}>
      <Formik
      validationSchema={contactSchemaValidation}
      initialValues={
        isUpdate ? {
          name:contact.name,
        email:contact.email,
        }
        : {
          name:"",
        email:"",
        }
        
      }
      onSubmit={(values) => {
        isUpdate ? updateContact(values,contact.id) : addContact(values);
      }}
      >
        <Form className='flex flex-col text-xl gap-4 max-w-[70%] m-auto'>
           <div className='flex flex-col gap-1'>
           <label htmlFor="name">Name</label>
            <Field name="name" className="h-10 border" />
            <div className='text-red-500'>
              <ErrorMessage name="name" />
            </div>
           </div>
           <div className='flex flex-col gap-1'>
           <label htmlFor="email">Email</label>
            <Field  name="email" className="h-10 border" />
            <div className='text-red-500'>
              <ErrorMessage name="email" />
            </div>
           </div>
           <button className='bg-orange border self-end px-3 py-1.5 '>
            {isUpdate ? "Update" : "Add"} Contact
           </button>
        </Form>
      </Formik>
    </Model>
    </div>
  )
}

export default AddAndUpdate
