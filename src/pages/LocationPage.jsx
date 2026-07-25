// src/pages/LocationPage.jsx
//
// Reusable SEO landing page template, rendered once per borough via
// react-router at /driving-instructors/:slug
//
// Requires: react-router-dom (useParams, Link), react-helmet-async (Helmet)
//   npm install react-helmet-async
// and <HelmetProvider> wrapping your app root — see INTEGRATION.md.

import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import locations from "../data/locations";

const SITE_URL = "https://www.instructorspot.co.uk";
const ENQUIRY_PATH = "/#enquiry"; // update to match your actual enquiry form anchor/route

export default function LocationPage() {
  const { slug } = useParams();
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    return <Navigate to="/driving-instructors" replace />;
  }

  const canonical = `${SITE_URL}/driving-instructors/${location.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Driving Instructor Matching",
    provider: {
      "@type": "Organization",
      name: "InstructorSpot",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "City",
      name: location.name,
    },
    description: location.metaDescription,
  };

  const faqJsonLd = location.faqs && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{location.metaTitle}</title>
        <meta name="description" content={location.metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={location.metaTitle} />
        <meta property="og:description" content={location.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        {faqJsonLd && (
          <script type="application/ld+json">
            {JSON.stringify(faqJsonLd)}
          </script>
        )}
      </Helmet>

      <main className="location-page">
        <nav className="location-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link> {" / "}
          <Link to="/driving-instructors">Locations</Link> {" / "}
          <span>{location.name}</span>
        </nav>

        <h1>{location.heading}</h1>
        <p className="location-intro">{location.intro}</p>

        <a className="location-cta" href={ENQUIRY_PATH}>
          Find an instructor in {location.name}
        </a>

        <section className="location-areas">
          <h2>Areas we cover in {location.name}</h2>
          <ul>
            {location.areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </section>
        {location.services?.length > 0 && (
          <section className="location-services">
            <h2>Popular Lesson Types in {location.name}</h2>
            {location.services.map((s) => (
              <div className="location-service" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </section>
        )}

        {location.testCentres?.length > 0 && (
          <section className="location-test-centres">
            <h2>Nearest driving test centres</h2>
            <ul>
              {location.testCentres.map((tc) => (
                <li key={tc.name}>
                  {tc.name}
                  {tc.passRate ? ` — ${tc.passRate} pass rate (2024-25 DVSA data)` : ""}
                </li>
              ))}
            </ul>
          </section>
        )}

        {location.faqs?.length > 0 && (
          <section className="location-faqs">
            <h2>Frequently asked questions</h2>
            {location.faqs.map((f) => (
              <div className="location-faq" key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </section>
        )}

        <a className="location-cta" href={ENQUIRY_PATH}>
          Get matched with a {location.name} instructor
        </a>
      </main>
    </>
  );
}