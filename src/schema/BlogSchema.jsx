import { Helmet } from "react-helmet";

function BlogSchema({ title, description, url, author, datePublished, image }) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "${title}",
            "description": "${description}",
            "url": "${url}",
            "author": {
              "@type": "Person",
              "name": "${author}"
            },
            "datePublished": "${datePublished}",
            "image": "${image}"
          }
        `}
      </script>
    </Helmet>
  );
}

export default BlogSchema;
