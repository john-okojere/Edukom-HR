import { Plus, Minus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "What industries do you serve?",
      answer: "We provide HR consulting services to a wide range of industries, including construction, healthcare, education, finance, security, real estate, aviation, manufacturing and government, among others."
    },
    {
      question: "What makes Edukom HR Solutions different from other HR consulting firms?",
      answer: "Our approach focuses on HR processes, people and systems. With over 20 years of experience, international certifications, and a diverse team of consultants, we bring a wealth of expertise across multiple sectors. We also prioritize personalized service, ensuring that every solution is tailored to the unique needs of your business."
    },
    {
      question: "How can I get started with Edukom HR Solutions?",
      answer: "Simply contact us via email or phone, and we will set up a consultation to discuss your needs and how we can assist you."
    },
    {
      question: "Can you help with setting up a new HR department for my organization?",
      answer: "Yes, we specialize in building new HR departments and ensuring they are structured to meet the unique needs of your organization."
    },
    {
      question: "What types of organizations can benefit from your HR consulting services?",
      answer: "We work with organizations of all sizes across a range of sectors, including construction, healthcare, education, finance, security, aviation, manufacturing, government, real estate, and more. Whether you're a small business or a large corporation, we tailor our services to meet your specific needs."
    },
    {
      question: "How do I know which HR services I need?",
      answer: "At Edukom HR Solutions, we start by understanding the unique challenges and goals of your organization. We then conduct an in-depth assessment and gap analysis enabling us to recommend the HR services that will best address your needs, whether it's recruitment, employee relations, training, performance management, or other solutions."
    },
    {
      question: "Do you offer ongoing support after implementing HR solutions?",
      answer: "Yes! We provide ongoing support to ensure that the HR solutions we implement continue to function effectively. Our team is available for follow-up consultations, retainerships and to make adjustments as needed."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our HR solutions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
              <Collapsible 
                open={openItems.includes(index)}
                onOpenChange={() => toggleItem(index)}
              >
                <CollapsibleTrigger className="w-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 text-left">
                        {faq.question}
                      </h3>
                      <div className="ml-4 flex-shrink-0">
                        {openItems.includes(index) ? (
                          <Minus className="h-5 w-5 text-blue-600" />
                        ) : (
                          <Plus className="h-5 w-5 text-blue-600" />
                        )}
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <CardContent className="px-6 pb-6 pt-0">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
