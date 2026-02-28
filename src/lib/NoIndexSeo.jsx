import { Helmet } from "react-helmet";

function NoIndexSEO({ title, url }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="robots" content="noindex, nofollow" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}

export default NoIndexSEO;
