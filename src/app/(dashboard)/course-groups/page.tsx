import Navbar from "@/components/Navbar";
import CourseCard from "@/components/card/CourseCard";


import maleTutor from '@/assets/male-tutor.jpg';
import femaleTutor from '@/assets/female-tutor.jpg';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-gray-50 text-black">

      <div className="flex-1">
        

        <div className="p-6">
          <h1 className="text-xl font-bold mb-2">Welcome, Oluwaseyi!</h1>
          <p className="mb-6 text-gray-500">Dive into real conversations, ask questions, and support each other as you learn and earn.</p>

          <div className="flex space-x-4 mb-6 overflow-x-auto">
             <Navbar activeTab="course-groups" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            <CourseCard
              title="DAOLab Bootcamp"
              description="Learn how DAOs work and launch your own community-led project."
              members="540"
              creator="Oluwaseyi Akeredolu"
              creatorImage={femaleTutor}
              isJoined={false}
            />


            <CourseCard
              title="Token Design for Beginners"
              description="Learn how DAOs work and launch your own community-led project."
              members="540"
              creator="Oluwaseyi Akeredolu"
              creatorImage={maleTutor}
              isJoined={true}
            />

            <CourseCard
              title="DAOLab Bootcamp"
              description="Learn how DAOs work and launch your own community-led project."
              members="540"
              creator="Oluwaseyi Akeredolu"
              creatorImage={maleTutor}
              isJoined={false}
            />

            <CourseCard
              title="Token Design for Beginners"
              description="Learn how DAOs work and launch your own community-led project."
              members="540"
              creator="Oluwaseyi Akeredolu"
              creatorImage={maleTutor}
              isJoined={false}
            />

            <CourseCard
              title="DAOLab Bootcamp"
              description="Learn how DAOs work and launch your own community-led project."
              members="540"
              creator="Oluwaseyi Akeredolu"
              creatorImage={maleTutor}
              isJoined={true}
            />

            <CourseCard
              title="Token Design for Beginners"
              description="Learn how DAOs work and launch your own community-led project."
              members="540"
              creator="Oluwaseyi Akeredolu"
              creatorImage={maleTutor}
              isJoined={false}
            />

          </div>
        </div>
      </div>
    </div>
  );
}





