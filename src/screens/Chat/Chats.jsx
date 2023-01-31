import React from 'react';
const recipients = [
  {
    name: 'Dr. Strange',
    imgSrc: '',
    lastMessage:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, est? Laborum, pariatur.',
  },
  {
    name: 'Snakeman Dudem',
    imgSrc: '',
    lastMessage:
      '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, est? Laborum, pariatur.',
  },
];

const Chats = () => {
  return (
    <div class="left bg-[#ffffff] h-full w-f md:w-[30%]">
      <div class="sticky flex flex-col">
        <div class="upper-nav bg-[#F0F2F5] flex justify-between items-center px-4 py-[0.60rem] border-r border-slate-300">
          <div class="dp flex justify-center items-center w-[40px] h-[40px]">
            <img class="rounded-full" src="/images/dp.jpg" alt="profile" />
          </div>
          <div class="tools flex justify-center items-center space-x-2">
            <div class="status w-[40px] h-[40px] grid place-items-center">
              <svg
                version="1.1"
                id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6"
                x="0"
                y="0"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                class=""
              >
                <path
                  fill="#54656F"
                  d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"
                ></path>
                <path
                  fill="#009588"
                  d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
                ></path>
              </svg>
            </div>
            <div class="new-chat w-[42.5px] h-[40px] grid place-items-center">
              <svg viewBox="0 0 24 24" width="24" height="24" class="">
                <path
                  fill="#54656F"
                  d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"
                ></path>
              </svg>
            </div>
            <div class="menu w-[40px] h-[40px] grid place-items-center">
              <svg viewBox="0 0 24 24" width="24" height="24" class="">
                <path
                  fill="#54656F"
                  d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="lower-nav px-4 py-2 flex items-center">
          <div class="flex justify-between items-center w-full">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class="absolute left-10"
            >
              <path
                fill="#54656F"
                d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"
              ></path>
            </svg>
            <input
              class="outline-none bg-[#F0F2F5] rounded-md pl-16 py-1 w-[26vw] mr-2"
              placeholder="Search or start new chat"
              type="text"
              id="search"
            />
            <div class="w-[40px] h-[40px] lg:flex justify-center items-center hidden">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                preserveAspectRatio="xMidYMid meet"
                class="relative"
              >
                <path
                  fill="#54656F"
                  d="M10 18.1h4v-2h-4v2zm-7-12v2h18v-2H3zm3 7h12v-2H6v2z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <hr class="h-[0.01px] bg-slate-100" />

        <div class="h-[79.5vh] overflow-y-scroll">
          <div class="chatbox hover:bg-gray-100 cursor-pointer">
            <hr class="w-[85%] float-right" />
            <div class="flex items-center w-full">
              <div class="p-3">
                <img
                  src="/images/Aditya.jpg"
                  alt=""
                  class="rounded-full w-[49px] h-[49px]"
                />
              </div>
              <div class="flex justify-between w-[80%] ">
                <div class="chat-name flex flex-col">
                  <h3 class="text-md text-gray-700 font-sans font-normal">
                    Aditya Bamniya
                  </h3>
                  <p class="text-md text-gray-500 font-sans font-normal flex items-center">
                    <svg viewBox="0 0 18 18" width="18" height="18" class="">
                      <path
                        fill="#7BCCEE"
                        d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"
                      ></path>
                    </svg>
                    <span class="inline-block">Aaja Chai peene Chale...</span>
                  </p>
                </div>
                <div class="last-chat">
                  <p class="text-[0.80rem] font-sans text-gray-500 font-light">
                    yesterday
                  </p>
                </div>
              </div>
            </div>
            <hr class="w-[85%] float-right" />
          </div>
          <div class="chatbox hover:bg-gray-100 cursor-pointer">
            <hr class="w-[85%] float-right" />
            <div class="flex items-center w-full">
              <div class="p-3">
                <img
                  src="/images/Ravindra.jpg"
                  alt=""
                  class="rounded-full w-[49px] h-[49px]"
                />
              </div>
              <div class="flex justify-between w-[80%] ">
                <div class="chat-name flex flex-col">
                  <h3 class="text-md text-gray-700 font-sans font-normal">
                    Ravindra
                  </h3>
                  <p class="text-md text-gray-500 font-sans font-normal flex items-center">
                    <svg viewBox="0 0 18 18" width="18" height="18" class="">
                      <path
                        fill="#7BCCEE"
                        d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"
                      ></path>
                    </svg>
                    <span class="inline-block">Bhai kidhar hai tu?</span>
                  </p>
                </div>
                <div class="last-chat">
                  <p class="text-[0.80rem] font-sans text-gray-500 font-light">
                    yesterday
                  </p>
                </div>
              </div>
            </div>
            <hr class="w-[85%] float-right" />
          </div>
          <div class="chatbox hover:bg-gray-100 cursor-pointer">
            <hr class="w-[85%] float-right" />
            <div class="flex items-center w-full">
              <div class="p-3">
                <img
                  src="/images/Prashant.jpg"
                  alt=""
                  class="rounded-full w-[49px] h-[49px]"
                />
              </div>
              <div class="flex justify-between w-[80%] ">
                <div class="chat-name flex flex-col">
                  <h3 class="text-md text-gray-700 font-sans font-normal">
                    Prashant Bhai
                  </h3>
                  <p class="text-md text-gray-500 font-sans font-normal flex items-center">
                    <svg viewBox="0 0 18 18" width="18" height="18" class="">
                      <path
                        fill="#CBD0D4"
                        d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"
                      ></path>
                    </svg>
                    <span class="inline-block">Bas 2 min me aaya Bhai </span>
                  </p>
                </div>
                <div class="last-chat">
                  <p class="text-[0.80rem] font-sans text-gray-500 font-light">
                    yesterday
                  </p>
                </div>
              </div>
            </div>
            <hr class="w-[85%] float-right" />
          </div>
          <div class="chatbox hover:bg-gray-100 cursor-pointer">
            <hr class="w-[85%] float-right" />
            <div class="flex items-center w-full">
              <div class="p-3">
                <img
                  src="/images/Chirag.jpg"
                  alt=""
                  class="rounded-full w-[49px] h-[49px]"
                />
              </div>
              <div class="flex justify-between w-[80%] ">
                <div class="chat-name flex flex-col">
                  <h3 class="text-md text-gray-700 font-sans font-normal">
                    Chirag Vyas ECE
                  </h3>
                  <p class="text-md text-gray-500 font-sans font-normal flex items-center">
                    <span>Bhai assignment kar liya kya </span>
                  </p>
                </div>
                <div class="last-chat">
                  <p class="text-[0.80rem] font-sans text-gray-500 font-light">
                    yesterday
                  </p>
                </div>
              </div>
            </div>
            <hr class="w-[85%] float-right" />
          </div>
          <div class="chatbox hover:bg-gray-100 cursor-pointer">
            <hr class="w-[85%] float-right" />
            <div class="flex items-center w-full">
              <div class="p-3">
                <img
                  src="/images/bg-image.png"
                  alt=""
                  class="rounded-full w-[49px] h-[49px]"
                />
              </div>
              <div class="flex justify-between w-[80%] ">
                <div class="chat-name flex flex-col">
                  <h3 class="text-md text-gray-700 font-sans font-normal">
                    Rohit Sharma
                  </h3>
                  <p class="text-md text-gray-500 font-sans font-normal">
                    Joginder: Isme hai saare
                  </p>
                </div>
                <div class="last-chat">
                  <p class="text-[0.80rem] font-sans text-gray-500 font-light">
                    yesterday
                  </p>
                </div>
              </div>
            </div>
            <hr class="w-[85%] float-right" />
          </div>
          <div class="chatbox hover:bg-gray-100 cursor-pointer">
            <hr class="w-[85%] float-right" />
            <div class="flex items-center w-full">
              <div class="p-3">
                <img
                  src="/images/bg-image.png"
                  alt=""
                  class="rounded-full w-[49px] h-[49px]"
                />
              </div>
              <div class="flex justify-between w-[80%] ">
                <div class="chat-name flex flex-col">
                  <h3 class="text-md text-gray-700 font-sans font-normal">
                    Rohit Sharma
                  </h3>
                  <p class="text-md text-gray-500 font-sans font-normal">
                    Joginder: Isme hai saare
                  </p>
                </div>
                <div class="last-chat">
                  <p class="text-[0.80rem] font-sans text-gray-500 font-light">
                    yesterday
                  </p>
                </div>
              </div>
            </div>
            <hr class="w-[85%] float-right" />
          </div>
          <div class="chatbox hover:bg-gray-100 cursor-pointer">
            <hr class="w-[85%] float-right" />
            <div class="flex items-center w-full">
              <div class="p-3">
                <img
                  src="/images/bg-image.png"
                  alt=""
                  class="rounded-full w-[49px] h-[49px]"
                />
              </div>
              <div class="flex justify-between w-[80%] ">
                <div class="chat-name flex flex-col">
                  <h3 class="text-md text-gray-700 font-sans font-normal">
                    Rohit Sharma
                  </h3>
                  <p class="text-md text-gray-500 font-sans font-normal">
                    Joginder: Isme hai saare
                  </p>
                </div>
                <div class="last-chat">
                  <p class="text-[0.80rem] font-sans text-gray-500 font-light">
                    yesterday
                  </p>
                </div>
              </div>
            </div>
            <hr class="w-[85%] float-right" />
          </div>
          <div class="chatbox hover:bg-gray-100 cursor-pointer">
            <hr class="w-[85%] float-right" />
            <div class="flex items-center w-full">
              <div class="p-3">
                <img
                  src="/images/bg-image.png"
                  alt=""
                  class="rounded-full w-[49px] h-[49px]"
                />
              </div>
              <div class="flex justify-between w-[80%] ">
                <div class="chat-name flex flex-col">
                  <h3 class="text-md text-gray-700 font-sans font-normal">
                    Rohit Sharma
                  </h3>
                  <p class="text-md text-gray-500 font-sans font-normal">
                    Joginder: Isme hai saare
                  </p>
                </div>
                <div class="last-chat">
                  <p class="text-[0.80rem] font-sans text-gray-500 font-light">
                    yesterday
                  </p>
                </div>
              </div>
            </div>
            <hr class="w-[85%] float-right" />
          </div>
          <div class="chatbox hover:bg-gray-100 cursor-pointer">
            <hr class="w-[85%] float-right" />
            <div class="flex items-center w-full">
              <div class="p-3">
                <img
                  src="/images/bg-image.png"
                  alt=""
                  class="rounded-full w-[49px] h-[49px]"
                />
              </div>
              <div class="flex justify-between w-[80%] ">
                <div class="chat-name flex flex-col">
                  <h3 class="text-md text-gray-700 font-sans font-normal">
                    Rohit Sharma
                  </h3>
                  <p class="text-md text-gray-500 font-sans font-normal">
                    Joginder: Isme hai saare
                  </p>
                </div>
                <div class="last-chat">
                  <p class="text-[0.80rem] font-sans text-gray-500 font-light">
                    yesterday
                  </p>
                </div>
              </div>
            </div>
            <hr class="w-[85%] float-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
