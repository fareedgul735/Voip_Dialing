import { Helmet } from "react-helmet";

function HomeSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Voip Dialing ORC",
            "url": "https://voip-dialing.vercel.app",
            "logo": "https://voip-dialing.vercel.app/logo.png",
            "sameAs": [
              "https://www.facebook.com/yourpage",
              "https://www.linkedin.com/company/yourcompany",
              "https://twitter.com/yourhandle"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-800-123-4567",
              "contactType": "customer support",
              "areaServed": "US",
              "availableLanguage": "English"
            }
          }
        `}
      </script>
    </Helmet>
  );
}

export default HomeSchema;
