import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
const MainChat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className=" flex flex-col px-3 justify-between border-l border-gray-400/60 w-full ">
      <div className="flex flex-col gap-3 ">
        <div className="px-3 pb-3 h-1/12 flex justify-between items-center border-b border-gray-400/50">
          <div className=" flex gap-3 items-center ">
            <img
              src="/avatar.png"
              alt=""
              className="w-10 h-10 object-contain rounded-full"
            />
            <div className="flex flex-col ">
              <p className="font-semibold ">Jane Doe</p>
              <p className="text-sm text-gray-400 ">Last seen 2 hours ago.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <img
              src="/phone.png"
              alt=""
              className="w-4 cursor-pointer h-4 rounded-full object-contain"
            />
            <img
              src="/video.png"
              alt=""
              className="w-4 cursor-pointer h-4 rounded-full object-contain"
            />
            <img
              src="/info.png"
              alt=""
              className="w-4 cursor-pointer h-4 rounded-full object-contain"
            />
          </div>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-218px)]">
          <div className="flex gap-3 px-2">
            <img src="/avatar.png" alt="" className="w-10 h-10 rounded-full" />
            <div className="">
              <p className="bg-black/70 text-gray-300 p-3 rounded-md w-[60%]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
                eaque provident natus. Eius nulla magnam voluptas hic corporis
                molestias deserunt!
              </p>
              <p className="text-sm text-gray-300 py-2">1 min ago.</p>
            </div>
          </div>
          <div className="flex items-center pl-[40%]   ">
            <div className="">
              <p className="text-gray-300 bg-blue-700 p-2 rounded-md">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
                ad aliquam quis voluptatum delectus nemo nisi quia cum,
                repellendus obcaecati?
              </p>
              <p className="text-sm text-gray-300 ">2 mins ago.</p>
            </div>
          </div>
           <div className="flex gap-3 px-2">
            <img src="/avatar.png" alt="" className="w-10 h-10 rounded-full" />
            <div className="">
              <p className="bg-black/70 text-gray-300 p-3 rounded-md w-[60%]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
                eaque provident natus. Eius nulla magnam voluptas hic corporis
                molestias deserunt!
              </p>
              <p className="text-sm text-gray-300 py-2">1 min ago.</p>
            </div>
          </div>
          <div className="flex items-center pl-[40%]   ">
            <div className="">
              <p className="text-gray-300 bg-blue-700 p-2 rounded-md">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
                ad aliquam quis voluptatum delectus nemo nisi quia cum,
                repellendus obcaecati?
              </p>
              <p className="text-sm text-gray-300 ">2 mins ago.</p>
            </div>
          </div>
           <div className="flex gap-3 px-2">
            <img src="/avatar.png" alt="" className="w-10 h-10 rounded-full" />
            <div className="">
              <p className="bg-black/70 text-gray-300 p-3 rounded-md w-[60%]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
                eaque provident natus. Eius nulla magnam voluptas hic corporis
                molestias deserunt!
              </p>
              <p className="text-sm text-gray-300 py-2">1 min ago.</p>
            </div>
          </div>
          <div className="flex items-center pl-[40%]   ">
            <div className="">
              <p className="text-gray-300 bg-blue-700 p-2 rounded-md">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
                ad aliquam quis voluptatum delectus nemo nisi quia cum,
                repellendus obcaecati?
              </p>
              <p className="text-sm text-gray-300 ">2 mins ago.</p>
            </div>
          </div>
           <div className="flex gap-3 px-2">
            <img src="/avatar.png" alt="" className="w-10 h-10 rounded-full" />
            <div className="">
              <p className="bg-black/70 text-gray-300 p-3 rounded-md w-[60%]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
                eaque provident natus. Eius nulla magnam voluptas hic corporis
                molestias deserunt!
              </p>
              <p className="text-sm text-gray-300 py-2">1 min ago.</p>
            </div>
          </div>
          <div className="flex items-center pl-[40%]   ">
            <div className="">
              <p className="text-gray-300 bg-blue-700 p-2 rounded-md">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
                ad aliquam quis voluptatum delectus nemo nisi quia cum,
                repellendus obcaecati?
              </p>
              <p className="text-sm text-gray-300 ">2 mins ago.</p>
            </div>
          </div>
           <div className="flex gap-3 px-2">
            <img src="/avatar.png" alt="" className="w-10 h-10 rounded-full" />
            <div className="">
              <p className="bg-black/70 text-gray-300 p-3 rounded-md w-[60%]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
                eaque provident natus. Eius nulla magnam voluptas hic corporis
                molestias deserunt!
              </p>
              <p className="text-sm text-gray-300 py-2">1 min ago.</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" pb-3 items-center justify-center  ">
        <div className="flex gap-3 items-center justify-between px-3 w-full">
          <div className="w-1/4 flex gap-4 items-center">
            <img src="/img.png" alt="" className="w-4 h-4 object-contain" />
            <img src="/camera.png" alt="" className="w-4 h-4 object-contain" />
            <img src="/mic.png" alt="" className="w-4 h-4 object-contain" />
          </div>
          <div className="w-2/4">
            <input
              type="text"
              placeholder="Type Message"
              className="px-4 py-1 outline-none bg-black/50 rounded-md w-full"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4 ">
            <img
              src="/emoji.png"
              alt=""
              className="w-4 h-4 object-contain"
              onClick={() => setOpen(!open)}
            />
            <div className="absolute">
              <EmojiPicker
                open={open}
                onEmojiClick={handleEmoji}
                className="relative bottom-[50px] left-0 text-yellow-400"
              />
            </div>

            <button className="bg-blue-700 hover:bg-blue-800 rounded-md px-4 py-1 text-sm">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainChat;
