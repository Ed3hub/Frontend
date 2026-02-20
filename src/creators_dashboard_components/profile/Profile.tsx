import React, { useState } from "react";
import Image from "next/image";

const Profile: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [showMoreBio, setShowMoreBio] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const bio =
    "Tom Haniel is a blockchain specialist and educator with a PhD in Decentralized Systems from the University of Metanetica. He is passionate about make web3 education spread across the globe. He has hosted about 30 seminars/worshops on web3 and crypto trading in about 20 countries in the last 10 years.";
  return (
    <div className="w-4/5 mx-auto bg-white relative">
      <form action="" method="post">
        {/* Below is the profile header section */}
        <div
          className="flex justify-between z-10 fixed pb-4 mb-4 pt-[50px] lg:w-xl md:w-[54%] sm:w-full w-4/5 px-4 md:px-0"
          style={{ backgroundColor: "white" }}
        >
          <div className="flex flex-col space-y-4 justify-between">
            <h1 className="font-bold">Profile</h1>
             <img
              src="/logo/profile_picture.png"
              className="w-24 h-24 object-fit rounded-full"
              alt="Profile Picture"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex align-center gap-2 py-2 px-4 rounded-md shadow-sm shadow-gray-300 w-4/5 ml-[20px]">
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
                    d="m4.144 16.735l.493-3.425a.97.97 0 0 1 .293-.587l9.665-9.664a1.03 1.03 0 0 1 .973-.281a5.1 5.1 0 0 1 2.346 1.372a5.1 5.1 0 0 1 1.384 2.346a1.07 1.07 0 0 1-.282.973l-9.664 9.664a1.17 1.17 0 0 1-.598.294l-3.437.492a1.044 1.044 0 0 1-1.173-1.184m8.633-11.846l4.41 4.398M3.79 21.25h16.42"
                  />
                </svg>
              </span>
              <p className="text-[13px] font-medium text-[#5a5a5a]">Edit</p>
            </div>
            <div className="flex align-center gap-2">
              <p className="text-[13px] font-medium text-[#a4a4a4]">
                Toggle Notification
              </p>
              <span onClick={handleToggle}>
                {toggle ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M0 11.617A6.82 6.82 0 0 1 6.813 4.8h10.371a6.817 6.817 0 1 1 0 13.634H6.818a6.82 6.82 0 0 1-6.817-6.813zm6.817 4.543a4.543 4.543 0 1 0-.003-9.085a4.543 4.543 0 0 0 .001 9.085h.003z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M24 11.617a6.82 6.82 0 0 1-6.813 6.817H6.816a6.817 6.817 0 1 1 0-13.634h10.366a6.82 6.82 0 0 1 6.817 6.813zm-6.817-4.545a4.542 4.542 0 1 0 0 9.084a4.542 4.542 0 0 0 .002-9.084z"
                    />
                  </svg>
                )}
              </span>
            </div>
          </div>
        </div>
        {/* Below is the content for the profile section */}
        <div className="flex flex-col space-y-6 py-50">
          {/* full name section */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="fname"
              className="text-[13px] font-medium text-[#a4a4a4]"
            >
              Full Name
            </label>
            <input
              type="text"
              name=""
              className="p-2 font-medium rounded-md w-full border outline-none border-[#a4a4a4] text-[#5A5A5A] text-[13px]"
              placeholder="Enter your full name"
              id="fname"
              defaultValue="Tom Haniel"
            />
          </div>
          {/* Phone number section */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="phone"
              className="text-[13px] font-medium text-[#a4a4a4]"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name=""
              className="p-2 font-medium rounded-md w-full border outline-none border-[#a4a4a4] text-[#5A5A5A] text-[13px]"
              placeholder="Enter your phone number"
              id="phone"
              defaultValue="+1-555-010-1234"
            />
          </div>
          {/* Email address section */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="email"
              className="text-[13px] font-medium text-[#a4a4a4]"
            >
              Email Address
            </label>
            <input
              type="email"
              name=""
              className="p-2 font-medium rounded-md w-full border outline-none border-[#a4a4a4] text-[#5A5A5A] text-[13px]"
              placeholder="Enter your email address"
              id="email"
              defaultValue="hanieltom@gmail.com"
            />
          </div>
          {/* Location section */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="location"
              className="text-[13px] font-medium text-[#a4a4a4]"
            >
              City, Country
            </label>
            <input
              type="text"
              name=""
              className="p-2 font-medium rounded-md w-full border outline-none border-[#a4a4a4] text-[#5A5A5A] text-[13px]"
              placeholder="Enter your city, country"
              id="location"
              defaultValue="washington DC, USA"
            />
          </div>
          {/* Specialization section */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="specialization"
              className="text-[13px] font-medium text-[#a4a4a4]"
            >
              Specialization
            </label>
            <input
              type="text"
              name=""
              className="p-2 font-medium rounded-md w-full border outline-none border-[#a4a4a4] text-[#5A5A5A] text-[13px]"
              placeholder="Enter your specialization"
              id="specialization"
              defaultValue="DeFi, NFTs"
            />
          </div>
          {/* Experience section */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="experience"
              className="text-[13px] font-medium text-[#a4a4a4]"
            >
              Experience
            </label>
            <input
              type="text"
              name=""
              className="p-2 font-medium rounded-md w-full border outline-none border-[#a4a4a4] text-[#5A5A5A] text-[13px]"
              placeholder="Enter your years of experience"
              id="experience"
              defaultValue="7 years"
            />
          </div>
          {/* Bio section */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="experience"
              className="text-[13px] font-medium text-[#a4a4a4]"
            >
              Bio
            </label>
            <p className="text-[#5A5A5A] text-[13px]">
              {showMoreBio ? bio : `${bio.slice(0, 158)}...`}
              {bio.length > 158 && (
                <button
                  type="button"
                  onClick={() => setShowMoreBio(!showMoreBio)}
                  className="text-blue-500 ml-2 font-medium cursor-pointer"
                >
                  {showMoreBio ? "see less" : "see more..."}
                </button>
              )}
            </p>
          </div>
          {/* Social section */}
          <div className="flex flex-col space-y-4">
            <h1 className="font-medium text-[#000000]">Social Links</h1>
            {/* Below are the social media links */}
            {/* Whatsapp link is below */}
            <div className="flex flex-col space-y-2">
              <p className="text-[13px] font-medium text-[#a4a4a4]">Whatsapp</p>
              <div className="flex align-middle gap-2 font-medium">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="m186.68 146.63l-32-16a6 6 0 0 0-6 .38L133 141.46A42.5 42.5 0 0 1 114.54 123L125 107.33a6 6 0 0 0 .38-6l-16-32A6 6 0 0 0 104 66a38 38 0 0 0-38 38a86.1 86.1 0 0 0 86 86a38 38 0 0 0 38-38a6 6 0 0 0-3.32-5.37M152 178a74.09 74.09 0 0 1-74-74a26 26 0 0 1 22.42-25.75l12.66 25.32l-10.39 15.58a6 6 0 0 0-.54 5.63a54.43 54.43 0 0 0 29.07 29.07a6 6 0 0 0 5.63-.54l15.58-10.39l25.32 12.66A26 26 0 0 1 152 178M128 26a102 102 0 0 0-89.65 150.69l-11.62 34.87a14 14 0 0 0 17.71 17.71l34.87-11.62A102 102 0 1 0 128 26m0 192a90 90 0 0 1-45.06-12.08a6.1 6.1 0 0 0-3-.81a6.2 6.2 0 0 0-1.9.31l-37.39 12.46a2 2 0 0 1-2.53-2.53L50.58 178a6 6 0 0 0-.5-4.91A90 90 0 1 1 128 218"
                    />
                  </svg>
                </span>
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0077FF] text-[13px]"
                >
                  https://wa.me/15551234567
                </a>
              </div>
            </div>
            {/* Below is Facebook link */}
            <div className="flex flex-col space-y-2">
              <p className="text-[13px] font-medium text-[#a4a4a4]">Facebook</p>
              <div className="flex align-middle gap-2 font-medium">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                    >
                      <path d="M3.539 39.743c.208 2.555 2.163 4.51 4.718 4.718C11.485 44.723 16.636 45 24 45s12.515-.277 15.743-.539c2.555-.208 4.51-2.163 4.718-4.718C44.723 36.515 45 31.364 45 24s-.277-12.515-.539-15.743c-.208-2.555-2.163-4.51-4.718-4.718C36.515 3.277 31.364 3 24 3s-12.515.277-15.743.539c-2.555.208-4.51 2.163-4.718 4.718C3.277 11.485 3 16.636 3 24s.277 12.515.539 15.743" />
                      <path d="M29.516 44.944V30.04h5.539c.888 0 1.687-.585 1.817-1.463a12.9 12.9 0 0 0-.015-3.715c-.128-.862-.896-1.43-1.768-1.43h-5.573c0-4.994.831-5.72 5.515-5.811c.899-.018 1.705-.61 1.836-1.5c.22-1.495.132-2.802-.006-3.72c-.127-.85-.888-1.402-1.746-1.395c-8.279.072-12.994 1.051-12.994 12.426h-4.288c-.834 0-1.574.522-1.7 1.346c-.136.888-.218 2.175.009 3.74c.13.904.944 1.522 1.858 1.522h4.121v14.955" />
                    </g>
                  </svg>
                </span>
                <a
                  href="https://facebook.com/tom.haniel.fake"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0077FF] text-[13px]"
                >
                  https://facebook.com/tom.haniel.fake
                </a>
              </div>
            </div>
            {/* Below is Twitter link */}
            <div className="flex flex-col space-y-2">
              <p className="text-[13px] font-medium text-[#a4a4a4]">Twitter</p>
              <div className="flex align-middle gap-2 font-medium">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
                    />
                  </svg>
                </span>
                <a
                  href="https://twitter.com/tom_haniel_dev"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0077FF] text-[13px]"
                >
                  https://twitter.com/tom_haniel_dev
                </a>
              </div>
            </div>
          </div>
          {/* Courses section */}
          <div className="flex flex-col space-y-4">
            <h1 className="font-medium text-[#000000]">Courses</h1>
            {/* courses grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              <div className="shadow-gray-300 shadow-sm rounded-md p-2 flex flex-col space-y-2 hover:scale-105 transition-all duration-300 cursor-pointer">
                <img
                  className="rounded-md w-full h-32 object-cover"
                  src="https://plus.unsplash.com/premium_photo-1753080952069-a863e3048269?q=80&w=499&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Course image"
                />
                {/* card heaading */}
                <div
                  className="flex justify-between"
                  style={{ alignItems: "center" }}
                >
                  <h5 className="font-bold">Decentralized Identity & DAOs</h5>
                  <div
                    className="flex gap-1 align-middle"
                    style={{ alignItems: "center" }}
                  >
                    <span>
                      <svg
                        className="text-yellow-300"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
                        />
                      </svg>
                    </span>
                    <p className="text-[12px] font-medium text-[#a4a4a4]">
                      4.1
                    </p>
                  </div>
                </div>
                {/* card body */}
                <div className="flex justify-between">
                  <div className="flex text-[#a4a4a4] gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                          <path
                            fill="currentColor"
                            d="M5 7.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0M9.5 5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m0 8c1.993 0 3.805.608 5.137 1.466c.667.43 1.238.937 1.653 1.49c.407.545.71 1.2.71 1.901c0 .755-.35 1.36-.864 1.797c-.485.41-1.117.676-1.77.859c-1.313.367-3.05.487-4.866.487s-3.553-.12-4.865-.487c-.654-.183-1.286-.449-1.77-.859C2.349 19.218 2 18.612 2 17.857c0-.702.303-1.356.71-1.9c.415-.554.986-1.062 1.653-1.49C5.695 13.607 7.507 13 9.5 13m0 2c-1.597 0-3.035.492-4.055 1.148c-.51.328-.89.682-1.134 1.007c-.25.334-.311.576-.311.702c0 .074.015.15.157.27c.173.148.494.314 1.016.46c1.04.29 2.553.413 4.327.413s3.287-.123 4.327-.413c.522-.146.843-.312 1.016-.46c.142-.12.157-.196.157-.27c0-.126-.061-.368-.311-.702c-.244-.325-.624-.679-1.134-1.007C12.535 15.492 11.097 15 9.5 15m8.5-2c1.32 0 2.518.436 3.4 1.051c.822.573 1.6 1.477 1.6 2.52c0 .587-.253 1.073-.638 1.426c-.357.328-.809.528-1.244.66c-.87.263-1.99.343-3.118.343h-.203c.13-.348.203-.73.203-1.143q-.002-.336-.06-.65L17.893 17H18c1.081 0 1.96-.082 2.539-.257c.262-.08.397-.16.455-.206c-.029-.118-.185-.46-.738-.845a4 4 0 0 0-3.331-.546a7.5 7.5 0 0 0-1.684-1.48A6.06 6.06 0 0 1 18 13m-3-4a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
                          />
                        </g>
                      </svg>
                    </span>
                    <p className="text-[10px] font-medium">283 students</p>
                  </div>
                  <div className="text-[#a4a4a4] flex gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="m12.6 11.503l3.891 3.891l-.848.849L11.4 12V6h1.2zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6"
                        />
                      </svg>
                    </span>
                    <p className="text-[#a4a4a4] text-[10px] font-medium">
                      3hr 45min
                    </p>
                  </div>
                </div>
              </div>

              {/* Below are the duplicates of the courses cards */}
              <div className="shadow-gray-300 shadow-sm rounded-md p-2 flex flex-col space-y-2 hover:scale-105 transition-all duration-300 cursor-pointer">
                <img
                  className="rounded-md w-full h-32 object-cover"
                  src="https://plus.unsplash.com/premium_photo-1753080952069-a863e3048269?q=80&w=499&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Course image"
                />
                {/* card heaading */}
                <div
                  className="flex justify-between"
                  style={{ alignItems: "center" }}
                >
                  <h5 className="font-bold">Decentralized Identity & DAOs</h5>
                  <div
                    className="flex gap-1 align-middle"
                    style={{ alignItems: "center" }}
                  >
                    <span>
                      <svg
                        className="text-yellow-300"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
                        />
                      </svg>
                    </span>
                    <p className="text-[12px] font-medium text-[#a4a4a4]">
                      4.1
                    </p>
                  </div>
                </div>
                {/* card body */}
                <div className="flex justify-between">
                  <div className="flex text-[#a4a4a4] gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                          <path
                            fill="currentColor"
                            d="M5 7.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0M9.5 5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m0 8c1.993 0 3.805.608 5.137 1.466c.667.43 1.238.937 1.653 1.49c.407.545.71 1.2.71 1.901c0 .755-.35 1.36-.864 1.797c-.485.41-1.117.676-1.77.859c-1.313.367-3.05.487-4.866.487s-3.553-.12-4.865-.487c-.654-.183-1.286-.449-1.77-.859C2.349 19.218 2 18.612 2 17.857c0-.702.303-1.356.71-1.9c.415-.554.986-1.062 1.653-1.49C5.695 13.607 7.507 13 9.5 13m0 2c-1.597 0-3.035.492-4.055 1.148c-.51.328-.89.682-1.134 1.007c-.25.334-.311.576-.311.702c0 .074.015.15.157.27c.173.148.494.314 1.016.46c1.04.29 2.553.413 4.327.413s3.287-.123 4.327-.413c.522-.146.843-.312 1.016-.46c.142-.12.157-.196.157-.27c0-.126-.061-.368-.311-.702c-.244-.325-.624-.679-1.134-1.007C12.535 15.492 11.097 15 9.5 15m8.5-2c1.32 0 2.518.436 3.4 1.051c.822.573 1.6 1.477 1.6 2.52c0 .587-.253 1.073-.638 1.426c-.357.328-.809.528-1.244.66c-.87.263-1.99.343-3.118.343h-.203c.13-.348.203-.73.203-1.143q-.002-.336-.06-.65L17.893 17H18c1.081 0 1.96-.082 2.539-.257c.262-.08.397-.16.455-.206c-.029-.118-.185-.46-.738-.845a4 4 0 0 0-3.331-.546a7.5 7.5 0 0 0-1.684-1.48A6.06 6.06 0 0 1 18 13m-3-4a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
                          />
                        </g>
                      </svg>
                    </span>
                    <p className="text-[10px] font-medium">283 students</p>
                  </div>
                  <div className="text-[#a4a4a4] flex gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="m12.6 11.503l3.891 3.891l-.848.849L11.4 12V6h1.2zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6"
                        />
                      </svg>
                    </span>
                    <p className="text-[#a4a4a4] text-[10px] font-medium">
                      3hr 45min
                    </p>
                  </div>
                </div>
              </div>
              <div className="shadow-gray-300 shadow-sm rounded-md p-2 flex flex-col space-y-2 hover:scale-105 transition-all duration-300 cursor-pointer">
                <img
                  className="rounded-md w-full h-32 object-cover"
                  src="https://plus.unsplash.com/premium_photo-1753080952069-a863e3048269?q=80&w=499&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Course image"
                />
                {/* card heaading */}
                <div
                  className="flex justify-between"
                  style={{ alignItems: "center" }}
                >
                  <h5 className="font-bold">Decentralized Identity & DAOs</h5>
                  <div
                    className="flex gap-1 align-middle"
                    style={{ alignItems: "center" }}
                  >
                    <span>
                      <svg
                        className="text-yellow-300"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
                        />
                      </svg>
                    </span>
                    <p className="text-[12px] font-medium text-[#a4a4a4]">
                      4.1
                    </p>
                  </div>
                </div>
                {/* card body */}
                <div className="flex justify-between">
                  <div className="flex text-[#a4a4a4] gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                          <path
                            fill="currentColor"
                            d="M5 7.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0M9.5 5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m0 8c1.993 0 3.805.608 5.137 1.466c.667.43 1.238.937 1.653 1.49c.407.545.71 1.2.71 1.901c0 .755-.35 1.36-.864 1.797c-.485.41-1.117.676-1.77.859c-1.313.367-3.05.487-4.866.487s-3.553-.12-4.865-.487c-.654-.183-1.286-.449-1.77-.859C2.349 19.218 2 18.612 2 17.857c0-.702.303-1.356.71-1.9c.415-.554.986-1.062 1.653-1.49C5.695 13.607 7.507 13 9.5 13m0 2c-1.597 0-3.035.492-4.055 1.148c-.51.328-.89.682-1.134 1.007c-.25.334-.311.576-.311.702c0 .074.015.15.157.27c.173.148.494.314 1.016.46c1.04.29 2.553.413 4.327.413s3.287-.123 4.327-.413c.522-.146.843-.312 1.016-.46c.142-.12.157-.196.157-.27c0-.126-.061-.368-.311-.702c-.244-.325-.624-.679-1.134-1.007C12.535 15.492 11.097 15 9.5 15m8.5-2c1.32 0 2.518.436 3.4 1.051c.822.573 1.6 1.477 1.6 2.52c0 .587-.253 1.073-.638 1.426c-.357.328-.809.528-1.244.66c-.87.263-1.99.343-3.118.343h-.203c.13-.348.203-.73.203-1.143q-.002-.336-.06-.65L17.893 17H18c1.081 0 1.96-.082 2.539-.257c.262-.08.397-.16.455-.206c-.029-.118-.185-.46-.738-.845a4 4 0 0 0-3.331-.546a7.5 7.5 0 0 0-1.684-1.48A6.06 6.06 0 0 1 18 13m-3-4a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
                          />
                        </g>
                      </svg>
                    </span>
                    <p className="text-[10px] font-medium">283 students</p>
                  </div>
                  <div className="text-[#a4a4a4] flex gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="m12.6 11.503l3.891 3.891l-.848.849L11.4 12V6h1.2zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6"
                        />
                      </svg>
                    </span>
                    <p className="text-[#a4a4a4] text-[10px] font-medium">
                      3hr 45min
                    </p>
                  </div>
                </div>
              </div>
              <div className="shadow-gray-300 shadow-sm rounded-md p-2 flex flex-col space-y-2 hover:scale-105 transition-all duration-300 cursor-pointer">
                <img
                  className="rounded-md w-full h-32 object-cover"
                  src="https://plus.unsplash.com/premium_photo-1753080952069-a863e3048269?q=80&w=499&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Course image"
                />
                {/* card heaading */}
                <div
                  className="flex justify-between"
                  style={{ alignItems: "center" }}
                >
                  <h5 className="font-bold">Decentralized Identity & DAOs</h5>
                  <div
                    className="flex gap-1 align-middle"
                    style={{ alignItems: "center" }}
                  >
                    <span>
                      <svg
                        className="text-yellow-300"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
                        />
                      </svg>
                    </span>
                    <p className="text-[12px] font-medium text-[#a4a4a4]">
                      4.1
                    </p>
                  </div>
                </div>
                {/* card body */}
                <div className="flex justify-between">
                  <div className="flex text-[#a4a4a4] gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                          <path
                            fill="currentColor"
                            d="M5 7.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0M9.5 5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m0 8c1.993 0 3.805.608 5.137 1.466c.667.43 1.238.937 1.653 1.49c.407.545.71 1.2.71 1.901c0 .755-.35 1.36-.864 1.797c-.485.41-1.117.676-1.77.859c-1.313.367-3.05.487-4.866.487s-3.553-.12-4.865-.487c-.654-.183-1.286-.449-1.77-.859C2.349 19.218 2 18.612 2 17.857c0-.702.303-1.356.71-1.9c.415-.554.986-1.062 1.653-1.49C5.695 13.607 7.507 13 9.5 13m0 2c-1.597 0-3.035.492-4.055 1.148c-.51.328-.89.682-1.134 1.007c-.25.334-.311.576-.311.702c0 .074.015.15.157.27c.173.148.494.314 1.016.46c1.04.29 2.553.413 4.327.413s3.287-.123 4.327-.413c.522-.146.843-.312 1.016-.46c.142-.12.157-.196.157-.27c0-.126-.061-.368-.311-.702c-.244-.325-.624-.679-1.134-1.007C12.535 15.492 11.097 15 9.5 15m8.5-2c1.32 0 2.518.436 3.4 1.051c.822.573 1.6 1.477 1.6 2.52c0 .587-.253 1.073-.638 1.426c-.357.328-.809.528-1.244.66c-.87.263-1.99.343-3.118.343h-.203c.13-.348.203-.73.203-1.143q-.002-.336-.06-.65L17.893 17H18c1.081 0 1.96-.082 2.539-.257c.262-.08.397-.16.455-.206c-.029-.118-.185-.46-.738-.845a4 4 0 0 0-3.331-.546a7.5 7.5 0 0 0-1.684-1.48A6.06 6.06 0 0 1 18 13m-3-4a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
                          />
                        </g>
                      </svg>
                    </span>
                    <p className="text-[10px] font-medium">283 students</p>
                  </div>
                  <div className="text-[#a4a4a4] flex gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="m12.6 11.503l3.891 3.891l-.848.849L11.4 12V6h1.2zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6"
                        />
                      </svg>
                    </span>
                    <p className="text-[#a4a4a4] text-[10px] font-medium">
                      3hr 45min
                    </p>
                  </div>
                </div>
              </div>
              <div className="shadow-gray-300 shadow-sm rounded-md p-2 flex flex-col space-y-2 hover:scale-105 transition-all duration-300 cursor-pointer">
                <img
                  className="rounded-md w-full h-32 object-cover"
                  src="https://plus.unsplash.com/premium_photo-1753080952069-a863e3048269?q=80&w=499&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Course image"
                />
                {/* card heaading */}
                <div
                  className="flex justify-between"
                  style={{ alignItems: "center" }}
                >
                  <h5 className="font-bold">Decentralized Identity & DAOs</h5>
                  <div
                    className="flex gap-1 align-middle"
                    style={{ alignItems: "center" }}
                  >
                    <span>
                      <svg
                        className="text-yellow-300"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
                        />
                      </svg>
                    </span>
                    <p className="text-[12px] font-medium text-[#a4a4a4]">
                      4.1
                    </p>
                  </div>
                </div>
                {/* card body */}
                <div className="flex justify-between">
                  <div className="flex text-[#a4a4a4] gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                          <path
                            fill="currentColor"
                            d="M5 7.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0M9.5 5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m0 8c1.993 0 3.805.608 5.137 1.466c.667.43 1.238.937 1.653 1.49c.407.545.71 1.2.71 1.901c0 .755-.35 1.36-.864 1.797c-.485.41-1.117.676-1.77.859c-1.313.367-3.05.487-4.866.487s-3.553-.12-4.865-.487c-.654-.183-1.286-.449-1.77-.859C2.349 19.218 2 18.612 2 17.857c0-.702.303-1.356.71-1.9c.415-.554.986-1.062 1.653-1.49C5.695 13.607 7.507 13 9.5 13m0 2c-1.597 0-3.035.492-4.055 1.148c-.51.328-.89.682-1.134 1.007c-.25.334-.311.576-.311.702c0 .074.015.15.157.27c.173.148.494.314 1.016.46c1.04.29 2.553.413 4.327.413s3.287-.123 4.327-.413c.522-.146.843-.312 1.016-.46c.142-.12.157-.196.157-.27c0-.126-.061-.368-.311-.702c-.244-.325-.624-.679-1.134-1.007C12.535 15.492 11.097 15 9.5 15m8.5-2c1.32 0 2.518.436 3.4 1.051c.822.573 1.6 1.477 1.6 2.52c0 .587-.253 1.073-.638 1.426c-.357.328-.809.528-1.244.66c-.87.263-1.99.343-3.118.343h-.203c.13-.348.203-.73.203-1.143q-.002-.336-.06-.65L17.893 17H18c1.081 0 1.96-.082 2.539-.257c.262-.08.397-.16.455-.206c-.029-.118-.185-.46-.738-.845a4 4 0 0 0-3.331-.546a7.5 7.5 0 0 0-1.684-1.48A6.06 6.06 0 0 1 18 13m-3-4a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
                          />
                        </g>
                      </svg>
                    </span>
                    <p className="text-[10px] font-medium">283 students</p>
                  </div>
                  <div className="text-[#a4a4a4] flex gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="m12.6 11.503l3.891 3.891l-.848.849L11.4 12V6h1.2zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6"
                        />
                      </svg>
                    </span>
                    <p className="text-[#a4a4a4] text-[10px] font-medium">
                      3hr 45min
                    </p>
                  </div>
                </div>
              </div>
              <div className="shadow-gray-300 shadow-sm rounded-md p-2 flex flex-col space-y-2 hover:scale-105 transition-all duration-300 cursor-pointer">
                <img
                  className="rounded-md w-full h-32 object-cover"
                  src="https://plus.unsplash.com/premium_photo-1753080952069-a863e3048269?q=80&w=499&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Course image"
                />
                {/* card heaading */}
                <div
                  className="flex justify-between"
                  style={{ alignItems: "center" }}
                >
                  <h5 className="font-bold">Decentralized Identity & DAOs</h5>
                  <div
                    className="flex gap-1 align-middle"
                    style={{ alignItems: "center" }}
                  >
                    <span>
                      <svg
                        className="text-yellow-300"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
                        />
                      </svg>
                    </span>
                    <p className="text-[12px] font-medium text-[#a4a4a4]">
                      4.1
                    </p>
                  </div>
                </div>
                {/* card body */}
                <div className="flex justify-between">
                  <div className="flex text-[#a4a4a4] gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                          <path
                            fill="currentColor"
                            d="M5 7.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0M9.5 5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m0 8c1.993 0 3.805.608 5.137 1.466c.667.43 1.238.937 1.653 1.49c.407.545.71 1.2.71 1.901c0 .755-.35 1.36-.864 1.797c-.485.41-1.117.676-1.77.859c-1.313.367-3.05.487-4.866.487s-3.553-.12-4.865-.487c-.654-.183-1.286-.449-1.77-.859C2.349 19.218 2 18.612 2 17.857c0-.702.303-1.356.71-1.9c.415-.554.986-1.062 1.653-1.49C5.695 13.607 7.507 13 9.5 13m0 2c-1.597 0-3.035.492-4.055 1.148c-.51.328-.89.682-1.134 1.007c-.25.334-.311.576-.311.702c0 .074.015.15.157.27c.173.148.494.314 1.016.46c1.04.29 2.553.413 4.327.413s3.287-.123 4.327-.413c.522-.146.843-.312 1.016-.46c.142-.12.157-.196.157-.27c0-.126-.061-.368-.311-.702c-.244-.325-.624-.679-1.134-1.007C12.535 15.492 11.097 15 9.5 15m8.5-2c1.32 0 2.518.436 3.4 1.051c.822.573 1.6 1.477 1.6 2.52c0 .587-.253 1.073-.638 1.426c-.357.328-.809.528-1.244.66c-.87.263-1.99.343-3.118.343h-.203c.13-.348.203-.73.203-1.143q-.002-.336-.06-.65L17.893 17H18c1.081 0 1.96-.082 2.539-.257c.262-.08.397-.16.455-.206c-.029-.118-.185-.46-.738-.845a4 4 0 0 0-3.331-.546a7.5 7.5 0 0 0-1.684-1.48A6.06 6.06 0 0 1 18 13m-3-4a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
                          />
                        </g>
                      </svg>
                    </span>
                    <p className="text-[10px] font-medium">283 students</p>
                  </div>
                  <div className="text-[#a4a4a4] flex gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="m12.6 11.503l3.891 3.891l-.848.849L11.4 12V6h1.2zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6"
                        />
                      </svg>
                    </span>
                    <p className="text-[#a4a4a4] text-[10px] font-medium">
                      3hr 45min
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
