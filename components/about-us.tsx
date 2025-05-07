"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, Globe, Heart, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Akshat Kumar",
      role: "Researcher",
      bio: "Researched dietary solutions for lifestyle diseases during the hackathon.",
      image: "/akshat.jpeg",
    },
    {
      name: "Chaitanya Sai Meka",
      role: "Web Developer",
      bio: "Developed this website to showcase our hackathon solution.",
      image: "/chaitanya.png",
    },
    {
      name: "Siva Shankar",
      role: "Designer",
      bio: "Designed visuals and programs for healthier urban lifestyles.",
      image: "/abhinay.jpeg",
    },
    {
      name: "Hemandher",
      role: "Researcher, Designer, Team Lead",
      bio: "Led the team in research and design for our hackathon project.",
      image: "/hemandher.jpeg",
    },
    {
      name: "CR Mohan Kumar",
      role: "Researcher",
      bio: "Explored urban lifestyle challenges for our hackathon solution.",
      image: "/placeholder.svg?height=200&width=200",
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="border-l-4 border-blue-500 pl-4 mb-8">
        <h2 className="text-3xl font-bold text-blue-700">About Us</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-10"
      >
        <h3 className="text-xl font-semibold text-slate-800 mb-4">Our Mission</h3>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-100">
          <p className="text-slate-700 leading-relaxed">
            We are committed to combating the rise of obesity and lifestyle diseases in middle-class India by addressing their root causes—sedentary lifestyles, poor diets, stress, urban planning, and work culture. Through evidence-based research, innovative solutions, and collaborative partnerships, we aim to empower individuals and communities with the knowledge and tools to make sustainable, healthier choices, ultimately reducing healthcare costs and enhancing societal well-being.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mb-10"
      >
        <h3 className="text-xl font-semibold text-slate-800 mb-4">What We Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <h4 className="font-medium text-slate-800 mb-2">Research</h4>
            <p className="text-slate-600 text-sm">
              Study root causes of lifestyle diseases, like urban planning, diet, and work culture, for targeted solutions.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-purple-600" />
            </div>
            <h4 className="font-medium text-slate-800 mb-2">Policy Advocacy</h4>
            <p className="text-slate-600 text-sm">
            Work with policymakers on health-focused urban planning, food access, and work-life balance.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-indigo-600" />
            </div>
            <h4 className="font-medium text-slate-800 mb-2">Education</h4>
            <p className="text-slate-600 text-sm">
            Educate communities on sustainable nutrition, exercise, stress relief, and balanced work culture.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-pink-600" />
            </div>
            <h4 className="font-medium text-slate-800 mb-2">Community Engagement</h4>
            <p className="text-slate-600 text-sm">Foster healthier environments with better urban design, food access, and stress reduction.</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mb-10"
      >
        <h3 className="text-xl font-semibold text-slate-800 mb-4">Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
            >
              <div className="relative w-32 h-32 mx-auto mt-4 rounded-full overflow-hidden bg-slate-100">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-semibold text-slate-800">{member.name}</h4>
                <p className="text-emerald-600 text-sm mb-2">{member.role}</p>
                <p className="text-slate-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <h3 className="text-xl font-semibold text-slate-800 mb-4">Contact Us</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-600 mt-0.5" />
                <div>
                  <h5 className="font-medium text-slate-800">Address</h5>
                  <p className="text-slate-600 text-sm">Rishihood University, Sonipat ,India , 131001</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-emerald-600 mt-0.5" />
                <div>
                  <h5 className="font-medium text-slate-800">Email</h5>
                  <p className="text-slate-600 text-sm">Oxxxx@rishihood.org</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-emerald-600 mt-0.5" />
                <div>
                  <h5 className="font-medium text-slate-800">Phone</h5>
                  <p className="text-slate-600 text-sm">+91 xx 2345 xx89</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <h5 className="font-medium text-slate-800 mb-3">Send us a message</h5>
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Your Message"
                  rows={3}
                  className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                ></textarea>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}