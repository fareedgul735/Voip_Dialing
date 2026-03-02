import { Helmet } from "react-helmet";

function EquipmentSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "VoIP Equipment & Accessories",
          "image": "https://voip-dialing.vercel.app/images/equipment.png",
          "description": "Professional VoIP equipment including IP phones, headsets and networking accessories fully compatible with Cloud PBX systems.",
          "brand": {
            "@type": "Brand",
            "name": "Voip Dialing ORC"
          },
          "offers": {
            "@type": "Offer",
            "url": "https://voip-dialing.vercel.app/products/equipment",
            "priceCurrency": "USD",
            "price": "49.99",
            "availability": "https://schema.org/InStock"
          }
        }
        `}
      </script>
    </Helmet>
  );
}

export default EquipmentSchema;
