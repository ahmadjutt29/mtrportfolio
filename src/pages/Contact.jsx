import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

/**
 * Contact Page Component
 * Renders a contact form with EmailJS integration for sending messages
 */
function Contact() {
  // Form reference for EmailJS
  const formRef = useRef()
  
  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  // Form validation and submission states
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  /**
   * Validate email format using regex
   * @param {string} email - Email address to validate
   * @returns {boolean} - True if valid email format
   */
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  /**
   * Validate all form fields
   * @returns {boolean} - True if all fields are valid
   */
  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  /**
   * Handle input field changes
   * Updates form data and clears field-specific errors
   */
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  /**
   * Handle form submission
   * Validates form data and sends email via EmailJS
   */
  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccessMessage('')
    setErrorMessage('')
    
    if (validateForm()) {
      setIsLoading(true)
      
      // Send email using EmailJS with environment variables
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
        .then(() => {
          setSuccessMessage('Message sent successfully!')
          setFormData({ name: '', email: '', message: '' })
          setIsLoading(false)
          setTimeout(() => setSuccessMessage(''), 5000)
        })
        .catch(() => {
          setErrorMessage('Failed to send.')
          setIsLoading(false)
        })
    }
  }

  return (
    <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary via-dark to-secondary text-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 animate-fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Get in touch with us. We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="bg-dark rounded-lg p-6 sm:p-8 animate-fade-in-left animation-delay-200 animate-stagger">
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">Send us a Message</h2>
            
            {successMessage && (
              <p className="mb-6 text-green-500 font-medium">{successMessage}</p>
            )}

            {errorMessage && (
              <p className="mb-6 text-red-500 font-medium">{errorMessage}</p>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-primary mb-2 text-sm sm:text-base font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-dark border ${errors.name ? 'border-red-500' : 'border-primary'} rounded p-2 sm:p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition duration-300 text-sm sm:text-base`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-red-400 text-sm">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-primary mb-2 text-sm sm:text-base font-medium">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full bg-dark border ${errors.email ? 'border-red-500' : 'border-primary'} rounded p-2 sm:p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition duration-300 text-sm sm:text-base`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-red-400 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-primary mb-2 text-sm sm:text-base font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full bg-dark border ${errors.message ? 'border-red-500' : 'border-primary'} rounded p-2 sm:p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition duration-300 resize-none text-sm sm:text-base`}
                  placeholder="Your message..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-400 text-sm">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-primary text-secondary font-bold py-2.5 sm:py-3 rounded hover:animate-pulse transition duration-300 text-sm sm:text-base ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-in-right animation-delay-300 animate-stagger">
            <div className="bg-dark rounded-lg p-6 sm:p-8 transition-all duration-500 md:hover:scale-105 active:scale-[0.98]">
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">Address</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                10G, Wazir Ali Center<br />
                Badami Bagh<br />
                Lahore, Pakistan
              </p>
            </div>
            <div className="bg-dark rounded-lg p-6 sm:p-8 transition-all duration-500 md:hover:scale-105 active:scale-[0.98]">
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">Contact Info</h3>
              <p className="text-gray-300 mb-2 text-sm sm:text-base">
                <span className="text-primary">Phone:</span> +92 337 4882249
              </p>
              <p className="text-gray-300 mb-2 text-sm sm:text-base">
                <span className="text-primary">Phone:</span> +92 337 4882250
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                <span className="text-primary">Email:</span> Shahidabdulrehman132@gmail.com
              </p>
            </div>
            <div className="bg-dark rounded-lg p-6 sm:p-8 transition-all duration-500 md:hover:scale-105 active:scale-[0.98]">
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">Business Hours</h3>
              <p className="text-gray-300 mb-1 text-sm sm:text-base">Monday - Saturday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-300 text-sm sm:text-base">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
