const Carving = () => {
  return (
    <div className="flex justify-between h-48">
      <img src="public/image copy 2.png" alt="" />
      {/* LEFT */}
      <h3 className="text-2xl font-semibold">Strategy Development</h3>
      <div className="w-1/3j">
        {/* JOB TITLE */}
        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
          Learner{" "}
        </div>
        {/* JOB DESC */}
        <div className="p-3 text-sm italic">
          I am a laerner I always try my best.
        </div>
        {/* JOB DATE */}
        <div className="p-3 text-red-400 text-sm font-semibold">
          2023 -2024{" "}
        </div>
      </div>
      {/* CENTER */}
      <div className="w-1/6 flex justify-center">
        {/* LINE */}
        <div className="w-1 h-full bg-gray-600 rounded relative">
          {/* LINE CIRCLE */}
          <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-1/3 "></div>
    </div>
  );
};

export default Carving;

// /* eslint-disable react/no-unescaped-entities */
// const Carving = () => {
//   return (
//     <div className="w-[85%] mx-auto">
//       <div>
//         <h2 className="text-3xl">WHAT WE'RE CRAVING</h2>
//       </div>
//       <div>
//         <div className="flex justify-between h-48 mt-20">
//           {/* LEFT */}
//           <div className="w-1/3 ">
//             <div>
//               <img src="/public/image copy 3.png" alt="" />
//             </div>
//             <div className="p-3">
//               <h3 className="text-2xl ">Strategy Development</h3>
//               <p>
//                 {" "}
//                 Customized Strategies: Based on our findings, we develop a
//                 comprehensive digital marketing strategy customized to achieve
//                 your specific goals.{" "}
//               </p>
//               <p>
//                 Tactical Planning: We outline the tactics and channels that will
//                 be most effective in reaching your target <br />
//                 driving engagement.
//               </p>
//             </div>
//           </div>
//           {/* CENTER */}
//           <div className="w-1/6 flex justify-center">
//             {/* LINE */}
//             <div className="w-1 h-full bg-gray-600 rounded relative">
//               {/* LINE CIRCLE */}
//               <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
//                 1
//               </div>
//             </div>
//           </div>
//           {/* RIGHT */}
//           <div className="w-1/3 ">
//             <h3 className="text-2xl ">Discovery Phase</h3>
//             <p>
//               Understanding Your Goals: We begin by listening to your
//               objectives, challenges, and expectations to define clear goals for
//               your digital presence.
//             </p>
//             <p>
//               {" "}
//               Competitive Analysis: We analyze your industry landscape and
//               competitors to identify opportunities and benchmarks for success
//             </p>
//           </div>
//         </div>
//         {/* EXPERIENCE LIST ITEM */}
//         <div className="flex justify-between h-48">
//           {/* LEFT */}
//           <div className="w-1/3 "></div>
//           {/* CENTER */}
//           <div className="w-1/6 flex justify-center">
//             {/* LINE */}
//             <div className="w-1 h-full bg-gray-600 rounded relative">
//               {/* LINE CIRCLE */}
//               <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
//             </div>
//           </div>
//           {/* RIGHT */}
//           <div className="w-1/3 ">
//             {/* JOB TITLE */}
//             <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
//               <img src="/public/image copy 2.png" alt="" />
//             </div>
//             {/* JOB DESC */}
//             <div className="text-2xl">
//               <h3 className="">Execution and Optimization</h3>{" "}
//             </div>
//             {/* JOB DATE */}
//             <div className="p-3">
//               <p>
//                 Implementation: Our experienced team executes the strategy with
//                 precision, leveraging industry best practices and cutting-edge
//                 tools.
//               </p>
//               <p>
//                 Continuous Improvement: We monitor campaign performance closely,
//                 making data-driven adjustments to optimize results and maximize
//                 ROI.
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* EXPERIENCE LIST ITEM */}
//         <div className="flex justify-between h-48">
//           {/* LEFT */}
//           <div className="w-1/3 ">
//             {/* JOB TITLE */}
//             <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
//               <img src="public/image copy.png" alt="" />
//             </div>
//             {/* JOB DESC */}
//             <div className="p-3 text-sm italic">
//               I am a laerner I always try my best.
//             </div>
//             {/* JOB DATE */}
//             <div className="p-3 text-red-400 text-sm font-semibold">
//               2023 -2024{" "}
//             </div>
//           </div>
//           {/* CENTER */}
//           <div className="w-1/6 flex justify-center">
//             {/* LINE */}
//             <div className="w-1 h-full bg-gray-600 rounded relative">
//               {/* LINE CIRCLE */}
//               <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
//             </div>
//           </div>
//           {/* RIGHT */}
//           <div className="w-1/3 "></div>
//         </div>
//         <div className="flex justify-between h-48">
//           {/* LEFT */}
//           <div className="w-1/3 ">
//             {/* JOB TITLE */}
//             <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
//               Learner{" "}
//             </div>
//             {/* JOB DESC */}
//             <div className="p-3 text-sm italic">
//               I am a laerner I always try my best.
//             </div>
//             {/* JOB DATE */}
//             <div className="p-3 text-red-400 text-sm font-semibold">
//               2023 -2024{" "}
//             </div>
//           </div>
//           {/* CENTER */}
//           <div className="w-1/6 flex justify-center">
//             {/* LINE */}
//             <div className="w-1 h-full bg-gray-600 rounded relative">
//               {/* LINE CIRCLE */}
//               <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
//             </div>
//           </div>
//           {/* RIGHT */}
//           <div className="w-1/3 "></div>
//         </div>
//         <div className="flex justify-between h-48">
//           {/* LEFT */}
//           <div className="w-1/3 ">
//             {/* JOB TITLE */}
//             <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
//               Learner{" "}
//             </div>
//             {/* JOB DESC */}
//             <div className="p-3 text-sm italic">
//               I am a laerner I always try my best.
//             </div>
//             {/* JOB DATE */}
//             <div className="p-3 text-red-400 text-sm font-semibold">
//               2023 -2024{" "}
//             </div>
//           </div>
//           {/* CENTER */}
//           <div className="w-1/6 flex justify-center">
//             {/* LINE */}
//             <div className="w-1 h-full bg-gray-600 rounded relative">
//               {/* LINE CIRCLE */}
//               <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
//             </div>
//           </div>
//           {/* RIGHT */}
//           <div className="w-1/3 "></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carving;
