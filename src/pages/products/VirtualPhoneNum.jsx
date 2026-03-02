import { Helmet } from "react-helmet";

function PhoneNumbersSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Virtual Phone Numbers",
          "image": "https://voip-dialing.vercel.app/images/phone-numbers.png",
          "description": "Local and international virtual phone numbers for businesses with instant activation and Cloud PBX compatibility.",
          "brand": {
            "@type": "Brand",
            "name": "Voip Dialing ORC"
          },
          "offers": {
            "@type": "Offer",
            "url": "https://voip-dialing.vercel.app/products/phone-numbers",
            "priceCurrency": "USD",
            "price": "4.99",
            "availability": "https://schema.org/InStock"
          }
        }
        `}
      </script>
    </Helmet>
  );
}

export default PhoneNumbersSchema;
