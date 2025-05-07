import React from 'react';

const ESP = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6B48FF] to-[#00DDEB] flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-xl p-8 sm:p-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#6B48FF] mb-8 text-center">ESP Analysis</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#6B48FF] text-white">
                <th className="p-4 sm:p-5 rounded-tl-lg border-r border-[#00DDEB] text-sm sm:text-base font-semibold">Layer</th>
                <th className="p-4 sm:p-5 border-r border-[#00DDEB] text-sm sm:text-base font-semibold">Description</th>
                <th className="p-4 sm:p-5 rounded-tr-lg text-sm sm:text-base font-semibold">Analysis</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white hover:bg-gray-50 transition-colors">
                <td className="p-4 sm:p-5 border-t border-gray-200 font-semibold text-[#6B48FF] text-sm sm:text-base">Event</td>
                <td className="p-4 sm:p-5 border-t border-gray-200 text-gray-700 text-sm sm:text-base">
                  Middle-class Indians increasingly join gyms and fitness programs but continue to consume high-calorie, processed foods, leading to rising obesity, hypertension, and diabetes rates.
                </td>
                <td className="p-4 sm:p-5 border-t border-gray-200 text-gray-700 text-sm sm:text-base">
                  Temporary fitness efforts fail to address underlying dietary and lifestyle issues, creating cycles of weight gain and NCD prevalence despite fitness trends.
                </td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                <td className="p-4 sm:p-5 border-t border-gray-200 font-semibold text-[#6B48FF] text-sm sm:text-base">Pattern</td>
                <td className="p-4 sm:p-5 border-t border-gray-200 text-gray-700 text-sm sm:text-base">
                  Fitness engagement is short-lived, with many abandoning programs due to time constraints or lack of dietary changes, while fast food consumption remains high.
                </td>
                <td className="p-4 sm:p-5 border-t border-gray-200 text-gray-700 text-sm sm:text-base">
                  Behavior Over Time (BOT) shows recurring spikes in fitness participation followed by drop-offs, paired with consistent increases in processed food consumption and NCD diagnoses. For more, refer to BOT.
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-50 transition-colors">
                <td className="p-4 sm:p-5 border-t border-gray-200 font-semibold text-[#6B48FF] text-sm sm:text-base rounded-bl-lg">Structure</td>
                <td className="p-4 sm:p-5 border-t border-gray-200 text-gray-700 text-sm sm:text-base">
                  Urban environments with limited exercise spaces, aggressive junk food marketing, and cultural emphasis on high-calorie diets disadvantage sustainable health practices.
                </td>
                <td className="p-4 sm:p-5 border-t border-gray-200 text-gray-700 text-sm sm:text-base rounded-br-lg">
                  Causal Loop Diagram (CLD) highlights reinforcing loops of sedentary lifestyles, poor food choices driven by accessibility and marketing, and low retention in fitness programs due to environmental and social pressures. For more, refer to CLD.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ESP;