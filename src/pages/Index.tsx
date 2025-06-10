
import { Mail, Phone, MapPin, Users, Target, Eye, Heart, CheckCircle, Award, BookOpen, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 animate-fade-in">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-2 rounded-lg transform hover:scale-110 transition-transform duration-300">
                <Users className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold text-gray-900">Edukom HR Solutions</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-all duration-300 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-all duration-300 relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-all duration-300 relative group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#team" className="text-gray-700 hover:text-green-600 transition-all duration-300 relative group">
                Team
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-all duration-300 relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="African business professionals collaborating" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-in-up">Our Story & Purpose</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-8 animate-scale-in"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in delay-300">
              <p className="text-lg text-gray-700 leading-relaxed mb-6 animate-slide-in-left">
                At Edukom HR Solutions, we believe that great businesses are built by great people. For over two decades, we've been helping organizations create workplaces where people thrive, teams excel, and businesses grow sustainably.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed animate-slide-in-left delay-200">
                Our approach is simple yet effective: we focus on understanding your unique challenges and crafting people-centered solutions that deliver real, measurable results for your organization.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-fade-in delay-500">
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-green-50 border-green-200">
                <CardContent className="p-0">
                  <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">20+ Years</h3>
                  <p className="text-sm text-gray-600">Of Excellence</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50 border-blue-200">
                <CardContent className="p-0">
                  <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Diverse</h3>
                  <p className="text-sm text-gray-600">Industry Experience</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Vision, Mission & Values */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/8 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/8 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Vision */}
            <div className="text-center animate-fade-in delay-200 transform hover:scale-105 transition-transform duration-500">
              <Eye className="h-16 w-16 mx-auto mb-6 text-green-200" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-green-100 leading-relaxed">
                To become the leading provider of people-focused business solutions in Nigeria, empowering organizations to unlock their human potential and achieve lasting success.
              </p>
            </div>
            
            {/* Mission */}
            <div className="text-center animate-fade-in delay-400 transform hover:scale-105 transition-transform duration-500">
              <Target className="h-16 w-16 mx-auto mb-6 text-blue-200" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed">
                To deliver practical, effective people solutions that help organizations build stronger teams, create better workplaces, and achieve sustainable growth through their most valuable asset - their people.
              </p>
            </div>
            
            {/* Values */}
            <div className="text-center animate-fade-in delay-600 transform hover:scale-105 transition-transform duration-500">
              <Heart className="h-16 w-16 mx-auto mb-6 text-green-200" />
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <div className="space-y-3 text-green-100">
                <div className="flex items-center justify-center space-x-2 transform hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-4 w-4" />
                  <span>Integrity in Everything</span>
                </div>
                <div className="flex items-center justify-center space-x-2 transform hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-4 w-4" />
                  <span>People-First Approach</span>
                </div>
                <div className="flex items-center justify-center space-x-2 transform hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-4 w-4" />
                  <span>Excellence & Quality</span>
                </div>
                <div className="flex items-center justify-center space-x-2 transform hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-4 w-4" />
                  <span>Collaborative Partnership</span>
                </div>
                <div className="flex items-center justify-center space-x-2 transform hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-4 w-4" />
                  <span>Continuous Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Contact Section */}
      <ContactSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-2 rounded-lg transform hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6" />
                </div>
                <span className="text-xl font-bold">Edukom HR Solutions</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for people-focused business solutions.
              </p>
            </div>
            <div className="animate-fade-in delay-200">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-2">Home</a>
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-2">About</a>
                <a href="#services" className="block text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-2">Services</a>
                <a href="#team" className="block text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-2">Team</a>
              </div>
            </div>
            <div className="animate-fade-in delay-400">
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2 transform hover:translate-x-2 transition-transform duration-300">
                  <Phone className="h-4 w-4 text-green-400" />
                  <span>+2348033310626</span>
                </div>
                <div className="flex items-center space-x-2 transform hover:translate-x-2 transition-transform duration-300">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span>info@edukom.ng</span>
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400 animate-fade-in delay-600">
            <p>&copy; 2024 Edukom HR Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
