import React, { useState, useRef } from "react";
import {
  ChevronDown,
  Paperclip,
  Plus,
  X,
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Module {
  title: string;
  lessons: string[];
}

interface ModuleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (module: Module) => void;
  moduleCount: number;
}

// --- MODAL COMPONENT ---
const ModuleModal: React.FC<ModuleModalProps> = ({ isOpen, onClose, onAdd, moduleCount }) => {
  const [moduleTitle, setModuleTitle] = useState("");
  const [lessons, setLessons] = useState([""]);

  if (!isOpen) return null;

  const handleAddLesson = () => setLessons([...lessons, ""]);
  const handleLessonChange = (index: number, value: string) => {
    const newLessons = [...lessons];
    newLessons[index] = value;
    setLessons(newLessons);
  };

  const handleSubmit = () => {
    if (moduleTitle.trim()) {
      const moduleNumber = moduleCount + 1;
      const formattedLessons = lessons
        .filter((l) => l.trim() !== "")
        .map((l, i) => `Lesson ${moduleNumber}.${i + 1}: ${l}`);
      
      onAdd({ 
        title: `Module ${moduleNumber}: ${moduleTitle}`, 
        lessons: formattedLessons 
      });
      setModuleTitle("");
      setLessons([""]);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-2xl text-black">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add Module</h2>
          <X size={20} className="cursor-pointer text-gray-400" onClick={onClose} />
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Module Name</label>
            <input 
              className="w-full border border-gray-200 p-3 rounded-lg outline-none focus:border-[#00AEEF]" 
              placeholder="e.g. Understanding the Basics"
              value={moduleTitle}
              onChange={(e) => setModuleTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Lessons</label>
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {lessons.map((lesson, idx) => (
                <input 
                  key={idx}
                  className="w-full border border-gray-200 p-2 rounded-lg text-sm outline-none" 
                  placeholder={`Lesson topic...`}
                  value={lesson}
                  onChange={(e) => handleLessonChange(idx, e.target.value)}
                />
              ))}
            </div>
            <button 
              onClick={handleAddLesson}
              className="mt-3 text-[#00AEEF] text-sm font-bold flex items-center gap-1"
            >
              <Plus size={16} /> Add Lesson
            </button>
          </div>
        </div>
        <div className="flex gap-3 mt-8">
          <button onClick={onClose} className="flex-1 py-3 border border-gray-200 rounded-lg font-semibold">Cancel</button>
          <button onClick={handleSubmit} className="flex-1 py-3 bg-[#00AEEF] text-white rounded-lg font-semibold">Save Module</button>
        </div>
      </div>
    </div>
  );
};

interface FormData {
  courseName: string;
  about: string;
  category: string;
  skillLevel: string;
  language: string;
  learningOutcome: string;
  courseDescription: string;
  lessonType: string;
}

interface Attachments {
  resources: File[];
  files: File[];
  thumbnail: File | null;
}

const UploadCourses: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const [showDurationDropdown, setShowDurationDropdown] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  // PRE-RESTORED MODULES BASED ON YOUR TEMPLATE
  const [modules, setModules] = useState<Module[]>([
    {
      title: "Module 1: Understanding the Basics",
      lessons: [
        "Lesson 1.1: What is a DAO?",
        "Lesson 1.2: History and Evolution of DAOs",
        "Lesson 1.3: Key Components of a DAO (Smart contracts, tokens, treasury)",
        "Lesson 1.4: Types of DAOs (Protocol, Investment, Social, Grant, etc.)"
      ]
    },
    {
      title: "Module 2: How DAOs Work",
      lessons: [
        "Lesson 2.1: DAO Governance Models (Token-based, reputation-based, quadratic voting)",
        "Lesson 2.2: Proposals and Voting Mechanisms",
        "Lesson 2.3: Treasury Management and Funding",
        "Lesson 2.4: Coordination and Contribution Tools (e.g., Snapshot, Gnosis Safe, Coordinape)"
      ]
    },
    {
      title: "Module 3: Tools for Creating and Participating in DAOs",
      lessons: [
        "Lesson 3.1: Platforms for Building DAOs (Aragon, DAOhaus, Juicebox, Syndicate)",
        "Lesson 3.2: Setting Up a DAO: Step-by-step walkthrough",
        "Lesson 3.3: Wallets and Web3 Identities in DAO Access",
        "Lesson 3.4: DAO Tooling Ecosystem Overview"
      ]
    }
  ]);

  const [attachments, setAttachments] = useState<Attachments>({ resources: [], files: [], thumbnail: null });
  const resourceInputRef = useRef<HTMLInputElement>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);

  const [viewDate, setViewDate] = useState(new Date());
  const [selectedFrom, setSelectedFrom] = useState<Date | null>(null);
  const [selectedTo, setSelectedTo] = useState<Date | null>(null);
  const [scheduleType, setScheduleType] = useState("");
  const [finalDurationDisplay, setFinalDurationDisplay] = useState("");

  const [formData, setFormData] = useState<FormData>({
    courseName: "Introduction to DAOs — Governance on the Blockchain",
    about: "Decentralized Autonomous Organizations (DAOs) are internet-native communities that make decisions collectively using smart contracts and token-based voting.",
    category: "DAOs",
    skillLevel: "Beginner",
    language: "English",
    learningOutcome: "What You'll Learn:\n\n• The fundamentals of Decentralized Identity (DID)...\n• How Verifiable Credentials work...",
    courseDescription: "Learn how DAOs enable decentralized, community-led governance on the blockchain through smart contracts, voting, and shared decision-making.",
    lessonType: "Video, Reading, Quiz, Assessment",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleApply = () => {
    if (selectedFrom && selectedTo && scheduleType) {
      const diffTime = Math.abs(selectedTo.getTime() - selectedFrom.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const weeks = Math.floor(diffDays / 7);
      const days = diffDays % 7;
      let durationStr = `${weeks > 0 ? weeks + " week" + (weeks > 1 ? "s " : " ") : ""}${days > 0 ? days + " day" + (days > 1 ? "s" : "") : ""}`;
      setFinalDurationDisplay(`${durationStr.trim()} (${scheduleType})`);
      setShowCalendar(false);
    }
  };

  const renderMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
    const days = [];
    for (let i = 0; i < firstDay; i++) days.push(<div key={`empty-${i}`} />);
    for (let d = 1; d <= daysInMonth; d++) {
      const current = new Date(year, month, d);
      const isSelected = selectedFrom?.toDateString() === current.toDateString() || selectedTo?.toDateString() === current.toDateString();
      const inRange = selectedFrom && selectedTo && current > selectedFrom && current < selectedTo;
      days.push(
        <div key={d} onClick={() => {
            if (!selectedFrom || (selectedFrom && selectedTo)) { setSelectedFrom(current); setSelectedTo(null); }
            else if (current < selectedFrom) { setSelectedFrom(current); }
            else { setSelectedTo(current); }
          }}
          className={`p-1.5 cursor-pointer text-[10px] rounded-md transition-all ${isSelected ? "bg-[#00AEEF] text-white font-bold" : inRange ? "bg-[#E3F5FF] text-[#00AEEF]" : "text-black hover:bg-gray-100"}`}>
          {d}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white font-sans text-black">
      <ModuleModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onAdd={(newMod) => setModules([...modules, newMod])} 
        moduleCount={modules.length}
      />
      
      <input type="file" ref={resourceInputRef} className="hidden" onChange={(e) => {
        const file = e.target.files?.[0];
        if (file) {
          setAttachments(p => ({ ...p, resources: [...p.resources, file] }));
        }
      }} />
      <input type="file" ref={thumbnailInputRef} className="hidden" accept="image/*" onChange={(e) => {
        const file = e.target.files?.[0];
        if (file) {
          setAttachments(p => ({ ...p, thumbnail: file }));
        }
      }} />

      {/* --- RESTORED STEP 1 --- */}
      {currentStep === 1 && (
        <div className="animate-in fade-in duration-300 space-y-6">
          <h2 className="text-base font-bold mb-8 text-black">Course Details</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Course Name</label>
              <input type="text" name="courseName" value={formData.courseName} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none text-black" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">About</label>
              <textarea name="about" rows={3} value={formData.about} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none resize-none text-black" />
            </div>
            {["Category", "Skill Level", "Language"].map((label) => (
              <div key={label}>
                <label className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
                <input type="text" name={label.toLowerCase().replace(" ", "")} value={formData[label.toLowerCase().replace(" ", "") as keyof FormData]} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-black outline-none" />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Learning Outcome</label>
              <textarea name="learningOutcome" rows={5} value={formData.learningOutcome} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg resize-none text-black outline-none" />
            </div>
          </div>
          <div className="flex justify-end pt-10">
            <button onClick={() => setCurrentStep(2)} className="px-12 py-2.5 bg-[#00AEEF] text-white font-semibold rounded-lg">Next</button>
          </div>
        </div>
      )}

      {/* --- RESTORED STEP 2 --- */}
      {currentStep === 2 && (
        <div className="animate-in slide-in-from-right-4 duration-300 space-y-6">
          <h2 className="text-base font-bold mb-8">Course Structure</h2>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Course Description</label>
            <textarea name="courseDescription" rows={3} value={formData.courseDescription} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none resize-none text-black" />
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold">Modules</h3>
              <button onClick={() => setIsModalOpen(true)} className="text-gray-400 text-sm flex items-center gap-1 hover:text-[#00AEEF]">
                Add Modules <Plus size={16} />
              </button>
            </div>

            <div className="text-[12px] space-y-5 leading-relaxed">
              {modules.map((mod, idx) => (
                <div key={idx}>
                  <p className="font-bold mb-1">{mod.title}</p>
                  <ul className="list-none ml-2 space-y-0.5">
                    {mod.lessons.map((lesson, lIdx) => (
                      <li key={lIdx}>• {lesson}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-400 mb-2">Upload Resources</label>
            <div onClick={() => setShowResourcesDropdown(!showResourcesDropdown)} className="w-full px-4 py-3 border border-gray-200 rounded-lg flex justify-between items-center cursor-pointer bg-white">
              <span className="text-gray-400">Select type...</span>
              <ChevronDown className="text-gray-400" size={20} />
            </div>
            {showResourcesDropdown && (
              <div className="absolute right-0 w-1/2 border border-gray-200 bg-white rounded-b-lg shadow-lg z-20 text-sm">
                <div onClick={() => resourceInputRef.current?.click()} className="px-4 py-2 hover:bg-gray-50 cursor-pointer border-b text-black">PDFs</div>
                <div onClick={() => resourceInputRef.current?.click()} className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-black">Videos</div>
              </div>
            )}
            <div className="mt-2 space-y-1">
              {attachments.resources.map((f, i) => (
                <div key={i} className="flex justify-between text-xs bg-gray-50 p-2 rounded">
                  <span>{f.name}</span>
                  <X size={14} className="cursor-pointer" onClick={() => setAttachments(p => ({ ...p, resources: p.resources.filter((_, idx) => idx !== i) }))} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Lesson Type</label>
            <input type="text" name="lessonType" value={formData.lessonType} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-black outline-none" />
          </div>

          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-400">Upload Course Thumbnails</label>
            <Paperclip size={20} className="text-gray-400 cursor-pointer hover:text-[#00AEEF]" onClick={() => thumbnailInputRef.current?.click()} />
          </div>

          <div className="flex justify-end space-x-4 pt-10">
            <button onClick={() => setCurrentStep(1)} className="px-10 py-2.5 bg-white border border-gray-300 text-black font-semibold rounded-lg">Back</button>
            <button onClick={() => setCurrentStep(3)} className="px-10 py-2.5 bg-[#00AEEF] text-white font-semibold rounded-lg">Next</button>
          </div>
        </div>
      )}

      {/* --- RESTORED STEP 3 --- */}
      {currentStep === 3 && (
        <div className="animate-in slide-in-from-right-4 duration-300 space-y-6 text-black">
          <h2 className="text-base font-bold mb-4">Course Duration</h2>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-400 mb-2">Duration</label>
            <div onClick={() => setShowDurationDropdown(!showDurationDropdown)} className="w-full px-4 py-3 border border-gray-200 rounded-lg flex justify-between items-center cursor-pointer bg-white">
              <span className={finalDurationDisplay ? "text-black font-medium" : "text-gray-400"}>{finalDurationDisplay || "Select dates and type..."}</span>
              <ChevronDown className="text-gray-400" size={20} />
            </div>
            {showDurationDropdown && (
              <div className="absolute right-0 w-1/2 border border-gray-200 bg-white rounded-lg shadow-lg z-30 text-sm mt-1 overflow-hidden">
                {["Self-paced", "Scheduled"].map(type => (
                  <div key={type} onClick={() => { setScheduleType(type); setShowDurationDropdown(false); }} className={`px-4 py-3 hover:bg-gray-50 cursor-pointer text-black ${scheduleType === type ? "bg-blue-50 text-[#00AEEF] font-bold" : ""}`}>{type}</div>
                ))}
              </div>
            )}
          </div>
          <div onClick={() => setShowCalendar(!showCalendar)} className="w-full bg-[#E3F5FF] p-3 rounded-lg flex items-center justify-between text-[#00AEEF] cursor-pointer">
            <span className="text-sm font-medium">Select Date</span>
            <CalendarIcon size={20} />
          </div>
          {showCalendar && (
            <div className="mt-4 p-4 border border-gray-100 rounded-xl bg-white shadow-sm">
              {/* Calendar Grid Logic Restored Here */}
              <div className="flex gap-4">
                {[0, 1].map((offset) => {
                  const date = new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1);
                  return (
                    <div key={offset} className="flex-1">
                      <div className="flex justify-between items-center mb-3">
                        {offset === 0 && <ChevronLeft onClick={() => setViewDate(new Date(viewDate.setMonth(viewDate.getMonth() - 1)))} size={16} className="text-[#00AEEF] cursor-pointer" />}
                        <span className="font-bold text-xs">{date.toLocaleString("default", { month: "long", year: "numeric" })}</span>
                        {offset === 1 && <ChevronRight onClick={() => setViewDate(new Date(viewDate.setMonth(viewDate.getMonth() + 1)))} size={16} className="text-[#00AEEF] cursor-pointer" />}
                      </div>
                      <div className="grid grid-cols-7 text-[10px] text-center gap-1 font-medium">
                        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map(d => <div key={d} className="text-gray-400">{d}</div>)}
                        {renderMonth(date)}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-end mt-4">
                <button onClick={handleApply} className="px-6 py-1.5 bg-[#D1F0FF] text-[#00AEEF] font-bold rounded-lg text-[10px]">Apply</button>
              </div>
            </div>
          )}
          <div className="flex justify-end space-x-4 pt-10">
            <button onClick={() => setCurrentStep(2)} className="px-10 py-2.5 bg-white border border-gray-300 text-black font-semibold rounded-lg">Back</button>
            <button onClick={() => alert("Form Saved!")} className="px-10 py-2.5 bg-[#00AEEF] text-white font-semibold rounded-lg">Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadCourses;