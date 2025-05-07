"use client"
import Image from "next/image"

import { motion } from "framer-motion"

export default function CLDDiagram() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="border-l-4 border-indigo-500 pl-4 mb-6">
        <h2 className="text-3xl font-bold text-indigo-700">CLD Diagram</h2>
      </div>

      <motion.div
        className="bg-white rounded-lg shadow-md p-4 border border-slate-200 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {/* Placeholder for the CLD Diagram image */}
        <div className="w-full h-[500px] flex items-center justify-center bg-gray-100">
          <Image
            src="/cld_img.jpeg"
            alt="CLD Diagram"
            width={700}
            height={500}
            className="object-contain"
          />
        </div>
      </motion.div>

      <motion.div
        className="bg-slate-50 p-4 rounded-lg"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h4 className="font-medium text-xl text-slate-800 mb-2 border-l-4 border-indigo-500 pl-4">CLD (Causal Loop Diagram) Description:</h4>
        <ul className="list-disc list-inside text-slate-700 space-y-1">
          <li> Working Hours → Stress → Sedentary Lifestyle → Obesity → Stress</li>
          <li> Stress → Economic Pressure → Work Pressure → Working Hours → Stress</li>
          <li> Screen Time → Sedentary Lifestyle → Obesity → Stress → Screen Time</li>
          <li> Obesity → Hypertension Risk → Healthcare Costs → Stress → Obesity</li>
          <li> Obesity → Health Consciousness → Exercise → Obesity</li>
          <li> Junk Food Access → Diet → Obesity → Public Awareness → Junk Food Access</li>
          <li> Diabetes Risk → Health Consciousness → Exercise → Obesity → Diabetes Risk</li>
          <li> Screen Time → Diet → Obesity → Health Consciousness → Diet</li>
          <strong>Note:</strong> These loops show how stress, lifestyle, and awareness cycles drive or reduce obesity.
        </ul>
      </motion.div>
    </motion.div>
  )
}