import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Camera, Code, Calendar, Users, ArrowRight, Play, Award } from 'lucide-react'
import axios from 'axios'

const Home = () => {
  const [courses, setCourses] = useState([])
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coursesRes, eventsRes] = await Promise.all([
          axios.get('/api/courses'),
          axios.get('/api/events')
        ])
        setCourses(coursesRes.data)
        setEvents(eventsRes.data)
      } catch (error) {
        console.error('Error fetching data:', error)
        // Set fallback data if API fails
        setCourses([
          { id: 1, title: 'Digital Cinematography Fundamentals', description: 'Master the basics of digital film production, camera operations, and visual storytelling techniques.' },
          { id: 2, title: 'Advanced Film Editing', description: 'Professional editing workflows using industry-standard software including Premiere Pro and Final Cut Pro.' },
          { id: 3, title: 'Full-Stack Web Development', description: 'Complete web development course covering React, Node.js, databases, and deployment strategies.' }
        ])
        setEvents([
          { id: 1, title: 'Industry Professional Workshop', description: 'Learn from working cinematographers and software engineers.', date: '2025-02-15', location: 'Main Studio, Building A' },
          { id: 2, title: 'Student Film Screening', description: 'Showcase of outstanding student projects.', date: '2025-03-01', location: 'Auditorium, Building B' }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Master the Art of{' '}
              <span className="text-accent-400">Cinematography</span>
              {' '}& Software
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200 leading-relaxed">
              Join our comprehensive programs in cinematography and software development. 
              Learn from industry professionals and launch your creative career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="btn-primary inline-flex items-center">
                Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="btn-secondary inline-flex items-center">
                Watch Demo <Play className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Camera className="h-12 w-12 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Code className="h-12 w-12 animate-pulse" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Graduated Students</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4">
                <Camera className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">12</h3>
              <p className="text-gray-600">Specialized Courses</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">95%</h3>
              <p className="text-gray-600">Job Placement Rate</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4">
                <Code className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">8</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  )
}

export default Home;