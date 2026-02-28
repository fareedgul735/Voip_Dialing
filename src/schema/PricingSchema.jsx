import { Helmet } from "react-helmet";

function PricingSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Business VoIP Plans",
            "image": "https://voip-dialing.vercel.app/images/pricing.png",
            "description": "Affordable Business VoIP pricing plans with Cloud PBX, unlimited calling and team messaging.",
            "offers": {
              "@type": "Offer",
              "url": "https://voip-dialing.vercel.app/pricing",
              "priceCurrency": "USD",
              "price": "29.99",
              "availability": "https://schema.org/InStock"
            }
          }
        `}
      </script>
    </Helmet>
  );
}

export default PricingSchema;
