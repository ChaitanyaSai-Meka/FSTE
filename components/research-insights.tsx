"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function ResearchInsights() {
  const insights = [
    {
      icon: <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />,
      highlight: "68% increase",
      text: "in obesity rates among urban middle-class Indians in the last decade.",
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />,
      highlight: "1 in 4 urban Indians",
      text: "is at risk of developing diabetes by 2025, according to WHO estimates.",
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />,
      highlight: "NITI Aayog highlights digital health",
      text: "and preventive care as key solutions for managing lifestyle diseases.",
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />,
      highlight: "77% of middle-class Indians",
      text: "report high levels of work-related stress affecting their health.",
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />,
      highlight: "Preventive health programs",
      text: "show 3x better outcomes when integrated with workplace wellness initiatives.",
    },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="border-l-4 border-purple-500 pl-4 mb-6">
        <h2 className="text-3xl font-bold text-purple-700">Research Insights</h2>
      </div>

      <ul className="space-y-6">
        {insights.map((insight, index) => (
          <motion.li
            key={index}
            className="flex items-start gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
          >
            <div className="mt-1">{insight.icon}</div>
            <div>
              <span className="font-semibold text-slate-800">{insight.highlight}</span>{" "}
              <span className="text-slate-700">{insight.text}</span>
            </div>
          </motion.li>
        ))}
      </ul>

      <motion.div
        className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h4 className="font-medium text-purple-800 mb-2">Research Conclusion:</h4>
        <p className="text-slate-700">
          A multi-faceted approach combining nutrition education, physical activity promotion, stress management, and
          regular health screenings is essential to address the lifestyle disease epidemic among India's middle class.
        </p>
      </motion.div>
    </motion.div>
  )
}
