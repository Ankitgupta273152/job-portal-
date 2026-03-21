import React from 'react'
import Navbar from '../components_lite/Navbar'
import Ankit from './Ankit.jpeg'; // Import the local image


const Creator = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
          {/* Image Section */}
          <div className="flex justify-center">
            <img src={Ankit} alt="Amresh Sir" className="h-80 object-cover rounded-lg shadow-md" />
          </div>
          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ankit Gupta</h2>
            <p className="text-gray-600 mb-2">I am a B.Tech (CSE) student at Lucknow University, class of 2023–2027, focused on full‑stack web development.</p>
            <p className="text-gray-600 mb-2">I specialize in the MERN stack (MongoDB, Express, React, Node.js), building responsive user interfaces with Tailwind CSS and following modern UX practices.</p>
            <p className="text-gray-600 mb-2">My toolset includes JavaScript/TypeScript, RESTful APIs, JWT authentication, Cloudinary for media uploads, Git. I deploy applications to platforms like Render.</p>
            <p className="text-gray-600">I enjoy collaborating on projects, writing clean maintainable code, and learning new technologies. Open to internships, contributions, and real‑world projects.</p>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Creator
