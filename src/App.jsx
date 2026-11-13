
import { useState } from "react";
import "./App.css";

const services = [
  {
    icon: "💍",
    title: "Wedding Events",
    description: "Beautiful wedding celebrations designed around your dreams.",
  },
  {
    icon: "🎂",
    title: "Birthday Parties",
    description: "Memorable birthday celebrations with creative decorations.",
  },
  {
    icon: "🏢",
    title: "Corporate Events",
    description: "Professional conferences, launches and business gatherings.",
  },
  {
    icon: "❤️",
    title: "Engagements",
    description: "Elegant engagement celebrations and unforgettable moments.",
  },
  {
    icon: "🎤",
    title: "Concerts",
    description: "Live entertainment, stage production and event management.",
  },
  {
    icon: "👶",
    title: "Baby Showers",
    description: "Special celebrations filled with warmth and beautiful details.",
  },
  {
    icon: "✨",
    title: "Stage Decoration",
    description: "Stunning stages, floral arrangements and creative backdrops.",
  },
  {
    icon: "🎉",
    title: "Other Events",
    description: "Customized event planning for every special occasion.",
  },
];

const gallery = [
  {
    title: "Wedding Celebrations",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=900",
  },
  {
    title: "Elegant Decorations",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900",
  },
  {
    title: "Beautiful Celebrations",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900",
  },
  {
    title: "Luxury Events",
    image:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=900",
  },
  {
    title: "Special Moments",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900",
  },
  {
    title: "Event Experiences",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=900",
  },
];

const WHATSAPP_NUMBER = "919581290608";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    event: "Wedding Events",
    date: "",
    venue: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBooking = (e) => {
    e.preventDefault();

    if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
      alert(
        "Please add your WhatsApp business number in App.jsx first."
      );
      return;
    }

    const message = `Hello Mahesh Events!

I would like to enquire about booking an event.

Name: ${form.name}
Phone: ${form.phone}
Event: ${form.event}
Event Date: ${form.date}
Venue: ${form.venue}
Message: ${form.message}

Please contact me with more details.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="website">

      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-icon">M</span>
          <span>
            <strong>MAHESH EVENTS</strong>
            <small>MAKE MOMENTS MEMORABLE</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["Home", "About", "Services", "Gallery", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            )
          )}
          <a
            href="#booking"
            className="nav-book"
            onClick={() => setMenuOpen(false)}
          >
            Book Your Event
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="eyebrow">
            ✦ CREATING UNFORGETTABLE EXPERIENCES ✦
          </p>

          <h1>
            Your Moments.
            <br />
            Our <span>Magic.</span>
          </h1>

          <p className="hero-description">
            From dream weddings to grand celebrations, we
            transform your special occasions into beautiful
            memories that last forever.
          </p>

          <div className="hero-buttons">
            <a href="#booking" className="gold-button">
              Plan Your Event →
            </a>
            <a href="#services" className="outline-button">
              Explore Services
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>CREATIVE PLANNING</span>
          <span>✦</span>
          <span>PERFECT EXECUTION</span>
          <span>✦</span>
          <span>HAPPY MEMORIES</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section" id="about">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1000"
            alt="Elegant event decoration"
          />
          <div className="image-caption">
            <span>MAKING EVERY MOMENT SPECIAL</span>
          </div>
        </div>

        <div className="about-content">
          <p className="section-label">WELCOME TO MAHESH EVENTS</p>
          <h2>
            We Create Events.
            <br />
            <span>You Create Memories.</span>
          </h2>

          <p>
            Every celebration has a story, and we are here to
            make yours extraordinary. Mahesh Events brings
            creativity, elegance and attention to detail to
            every occasion.
          </p>

          <p>
            Whether it is a dream wedding, a birthday party,
            a corporate gathering or a grand concert, we work
            to bring your vision to life.
          </p>

          <a href="#contact" className="text-link">
            Let's Create Something Beautiful →
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services section" id="services">
        <div className="section-heading">
          <p className="section-label">WHAT WE DO</p>
          <h2>Our Event Services</h2>
          <p>
            Thoughtfully planned celebrations, perfectly
            executed for your special moments.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span className="service-icon">{service.icon}</span>
              <span className="service-number">
                0{index + 1}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a
                href="#booking"
                onClick={() =>
                  setForm((old) => ({
                    ...old,
                    event: service.title,
                  }))
                }
              >
                Enquire Now →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* FEATURE BANNER */}
      <section className="feature-banner">
        <div>
          <p className="section-label">YOUR DREAM. OUR PASSION.</p>
          <h2>
            Every Detail Matters.
            <br />
            Every Moment Counts.
          </h2>
          <a href="#booking" className="gold-button">
            Let's Plan Together →
          </a>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery section" id="gallery">
        <div className="section-heading">
          <p className="section-label">OUR PORTFOLIO</p>
          <h2>Moments Worth Remembering</h2>
          <p>
            Explore the inspiration behind beautiful celebrations.
          </p>
        </div>

        <div className="gallery-grid">
          {gallery.map((item) => (
            <div className="gallery-item" key={item.title}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="gallery-caption">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING */}
      <section className="booking section" id="booking">
        <div className="booking-info">
          <p className="section-label">LET'S GET STARTED</p>
          <h2>
            Let's Make Your
            <br />
            Event <span>Special.</span>
          </h2>

          <p>
            Tell us about your celebration. Share a few details
            and our team can connect with you on WhatsApp.
          </p>

          <div className="contact-detail">
            <span>✦</span>
            Personalized event planning
          </div>
          <div className="contact-detail">
            <span>✦</span>
            Creative decoration ideas
          </div>
          <div className="contact-detail">
            <span>✦</span>
            Dedicated event support
          </div>
        </div>

        <form className="booking-form" onSubmit={handleBooking}>
          <h3>Book Your Celebration</h3>
          <p>Fill in the details below to get started.</p>

          <label>Your Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label>Phone Number</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            type="tel"
            required
          />

          <label>Event Type</label>
          <select
            name="event"
            value={form.event}
            onChange={handleChange}
          >
            {services.map((service) => (
              <option key={service.title}>
                {service.title}
              </option>
            ))}
          </select>

          <label>Event Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
          />

          <label>Event Location / Venue</label>
          <input
            name="venue"
            value={form.venue}
            onChange={handleChange}
            placeholder="Enter event location"
          />

          <label>Tell Us More</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Describe your event requirements..."
            rows="4"
          />

          <button type="submit" className="gold-button submit-button">
            Send Booking Enquiry on WhatsApp →
          </button>

          <small className="form-note">
            Your enquiry will open in WhatsApp for you to send.
          </small>
        </form>
      </section>

      {/* CONTACT */}
      <section className="contact-strip" id="contact">
        <div>
          <p className="section-label">HAVE AN EVENT IN MIND?</p>
          <h2>Let's Make It Happen.</h2>
          <p>Get in touch and let's start planning your celebration.</p>
        </div>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noreferrer"
          className="gold-button"
        >
          Chat With Us on WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="brand footer-brand">
          <span className="brand-icon">M</span>
          <span>
            <strong>MAHESH EVENTS</strong>
            <small>MAKE MOMENTS MEMORABLE</small>
          </span>
        </a>

        <p>
          Creating beautiful celebrations and unforgettable memories.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#booking">Book Now</a>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Mahesh Events. All rights reserved.
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        className="whatsapp-float"
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        ☎
      </a>

    </div>
  );
}

export default App;
