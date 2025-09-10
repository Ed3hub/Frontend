import Navbar from "@/components/Navbar";
import UserCard from "@/components/card/UserCard";


import maleTutor from '@/assets/male-tutor.jpg';
import femaleTutor from '@/assets/female-tutor.jpg';



export default function NetworkPage() {
  return (
    <div className="min-h-screen flex bg-gray-50 text-black">

      <div className="flex-1">
        

        <div className="p-6">
          <h1 className="text-xl font-bold mb-2">Start a Discussion</h1>
          <p className="mb-6 text-gray-500">Share a question, idea, or experience with your learning community</p>

          <div className="flex space-x-4 mb-6 overflow-x-auto">
             <Navbar activeTab="network" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            <UserCard
              name= "Oluwaseyi Akeredolu"
              role= "Product Designer"
              imageUrl= {maleTutor}
            />


            <UserCard
              name= "Oluwaseyi Akeredolu"
              role= "Product Designer"
              imageUrl= {femaleTutor}
            />

            <UserCard
              name= "Oluwaseyi Akeredolu"
              role= "Product Designer"
              imageUrl= {maleTutor}
            />


            <UserCard
              name= "Oluwaseyi Akeredolu"
              role= "Product Designer"
              imageUrl= {femaleTutor}
            />

            <UserCard
              name= "Oluwaseyi Akeredolu"
              role= "Product Designer"
              imageUrl= {maleTutor}
            />


            <UserCard
              name= "Oluwaseyi Akeredolu"
              role= "Product Designer"
              imageUrl= {femaleTutor}
            />

          </div>
        </div>
      </div>
    </div>
  );
}





