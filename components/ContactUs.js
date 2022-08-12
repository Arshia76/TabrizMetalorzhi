import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

const ContactUs = () => {
  return (
    <div>
      <div className="w-full items-center justify-center hidden xl:block">
        <span className="text-[#D2D2D2]  text-8xl">
          .....................................................................
        </span>
      </div>
      <div
        className="flex flex-col md:flex-row flex-wrap md:flex-nowrap md:justify-around 
      items-start mt-10"
      >
        <div className="flex items-center mb-12 md:mb-0">
          <div
            className=" relative flex items-center justify-center w-[80px] h-[80px]
          rounded-full p-6 ml-6"
          >
            <HiOutlineMail size={55} />
          </div>
          <div className="flex flex-col">
            <span className="text-[#999999] text-xl md:text-4xl mb-6">
              ایمیل
            </span>
            <span className="text-gray-800 text-2xl md:text-5xl">
              tabrizpm@yahoo.com
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div
            className="relative flex items-center justify-center w-[80px] h-[80px]
          rounded-full p-6 ml-6"
          >
            <FiPhone size={55} />
          </div>

          <div className="flex flex-col">
            <span className="text-[#999999] text-xl md:text-4xl mb-6">
              شماره تماس
            </span>
            <span className="text-gray-800 text-2xl md:text-5xl">
              04136306035-6
            </span>
          </div>
        </div>
      </div>
      <div className="w-full  items-center justify-center hidden xl:block">
        <span className="text-[#D2D2D2]  text-8xl">
          .....................................................................
        </span>
      </div>
    </div>
  );
};

export default ContactUs;
