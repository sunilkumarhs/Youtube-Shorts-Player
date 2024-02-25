import React, { useRef, useState } from "react";
import { shorts } from "./constants/shortsDetails";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { MdMoreVert } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const ShortsPlayer = () => {
  const videoRef = useRef(null);
  const [toogle, setToogle] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);
  const enableArrow = () => {
    setToogle(true);
  };
  const disableArrow = () => {
    setToogle(false);
  };
  const scrollOffers = (scrollOffset) => {
    videoRef.current.scrollTop += scrollOffset;
    // console.log(videoRef);
    setScrollValue(videoRef.current.scrollTop);
  };
  return (
    <div className="w-full flex justify-center">
      {toogle ? (
        <div className="md:flex hidden justify-center">
          {scrollValue > 0 ? (
            <div className="absolute left-1/2" onMouseOver={enableArrow}>
              <button
                className="bg-gray-300 rounded-full"
                onClick={() => scrollOffers(-1090)}
              >
                <IoIosArrowUp className="text-6xl" />
              </button>
            </div>
          ) : (
            ""
          )}
          <div className="absolute bottom-0 left-1/2" onMouseOver={enableArrow}>
            <button
              className="bg-gray-300 rounded-full"
              onClick={() => scrollOffers(1090)}
            >
              <IoIosArrowDown className="text-6xl" />
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        className="flex lg:w-1/2 w-full md:h-[90vh] h-screen flex-col rounded-3xl overflow-y-scroll no-scrollbar"
        ref={videoRef}
      >
        {shorts.map((video, index) => (
          <div key={index} className="w-full py-2 h-full text-center">
            <div
              className="flex py-10 "
              onMouseOver={enableArrow}
              onMouseLeave={disableArrow}
            >
              <div className="w-full h-full">
                <p className="text-xl font-semibold py-4 text-white">
                  {video.title}
                </p>
                <video
                  src={video.link}
                  className="object-cover w-full lg:h-full h-[80vh] "
                  autoPlay
                  controls
                  muted
                />
              </div>
              <div className=" md:relative absolute md:w-20 pt-[20%] lg:pt-0 px-2">
                <div className="flex flex-col text-white text-center">
                  <div className="py-2">
                    <button className="p-2 bg-gray-500 rounded-full">
                      <AiFillLike className="text-3xl " />
                    </button>
                    <p>{video.likes}</p>
                  </div>
                  <div className="py-2">
                    <button className="p-2 bg-gray-500 rounded-full">
                      <AiFillDislike className="text-3xl " />
                    </button>
                    <p>Dislike</p>
                  </div>
                  <div className="py-2">
                    <button className="p-2 bg-gray-500 rounded-full">
                      <BiCommentDetail className="text-3xl " />
                    </button>
                    <p>{video.comments}</p>
                  </div>
                  <div className="py-2">
                    <button className="p-2 bg-gray-500 rounded-full">
                      <IoIosShareAlt className="text-3xl " />
                    </button>
                    <p>Share</p>
                  </div>
                  <div className="py-2">
                    <button className="p-2 bg-gray-500 rounded-full">
                      <MdMoreVert className="text-3xl " />
                    </button>
                    <p>More</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortsPlayer;
