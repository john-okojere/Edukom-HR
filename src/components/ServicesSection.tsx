
import { Users, UserPlus, BookOpen, Building2, BarChart3, Search, Target, Briefcase, Handshake, HeartHandshake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "Recruitment and Selection",
      description: "Identifying and hiring the right talent for your organization.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: UserPlus,
      title: "Onboarding of New Employees",
      description: "Ensuring a smooth integration of new hires into your company culture.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BookOpen,
      title: "Training and Development",
      description: "Developing and improving employee skills to drive organizational growth.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Building2,
      title: "Organizational Structuring",
      description: "Crafting efficient, scalable structures for your business.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: BarChart3,
      title: "Workforce Planning",
      description: "Strategizing the right workforce to meet future needs.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Search,
      title: "Gaps Analysis",
      description: "Identifying and addressing skill and resource gaps within your organization.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Target,
      title: "Performance Improvement Programs",
      description: "Implementing strategies to enhance employee performance.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Briefcase,
      title: "Setting Up HR Department",
      description: "Assisting you in building an effective HR department from the ground up.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Handshake,
      title: "Outsource Function Services",
      description: "Providing HR support and services on a contractual basis.",
      color: "from-slate-500 to-gray-500"
    },
    {
      icon: HeartHandshake,
      title: "Employee Relations Management",
      description: "Ensuring positive employee relations for a productive work environment.",
      color: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services We Offer</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide a wide range of HR consulting services, designed to help organizations optimize their human capital.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
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
