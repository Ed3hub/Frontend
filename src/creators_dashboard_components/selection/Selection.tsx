import React from "react";

interface SelectionProps {
  selected: string;
  setSelected: (option: string) => void;
  activeTab: string;
}

const Selection: React.FC<SelectionProps> = ({ selected, setSelected, activeTab }) => {
  const handleOptionClick = (option: string) => {
    setSelected(option);
  };
  return (
    <div className="p-3 mt-4 md:mt-12 md:p-4 rounded-md shadow-gray-300 shadow-sm bg-white flex flex-wrap gap-2 md:flex-col md:space-y-6">
      {activeTab === "Home" && (
        <>
          {/* Below is the profile selection */}
          <div
            className={`flex items-center justify-center md:justify-start ${
              selected === "Profile" ? "text-[#007ED7]" : "text-[#5a5a5a]"
            } w-12 h-12 md:w-auto md:h-auto gap-3 md:gap-4 cursor-pointer font-medium p-2 md:p-0 rounded-md transition-colors border md:border-0`}
            onClick={() => handleOptionClick("Profile")}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M2.756 16.358a1.09 1.09 0 0 0 1.154 1.198a16.6 16.6 0 0 1 3.54.338c1.635.2 3.197.794 4.552 1.731V6.448A10.16 10.16 0 0 0 7.45 4.694a16.6 16.6 0 0 0-3.605-.316a1.09 1.09 0 0 0-1.09 1.09zm18.492 0a1.09 1.09 0 0 1-1.154 1.154a16.6 16.6 0 0 0-3.54.338a10.16 10.16 0 0 0-4.552 1.775V6.448a10.16 10.16 0 0 1 4.552-1.754a16.6 16.6 0 0 1 3.605-.316a1.09 1.09 0 0 1 1.089 1.155zM5.621 8.234h1.252m-1.252 6.011h1.834M5.78 11.24h3.35"
                />
              </svg>
            </span>
            <p className="hidden md:block text-xs md:text-[13px]">Profile</p>
          </div>
          {/* Below is the uploaed courses selection */}
          <div
            className={`flex items-center justify-center md:justify-start ${
              selected === "Upload courses" ? "text-[#007ED7]" : "text-[#5a5a5a]"
            } w-12 h-12 md:w-auto md:h-auto gap-3 md:gap-4 cursor-pointer font-medium p-2 md:p-0 rounded-md transition-colors border md:border-0`}
            onClick={() => handleOptionClick("Upload courses")}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinejoin="round"
                    d="M14.186 2.753v3.596c0 .487.194.955.54 1.3a1.85 1.85 0 0 0 1.306.539h4.125"
                  />
                  <path
                    strokeLinejoin="round"
                    d="M20.25 8.568v8.568a4.25 4.25 0 0 1-1.362 2.97a4.28 4.28 0 0 1-3.072 1.14h-7.59a4.3 4.3 0 0 1-3.1-1.124a4.26 4.26 0 0 1-1.376-2.986V6.862a4.25 4.25 0 0 1 1.362-2.97a4.28 4.28 0 0 1 3.072-1.14h5.714a3.5 3.5 0 0 1 2.361.905l2.96 2.722a2.97 2.97 0 0 1 1.031 2.189"
                  />
                  <path strokeMiterlimit="10" d="M12 10.499v6.774" />
                  <path
                    strokeLinejoin="round"
                    d="m15.106 13.35l-2.665-2.665a.62.62 0 0 0-.882 0l-2.665 2.666"
                  />
                </g>
              </svg>
            </span>
            <p className="hidden md:block text-xs md:text-[13px]">
              Upload courses
            </p>
          </div>
          {/* Below is the Quiz and Assessment selection */}
          <div
            className={`flex items-center justify-center md:justify-start ${
              selected === "Quiz and Assessment"
                ? "text-[#007ED7]"
                : "text-[#5a5a5a]"
            } w-12 h-12 md:w-auto md:h-auto gap-3 md:gap-4 cursor-pointer font-medium p-2 md:p-0 rounded-md transition-colors border md:border-0`}
            onClick={() => handleOptionClick("Quiz and Assessment")}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    d="M20.5 14v-3.5c0-2.335 0-3.502-.472-4.386a4 4 0 0 0-1.642-1.642C17.502 4 16.335 4 14 4a2 2 0 1 0-4 0c-2.335 0-3.502 0-4.386.472a4 4 0 0 0-1.642 1.642C3.5 6.998 3.5 8.165 3.5 10.5V14c0 3.771 0 5.657 1.172 6.828S7.729 22 11.5 22h1c3.771 0 5.657 0 6.828-1.172S20.5 17.771 20.5 14Z"
                  />
                  <path strokeLinecap="round" d="M6.5 10h4" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 11s.5 0 1 1c0 0 1.588-2.5 3-3"
                  />
                  <path strokeLinecap="round" d="M6.5 16h4" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 17s.5 0 1 1c0 0 1.588-2.5 3-3"
                  />
                </g>
              </svg>
            </span>
            <p className="hidden md:block text-xs md:text-[13px]">
              Quiz and Assessment
            </p>
          </div>
          {/* Below is the Community Interaction selection */}
          <div
            className={`flex items-center justify-center md:justify-start ${
              selected === "Community and Interaction"
                ? "text-[#007ED7]"
                : "text-[#5a5a5a]"
            } w-12 h-12 md:w-auto md:h-auto gap-3 md:gap-4 cursor-pointer font-medium p-2 md:p-0 rounded-md transition-colors border md:border-0`}
            onClick={() => handleOptionClick("Community and Interaction")}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="currentColor"
                    d="M12 12c1.873 0 3.57.62 4.815 1.487c1.183.825 2.185 2.051 2.185 3.37c0 .724-.309 1.324-.796 1.77c-.458.421-1.056.694-1.672.88C15.301 19.88 13.68 20 12 20s-3.301-.12-4.532-.493c-.616-.186-1.214-.459-1.673-.88C5.31 18.182 5 17.582 5 16.858c0-1.319 1.002-2.545 2.185-3.37C8.43 12.62 10.127 12 12 12m0 2c-1.44 0-2.743.48-3.67 1.127c-.989.69-1.33 1.392-1.33 1.73c0 .304.352.494.672.614l.205.07l.17.052c.94.284 2.32.407 3.953.407c1.508 0 2.799-.105 3.728-.344l.304-.087l.19-.06c.343-.117.778-.314.778-.652s-.341-1.04-1.33-1.73C14.744 14.481 13.44 14 12 14m7-1c1.044 0 1.992.345 2.693.833c.64.447 1.307 1.19 1.307 2.096c0 1.335-1.297 1.813-2.463 1.98l-.3.037l-.289.025l-.138.008c.122-.345.19-.72.19-1.122a3.8 3.8 0 0 0-.107-.888c.386-.03.703-.08.939-.151c.104-.032.01-.13-.1-.215l-.107-.078l-.076-.051a2.7 2.7 0 0 0-.995-.418c-.38-.76-.964-1.418-1.586-1.943A4.8 4.8 0 0 1 19 13M5 13q.537.002 1.032.113c-.622.525-1.206 1.183-1.586 1.943a2.7 2.7 0 0 0-.995.418l-.128.088c-.127.092-.276.22-.155.256c.236.071.553.122.94.151a3.7 3.7 0 0 0-.108.888c0 .402.068.777.19 1.122l-.28-.02l-.296-.03c-1.202-.147-2.614-.607-2.614-2c0-.905.666-1.649 1.307-2.096A4.76 4.76 0 0 1 5 13m13.5-6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-13 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5M12 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8m6.5 6a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-13 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M12 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4"
                  />
                </g>
              </svg>
            </span>
            <p className="hidden md:block text-xs md:text-[13px]">
              Community and Interaction
            </p>
          </div>
          {/* Below is the Schedule a Session selection */}
          <div
            className={`flex items-center justify-center md:justify-start ${
              selected === "Schedule a Session"
                ? "text-[#007ED7]"
                : "text-[#5a5a5a]"
            } w-12 h-12 md:w-auto md:h-auto gap-3 md:gap-4 cursor-pointer font-medium p-2 md:p-0 rounded-md transition-colors border md:border-0`}
            onClick={() => handleOptionClick("Schedule a Session")}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M16 2v4M8 2v4m5-2h-2C7.229 4 5.343 4 4.172 5.172S3 8.229 3 12v2c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172S21 17.771 21 14v-2c0-3.771 0-5.657-1.172-6.828S16.771 4 13 4M3 10h18"
                />
              </svg>
            </span>
            <p className="hidden md:block text-xs md:text-[13px]">
              Schedule a Session
            </p>
          </div>
          {/* Below is the Pricing and Access Control selection */}
          <div
            className={`flex items-center justify-center md:justify-start ${
              selected === "Pricing and Access Control"
                ? "text-[#007ED7]"
                : "text-[#5a5a5a]"
            } w-12 h-12 md:w-auto md:h-auto gap-3 md:gap-4 cursor-pointer font-medium p-2 md:p-0 rounded-md transition-colors border md:border-0`}
            onClick={() => handleOptionClick("Pricing and Access Control")}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M8.5 6.5A.5.5 0 0 1 9 6h6a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5M8 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2m8 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-5 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-3 3a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0"
                />
                <path
                  fill="currentColor"
                  d="M13.623 3h-3.246c-1.1 0-1.958 0-2.645.056c-.698.057-1.265.175-1.775.434A4.5 4.5 0 0 0 3.99 5.457c-.26.51-.377 1.077-.434 1.775C3.5 7.92 3.5 8.776 3.5 9.877v4.246c0 1.1 0 1.958.056 2.645c.057.698.175 1.265.434 1.775a4.5 4.5 0 0 0 1.967 1.967c.51.26 1.077.377 1.775.434C8.42 21 9.276 21 10.377 21h3.246c1.1 0 1.958 0 2.645-.056c.698-.057 1.265-.175 1.775-.434a4.5 4.5 0 0 0 1.967-1.967c.26-.51.377-1.077.434-1.775c.056-.687.056-1.544.056-2.645V9.877c0-1.1 0-1.958-.056-2.645c-.057-.698-.175-1.265-.434-1.775a4.5 4.5 0 0 0-1.967-1.967c-.51-.26-1.077-.377-1.775-.434C15.58 3 14.724 3 13.623 3M6.41 4.381c.346-.176.766-.276 1.403-.328C8.455 4 9.272 4 10.4 4h3.2c1.128 0 1.945 0 2.586.053c.637.052 1.057.152 1.403.328a3.5 3.5 0 0 1 1.53 1.53c.176.346.276.766.328 1.403c.038.457.049 1.002.052 1.686H4.5c.004-.684.014-1.23.052-1.686c.052-.637.152-1.057.328-1.403a3.5 3.5 0 0 1 1.53-1.53M4.5 10h15v4.1c0 1.128 0 1.945-.053 2.586c-.052.637-.152 1.057-.328 1.403a3.5 3.5 0 0 1-1.53 1.53c-.346.176-.766.276-1.402.328C15.545 20 14.728 20 13.6 20h-3.2c-1.128 0-1.945 0-2.586-.053c-.637-.052-1.057-.152-1.403-.328a3.5 3.5 0 0 1-1.53-1.53c-.176-.346-.276-.766-.328-1.402C4.5 16.045 4.5 15.228 4.5 14.1z"
                />
              </svg>
            </span>
            <p className="hidden md:block text-[13px]">
              Pricing and Access Control
            </p>
          </div>
          {/* Below is the Course Visibility selection */}
          <div
            className={`flex items-center justify-center md:justify-start ${
              selected === "Course Visibility"
                ? "text-[#007ED7]"
                : "text-[#5a5a5a]"
            } w-12 h-12 md:w-auto md:h-auto gap-3 md:gap-4 cursor-pointer font-medium p-2 md:p-0 rounded-md transition-colors border md:border-0`}
            onClick={() => handleOptionClick("Course Visibility")}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M3.275 15.296C2.425 14.192 2 13.639 2 12c0-1.64.425-2.191 1.275-3.296C4.972 6.5 7.818 4 12 4s7.028 2.5 8.725 4.704C21.575 9.81 22 10.361 22 12c0 1.64-.425 2.191-1.275 3.296C19.028 17.5 16.182 20 12 20s-7.028-2.5-8.725-4.704Z" />
                  <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
                </g>
              </svg>
            </span>
            <p className="hidden md:block text-[13px]">Course Visibility</p>
          </div>
          {/* Below is the Publsh Course selection */}
          <div
            className={`flex items-center justify-center md:justify-start ${
              selected === "Publsh Course"
                ? "text-[#007ED7]"
                : "text-[#5a5a5a]"
            } w-12 h-12 md:w-auto md:h-auto gap-3 md:gap-4 cursor-pointer font-medium p-2 md:p-0 rounded-md transition-colors border md:border-0`}
            onClick={() => handleOptionClick("Publsh Course")}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M22 9L12 5L2 9l10 4zv6" />
                  <path d="M6 10.6V16a6 3 0 0 0 12 0v-5.4" />
                </g>
              </svg>
            </span>
            <p className="hidden md:block text-[13px]">Publsh Course</p>
          </div>
        </>
      )}

      {activeTab === "Account" && (
        <>
          {/* Course Progress */}
          <div
            className={`flex items-center justify-center md:justify-start ${
              selected === "Course Progress"
                ? "text-[#007ED7]"
                : "text-[#5a5a5a]"
            } w-12 h-12 md:w-auto md:h-auto gap-3 md:gap-4 cursor-pointer font-medium p-2 md:p-0 rounded-md transition-colors border md:border-0`}
            onClick={() => handleOptionClick("Course Progress")}
          >
            <span>
              {/* Placeholder SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.333 3c2.46-.003 4.836.887 6.667 2.5V21a10.07 10.07 0 0 0-6.667-2.5c-1.562 0-2.343 0-2.688-.22a1.16 1.16 0 0 1-.424-.425C2 17.51 2 16.895 2 15.663v-9.26c0-1.428 0-2.141.549-2.72c.548-.579 1.11-.609 2.234-.668Q5.056 3 5.333 3m13.334 0A10.07 10.07 0 0 0 12 5.5V21a10.07 10.07 0 0 1 6.667-2.5c1.562 0 2.343 0 2.688-.22c.207-.133.291-.218.424-.425c.221-.345.221-.96.221-2.192v-9.26c0-1.428 0-2.141-.549-2.72s-1.11-.609-2.234-.668Q18.944 3 18.667 3"/></svg>
            </span>
            <p className="hidden md:block text-xs md:text-[13px]">
              Course Progress
            </p>
          </div>

          {/* Earnings */}
          <div
            className={`flex items-center justify-center md:justify-start ${
              selected === "Earnings" ? "text-[#007ED7]" : "text-[#5a5a5a]"
            } w-12 h-12 md:w-auto md:h-auto gap-3 md:gap-4 cursor-pointer font-medium p-2 md:p-0 rounded-md transition-colors border md:border-0`}
            onClick={() => handleOptionClick("Earnings")}
          >
            <span>
              {/* Placeholder SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M8 3h8v4h6v6h-2V9H4v10h10v2H2V7h6zm6 2h-4v2h4zm2 12h6v2h-6z"/></svg>
            </span>
            <p className="hidden md:block text-xs md:text-[13px]">Earnings and Engagement</p>
          </div>

          {/* Reset your password */}
          <div
            className={`flex items-center justify-center md:justify-start ${
              selected === "Reset your password"
                ? "text-[#007ED7]"
                : "text-[#5a5a5a]"
            } w-12 h-12 md:w-auto md:h-auto gap-3 md:gap-4 cursor-pointer font-medium p-2 md:p-0 rounded-md transition-colors border md:border-0`}
            onClick={() => handleOptionClick("Reset your password")}
          >
            <span>
              {/* Placeholder SVG */}
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M8.5 11c0 .732.166 1.424.449 2.051L5 17v1.5S5.896 20 7 20h2v-2h2v-2h2.5c2.762 0 5-2.238 5-5s-2.238-5-5-5s-5 2.238-5 5m5 2a2 2 0 1 1 .001-4.001A2 2 0 0 1 13.5 13"/></svg>
            </span>
            <p className="hidden md:block text-xs md:text-[13px]">
              Reset your password
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Selection;
