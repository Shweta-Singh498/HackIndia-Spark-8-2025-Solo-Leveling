// import { motion, useInView } from "framer-motion"
// import { useRef } from "react"
// import { MessageSquare, Map, Building, BookOpen, Calendar, Bot, LayoutDashboard } from "lucide-react"

// const features = [
//   {
//     icon: MessageSquare,
//     title: "Ask Anything Interface",
//     description: "Chat with CampusCopilot for academic queries, schedules, or local events",
//     color: "from-cyan-500 to-blue-600",
//   },
//   {
//     icon: Map,
//     title: "Smart Food Finder",
//     description: "Recommends the best nearby restaurants and cafes using maps and ratings",
//     color: "from-green-500 to-emerald-600",
//   },
//   {
//     icon: Building,
//     title: "Campus Guide",
//     description: "Get building directions, department contacts, and event updates",
//     color: "from-orange-500 to-amber-600",
//   },
//   {
//     icon: BookOpen,
//     title: "Study Buddy",
//     description: "Provides curated notes, lecture summaries, and YouTube video links",
//     color: "from-pink-500 to-rose-600",
//   },
//   {
//     icon: Calendar,
//     title: "Daily Planner",
//     description: "Syncs academic calendar, deadlines, and reminders",
//     color: "from-purple-500 to-indigo-600",
//   },
//   {
//     icon: Bot,
//     title: "24/7 AI Chat Support",
//     description: "Friendly and intuitive assistant with GPT-powered responses",
//     color: "from-blue-500 to-violet-600",
//   },
//   {
//     icon: LayoutDashboard,
//     title: "Custom Dashboard for Students",
//     description: "Personalized with widgets like GPA tracker, to-do list, weather, and transport info",
//     color: "from-red-500 to-pink-600",
//   },
// ]

// export default function Features() {
//   return (
//     <section id="features" className="py-20 relative">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-5xl font-bold mb-6">
//             Supercharge Your{" "}
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
//               Campus Life
//             </span>
//           </h2>
//           <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//             CampusCopilot combines cutting-edge AI with student-focused features to make your college experience
//             seamless and productive.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <FeatureCard key={index} feature={feature} index={index} />
//           ))}
//         </div>
//       </div>

//       {/* Background decorative elements */}
//       <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl opacity-30" />
//       <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyan-600/20 rounded-full filter blur-3xl opacity-30" />
//     </section>
//   )
// }

// function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 30 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       className="relative group"
//     >
//       <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//       <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-white/20 group-hover:translate-y-[-5px]">
//         <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-5`}>
//           <feature.icon className="h-6 w-6 text-white" />
//         </div>

//         <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
//         <p className="text-gray-300">{feature.description}</p>
//       </div>
//     </motion.div>
//   )
// }


import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageSquare,
  Map,
  Building,
  BookOpen,
  Calendar,
  Bot,
  LayoutDashboard,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Ask Anything Interface",
    description:
      "Chat with CampusCopilot for academic queries, schedules, or local events",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Map,
    title: "Smart Food Finder",
    description:
      "Recommends the best nearby restaurants and cafes using maps and ratings",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Building,
    title: "Campus Guide",
    description:
      "Get building directions, department contacts, and event updates",
    color: "from-orange-500 to-amber-600",
  },
  {
    icon: BookOpen,
    title: "Study Buddy",
    description:
      "Provides curated notes, lecture summaries, and YouTube video links",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Calendar,
    title: "Daily Planner",
    description: "Syncs academic calendar, deadlines, and reminders",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: Bot,
    title: "24/7 AI Chat Support",
    description:
      "Friendly and intuitive assistant with GPT-powered responses",
    color: "from-blue-500 to-violet-600",
  },
  {
    icon: LayoutDashboard,
    title: "Custom Dashboard for Students",
    description:
      "Personalized with widgets like GPA tracker, to-do list, weather, and transport info",
    color: "from-red-500 to-pink-600",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Supercharge Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Campus Life
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            CampusCopilot combines cutting-edge AI with student-focused
            features to make your college experience seamless and productive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyan-600/20 rounded-full filter blur-3xl opacity-30" />
    </section>
  );
}

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-white/20 group-hover:translate-y-[-5px]">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-5`}
        >
          <feature.icon className="h-6 w-6 text-white" />
        </div>

        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
        <p className="text-gray-300">{feature.description}</p>
      </div>
    </motion.div>
  );
}
