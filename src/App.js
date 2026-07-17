import { useState } from "react";
import { MapPin, Star, Search, Shield, ChevronRight, Car, Users, CheckCircle, Phone, MessageCircle } from "lucide-react";

const AMBER = "#E8A800";
const RED = "#CC0000";
const DARK = "#111111";
const GREY = "#6B7280";
const LIGHTBG = "#F7F4EE";
const TSK_PHONE = "07436622000";
const TSK_WHATSAPP = `https://wa.me/447436622000`;

function Logo({ size = "md", light = false }) {
  const scale = size === "sm" ? 0.6 : size === "lg" ? 1.4 : 1;
  const textColor = light ? "white" : DARK;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 * scale }}>
      <svg width={44 * scale} height={56 * scale} viewBox="0 0 44 56">
        <path d="M22 0 C10 0 0 10 0 22 C0 36 22 56 22 56 C22 56 44 36 44 22 C44 10 34 0 22 0Z" fill={AMBER} />
        <rect x="8" y="8" width="28" height="28" rx="4" fill={RED} />
        <rect x="11" y="11" width="22" height="22" rx="3" fill={light ? "#1a1a24" : LIGHTBG} />
        <text x="22" y="29" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="16" fontWeight="900" fill={RED}>L</text>
      </svg>
      <div>
        <div style={{ fontFamily: "Arial Black, sans-serif", fontWeight: 900, fontSize: 20 * scale, lineHeight: 1, color: textColor }}>
          Instructor<span style={{ color: AMBER }}>Spot</span><span style={{ color: RED, fontSize: 8 * scale, verticalAlign: "super" }}>●</span>
        </div>
        <div style={{ fontFamily: "Arial, sans-serif", fontSize: 8 * scale, letterSpacing: 2, color: light ? "rgba(255,255,255,0.5)" : GREY, marginTop: 1 }}>
          FIND YOUR DRIVING INSTRUCTOR
        </div>
      </div>
    </div>
  );
}

const INSTRUCTORS = [
  { id: 1, name: "TSK Driving School", area: "Timperley", distance: "0.8 mi", priceManual: 40, priceAuto: 45, rating: 4.9, reviews: 124, tags: ["Manual", "Automatic", "Intensive"], verified: true, featured: true, comingSoon: false },
  { id: 2, name: "Instructor Coming Soon", area: "Bolton", distance: "2.1 mi", priceManual: null, priceAuto: null, rating: null, reviews: null, tags: ["Manual"], verified: false, featured: false, comingSoon: true },
  { id: 3, name: "Instructor Coming Soon", area: "Salford", distance: "3.4 mi", priceManual: null, priceAuto: null, rating: null, reviews: null, tags: ["Manual"], verified: false, featured: false, comingSoon: true },
  { id: 4, name: "Instructor Coming Soon", area: "Stockport", distance: "4.2 mi", priceManual: null, priceAuto: null, rating: null, reviews: null, tags: ["Manual"], verified: false, featured: false, comingSoon: true },
  { id: 5, name: "Instructor Coming Soon", area: "Bury", distance: "5.1 mi", priceManual: null, priceAuto: null, rating: null, reviews: null, tags: ["Manual"], verified: false, featured: false, comingSoon: true },
  { id: 6, name: "Instructor Coming Soon", area: "Wigan", distance: "6.3 mi", priceManual: null, priceAuto: null, rating: null, reviews: null, tags: ["Manual"], verified: false, featured: false, comingSoon: true },
];

export default function App() {
  const [postcode, setPostcode] = useState("");
  const [searched, setSearched] = useState(false);
  const [enquired, setEnquired] = useState({});
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [enquiryName, setEnquiryName] = useState("");
  const [enquiryPhone, setEnquiryPhone] = useState("");
  const [enquirySent, setEnquirySent] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", minHeight: "100vh", color: DARK }}>

      {/* NAV */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #eee", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Logo size="sm" />
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            <a href="#how" style={{ color: GREY, fontSize: 14, textDecoration: "none" }}>How it works</a>
            <a href="#instructors" style={{ color: GREY, fontSize: 14, textDecoration: "none" }}>Instructors</a>
            <button style={{ background: DARK, color: "#fff", border: "none", borderRadius: 8, padding: "9px 18px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
              List your profile
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #111 0%, #1e1e2e 100%)", padding: "70px 20px 60px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", background: AMBER, opacity: 0.06 }} />
        <div style={{ position: "absolute", bottom: -40, left: -40, width: 200, height: 200, borderRadius: "50%", background: RED, opacity: 0.08 }} />
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(232,168,0,0.12)", border: "1px solid rgba(232,168,0,0.3)", borderRadius: 20, padding: "5px 12px", marginBottom: 24 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: AMBER }} />
            <span style={{ color: AMBER, fontSize: 12, letterSpacing: 1 }}>Greater Manchester's #1 Instructor Marketplace</span>
          </div>
          <h1 style={{ color: "#fff", fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900, fontFamily: "Arial Black, sans-serif", lineHeight: 1.05, maxWidth: 700, marginBottom: 16 }}>
            Compare local driving instructors — prices, ratings and distance,{" "}
            <span style={{ color: AMBER }}>all in one Spot.</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, maxWidth: 520, marginBottom: 36, lineHeight: 1.6 }}>
            Skip the big franchises. Find verified independent instructors near you and book directly — no middleman, no hidden fees.
          </p>
          <div style={{ display: "flex", gap: 10, maxWidth: 560, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 200, display: "flex", alignItems: "center", gap: 10, background: "#fff", borderRadius: 12, padding: "14px 16px" }}>
              <MapPin size={18} color={GREY} />
              <input
                value={postcode}
                onChange={e => setPostcode(e.target.value.toUpperCase())}
                placeholder="Enter your postcode..."
                style={{ border: "none", outline: "none", fontSize: 15, fontFamily: "monospace", width: "100%", background: "transparent", color: DARK }}
              />
            </div>
            <button
              onClick={() => setSearched(true)}
              style={{ background: AMBER, color: DARK, border: "none", borderRadius: 12, padding: "14px 28px", fontSize: 15, fontWeight: 900, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}
            >
              <Search size={18} /> Find Instructors
            </button>
          </div>
          <div style={{ display: "flex", gap: 28, marginTop: 32, flexWrap: "wrap" }}>
            {[
              { icon: Shield, label: "DVSA Verified", sub: "All instructors badge-checked" },
              { icon: Users, label: "200+ Instructors", sub: "Across Greater Manchester" },
              { icon: Star, label: "4.8 Avg Rating", sub: "From 2,400+ student reviews" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(232,168,0,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={16} color={AMBER} />
                </div>
                <div>
                  <div style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>{label}</div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUCTOR CARDS */}
      <section id="instructors" style={{ background: LIGHTBG, padding: "48px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 28, flexWrap: "wrap", gap: 10 }}>
            <div>
              <h2 style={{ fontFamily: "Arial Black, sans-serif", fontSize: 26, fontWeight: 900, margin: 0 }}>
                {searched && postcode ? `Instructors near ${postcode}` : "Instructors near you"}
              </h2>
              <p style={{ color: GREY, fontSize: 14, margin: "4px 0 0" }}>{INSTRUCTORS.length} results · sorted by distance</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: 16 }}>
            {INSTRUCTORS.map(inst => (
              <div key={inst.id} style={{
                background: inst.comingSoon ? "#fafafa" : "#fff",
                borderRadius: 16,
                border: inst.featured ? `2px solid ${AMBER}` : "1px solid #e5e7eb",
                padding: 20,
                display: "flex",
                flexDirection: "column",
                position: "relative",
                opacity: inst.comingSoon ? 0.6 : 1,
                boxShadow: inst.featured ? `0 4px 24px rgba(232,168,0,0.12)` : "0 1px 4px rgba(0,0,0,0.04)"
              }}>
                {inst.featured && (
                  <div style={{ position: "absolute", top: -1, right: 16, background: AMBER, color: DARK, fontSize: 10, fontWeight: 900, padding: "3px 10px", borderRadius: "0 0 6px 6px", letterSpacing: 1 }}>★ FEATURED</div>
                )}
                {inst.comingSoon && (
                  <div style={{ position: "absolute", top: -1, right: 16, background: GREY, color: "#fff", fontSize: 10, fontWeight: 900, padding: "3px 10px", borderRadius: "0 0 6px 6px", letterSpacing: 1 }}>COMING SOON</div>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: inst.featured ? AMBER : "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Car size={20} color={inst.featured ? DARK : GREY} />
                  </div>
                  {!inst.comingSoon && (
                    <div style={{ display: "flex", alignItems: "center", gap: 4, background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 20, padding: "3px 10px" }}>
                      <Star size={12} fill={AMBER} color={AMBER} />
                      <span style={{ fontSize: 13, fontWeight: 700 }}>{inst.rating}</span>
                      <span style={{ fontSize: 11, color: GREY }}>({inst.reviews})</span>
                    </div>
                  )}
                </div>

                <div style={{ fontFamily: "Arial Black, sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{inst.name}</div>

                <div style={{ display: "flex", alignItems: "center", gap: 5, color: GREY, fontSize: 13, marginBottom: 12 }}>
                  <MapPin size={13} color={RED} />
                  <span>{inst.area}</span>
                  <span style={{ color: "#d1d5db" }}>·</span>
                  <span style={{ color: RED, fontWeight: 600 }}>{inst.distance}</span>
                  {inst.verified && (<><span style={{ color: "#d1d5db" }}>·</span><CheckCircle size={13} color="#10b981" /><span style={{ color: "#10b981", fontSize: 11 }}>Verified</span></>)}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {inst.tags.map(t => (<span key={t} style={{ background: LIGHTBG, color: DARK, fontSize: 11, padding: "4px 10px", borderRadius: 20, border: "1px solid #e5e7eb" }}>{t}</span>))}
                </div>

                <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 14, borderTop: "1px solid #f3f4f6" }}>
                  {inst.comingSoon ? (
                    <span style={{ color: GREY, fontSize: 13 }}>Join the waitlist</span>
                  ) : (
                    <div>
                      <div style={{ fontSize: 12, color: GREY }}>
                        <span style={{ fontFamily: "Arial Black, sans-serif", fontSize: 18, fontWeight: 900, color: AMBER }}>£{inst.priceManual}</span>
                        <span style={{ color: GREY, fontSize: 11 }}>/hr manual</span>
                      </div>
                      <div style={{ fontSize: 12, color: GREY }}>
                        <span style={{ fontFamily: "Arial Black, sans-serif", fontSize: 18, fontWeight: 900, color: AMBER }}>£{inst.priceAuto}</span>
                        <span style={{ color: GREY, fontSize: 11 }}>/hr automatic</span>
                      </div>
                    </div>
                  )}

                  {!inst.comingSoon && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      
                        href={TSK_WHATSAPP}
                        target="_blank"
                        rel="noreferrer"
                        style={{ background: "#25D366", color: "#fff", border: "none", borderRadius: 8, padding: "8px 14px", fontSize: 12, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 5, textDecoration: "none" }}
                      >
                        <MessageCircle size={13} /> WhatsApp
                      </a>
                      
                        href={`tel:${TSK_PHONE}`}
                        style={{ background: DARK, color: "#fff", border: "none", borderRadius: 8, padding: "8px 14px", fontSize: 12, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 5, textDecoration: "none" }}
                      >
                        <Phone size={13} /> Call us
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ padding: "56px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <h2 style={{ fontFamily: "Arial Black, sans-serif", fontSize: 28, fontWeight: 900, margin: "0 0 8px" }}>How InstructorSpot works</h2>
            <p style={{ color: GREY, fontSize: 15 }}>Find the right instructor in under 2 minutes</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32 }}>
            {[
              { step: "01", title: "Enter your postcode", body: "Tell us where you are and we instantly show you every verified instructor nearby." },
              { step: "02", title: "Compare side by side", body: "See prices, ratings, distance and specialities all in one place — no clicking around." },
              { step: "03", title: "Enquire directly", body: "Send your details straight to the instructor. No middleman, no commission, no fuss." },
              { step: "04", title: "Start your lessons", body: "Your instructor gets in touch and you book your first lesson on your terms." },
            ].map(s => (
              <div key={s.step}>
                <div style={{ fontFamily: "Arial Black, sans-serif", fontSize: 36, fontWeight: 900, color: AMBER, marginBottom: 10 }}>{s.step}</div>
                <div style={{ fontFamily: "Arial Black, sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{s.title}</div>
                <p style={{ color: GREY, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUCTOR CTA */}
      <section style={{ background: DARK, padding: "56px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
          <div>
            <h2 style={{ fontFamily: "Arial Black, sans-serif", color: "#fff", fontSize: 26, fontWeight: 900, margin: "0 0 8px" }}>Are you a driving instructor?</h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, margin: 0, maxWidth: 480 }}>
              Get found by learners across Greater Manchester without paying AA or BSM franchise fees. List your profile from £15/month.
            </p>
          </div>
          <button style={{ background: AMBER, color: DARK, border: "none", borderRadius: 12, padding: "16px 32px", fontSize: 15, fontWeight: 900, cursor: "pointer", whiteSpace: "nowrap" }}>
            List your profile →
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0a0a0a", padding: "28px 20px", textAlign: "center" }}>
        <Logo size="sm" light />
        <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 11, marginTop: 12, letterSpacing: 1 }}>
          © 2026 INSTRUCTORSPOT · GREATER MANCHESTER · ALL RIGHTS RESERVED
        </p>
        <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 11, marginTop: 4 }}>
          hello@instructorspot.co.uk · 07436622000
        </p>
      </footer>
    </div>
  );
}