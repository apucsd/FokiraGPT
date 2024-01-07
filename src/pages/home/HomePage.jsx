import SideBar from "../../components/SideBar";

import MainBar from "../../components/MainBar";

const HomePage = () => {
  return (
    <div className="md:flex md:flex-row lg:flex lg:flex-row flex flex-col-reverse  bg-[#000] text-[#ECECF1] w-full">
      <SideBar></SideBar>
      <MainBar></MainBar>
    </div>
  );
};

export default HomePage;
