import React, { useState } from "react";
import {
  ChevronDown,
  CheckCircle2,
  Edit3,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const QuizAssessment = () => {
  const [assessmentType, setAssessmentType] = useState("Quiz"); // Default to Quiz as per image
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);

  // Data from Image 1 (Quiz)
  const quizQuestions = [
    {
      id: 1,
      label: "1: Multiple Choice:",
      question: "What is the primary purpose of a blockchain?",
      type: "mcq",
      options: [
        "A) Centralize data storage",
        "B) Facilitate private communication",
        "C) Maintain a secure, decentralized ledger",
        "D) Speed up internet browsing",
      ],
    },
    {
      id: 2,
      label: "2: True or False:",
      question: "In a DAO, decisions are usually made through token-based voting.",
      type: "mcq",
      options: ["A) True", "B) False"],
    },
    {
      id: 3,
      label: "3: Fill in the Blank:",
      question: "The total supply of a token that will ever exist is called its ___________ supply.",
      type: "input",
    },
  ];

  // Data from Image 2 (Assessment)
  const assessmentQuestions = [
    {
      id: 1,
      label: "1. Practical Application",
      question: "Design a user flow for logging into a Web3 app using a decentralized identity. Briefly outline the steps and tools involved.",
      type: "input",
      placeholder: "Expected: Wallet connection, DID creation, etc...",
    },
    {
      id: 2,
      label: "2. Matching Terms",
      question: "Instructions: Match the terms on the left with their correct definitions on the right. (e.g., A-2, B-3, C-1)",
      type: "input",
      placeholder: "Enter matches (e.g. A-2, B-3...)",
    },
    {
      id: 3,
      label: "3. Short Answer",
      question: "Explain how smart contracts enable trustless interactions in Web3.",
      type: "input",
      placeholder: "Expected: Code enforces rules automatically...",
    },
  ];

  const activeQuestions = assessmentType === "Quiz" ? quizQuestions : assessmentQuestions;

  const handleNext = () => {
    if (currentQuestionIdx < activeQuestions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      setIsReviewMode(true);
    }
  };

  const handleBack = () => {
    if (currentQuestionIdx > 0) {
      setCurrentQuestionIdx(currentQuestionIdx - 1);
    }
  };

  const jumpToQuestion = (index) => {
    setCurrentQuestionIdx(index);
    setIsReviewMode(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white font-sans text-black min-h-screen">
      {/* HEADER SECTION */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-6">Quiz/Assessment</h1>
        
        <div className="relative">
          <label className="block text-sm font-medium text-gray-500 mb-2">Type: {assessmentType}</label>
          <div 
            onClick={() => setShowTypeDropdown(!showTypeDropdown)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg flex justify-between items-center cursor-pointer hover:border-[#00AEEF] transition-colors"
          >
            <span className="font-medium text-gray-700">{assessmentType}</span>
            <ChevronDown className="text-gray-400" size={20} />
          </div>
          
          {showTypeDropdown && (
            <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden">
              {["Quiz", "Assessment"].map((type) => (
                <div 
                  key={type}
                  onClick={() => {
                    setAssessmentType(type);
                    setAnswers({});
                    setCurrentQuestionIdx(0);
                    setIsReviewMode(false);
                    setShowTypeDropdown(false);
                  }}
                  className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b last:border-0 text-sm"
                >
                  {type}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* QUESTION PLAYER */}
      {!isReviewMode ? (
        <div className="animate-in fade-in duration-500">
          <div className="mb-6">
            <h2 className="text-md font-bold mb-2">{activeQuestions[currentQuestionIdx].label}</h2>
            <p className="text-gray-700 leading-relaxed">
              {activeQuestions[currentQuestionIdx].question}
            </p>
          </div>

          <div className="space-y-4">
            {activeQuestions[currentQuestionIdx].type === "mcq" ? (
              <div className="grid gap-3">
                {activeQuestions[currentQuestionIdx].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => setAnswers({ ...answers, [currentQuestionIdx]: option })}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex justify-between items-center ${
                      answers[currentQuestionIdx] === option
                        ? "border-[#00AEEF] bg-blue-50 text-[#00AEEF] font-semibold"
                        : "border-gray-100 bg-white hover:border-gray-200"
                    }`}
                  >
                    <span>{option}</span>
                    {answers[currentQuestionIdx] === option && <CheckCircle2 size={20} />}
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                <textarea
                  className="w-full p-4 border border-gray-200 rounded-xl outline-none focus:border-[#00AEEF] min-h-[150px] text-sm"
                  placeholder={activeQuestions[currentQuestionIdx].placeholder || "Type your answer here..."}
                  value={answers[currentQuestionIdx] || ""}
                  onChange={(e) => setAnswers({ ...answers, [currentQuestionIdx]: e.target.value })}
                />
              </div>
            )}
          </div>

          {/* NAVIGATION FOOTER */}
          <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-100">
            <button
              onClick={handleBack}
              disabled={currentQuestionIdx === 0}
              className={`flex items-center gap-1 font-semibold px-4 py-2 rounded-lg transition-colors ${
                currentQuestionIdx === 0 ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              <ChevronLeft size={20} /> Back
            </button>
            
            <button
              onClick={handleNext}
              className="px-10 py-3 bg-[#00AEEF] text-white font-bold rounded-xl shadow-lg shadow-blue-100 hover:bg-[#0096ce] transition-all"
            >
              {currentQuestionIdx === activeQuestions.length - 1 ? "Review All" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        /* REVIEW SCREEN */
        <div className="animate-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Review Your Work</h2>
            <span className="bg-blue-50 text-[#00AEEF] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {assessmentType}
            </span>
          </div>

          <div className="space-y-4">
            {activeQuestions.map((q, idx) => (
              <div key={idx} className="p-5 border border-gray-100 rounded-2xl bg-gray-50 flex justify-between items-start gap-4">
                <div className="flex-1">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-1">{q.label}</p>
                  <p className="text-sm font-medium text-gray-800 mb-3">{q.question}</p>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <p className="text-sm font-bold text-[#00AEEF]">
                      {answers[idx] || <span className="text-red-400 font-normal italic">Answer missing</span>}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => jumpToQuestion(idx)}
                  className="p-2 text-gray-400 hover:text-[#00AEEF] hover:bg-white rounded-lg transition-all"
                >
                  <Edit3 size={18} />
                </button>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-12">
            <button 
              onClick={() => setIsReviewMode(false)}
              className="flex-1 py-4 border border-gray-200 rounded-xl font-bold text-gray-500 hover:bg-gray-50 transition-all"
            >
              Go Back
            </button>
            <button 
              onClick={() => alert("Submission Successful!")}
              className="flex-1 py-4 bg-[#00AEEF] text-white font-bold rounded-xl shadow-lg shadow-blue-100 hover:bg-[#0096ce] transition-all"
            >
              Submit {assessmentType}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizAssessment;