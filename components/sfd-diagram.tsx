"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Sfd_diagram() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="border-l-4 border-indigo-500 pl-4 mb-6">
        <h2 className="text-3xl font-bold text-indigo-700">SFD Diagram</h2>
      </div>

      <motion.div
        className="bg-white rounded-lg shadow-md p-4 border border-slate-200 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {/* Placeholder for the CLD Diagram image */}
        <div className="w-full h-[400px] flex items-center justify-center bg-gray-100">
          <Image
            src="/sfd_img.jpeg"
            alt="SFD Diagram"
            width={700}
            height={400}
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
        <h4 className="font-medium text-slate-800 mb-2 border-l-4 border-indigo-500 pl-4">SLD (Stock Flow Diagram) Description</h4>
        <ul className="list-disc list-inside text-slate-700 space-y-1">
          <p className="font-bold py-3">Reinforcing</p>
          <li>Working Hours → Stress → Sedentary Lifestyle → Obesity → Stress: Hours raise stress, sedentary habits, obesity, stress.</li>
          <li>Stress → Economic Pressure → Work Pressure → Working Hours → Stress: Stress → economic/work pressure → hours → stress.</li>
          <li>Obesity → Hypertension Risk → Healthcare Costs → Stress → Obesity: Obesity → hypertension → costs → stress → obesity.</li>
          <p className="font-bold py-3">Balancing</p>
          <li>Obesity → Health Consciousness → Exercise → Obesity: Obesity → health consciousness → exercise → less obesity.</li>
          <li>Junk Food Access → Diet → Obesity → Public Awareness → Junk Food Access: Junk food → diet → obesity → awareness → less access.</li>
          <li>Diabetes Risk → Health Consciousness → Exercise → Obesity → Diabetes Risk: Diabetes risk → health consciousness → exercise → less obesity/risk.</li>
          <li>Screen Time → Diet → Obesity → Health Consciousness → Diet: Screen time → diet → obesity → health consciousness → better diet.</li>
          <div className="py-5">
          <strong>Note:</strong> Reinforcing loops increase obesity; balancing loops reduce it via awareness, habits.
          </div>
        </ul>
      </motion.div>
    </motion.div>
  )
}