
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-20 pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Professional team meeting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-blue-900/80 to-green-900/90"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-in-left">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                HR Operations
              </span>
            </h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed animate-fade-in delay-300">
              Welcome to Edukom HR Solutions, your one-stop center for organizational HR solutions. 
              We specialize in optimizing your company's HR processes, improving people management, 
              and developing systems tailored to your unique needs.
            </p>
            
            <div className="space-y-4 mb-8 animate-fade-in delay-500">
              <div className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                <CheckCircle className="h-5 w-5 text-green-400 animate-bounce" />
                <span className="text-green-100">20+ Years of HR Expertise</span>
              </div>
              <div className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                <CheckCircle className="h-5 w-5 text-green-400 animate-bounce delay-100" />
                <span className="text-green-100">International Certifications</span>
              </div>
              <div className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                <CheckCircle className="h-5 w-5 text-green-400 animate-bounce delay-200" />
                <span className="text-green-100">Multi-Industry Experience</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-700">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white group transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white transform hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-sm">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in delay-300">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20 animate-float">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 transform hover:translate-x-2 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center animate-pulse">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Recruitment & Selection</h3>
                      <p className="text-sm text-gray-600">Finding the right talent</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 transform hover:translate-x-2 transition-transform duration-300 delay-100">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center animate-pulse delay-200">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Training & Development</h3>
                      <p className="text-sm text-gray-600">Empowering your workforce</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 transform hover:translate-x-2 transition-transform duration-300 delay-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center animate-pulse delay-400">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Performance Management</h3>
                      <p className="text-sm text-gray-600">Driving excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
