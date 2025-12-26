import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Heart, Star, MapPin, Phone, Mail, Clock, Award, Users, Smile } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Home = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Mock reviews data
  const reviews = [
    {
      id: 1,
      name: 'Jennifer Anderson',
      rating: 5,
      comment: 'Excellent dental care! Dr. Smith and the team made me feel comfortable throughout my treatment. My smile has never looked better!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'David Thompson',
      rating: 5,
      comment: 'Professional, caring, and pain-free experience. The modern facility and advanced technology really impressed me. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      rating: 5,
      comment: 'Best dental clinic in London! The staff is friendly and professional. They explained every step of my treatment clearly.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    }
  ];

  // Services gallery images
  const servicesGallery = [
    { id: 1, url: 'https://images.pexels.com/photos/6502552/pexels-photo-6502552.jpeg', alt: 'Dental Procedure' },
    { id: 2, url: 'https://images.pexels.com/photos/6502544/pexels-photo-6502544.jpeg', alt: 'Professional Treatment' },
    { id: 3, url: 'https://images.pexels.com/photos/34833852/pexels-photo-34833852.jpeg', alt: 'Medical Team' },
    { id: 4, url: 'https://images.pexels.com/photos/3279209/pexels-photo-3279209.jpeg', alt: 'Patient Care' },
    { id: 5, url: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg', alt: 'Happy Patient' },
    { id: 6, url: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg', alt: 'Healthy Smile' },
    { id: 7, url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&fit=crop', alt: 'Dental Equipment' },
    { id: 8, url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09', alt: 'Modern Clinic' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only for now - could be connected to backend later
    toast({
      title: 'Appointment Request Sent!',
      description: 'Thank you for contacting us. We\'ll get back to you soon to confirm your appointment.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Smile className="h-8 w-8 text-cyan-600" />
            <span className="text-2xl font-bold text-gray-800">BrightSmile Dental</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">About</a>
            <a href="#services" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">Services</a>
            <a href="#reviews" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxkZW50YWwlMjBjbGluaWN8ZW58MHx8fHwxNzY2NzM3OTQ3fDA&ixlib=rb-4.1.0&q=85"
            alt="Modern Dental Clinic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/80 to-blue-900/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Your Smile, Our Priority
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Experience exceptional dental care with advanced technology and compassionate professionals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8">
              <a href="#contact">Book Appointment</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20">
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-cyan-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About BrightSmile Dental</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Providing exceptional dental care to London families since 2010
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-cyan-100">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-cyan-100 rounded-full">
                  <Award className="h-8 w-8 text-cyan-600" />
                </div>
              </div>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">Expert Dentists</h3>
                <p className="text-gray-600">Highly qualified professionals with years of experience in advanced dental care</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-cyan-100">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-cyan-100 rounded-full">
                  <Heart className="h-8 w-8 text-cyan-600" />
                </div>
              </div>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">Caring Approach</h3>
                <p className="text-gray-600">Patient comfort and satisfaction are at the heart of everything we do</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-cyan-100">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-cyan-100 rounded-full">
                  <Users className="h-8 w-8 text-cyan-600" />
                </div>
              </div>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">Modern Technology</h3>
                <p className="text-gray-600">State-of-the-art equipment for precise, efficient, and comfortable treatments</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-4">
                  At BrightSmile Dental Clinic, we believe everyone deserves a healthy, confident smile. Since opening our doors in 2010, we've been committed to providing comprehensive dental care in a warm, welcoming environment.
                </p>
                <p className="text-gray-600 mb-4">
                  Our team of experienced dentists and hygienists combines the latest dental technology with a gentle, patient-centered approach. We take the time to understand your concerns and create personalized treatment plans that fit your needs.
                </p>
                <p className="text-gray-600">
                  From routine cleanings to advanced cosmetic procedures, we're here to help you achieve and maintain optimal oral health for life.
                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&fit=crop" 
                  alt="Dental Clinic" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Gallery Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental care tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {servicesGallery.map((service) => (
              <div 
                key={service.id} 
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group aspect-square"
              >
                <img 
                  src={service.url} 
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-cyan-900/0 group-hover:bg-cyan-900/20 transition-colors"></div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-cyan-100 rounded-lg mr-3">
                    <Smile className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold">General Dentistry</h3>
                </div>
                <p className="text-gray-600">Routine check-ups, cleanings, fillings, and preventive care for optimal oral health</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-cyan-100 rounded-lg mr-3">
                    <Star className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Cosmetic Dentistry</h3>
                </div>
                <p className="text-gray-600">Teeth whitening, veneers, and smile makeovers to enhance your confidence</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-cyan-100 rounded-lg mr-3">
                    <Heart className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Restorative Care</h3>
                </div>
                <p className="text-gray-600">Crowns, bridges, implants, and dentures to restore function and appearance</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-cyan-100 rounded-lg mr-3">
                    <Award className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Orthodontics</h3>
                </div>
                <p className="text-gray-600">Braces and clear aligners to straighten teeth and correct bite issues</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-cyan-100 rounded-lg mr-3">
                    <Users className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Family Dentistry</h3>
                </div>
                <p className="text-gray-600">Comprehensive dental care for patients of all ages, from children to seniors</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-cyan-100 rounded-lg mr-3">
                    <Clock className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Emergency Care</h3>
                </div>
                <p className="text-gray-600">Same-day appointments available for urgent dental issues and pain relief</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-b from-cyan-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">What Our Patients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real experiences from our valued patients
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="p-6 hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={review.image} 
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{review.name}</h4>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-cyan-400 text-cyan-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{review.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Book Your Appointment</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take the first step toward a healthier, brighter smile
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <Input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <Input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 20 1234 5678"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your dental needs or preferred appointment time..."
                      rows={5}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                    Request Appointment
                  </Button>
                </form>
              </Card>
            </div>
            
            {/* Contact Info & Map */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-cyan-100 rounded-lg">
                    <MapPin className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">456 Harley Street, Marylebone, London W1G 9AR</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-cyan-100 rounded-lg">
                    <Phone className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+44 20 7123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-cyan-100 rounded-lg">
                    <Mail className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">info@brightsmile-dental.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-cyan-100 rounded-lg">
                    <Clock className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Opening Hours</h4>
                    <p className="text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sat: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sun: Closed (Emergency only)</p>
                  </div>
                </div>
              </div>
              
              {/* Google Maps */}
              <div className="rounded-xl overflow-hidden shadow-lg h-80">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.687688806285!2d-0.14920268422970872!3d51.51823897963736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad554c335c1%3A0xda2164b934c67c1a!2sHarley%20Street%2C%20London!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BrightSmile Dental Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Smile className="h-6 w-6 text-cyan-600" />
                <span className="text-xl font-bold">BrightSmile Dental</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner in dental health, providing comprehensive care with advanced technology and compassionate service.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-cyan-600 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-cyan-600 transition-colors">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-cyan-600 transition-colors">Services</a></li>
                <li><a href="#reviews" className="text-gray-400 hover:text-cyan-600 transition-colors">Reviews</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-cyan-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <p className="text-gray-400 mb-2">Follow us for dental health tips and updates!</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-cyan-600 transition-colors">
                  <div className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                    <Heart className="h-5 w-5" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BrightSmile Dental Clinic. All rights reserved. Your smile is our passion.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;