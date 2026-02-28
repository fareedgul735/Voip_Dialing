import { Helmet } from "react-helmet";

function FAQSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Business VoIP?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Business VoIP is a cloud-based phone system that allows companies to make and receive calls over the internet."
                }
              },
              {
                "@type": "Question",
                "name": "How much does Cloud PBX cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pricing for Cloud PBX depends on your chosen plan, number of users, and additional features. Check our pricing page for details."
                }
              }
            ]
          }
        `}
      </script>
    </Helmet>
  );
}

export default FAQSchema;
