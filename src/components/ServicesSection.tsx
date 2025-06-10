
import { Users, UserPlus, BookOpen, Building2, BarChart3, Search, Target, Briefcase, Handshake, HeartHandshake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "Talent Acquisition & Selection",
      description: "Finding and attracting the right people who fit your company culture and values.",
      color: "from-green-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: UserPlus,
      title: "New Employee Integration",
      description: "Welcoming new team members and helping them thrive from day one.",
      color: "from-blue-500 to-green-500",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: BookOpen,
      title: "Professional Development",
      description: "Investing in your people's growth to build a stronger, more capable workforce.",
      color: "from-green-600 to-blue-600",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Building2,
      title: "Organizational Design",
      description: "Building clear, effective structures that support your business goals.",
      color: "from-blue-600 to-green-600",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: BarChart3,
      title: "Strategic Workforce Planning",
      description: "Planning for the future by understanding your people needs and goals.",
      color: "from-green-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Search,
      title: "Skills & Capability Assessment",
      description: "Understanding where your team excels and where there's room for growth.",
      color: "from-blue-500 to-green-500",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Target,
      title: "Performance Enhancement",
      description: "Supporting your team to achieve their best work and reach their potential.",
      color: "from-green-600 to-blue-600",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Briefcase,
      title: "HR Department Setup",
      description: "Building your HR foundation with the right people, processes, and practices.",
      color: "from-blue-600 to-green-600",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Handshake,
      title: "HR Partnership Services",
      description: "Extending your team with experienced HR professionals who understand your business.",
      color: "from-green-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: HeartHandshake,
      title: "Workplace Culture & Relations",
      description: "Creating positive, inclusive environments where everyone can do their best work.",
      color: "from-blue-500 to-green-500",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-green-300/8 to-blue-300/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-300/8 to-green-300/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-in-up">How We Support Your Business</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-8 animate-scale-in"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in delay-300">
            We partner with organizations to build stronger teams, improve workplace culture, and achieve sustainable business growth through people-focused solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className={`absolute top-4 left-4 w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-gray-900 group-hover:text-green-700 transition-colors duration-300">
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
