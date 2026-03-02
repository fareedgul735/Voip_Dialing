import { Helmet } from "react-helmet";

function CloudPBXSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Cloud PBX Solutions",
          "image": "https://voip-dialing.vercel.app/images/cloud-pbx.png",
          "description": "Advanced Cloud PBX solutions for businesses with call routing, IVR, voicemail, team messaging and enterprise-grade reliability.",
          "brand": {
            "@type": "Brand",
            "name": "Voip Dialing ORC"
          },
          "offers": {
            "@type": "Offer",
            "url": "https://voip-dialing.vercel.app/products/cloud-pbx",
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

export default CloudPBXSchema;
