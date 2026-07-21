// src/pages/LocationsIndex.jsx
//
// Hub page at /driving-instructors listing every borough page.
// Internal links from here (and to here from your homepage footer/nav)
// are what let Google discover and crawl the individual location pages,
// so don't skip wiring this into your main navigation.

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import locations from "../data/locations";

const SITE_URL = "https://www.instructorspot.co.uk";

export default function LocationsIndex() {
  return (
    <>
      <Helmet>
        <title>Driving Instructors Across Greater Manchester | InstructorSpot</title>
        <meta
          name="description"
          content="Find verified driving instructors in your area. InstructorSpot covers every borough in Greater Manchester — Manchester, Salford, Stockport, Bolton, Bury, Oldham, Rochdale, Tameside, Trafford and Wigan."
        />
        <link rel="canonical" href={`${SITE_URL}/driving-instructors`} />
      </Helmet>

      <main className="locations-index">
        <h1>Driving Instructors Across Greater Manchester</h1>
        <p>
          Choose your borough to see local instructors, nearest test centres
          and areas covered.
        </p>
        <ul className="locations-grid">
          {locations.map((loc) => (
            <li key={loc.slug}>
              <Link to={`/driving-instructors/${loc.slug}`}>{loc.name}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}