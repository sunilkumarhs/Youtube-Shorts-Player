import Header from "./Header";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { CgPlayButtonR } from "react-icons/cg";
import { TfiDownload } from "react-icons/tfi";
import ShortsPlayer from "./ShortsPlayer";

function App() {
  return (
    <div className="bg-black">
      <div className="absolute w-full">
        <Header />
      </div>
      <div className="flex w-full h-screen">
        <div className="w-20 pt-16 bg-black md:flex hidden h-full flex-col text-white">
          <div className="py-4">
            <div className="px-7 text-center">
              <GoHome className="text-2xl" />
            </div>
            <div className="flex justify-center">
              <p className="text-[0.7rem]">Home</p>
            </div>
          </div>
          <div className="py-4">
            <div className="px-7 text-center">
              <SiYoutubeshorts className="text-2xl" />
            </div>
            <div className="flex justify-center">
              <p className="text-[0.7rem]">Shorts</p>
            </div>
          </div>
          <div className="py-4">
            <div className="px-7 text-center">
              <MdOutlineSubscriptions className="text-2xl" />
            </div>
            <div className="flex justify-center">
              <p className="text-[0.7rem]">Subscription</p>
            </div>
          </div>
          <div className="py-4">
            <div className="px-7 text-center">
              <SiYoutubemusic className="text-2xl" />
            </div>
            <div className="flex justify-center">
              <p className="text-[0.7rem]">YouTube Music</p>
            </div>
          </div>
          <div className="py-4">
            <div className="px-7 text-center">
              <CgPlayButtonR className="text-2xl" />
            </div>
            <div className="flex justify-center">
              <p className="text-[0.7rem]">Play</p>
            </div>
          </div>
          <div className="py-4">
            <div className="px-7 text-center">
              <TfiDownload className="text-2xl" />
            </div>
            <div className="flex justify-center">
              <p className="text-[0.7rem]">Downloads</p>
            </div>
          </div>
        </div>
        <div className="md:pt-14 pt-5">
          <ShortsPlayer />
        </div>
      </div>
    </div>
  );
}

export default App;
