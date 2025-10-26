import { HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "How are international rates determined?",
    answer: "International rates are based on carrier costs, network quality, and destination. We negotiate the best rates possible to offer competitive pricing."
  },
  {
    question: "Do rates change over time?",
    answer: "Yes, rates may change based on market conditions and carrier agreements. We always display the current rates before you place a call."
  },
  {
    question: "Are there any hidden fees?",
    answer: "No, we believe in transparent pricing. The rate you see is exactly what you'll pay, with no additional connection fees or surcharges."
  },
  {
    question: "How is call duration billed?",
    answer: "Calls are billed by the minute, with partial minutes rounded up to the next full minute for billing purposes."
  }
];

const FAQ = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <HelpCircle className="h-6 w-6 text-foreground" />
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {faqData.map((faq, index) => (
          <div key={index} className="space-y-2">
            <h3 className="font-semibold text-lg">{faq.question}</h3>
            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
