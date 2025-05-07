"use client"

import { motion } from "framer-motion"

export default function ProblemFraming() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="border-l-4 border-blue-500 pl-4 mb-6">
        <h2 className="text-3xl font-bold text-blue-700">Problem Framing</h2>
      </div>

      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className=" font-semibold text-slate-800 mb-3">High Obesity and Lifestyle Diseases in Middle-Class India</h3>
          <p className="text-slate-700 leading-relaxed">
            Obesity and lifestyle diseases such as hypertension and diabetes are on the rise among India's middle class, driven by sedentary lifestyles, poor diets, and stress. Despite the popularity of fitness trends and wellness awareness, many urban and semi-urban individuals continue to face health challenges that affect both personal well-being and broader societal factors, like healthcare costs and productivity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-slate-700 leading-relaxed">
          Current solutions, like fitness apps and medication, focus on symptoms rather than deeper issues such as urban planning, food habits, and work culture. A more comprehensive, systemic approach is needed to address the root causes and improve public health.
          </p>
        </motion.div>

        <motion.div
          className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h4 className="font-medium text-blue-800 mb-2">Key Challenge:</h4>
          <p className="text-slate-700">
          Tackling the root causes of obesity and lifestyle diseases, like poor urban planning, unhealthy diets, and long work hours, instead of relying on short-term solutions.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
