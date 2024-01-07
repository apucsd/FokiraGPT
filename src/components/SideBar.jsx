const SideBar = () => {
  return (
    <div className="md:w-[25%] md:h-screen p-4  bg-[#202123]">
      <ul className="space-y-3 text-sm">
        <li
          onClick={() => window.location.reload()}
          className="flex  cursor-pointer gap-3 items-center justify-start rounded-sm border-2 p-3 border-[#343541]"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8 1V15"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 8H15"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>{" "}
          New Chat
        </li>

        <li className="flex bg-[#DD524C] font-mono cursor-pointer gap-3 items-center justify-start  p-3 border-[#343541]">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <circle cx="6.5" cy="6.5" r="5.5" stroke="#C5C5D1" />
              <line
                x1="6.5"
                y1="4.5"
                x2="6.5"
                y2="7"
                stroke="#C5C5D1"
                strokeLinecap="round"
              />
              <rect x="6" y="8" width="1" height="1" rx="0.5" fill="#C5C5D1" />
            </svg>
          </span>
          How to use FokiraGPt?
        </li>
        <li className="flex  font-mono cursor-pointer gap-3 items-center justify-start  p-3 border-[#343541]">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="7"
              viewBox="0 0 8 7"
              fill="none"
            >
              <path
                d="M6.93945 3.19995L3.9696 6.1698"
                stroke="#C5C5D1"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 3.19995L3.96985 6.1698"
                stroke="#C5C5D1"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Always Ask Like
        </li>
        <li className="text-center font-mono"></li>
        <li className="bg-[#444654] flex cursor-pointer   p-3 border-[#343541]">
          What is Fokira GPT?
        </li>
        <li className="bg-[#444654] flex cursor-pointer gap-3 items-center justify-start  p-3 border-[#343541]">
          What is API?
        </li>
        <li className="flex cursor-pointer gap-3 items-center justify-start  p-3 border-[#343541]">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M7.6001 10.6C9.25695 10.6 10.6001 9.25683 10.6001 7.59998C10.6001 5.94312 9.25695 4.59998 7.6001 4.59998C5.94324 4.59998 4.6001 5.94312 4.6001 7.59998C4.6001 9.25683 5.94324 10.6 7.6001 10.6Z"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.6001 1V2.2"
                stroke="#C5C5D1"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.6001 13V14.2"
                stroke="#C5C5D1"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.93188 2.93195L3.78388 3.78395"
                stroke="#C5C5D1"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.416 11.416L12.268 12.268"
                stroke="#C5C5D1"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 7.59998H2.2"
                stroke="#C5C5D1"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 7.59998H14.2"
                stroke="#C5C5D1"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.93188 12.268L3.78388 11.416"
                stroke="#C5C5D1"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.416 3.78395L12.268 2.93195"
                stroke="#C5C5D1"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Light Mode
        </li>
        <li className="flex cursor-pointer gap-3 items-center justify-start  p-3 border-[#343541]">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
            >
              <path
                d="M11.1333 12.3999V11.1332C11.1333 10.4613 10.8664 9.81694 10.3914 9.34185C9.91626 8.86676 9.27189 8.59985 8.60001 8.59985H3.53334C2.86145 8.59985 2.21709 8.86676 1.742 9.34185C1.2669 9.81694 1 10.4613 1 11.1332V12.3999"
                stroke="#C5C5D1"
                strokeWidth="0.950001"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.06654 6.06654C7.46566 6.06654 8.59988 4.93233 8.59988 3.53321C8.59988 2.13409 7.46566 0.999878 6.06654 0.999878C4.66742 0.999878 3.5332 2.13409 3.5332 3.53321C3.5332 4.93233 4.66742 6.06654 6.06654 6.06654Z"
                stroke="#C5C5D1"
                strokeWidth="0.950001"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          My Account
        </li>
        <li className="flex cursor-pointer gap-3 items-center justify-start  p-3 border-[#343541]">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                d="M4.6 11.8H2.2C1.88174 11.8 1.57652 11.6736 1.35147 11.4485C1.12643 11.2235 1 10.9183 1 10.6V2.2C1 1.88174 1.12643 1.57652 1.35147 1.35147C1.57652 1.12643 1.88174 1 2.2 1H4.6"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.80005 9.40002L11.8 6.40002L8.80005 3.40002"
                stroke="#C5C5D1"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.8001 6.40002H4.6001"
                stroke="#C5C5D1"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Log Out
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
