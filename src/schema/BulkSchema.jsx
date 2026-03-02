import { Helmet } from "react-helmet";

function BulkSMSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Bulk SMS Service",
            "image": "https://voip-dialing.vercel.app/images/bulk-sms.png",
            "description": "Reliable and scalable Bulk SMS service integrated with VoIP and Cloud PBX for businesses.",
            "offers": {
              "@type": "Offer",
              "url": "https://voip-dialing.vercel.app/products/bulk-sms",
              "priceCurrency": "USD",
              "price": "9.99",
              "availability": "https://schema.org/InStock"
            }
          }
        `}
      </script>
    </Helmet>
  );
}

export default BulkSMSchema;
