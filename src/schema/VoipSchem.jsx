import { Helmet } from "react-helmet";

function VoipLinesSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "VoIP Lines for Business",
          "image": "https://voip-dialing.vercel.app/images/voip-lines.png",
          "description": "Secure and scalable VoIP lines for businesses with HD calling, global coverage and seamless Cloud PBX integration.",
          "brand": {
            "@type": "Brand",
            "name": "Voip Dialing ORC"
          },
          "offers": {
            "@type": "Offer",
            "url": "https://voip-dialing.vercel.app/products/voip-lines",
            "priceCurrency": "USD",
            "price": "19.99",
            "availability": "https://schema.org/InStock"
          }
        }
        `}
      </script>
    </Helmet>
  );
}

export default VoipLinesSchema;
