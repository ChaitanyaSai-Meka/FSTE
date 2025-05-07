"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, BarChart2, Users, Activity, FileText, PieChart } from "lucide-react"
import AboutUs from "@/components/about-us"
import ProblemFraming from "@/components/problem-framing"
import ResearchInsights from "@/components/research-insights"
import CLDDiagram from "@/components/cld-diagram"
import Sfd_diagram from "@/components/sfd-diagram"
import ESP from "@/components/ESP-Analysis"
import Real_time_data from "@/components/real_time_data"

export default function Home() {
  const [activeSection, setActiveSection] = useState("problem-framing")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const sections = [
    { id: "problem-framing", label: "Problem Framing", icon: <FileText className="mr-2 h-4 w-4" /> },
    { id: "cld-diagram", label: "CLD Diagram", icon: <PieChart className="mr-2 h-4 w-4" /> },
    { id: "bot", label: "BOT", icon: <BarChart2 className="mr-2 h-4 w-4" /> },
    { id: "sfd", label: "SFD", icon: <Activity className="mr-2 h-4 w-4" /> },
    { id: "eps-analysis", label: "EPS Analysis", icon: <BarChart2 className="mr-2 h-4 w-4" /> },
    { id: "Real Time Data", label: "Real Time Data", icon: <Users className="mr-2 h-4 w-4" /> },
    { id: "about-us", label: "About Us", icon: <Users className="mr-2 h-4 w-4" /> },
  ]

  const renderSection = () => {
    switch (activeSection) {
      case "problem-framing":
        return <ProblemFraming />
      case "research-insights":
        return <ResearchInsights />
      case "cld-diagram":
        return <CLDDiagram />
      case "about-us":
        return <AboutUs />
      case "sfd":
        return <Sfd_diagram />
      case "eps-analysis":
        return <ESP/>
      case "Real Time Data":
        return <Real_time_data/>
      default:
        return (
          <div className="flex items-center justify-center h-64">
            <p className="text-xl text-gray-500">Content coming soon...</p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <motion.header
        className="bg-gradient-to-r from-blue-600 to-purple-600 py-10 px-4 text-center shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Healthy Middle-Class India
        </motion.h1>
        <motion.p
          className="text-xl text-white/90 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Breaking Free from Obesity & Lifestyle Diseases
        </motion.p>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-5xl mx-auto">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-white text-purple-700 shadow-md font-medium"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              {activeSection === section.id && <CheckCircle className="mr-2 h-4 w-4" />}
              {section.icon}
              {section.label}
            </motion.button>
          ))}
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto py-8 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="bg-white rounded-xl shadow-xl p-6 md:p-8"
        >
          {renderSection()}
        </motion.div>
      </main>

      <footer className="bg-slate-800 text-white py-6 px-4 text-center mt-12">
        <p>© All rights reserved.</p>
      </footer>
    </div>
  )
}
