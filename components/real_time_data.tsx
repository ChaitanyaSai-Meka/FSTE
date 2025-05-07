import React from 'react';
import { motion } from 'framer-motion';

const Real_time_data = () => {
  const regions = [
    {
      name: "Maharashtra",
      population: "123,456,789",
      obesityRate: "32%",
      hypertensionPrevalence: "28%",
      diabetesPrevalence: "15%",
      healthyFoodAccess: "55%",
      urbanPlanningScore: "2.8/5",
      stressRelatedWorkHours: "48 hrs/week",
    },
    {
      name: "Gujarat",
      population: "65,789,123",
      obesityRate: "29%",
      hypertensionPrevalence: "25%",
      diabetesPrevalence: "13%",
      healthyFoodAccess: "50%",
      urbanPlanningScore: "2.5/5",
      stressRelatedWorkHours: "45 hrs/week",
    },
    {
      name: "Tamil Nadu",
      population: "78,234,567",
      obesityRate: "35%",
      hypertensionPrevalence: "30%",
      diabetesPrevalence: "17%",
      healthyFoodAccess: "60%",
      urbanPlanningScore: "3.0/5",
      stressRelatedWorkHours: "50 hrs/week",
    },
    {
      name: "Karnataka",
      population: "69,876,543",
      obesityRate: "31%",
      hypertensionPrevalence: "27%",
      diabetesPrevalence: "14%",
      healthyFoodAccess: "58%",
      urbanPlanningScore: "2.9/5",
      stressRelatedWorkHours: "47 hrs/week",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#6B48FF] to-[#00DDEB] flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full max-w-3xl bg-white rounded-xl shadow-xl p-8 sm:p-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#6B48FF] mb-8 border-l-4 border-[#00DDEB] pl-4">
          Lifestyle Disease Data
        </h2>
        <div className="space-y-8">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              className="border-l-4 border-green-500 pl-4 text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-green-600 mb-2">
                {region.name}
              </h3>
              <p className="text-sm sm:text-base mb-1">
                <span className="font-medium">Population:</span> {region.population}
              </p>
              <p className="text-sm sm:text-base mb-1">
                <span className="font-medium">Obesity Rate:</span> {region.obesityRate}
              </p>
              <p className="text-sm sm:text-base mb-1">
                <span className="font-medium">Hypertension Prevalence:</span> {region.hypertensionPrevalence}
              </p>
              <p className="text-sm sm:text-base mb-1">
                <span className="font-medium">Diabetes Prevalence:</span> {region.diabetesPrevalence}
              </p>
              <p className="text-sm sm:text-base mb-1">
                <span className="font-medium">Healthy Food Access:</span> {region.healthyFoodAccess}
              </p>
              <p className="text-sm sm:text-base mb-1">
                <span className="font-medium">Urban Planning Score:</span> {region.urbanPlanningScore}
              </p>
              <p className="text-sm sm:text-base">
                <span className="font-medium">Stress-Related Work Hours:</span> {region.stressRelatedWorkHours}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Real_time_data;