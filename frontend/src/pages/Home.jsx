import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Heart, Star, MapPin, Phone, Mail, Clock, Award, Users, PawPrint } from 'lucide-react';
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
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Amazing service! The staff really cares about the pets. My golden retriever loves visiting PawfectPet!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 5,
      comment: 'Best pet shop in London! Great selection and knowledgeable staff. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'Emma Williams',
      rating: 5,
      comment: 'My cats are so happy with the products I bought here. The team helped me choose the perfect food and toys!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    }
  ];

  // Pet gallery images
  const petGallery = [
    { id: 1, url: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg', alt: 'Happy Golden Retriever' },
    { id: 2, url: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg', alt: 'Cute White Kitten' },
    { id: 3, url: 'https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg', alt: 'Playful Kittens' },
    { id: 4, url: 'https://images.pexels.com/photos/6845638/pexels-photo-6845638.jpeg', alt: 'Adorable Rabbit' },
    { id: 5, url: 'https://images.pexels.com/photos/6618592/pexels-photo-6618592.jpeg', alt: 'White Bunny' },
    { id: 6, url: 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg', alt: 'Green Parrot' },
    { id: 7, url: 'https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg', alt: 'Beautiful Bird' },
    { id: 8, url: 'https://images.unsplash.com/photo-1559190394-df5a28aab5c5', alt: 'Happy Pet' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only for now - could be connected to backend later
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We\'ll get back to you soon!',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <PawPrint className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold text-gray-800">PawfectPet</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">About</a>
            <a href="#gallery" className="text-gray-700 hover:text-amber-600 transition-colors">Gallery</a>
            <a href="#reviews" className="text-gray-700 hover:text-amber-600 transition-colors">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1559190394-df5a28aab5c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxoYXBweSUyMHBldHN8ZW58MHx8fHwxNzY2NjcyNjE2fDA&ixlib=rb-4.1.0&q=85"
            alt="Happy Pet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to PawfectPet
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Your trusted partner in pet care, offering the best products and services for your furry friends
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20">
              <a href="#gallery">View Gallery</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About PawfectPet</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Caring for pets with love and dedication since 2015
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-amber-100">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-amber-100 rounded-full">
                  <Heart className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">Expert Care</h3>
                <p className="text-gray-600">Our team of experienced professionals provides the best care for your pets</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-amber-100">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-amber-100 rounded-full">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
                <p className="text-gray-600">Premium selection of food, toys, and accessories for all types of pets</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-amber-100">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-amber-100 rounded-full">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">Trusted by Thousands</h3>
                <p className="text-gray-600">Join our community of happy pet parents across London</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h3>
                <p className="text-gray-600 mb-4">
                  Founded in 2015, PawfectPet started with a simple mission: to provide the best care and products for pets in London. What began as a small local shop has grown into a trusted name in pet care.
                </p>
                <p className="text-gray-600 mb-4">
                  We believe every pet deserves love, care, and attention. Our dedicated team works tirelessly to ensure your furry, feathered, or scaled friends receive nothing but the best.
                </p>
                <p className="text-gray-600">
                  Whether you're looking for quality food, engaging toys, or expert advice, PawfectPet is here for you and your beloved companions.
                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&fit=crop" 
                  alt="Pet Shop" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Happy Pets</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet some of the adorable pets we've had the pleasure of serving
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {petGallery.map((pet) => (
              <div 
                key={pet.id} 
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group aspect-square"
              >
                <img 
                  src={pet.url} 
                  alt={pet.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our happy customers
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
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
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
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
            
            {/* Contact Info & Map */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-amber-100 rounded-lg">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">123 Pet Street, Camden, London NW1 8AB</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-amber-100 rounded-lg">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+44 20 7946 0958</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-amber-100 rounded-lg">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">hello@pawfectpet.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-amber-100 rounded-lg">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Opening Hours</h4>
                    <p className="text-gray-600">Mon-Fri: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sat-Sun: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              
              {/* Google Maps */}
              <div className="rounded-xl overflow-hidden shadow-lg h-80">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2278958879326!2d-0.14472368422923!3d51.539516179642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b31c8a8e8e1%3A0x7c9b7b3f8e8e8e8e!2sCamden%20Town%2C%20London!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PawfectPet Location"
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
                <PawPrint className="h-6 w-6 text-amber-600" />
                <span className="text-xl font-bold">PawfectPet</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner in pet care, offering the best products and services for your furry friends.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-amber-600 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-amber-600 transition-colors">About Us</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-amber-600 transition-colors">Gallery</a></li>
                <li><a href="#reviews" className="text-gray-400 hover:text-amber-600 transition-colors">Reviews</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-amber-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <p className="text-gray-400 mb-2">Follow us on social media for pet care tips and updates!</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                  <div className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                    <Heart className="h-5 w-5" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PawfectPet. All rights reserved. Made with love for pets.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;