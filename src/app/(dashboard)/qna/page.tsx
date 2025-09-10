import Navbar from "@/components/Navbar";
import QnACard from "@/components/card/QnACard";

import maleTutor from '@/assets/male-tutor.jpg';
import femaleTutor from '@/assets/female-tutor.jpg';
import  firstLiveQnA from '@/assets/live-qna-1.jpg';
import  secondLiveQnA from '@/assets/live-qna-2.jpg';
import  thirdLiveQnA from '@/assets/live-qna-3.jpg';
import  fourthLiveQnA from '@/assets/live-qna-4.jpg';
import  fifthLiveQnA from '@/assets/live-qna-5.jpg';



export default function LiveQnAPage() {
  return (
    <div className="min-h-screen flex bg-gray-50 text-black">

      <div className="flex-1">
        

        <div className="p-6">
          <h1 className="text-xl font-bold mb-2">Welcome, Oluwaseyi!</h1>
          <p className="mb-6 text-gray-500">Dive into real conversations, ask questions, and support each other as you learn and earn.</p>

          <div className="flex space-x-4 mb-6 overflow-x-auto">
             <Navbar activeTab="qna" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            <QnACard
              thumbnail={firstLiveQnA}
              title="Token Design AMA with Femi Ogun"
              host="Oluwaseyi Akeredolu"
              date="Mon, May 06"
              time="5:00PM"
              isLive={true}
              avatars={[
                { image: femaleTutor, alt: 'User 1'},
                { image: maleTutor, alt: 'User 2'},
                { image: femaleTutor, alt: 'User 3'},
              ]}
            />

            <QnACard
              thumbnail={secondLiveQnA}
              title="Token Design AMA with Femi Ogun"
              host="Oluwaseyi Akeredolu"
              date="Mon, May 06"
              time="5:00PM"
              isLive={true}
              avatars={[
                { image: femaleTutor, alt: 'User 1'},
                { image: maleTutor, alt: 'User 2'},
                { image: femaleTutor, alt: 'User 3'},
              ]}
            />

            <QnACard
              thumbnail={thirdLiveQnA}
              title="Token Design AMA with Femi Ogun"
              host="Oluwaseyi Akeredolu"
              date="Mon, May 06"
              time="5:00PM"
              isLive={true}
              avatars={[
                { image: femaleTutor, alt: 'User 1'},
                { image: maleTutor, alt: 'User 2'},
                { image: femaleTutor, alt: 'User 3'},
              ]}
            />

            <QnACard
              thumbnail={fourthLiveQnA}
              title="Token Design AMA with Femi Ogun"
              host="Oluwaseyi Akeredolu"
              date="Mon, May 06"
              time="5:00PM"
              isLive={true}
              avatars={[
                { image: femaleTutor, alt: 'User 1'},
                { image: maleTutor, alt: 'User 2'},
                { image: femaleTutor, alt: 'User 3'},
              ]}
            />

            <QnACard
              thumbnail={fifthLiveQnA}
              title="Token Design AMA with Femi Ogun"
              host="Oluwaseyi Akeredolu"
              date="Mon, May 06"
              time="5:00PM"
              isLive={true}
              avatars={[
                { image: femaleTutor, alt: 'User 1'},
                { image: maleTutor, alt: 'User 2'},
                { image: femaleTutor, alt: 'User 3'},
              ]}
            />

            <QnACard
              thumbnail={thirdLiveQnA}
              title="Token Design AMA with Femi Ogun"
              host="Oluwaseyi Akeredolu"
              date="Mon, May 06"
              time="5:00PM"
              isLive={true}
              avatars={[
                { image: femaleTutor, alt: 'User 1'},
                { image: maleTutor, alt: 'User 2'},
                { image: femaleTutor, alt: 'User 3'},
              ]}
            />

          </div>
        </div>
      </div>
    </div>
  );
}





