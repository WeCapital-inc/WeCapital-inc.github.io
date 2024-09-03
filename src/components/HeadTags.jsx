export default function HeadTags() {
  return (
    <head>
      <script type="application/ld+json">
        {JSON.stringify({
          "@graph": [
            {
              "@context": "https://schema.org/",
              "@type": "WebSite",
              name: "WeCapital技術ブログ",
              alternateName: "WeCapital技術ブログ",
              url: "https://wecapital-inc.github.io",
            },
          ],
        })}
      </script>
    </head>
  );
}
