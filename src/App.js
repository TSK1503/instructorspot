import { useState } from "react";
import { Shield, Users, Star, Phone, Mail, CheckCircle, ChevronRight } from "lucide-react";

const AMBER = "#E8A800";
const RED = "#CC0000";
const DARK = "#111111";
const GREY = "#6B7280";
const LIGHTBG = "#F7F4EE";
const TSK_PHONE = "07436622000";
const TSK_EMAIL = "hello@instructorspot.co.uk";
const TSK_WHATSAPP = "https://wa.me/447436622000";

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

export default function App() {
  const [form, setForm] = useState({ name: "", phone: "", postcode: "", lesson_type: "", availability: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.phone.trim()) e.phone = "Please enter your phone number";
    if (!form.postcode.trim()) e.postcode = "Please enter your postcode";
    if (!form.lesson_type) e.lesson_type = "Please select lesson type";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) {
      setErrors(e2);
      return;
    }
    setSending(true);
    try {
      const response = await fetch("https://formspree.io/f/mdaqgkja", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          postcode: form.postcode.toUpperCase(),
          lesson_type: form.lesson_type,
          availability: form.availability || "Not specified",
        })
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Failed");
      }
    } catch (err) {
      alert("Something went wrong — please call us on 07436622000");
    }
    setSending(false);
  };

  const inputStyle = (field) => ({
    width: "100%",
    padding: "12px 16px",
    borderRadius: 10,
    border: `1.5px solid ${errors[field] ? RED : "#e5e7eb"}`,
    fontSize: 14,
    fontFamily: "Arial, sans-serif",
    outline: "none",
    boxSizing: "border-box",
    color: DARK,
    background: "#fff"
  });

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", minHeight: "100vh", color: DARK }}>

      {/* NAV */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #eee", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Logo size="sm" />
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <a href="#how" style={{ color: GREY, fontSize: 14, textDecoration: "none" }}>How it works</a>
            <a href={`tel:${TSK_PHONE}`} style={{ color: GREY, fontSize: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
              <Phone size={14} color={AMBER} /> {TSK_PHONE}
            </a>
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
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>

          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(232,168,0,0.12)", border: "1px solid rgba(232,168,0,0.3)", borderRadius: 20, padding: "5px 12px", marginBottom: 24 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: AMBER }} />
              <span style={{ color: AMBER, fontSize: 12, letterSpacing: 1 }}>Greater Manchester's #1 Instructor Marketplace</span>
            </div>
            <h1 style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, fontFamily: "Arial Black, sans-serif", lineHeight: 1.05, marginBottom: 16 }}>
              Find your perfect driving instructor,{" "}
              <span style={{ color: AMBER }}>matched to you.</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>
              Tell us what you're looking for and we'll match you with the right verified instructor in your area — completely free, no commitment.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {[
                { icon: Shield, label: "DVSA Verified", sub: "All instructors badge-checked" },
                { icon: Users, label: "Free Service", sub: "No fees for students" },
                { icon: Star, label: "4.8 Avg Rating", sub: "From student reviews" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(232,168,0,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
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

          <div style={{ background: "#fff", borderRadius: 20, padding: 32, boxShadow: "0 24px 64px rgba(0,0,0,0.3)" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <CheckCircle size={52} color="#10b981" style={{ margin: "0 auto 16px" }} />
                <h3 style={{ fontFamily: "Arial Black, sans-serif", fontSize: 22, margin: "0 0 8px" }}>We're on it! 🎉</h3>
                <p style={{ color: GREY, fontSize: 14, lineHeight: 1.6, margin: "0 0 20px" }}>
                  Thanks {form.name.split(" ")[0]}! We'll find the best instructor near <strong>{form.postcode.toUpperCase()}</strong> and be in touch within 2 hours.
                </p>
                <p style={{ color: GREY, fontSize: 13, margin: "0 0 24px" }}>Can't wait? Call or WhatsApp us now:</p>
                <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                  <a href={TSK_WHATSAPP} target="_blank" rel="noreferrer"
                    style={{ background: "#25D366", color: "#fff", borderRadius: 10, padding: "10px 20px", fontSize: 13, fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
                    WhatsApp Us
                  </a>
                  <a href={`tel:${TSK_PHONE}`}
                    style={{ background: DARK, color: "#fff", borderRadius: 10, padding: "10px 20px", fontSize: 13, fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
                    <Phone size={13} /> Call Us
                  </a>
                </div>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: "Arial Black, sans-serif", fontSize: 20, margin: "0 0 6px" }}>Find my instructor</h3>
                <p style={{ color: GREY, fontSize: 13, margin: "0 0 20px" }}>Free matching service — we'll be in touch within 2 hours</p>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div>
                    <input placeholder="Your full name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} style={inputStyle("name")} />
                    {errors.name && <p style={{ color: RED, fontSize: 11, margin: "4px 0 0" }}>{errors.name}</p>}
                  </div>
                  <div>
                    <input placeholder="Your phone number" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} style={inputStyle("phone")} />
                    {errors.phone && <p style={{ color: RED, fontSize: 11, margin: "4px 0 0" }}>{errors.phone}</p>}
                  </div>
                  <div>
                    <input placeholder="Your postcode" value={form.postcode} onChange={e => setForm(f => ({ ...f, postcode: e.target.value.toUpperCase() }))} style={inputStyle("postcode")} />
                    {errors.postcode && <p style={{ color: RED, fontSize: 11, margin: "4px 0 0" }}>{errors.postcode}</p>}
                  </div>
                  <div>
                    <select value={form.lesson_type} onChange={e => setForm(f => ({ ...f, lesson_type: e.target.value }))} style={{ ...inputStyle("lesson_type"), color: form.lesson_type ? DARK : GREY }}>
                      <option value="">Lesson type</option>
                      <option value="Manual">Manual</option>
                      <option value="Automatic">Automatic</option>
                      <option value="Either — not sure yet">Either — not sure yet</option>
                    </select>
                    {errors.lesson_type && <p style={{ color: RED, fontSize: 11, margin: "4px 0 0" }}>{errors.lesson_type}</p>}
                  </div>
                  <div>
                    <select value={form.availability} onChange={e => setForm(f => ({ ...f, availability: e.target.value }))} style={{ ...inputStyle("availability"), color: form.availability ? DARK : GREY }}>
                      <option value="">When do you want to start?</option>
                      <option value="As soon as possible">As soon as possible</option>
                      <option value="Within a week">Within a week</option>
                      <option value="Within a month">Within a month</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                  <button type="submit" disabled={sending} style={{ background: AMBER, color: DARK, border: "none", borderRadius: 10, padding: "14px", fontSize: 15, fontWeight: 900, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 4, opacity: sending ? 0.7 : 1 }}>
                    {sending ? "Sending..." : "Find My Instructor"} <ChevronRight size={18} />
                  </button>
                  <p style={{ color: GREY, fontSize: 11, textAlign: "center", margin: 0 }}>Free service · No payment required · We'll call you back</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ padding: "64px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "Arial Black, sans-serif", fontSize: 28, fontWeight: 900, margin: "0 0 8px" }}>How InstructorSpot works</h2>
            <p style={{ color: GREY, fontSize: 15 }}>Matched to the right instructor in under 2 hours</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40 }}>
            {[
              { step: "01", title: "Tell us where you are", body: "Enter your postcode and what type of lessons you're looking for — manual, automatic, or intensive." },
              { step: "02", title: "We find your match", body: "We search our network of verified DVSA-registered instructors in your area and find the best fit." },
              { step: "03", title: "We call you back", body: "Within 2 hours our team will contact you with your matched instructor and next steps." },
              { step: "04", title: "Start your lessons", body: "Book your first lesson directly with your instructor — on your terms, at your pace." },
            ].map(s => (
              <div key={s.step}>
                <div style={{ fontFamily: "Arial Black, sans-serif", fontSize: 36, fontWeight: 900, color: AMBER, marginBottom: 12 }}>{s.step}</div>
                <div style={{ fontFamily: "Arial Black, sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{s.title}</div>
                <p style={{ color: GREY, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ background: LIGHTBG, padding: "64px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "Arial Black, sans-serif", fontSize: 28, fontWeight: 900, margin: "0 0 8px" }}>Why use InstructorSpot?</h2>
            <p style={{ color: GREY, fontSize: 15 }}>We do the hard work so you don't have to</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { title: "Completely free for students", body: "Our matching service costs you nothing. No hidden fees, no subscriptions, no surprises.", icon: "🆓" },
              { title: "DVSA verified instructors only", body: "Every instructor on our platform is checked and verified — you'll never be matched with an unqualified instructor.", icon: "✅" },
              { title: "Local instructors near you", body: "We only match you with instructors who actually teach in your area — no travelling across Manchester.", icon: "📍" },
              { title: "Manual and automatic available", body: "Whatever you need — manual gearbox, automatic, intensive courses or refresher lessons — we've got you covered.", icon: "🚗" },
              { title: "No commitment required", body: "Just fill in the form and we'll call you back. No obligation to book until you're happy with your match.", icon: "🤝" },
              { title: "Fast response — within 2 hours", body: "We know you want to get started. We'll have a matched instructor back to you within 2 hours of your enquiry.", icon: "⚡" },
            ].map(item => (
              <div key={item.title} style={{ background: "#fff", borderRadius: 16, padding: 24, border: "1px solid #e5e7eb" }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontFamily: "Arial Black, sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{item.title}</div>
                <p style={{ color: GREY, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.body}</p>
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
              Get matched with local learners across Greater Manchester without paying AA or BSM franchise fees. List your profile from £15/month.
            </p>
          </div>
          <button style={{ background: AMBER, color: DARK, border: "none", borderRadius: 12, padding: "16px 32px", fontSize: 15, fontWeight: 900, cursor: "pointer", whiteSpace: "nowrap" }}>
            List your profile →
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0a0a0a", padding: "32px 20px", textAlign: "center" }}>
        <Logo size="sm" light />
        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 16, flexWrap: "wrap" }}>
          <a href={`tel:${TSK_PHONE}`} style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
            <Phone size={12} /> {TSK_PHONE}
          </a>
          <a href={`mailto:${TSK_EMAIL}`} style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
            <Mail size={12} /> {TSK_EMAIL}
          </a>
        </div>
        <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 11, marginTop: 16, letterSpacing: 1 }}>
          © 2026 INSTRUCTORSPOT · GREATER MANCHESTER · ALL RIGHTS RESERVED
        </p>
      </footer>

    </div>
  );
}