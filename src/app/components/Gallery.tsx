"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
import Link from "next/link"

type Project = {
  id: number
  title: string
  image: string
  category: "website" | "mobile" | "desktop"
  url: string
}

const projects: Project[] = [
  
  { id: 1, title: "Almaz Print", image: "/assets/images/16.png", category: "website", url: "https://almazprint.ma/" },
  { id: 2, title: "Somatraser", image: "/assets/images/2.png", category: "website", url: "https://somatraser.ma/" },
  { id: 3, title: "Matheorie.be", image: "/assets/images/3.png", category: "website", url: "https://matheorie.be/" },
  {
    id: 4,
    title: "chimqtrav",
    image: "/assets/images/4.png",
    category: "website",
    url: "https://chimqtrav.ma/",
  },
  {
    id: 5,
 title: "s2pmedic",
    image: "/assets/images/5.png",
    category: "website",
   url: "https://s2pmedic.ma",
  },
  {
    id: 6,
    title: "casafacilities",
    image: "/assets/images/6.png",
    category: "website",
  url: "https://casafacilities.ma/"
  },
  {
    id: 1,
    title: "Beamingsmiles",
    image: "/assets/images/1.png",
    category: "website",
    url: "https://www.beamingsmiles.ma/",
  },
    { id: 7,title: "habspropertymanagement", image: "/assets/images/7.png", category: "website", url: "http://habspropertymanagement.ma/" },

  
  { id: 8, title: "agz-express", image: "/assets/images/8.png", category: "website", url: "http://agz-express.fr/" },
  {
    id: 9,
    title: "prescription-btp",
    image: "/assets/images/9.png",
    category: "website",
    url: "http://prescription-btp.ma/",
    },
    { id: 10, title: "mmt-agency", image: "/assets/images/10.png", category: "website", url: "https://mmt-agency.com/" },
    { id: 11, title: "magdev", image: "/assets/images/11.png", category: "website", url: "https://magdev.ma/" },
  
    { id: 12, title: "Mobile APPS", image: "/assets/images/13.png", category: "mobile", url: "#" },
  { id: 13, title: "letsdoit-today", image: "/assets/images/14.png", category: "website", url: "https://letsdoit-today.nl/" },
  { id: 14, title: "abreadyservices", image: "/assets/images/15.png", category: "website", url: "https://abreadyservices.com/" },
  
  
  
]

const categories = ["all", "website", "mobile", "desktop"]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [visibleProjects, setVisibleProjects] = useState(6)

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, filteredProjects.length))
  }

    return (
     
    <div className="w-full py-12 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-12 space-x-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category)
                setVisibleProjects(6)
              }}
              className={`text-lg font-medium capitalize transition-all duration-300 ${
                selectedCategory === category
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500 hover:text-indigo-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={project.url}
                  className="block relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <img
                    src={project.image} // The image path
                    alt={project.title}  // The image title
                    className="transition-transform duration-300 hover:scale-110"
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold text-center px-4">{project.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        {visibleProjects < filteredProjects.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <button
              onClick={loadMore}
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
             Voir plus
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

