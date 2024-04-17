import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import ContentEdit from './ContentEdit';
import { teacher } from '../TeacherTable/DataStructure';
import { Student } from '../StudentTable/DataStructure';

const ModalEdit = ({ Data, closeModal }: {Data:teacher|Student ,closeModal:any}) => {
  return (
    <div
    
    className="relative z-10"
    aria-labelledby="crop-image-dialog"
    role="dialog"
    aria-modal="true"
  >
    <div  className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-all backdrop-blur-sm"  > </div>
    <div  className="fixed inset-0 flex justify-center content-center z-10 w-full overflow-y-auto"onClick={(e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) { // Check if the click happened on the overlay itself
      closeModal(); // Call the closeModal function passed via props
    }
  }} >
      <div className="flex min-w-md min-h-full justify-center content-center w-4/5 sm:w-4/5 md:w-3/4 lg:w-3/5 py-12 text-center ">
        <div className="relative w-full overflow-auto sm:w-[80%] min-w-min min-h-[60vh] rounded-2xl bg-slate-100  text-slate-900 dark:bg-slate-800 dark:text-white text-left shadow-xl transition-all">
          <div className="px-5 flex justify-center content-center   h-full              py-10">
            <button
                type="button"
                className="rounded-md p-1 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none absolute top-2 right-2"
                onClick={closeModal}
              >
                <span className="sr-only">Close menu</span>
                <X />
            </button>
            
            <ContentEdit Data={Data}  />
          </div>
        </div>
      </div>
    </div>
  </div>
);
};
export default ModalEdit;