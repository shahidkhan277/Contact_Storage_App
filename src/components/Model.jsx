import { createPortal } from 'react-dom'
import { AiFillCloseCircle} from 'react-icons/ai'

const Model = ({isOpen , onClose , children}) => {
  return createPortal (
    <>
    { isOpen && (
        <div className='grid place-items-center absolute top-0 w-screen h-screen z-30 backdrop-blur ' >

         <div className=' relative z-50 m-auto min-h-[200px] min-w-[50%] bg-white p-4'>
        <div className='flex justify-end'>
        <AiFillCloseCircle onClick={onClose} className='text-2xl cursor-pointer '/>
        </div>
            {children}
         </div> 

         
         </div>
         )}
    
    
    </> ,
    document.getElementById("model-root")
  )
}

export default Model
