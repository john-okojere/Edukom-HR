
import { Users, UserPlus, BookOpen, Building2, BarChart3, Search, Target, Briefcase, Handshake, HeartHandshake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "Recruitment and Selection",
      description: "Identifying and hiring the right talent for your organization.",
      color: "from-green-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: UserPlus,
      title: "Onboarding of New Employees",
      description: "Ensuring a smooth integration of new hires into your company culture.",
      color: "from-blue-500 to-green-500",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: BookOpen,
      title: "Training and Development",
      description: "Developing and improving employee skills to drive organizational growth.",
      color: "from-green-600 to-blue-600",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Building2,
      title: "Organizational Structuring",
      description: "Crafting efficient, scalable structures for your business.",
      color: "from-blue-600 to-green-600",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: BarChart3,
      title: "Workforce Planning",
      description: "Strategizing the right workforce to meet future needs.",
      color: "from-green-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Search,
      title: "Gaps Analysis",
      description: "Identifying and addressing skill and resource gaps within your organization.",
      color: "from-blue-500 to-green-500",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Target,
      title: "Performance Improvement Programs",
      description: "Implementing strategies to enhance employee performance.",
      color: "from-green-600 to-blue-600",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Briefcase,
      title: "Setting Up HR Department",
      description: "Assisting you in building an effective HR department from the ground up.",
      color: "from-blue-600 to-green-600",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Handshake,
      title: "Outsource Function Services",
      description: "Providing HR support and services on a contractual basis.",
      color: "from-green-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: HeartHandshake,
      title: "Employee Relations Management",
      description: "Ensuring positive employee relations for a productive work environment.",
      color: "from-blue-500 to-green-500",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-in-up">Services We Offer</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-8 animate-scale-in"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in delay-300">
            We provide a wide range of HR consulting services, designed to help organizations optimize their human capital.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg overflow-hidden bg-white/80 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className={`absolute top-4 left-4 w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
