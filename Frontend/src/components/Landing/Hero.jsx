// // "use client"

// // import type React from "react"
// import React from "react"
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { ArrowRight, MessageSquare } from "lucide-react"

// export default function Hero() {
//   return (
//     <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center">
//           {/* Left Column - Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="md:w-1/2 mb-12 md:mb-0"
//           >
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               className="inline-block px-4 py-1 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
//             >
//               <span className="text-cyan-400 font-medium">AI-Powered Campus Assistant</span>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
//             >
//               Your{" "}
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
//                 Intelligent
//               </span>{" "}
//               Campus Companion
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//               className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg"
//             >
//               Navigate campus life effortlessly with CampusCopilot, your AI assistant for academics, events, dining, and
//               everything in between.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//               className="flex flex-col sm:flex-row gap-4"
//             >
//               <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white text-lg px-8 py-6 h-auto">
//                 Get Started <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//               <Button
//                 variant="outline"
//                 className="border-white/20 hover:bg-white/10 text-white text-lg px-8 py-6 h-auto"
//               >
//                 Try Demo <MessageSquare className="ml-2 h-5 w-5" />
//               </Button>
//             </motion.div>
//           </motion.div>

//           {/* Right Column - 3D Chat Interface */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="md:w-1/2 relative"
//           >
//             <div className="relative">
//               {/* Glowing background effect */}
//               <div className="absolute -inset-10 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full blur-3xl" />

//               {/* Chat interface mockup */}
//               <motion.div
//                 initial={{ y: 20 }}
//                 animate={{ y: [20, 0, 10, 0] }}
//                 transition={{
//                   duration: 4,
//                   repeat: Number.POSITIVE_INFINITY,
//                   repeatType: "reverse",
//                 }}
//                 className="relative bg-black/40 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6 z-10"
//               >
//                 <div className="flex items-center mb-6">
//                   <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
//                   <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
//                   <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
//                   <div className="ml-auto text-sm text-gray-400">CampusCopilot</div>
//                 </div>

//                 <div className="space-y-4">
//                   <div className="flex justify-end">
//                     <div className="bg-purple-600/80 rounded-tl-2xl rounded-bl-2xl rounded-tr-sm p-3 max-w-[80%]">
//                       <p className="text-white">Where can I find the library hours for this week?</p>
//                     </div>
//                   </div>

//                   <div className="flex">
//                     <div className="bg-cyan-600/50 backdrop-blur-sm rounded-tr-2xl rounded-br-2xl rounded-tl-sm p-3 max-w-[80%]">
//                       <p className="text-white">
//                         The main library is open from 7am-11pm Monday-Thursday, 7am-9pm Friday, and 10am-8pm on
//                         weekends. Would you like me to show you the study room availability?
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex justify-end">
//                     <div className="bg-purple-600/80 rounded-tl-2xl rounded-bl-2xl rounded-tr-sm p-3 max-w-[80%]">
//                       <p className="text-white">Yes, please! And are there any quiet zones available?</p>
//                     </div>
//                   </div>

//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.5, delay: 1 }}
//                     className="flex"
//                   >
//                     <div className="bg-cyan-600/50 backdrop-blur-sm rounded-tr-2xl rounded-br-2xl rounded-tl-sm p-3 max-w-[80%]">
//                       <p className="text-white">
//                         There are 8 study rooms available now. The 3rd floor is designated as a quiet zone and is
//                         currently at 40% capacity.
//                       </p>
//                     </div>
//                   </motion.div>
//                 </div>

//                 <div className="mt-6 relative">
//                   <input
//                     type="text"
//                     placeholder="Ask CampusCopilot anything..."
//                     className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                   />
//                   <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full p-1.5">
//                     <ArrowRight className="h-4 w-4 text-white" />
//                   </button>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Floating elements */}
//             <FloatingElement
//               className="absolute -top-10 -right-10 bg-gradient-to-br from-pink-500/20 to-purple-600/20 backdrop-blur-md p-4 rounded-xl border border-white/10"
//               delay={0.8}
//               duration={5}
//             >
//               <div className="flex items-center">
//                 <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
//                   <MessageSquare className="h-4 w-4 text-white" />
//                 </div>
//                 <div>
//                   <p className="text-xs text-white/70">AI Assistant</p>
//                   <p className="text-sm font-medium">24/7 Support</p>
//                 </div>
//               </div>
//             </FloatingElement>

//             <FloatingElement
//               className="absolute -bottom-5 -left-5 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-md p-4 rounded-xl border border-white/10"
//               delay={1}
//               duration={6}
//             >
//               <div className="flex items-center">
//                 <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-4 w-4 text-white"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M12 2L2 7l10 5 10-5-10-5z" />
//                     <path d="M2 17l10 5 10-5" />
//                     <path d="M2 12l10 5 10-5" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="text-xs text-white/70">Smart</p>
//                   <p className="text-sm font-medium">Study Buddy</p>
//                 </div>
//               </div>
//             </FloatingElement>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// function FloatingElement({
//   children,
//   className,
//   delay = 0,
//   duration = 4,
// }: {
//   children: React.ReactNode
//   className: string
//   delay?: number
//   duration?: number
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay }}
//       className={className}
//     >
//       <motion.div
//         animate={{ y: [0, -10, 0] }}
//         transition={{
//           duration,
//           repeat: Number.POSITIVE_INFINITY,
//           repeatType: "reverse",
//           ease: "easeInOut",
//         }}
//       >
//         {children}
//       </motion.div>
//     </motion.div>
//   )
// }


"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import { ArrowRight, MessageSquare } from "lucide-react"
import BlurText from "../Animation/BlurText"

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-33 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 mb-12 md:mb-0"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block px-4 py-1 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <span className="text-cyan-400 font-medium">AI-Powered Campus Assistant</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
            >
              Your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                Intelligent
              </span>{" "}
              Campus Companion
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg"
            >
              <BlurText
  text="Navigate campus life effortlessly with CampusCopilot, your AI assistant for academics, events, dining, and everything in between."
  delay={180}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-xl mb-8"
/>
              
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white text-lg px-8 py-6 h-auto">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-white/20 hover:bg-white/10 text-white text-lg px-8 py-6 h-auto"
              >
                Try Demo <MessageSquare className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:w-1/2 relative"
          >
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute -inset-10 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full blur-3xl" />

              {/* Chat interface mockup */}
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: [20, 0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="relative bg-black/40 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6 z-10"
              >
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <div className="ml-auto text-sm text-gray-400">CampusCopilot</div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-purple-600/80 rounded-tl-2xl rounded-bl-2xl rounded-tr-sm p-3 max-w-[80%]">
                      <p className="text-white">Where can I find the library hours for this week?</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-cyan-600/50 backdrop-blur-sm rounded-tr-2xl rounded-br-2xl rounded-tl-sm p-3 max-w-[80%]">
                      <p className="text-white">
                        The main library is open from 7am-11pm Monday-Thursday, 7am-9pm Friday, and 10am-8pm on weekends. Would you like me to show you the study room availability?
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-purple-600/80 rounded-tl-2xl rounded-bl-2xl rounded-tr-sm p-3 max-w-[80%]">
                      <p className="text-white">Yes, please! And are there any quiet zones available?</p>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="flex"
                  >
                    <div className="bg-cyan-600/50 backdrop-blur-sm rounded-tr-2xl rounded-br-2xl rounded-tl-sm p-3 max-w-[80%]">
                      <p className="text-white">
                        There are 8 study rooms available now. The 3rd floor is designated as a quiet zone and is currently at 40% capacity.
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-6 relative">
                  <input
                    type="text"
                    placeholder="Ask CampusCopilot anything..."
                    className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full p-1.5">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Floating elements */}
            <FloatingElement
              className="absolute -top-10 -right-10 bg-gradient-to-br from-pink-500/20 to-purple-600/20 backdrop-blur-md p-4 rounded-xl border border-white/10"
              delay={0.8}
              duration={5}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                  <MessageSquare className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/70">AI Assistant</p>
                  <p className="text-sm font-medium">24/7 Support</p>
                </div>
              </div>
            </FloatingElement>

            <FloatingElement
              className="absolute -bottom-5 -left-5 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-md p-4 rounded-xl border border-white/10 "
              delay={1}
              duration={6}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/70">Smart</p>
                  <p className="text-sm font-medium">Study Buddy</p>
                </div>
              </div>
            </FloatingElement>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// FloatingElement component without TypeScript types
function FloatingElement({ children, className, delay = 0, duration = 4 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
