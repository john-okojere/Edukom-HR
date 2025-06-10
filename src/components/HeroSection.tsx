
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-20 pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Professional African American business team collaboration" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/85 via-blue-800/75 to-green-800/85"></div>
      </div>

      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-gradient-to-r from-green-300/15 to-blue-300/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-4 -left-4 w-96 h-96 bg-gradient-to-r from-blue-300/15 to-green-300/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-in-left">
              Empowering Your{" "}
              <span className="bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                People & Business
              </span>
            </h1>
            <p className="text-xl text-green-50 mb-8 leading-relaxed animate-fade-in delay-300">
              Welcome to Edukom HR Solutions, your trusted partner for organizational excellence. 
              We specialize in building stronger teams, improving workplace culture, 
              and developing people-focused solutions that drive real business results.
            </p>
            
            <div className="space-y-4 mb-8 animate-fade-in delay-500">
              <div className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="text-green-50">Two Decades of People Excellence</span>
              </div>
              <div className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="text-green-50">Globally Recognized Expertise</span>
              </div>
              <div className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="text-green-50">Proven Results Across Industries</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-700">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white group transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Partner With Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-green-300 text-green-300 hover:bg-green-300 hover:text-white transform hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-sm">
                Discover More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in delay-300">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 transform hover:translate-x-2 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Talent Acquisition</h3>
                      <p className="text-sm text-gray-600">Finding the perfect fit for your team</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 transform hover:translate-x-2 transition-transform duration-300 delay-100">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">People Development</h3>
                      <p className="text-sm text-gray-600">Growing your team's potential</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 transform hover:translate-x-2 transition-transform duration-300 delay-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Workplace Excellence</h3>
                      <p className="text-sm text-gray-600">Creating thriving work environments</p>
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
