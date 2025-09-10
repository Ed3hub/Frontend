import Navbar from "@/components/Navbar";
import StartDiscussionForm from '@/components/DiscussionForm';



export default function DiscussionFormPage() {
  return (
    <div className="min-h-screen flex bg-gray-50 text-black">

      <div className="flex-1">
        

        <div className="p-6">
          <h1 className="text-xl font-bold mb-2">Welcome, Oluwaseyi!</h1>
          <p className="mb-6 text-gray-500">Dive into real conversations, ask questions, and support each other as you learn and earn.</p>

          <div className="flex space-x-4 mb-6 overflow-x-auto">
             <Navbar activeTab="discussions" />
          </div>

 
          <StartDiscussionForm />


        </div>
      </div>
    </div>
  );
}





