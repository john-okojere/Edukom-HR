
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, MapPin, GraduationCap } from "lucide-react";

const TeamSection = () => {
  const principalPartner = {
    name: "Ope Komolafe",
    title: "Principal Partner and Executive Director",
    company: "Edukom Learning and Edukom HR Solutions",
    experience: "20+ years",
    bio: "Ope Komolafe is an internationally certified Human Resources professional with over 20 years of experience. She has worked in diverse sectors, including consulting, aviation, healthcare, education, and many more.",
    certifications: [
      "Global Professional in Human Resources (GPHR)",
      "Professional in Human Resources International (PHRi)",
      "HRCI Virginia, USA",
      "Full member of NITAD (MITD credential)",
      "CIPMN Professional Diploma (2011)"
    ],
    specialties: ["HR Consulting", "Coach", "Item Developer", "Subject Matter Expert"]
  };

  const faculty = [
    {
      name: "Ope Komolafe",
      title: "Principal Partner and Executive Director",
      company: "Edukom Learning and Edukom HR Solutions",
      specialty: "HR Strategy & Development"
    },
    {
      name: "Segun Lawal",
      title: "Consultant and Principal Partner",
      company: "Wisdom Scroll Consulting",
      specialty: "Business Consulting"
    },
    {
      name: "Tokunbo Fasoro",
      title: "Consultant and CEO",
      company: "Lioness by TF, UK",
      specialty: "International Business Strategy"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Principal Partner & Profile</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
        </div>

        {/* Principal Partner Profile */}
        <Card className="mb-16 overflow-hidden border-0 shadow-2xl">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-3 gap-0">
              <div className="lg:col-span-1 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl font-bold">OK</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{principalPartner.name}</h3>
                  <p className="text-blue-100 text-center mb-4">{principalPartner.title}</p>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {principalPartner.experience} Experience
                  </Badge>
                </div>
              </div>
              
              <div className="lg:col-span-2 p-8">
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-blue-600" />
                    Professional Background
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {principalPartner.bio}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Ope has consulted for a variety of industries such as construction, healthcare, manufacturing, government, finance, and religious organizations.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
                    Certifications & Credentials
                  </h4>
                  <div className="space-y-2">
                    {principalPartner.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {principalPartner.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="border-blue-600 text-blue-600">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Faculty Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Faculty</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {faculty.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-medium mb-1">{member.title}</p>
                <p className="text-gray-600 text-sm mb-3">{member.company}</p>
                <Badge variant="outline" className="border-gray-300 text-gray-600">
                  {member.specialty}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
