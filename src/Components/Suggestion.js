import React from "react";

const Suggestion = () => {
  return (
    <div className="p-4 space-y-4 ">
      <div className="flex items-center justify-between  space-x-4">
        {/* Profile */}
        <div className="flex ">
          <div>
            <img
              className="w-12 h-12 rounded-full mr-4"
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.423171406.1685598216&semt=sph"
              alt=""
            />
          </div>
          <div className="">
            <h6 className="font-semibold">_careless_dude_</h6>
            <p className="text-gray-500">Nirav Rathwa </p>
          </div>
        </div>
        <div>
          <a
            href="/dfsdf"
            className="text-blue-500 hover:underline w-1/12 text-xs ml-auto"
          >
            Switch
          </a>
        </div>
      </div>
      {/* Suggested for you section */}
      <div className="flex justify-between  items-center ">
        <h6 className="font-semibold text-gray-500">Suggested for you</h6>
        <a href="#" className="text-white hover:text-gray-700">
          See all
        </a>
      </div>
      {/* Suggested users */}
      <div className="flex items-center justify-between space-x-4">
        <div className="flex ">
          <div>
            <img
              className="w-12 h-12 rounded-full mr-4"
              src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.2.423171406.1685598216&semt=sph"
              alt=""
            />
          </div>
          <div className="">
            <h6 className="font-semibold">damor_25_11</h6>
            <p className="text-gray-500 text-xs">Followed by anu._.gameti </p>
          </div>
        </div>
        <div>
          <a
            href="/follow"
            className="text-blue-500 hover:text-white text-xs ml-auto"
          >
            Follow
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between space-x-4">
        <div className="flex ">
          <div>
            <img
              className="w-12 h-12 rounded-full mr-4"
              src="https://img.freepik.com/free-photo/portrait-beautiful-face-young-woman-with-long-brown-hair_186202-4331.jpg?size=626&ext=jpg&ga=GA1.2.423171406.1685598216&semt=sph"
              alt=""
            />
          </div>
          <div className="">
            <h6 className="font-semibold">minx285</h6>
            <p className="text-gray-500 text-xs">Followed by _kalpesh__2005 </p>
          </div>
        </div>
        <div>
          <a
            href="/follow"
            className="text-blue-500 hover:text-white text-xs ml-auto"
          >
            Follow
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between space-x-4">
        <div className="flex ">
          <div>
            <img
              className="w-12 h-12 rounded-full mr-4"
              src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?size=626&ext=jpg&ga=GA1.2.423171406.1685598216&semt=sph"
              alt=""
            />
          </div>
          <div className="">
            <h6 className="font-semibold">shitu_rtw_135</h6>
            <p className="text-gray-500 text-xs">
              Followed by jayu_9318 + 1 more
            </p>
          </div>
        </div>
        <div>
          <a
            href="/follow"
            className="text-blue-500 hover:text-white text-xs ml-auto"
          >
            Follow
          </a>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
