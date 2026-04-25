import { useEffect, useMemo, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

const services = [
  {
    id: "01",
    title: "Featured in Powerlist 2026: Influential Architects",
    description:
      "Our studio was included in the Powerlist 2026 – Influential Architects, recognising our contribution to hospitality and residential design.",
    features: ["News", "April 17, 2026"],
    image: "/media/1.jpg",
  },
  {
    id: "02",
    title: "Built Perspectives: Designs Beyond Form & Function",
    description:
      "A spotlight on design thinking that goes beyond aesthetics to deliver meaningful user experiences tailored to clients' needs.",
    features: ["Feature", "April 1, 2026"],
    image: "/media/2.jpg",
  },
  {
    id: "03",
    title: "Leadership Appointment: Strengthening Our Business Development",
    description:
      "A strategic leadership appointment to grow our regional presence and client partnerships.",
    features: ["News", "March 16, 2026"],
    image: "/media/3.jpg",
  },
  {
    id: "04",
    title: "Community Outreach: Ramadan Support Initiative",
    description:
      "A community outreach initiative delivering meals and hygiene kits to local families during Ramadan.",
    features: ["CSR", "March 10, 2026"],
    image: "/media/4.jpg",
  },
  {
    id: "05",
    title: "New HR Director Joins the Studio",
    description:
      "Appointment to strengthen people development and studio culture across our offices.",
    features: ["News", "March 8, 2026"],
    image: "/media/5.jpg",
  },
  {
    id: "06",
    title: "Recognised in WA100 2026",
    description:
      "Our practice was recognised among the world's leading architectural firms in the WA100 2026 rankings.",
    features: ["Award", "February 25, 2026"],
    image: "/media/6.png",
  },
  {
    id: "07",
    title: "Supporting Inclusion: Community Sponsorship",
    description:
      "We support community inclusion initiatives as part of our ongoing CSR commitments.",
    features: ["CSR", "January 26, 2026"],
    image: "/media/7.jpg",
  },
  {
    id: "08",
    title: "Built Perspectives: Designing with Purpose",
    description:
      "Dialogues on the role of architecture in shaping purpose-driven public and private spaces.",
    features: ["Feature", "December 18, 2025"],
    image: "/media/8.jpg",
  },
  {
    id: "09",
    title: "Strengthening Regional Presence at Cityscape Global 2025",
    description:
      "We showcased design capabilities and expanded regional partnerships at Cityscape Global.",
    features: ["News", "November 12, 2025"],
    image: "/media/9.jpg",
  },
];

const projects = [
  ["Livein Liwan", "Riyadh · KSA", "/projects/Liwan.jpg"],
  [
    "Jumeirah Gulf of Bahrain Resort & Spa",
    "Kingdom of Bahrain",
    "/projects/JGB-2.jpg",
  ],
  ["Cap Vermell Grand Hotel", "Mallorca · Spain", "/projects/CVGH.jpg"],
  ["Madinat Jumeirah Living", "Dubai · UAE", "/projects/MJL2.jpg"],
  [
    "Mosi-oa-Tunya Livingstone Resort",
    "Livingstone · Zambia",
    "/projects/Mosi-Oa-Tunya-Z.jpg",
  ],
  ["Raffles Hotel & Residences", "Jeddah · KSA", "/projects/raffles1.jpg"],
];

const insights = [
  {
    tag: "Expertise",
    title: "Sustainability",
    date: "2026",
    excerpt:
      "We care deeply about delivering sustainable developments that address environmental and social impacts.",
    image: "/expertise/Sustainability.jpg",
  },
  {
    tag: "Expertise",
    title: "Responsible Innovation",
    date: "2026",
    excerpt:
      "We embrace eco-friendly materials, energy conservation and waste-reduction strategies as part of responsible design.",
    image: "/expertise/Responsible-Innovation.jpg",
  },
  {
    tag: "Expertise",
    title: "Sustainable Design Practices",
    date: "2026",
    excerpt:
      "Our team applies lifecycle thinking and technical performance optimisation throughout every project.",
    image: "/expertise/Sustainable-Design-Practices.jpg",
  },
  {
    tag: "Expertise",
    title: "Doing More With Less",
    date: "2026",
    excerpt:
      "We champion low-energy design and efficient building solutions that deliver real value with minimal resource use.",
    image: "/expertise/Doing-More-With-Less.jpg",
  },
  {
    tag: "Expertise",
    title: "High Quality Standards",
    date: "2026",
    excerpt:
      "Our practice maintains rigorous quality standards from briefing through to handover, ensuring exceptional outcomes.",
    image: "/expertise/High-Quality-Standards.jpg",
  },
  {
    tag: "Expertise",
    title: "Customer Satisfaction",
    date: "2026",
    excerpt:
      "We focus on client needs to deliver projects on time, on budget and to the highest standard of service.",
    image: "/expertise/Customer-Satisfaction.jpg",
  },
  {
    tag: "Expertise",
    title: "Latest Technology",
    date: "2026",
    excerpt:
      "Our specialist teams invest in the latest design tools and BIM workflows to improve coordination and outcomes.",
    image: "/expertise/Latest-Technology.jpg",
  },
  {
    tag: "Expertise",
    title: "Project Organisation",
    date: "2026",
    excerpt:
      "Structured project management and a positive team approach deliver projects that meet programme and quality targets.",
    image: "/expertise/Project-Organisation.jpg",
  },
];

function App() {
  const aboutWords = useMemo(
    () =>
      "We are a design studio specialising in architecture, interiors and masterplanning. We deliver creative, sustainable and technically robust solutions across hospitality, residential and commercial sectors worldwide.".split(
        " ",
      ),
    [],
  );
  const servicesRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      smooth: true,
    });

    let rafId = 0;
    let isActive = true;
    function raf(time) {
      if (!isActive) return;
      lenis.raf(time);
      ScrollTrigger.update();
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.lagSmoothing(0);

    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    let mouseX = window.innerWidth * 0.5;
    let mouseY = window.innerHeight * 0.5;
    let ringX = mouseX;
    let ringY = mouseY;
    let cursorTicker = null;

    const mouseHandler = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) gsap.set(dot, { x: mouseX, y: mouseY });
    };
    if (!window.matchMedia("(pointer: coarse)").matches) {
      document.addEventListener("mousemove", mouseHandler);
      cursorTicker = () => {
        ringX += (mouseX - ringX) * 0.1;
        ringY += (mouseY - ringY) * 0.1;
        if (ring) gsap.set(ring, { x: ringX, y: ringY });
      };
      gsap.ticker.add(cursorTicker);
    }

    const cursorHandlers = [];
    document.querySelectorAll(".cursor-expand").forEach((el) => {
      const label = el.dataset.cursorLabel || "View";
      const onEnter = () => {
        if (!ring) return;
        gsap.to(ring, {
          width: 80,
          height: 80,
          backgroundColor: "rgba(8, 12, 20, 0.82)",
          duration: 0.3,
        });
        ring.innerHTML = `<span>${label}</span>`;
      };
      const onLeave = () => {
        if (!ring) return;
        gsap.to(ring, {
          width: 40,
          height: 40,
          backgroundColor: "transparent",
          duration: 0.3,
        });
        ring.innerHTML = "";
      };
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
      cursorHandlers.push({ el, onEnter, onLeave });
    });

    const magneticHandlers = [];
    document.querySelectorAll(".magnetic-btn").forEach((btn) => {
      const onMove = (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, {
          x: x * 0.35,
          y: y * 0.35,
          duration: 0.3,
          ease: "power2.out",
        });
      };
      const onLeave = () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,0.5)" });
      };
      btn.addEventListener("mousemove", onMove);
      btn.addEventListener("mouseleave", onLeave);
      magneticHandlers.push({ btn, onMove, onLeave });
    });

    gsap.utils.toArray(".reveal-heading").forEach((el) => {
      gsap.fromTo(
        el,
        {
          yPercent: 35,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        },
      );
    });

    gsap.fromTo(
      ".hero-label, .hero-sub, .hero-actions",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        delay: 0.4,
        immediateRender: false,
      },
    );
    gsap.fromTo(
      ".hero-line .reveal-text",
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        delay: 0.5,
        immediateRender: false,
      },
    );
    gsap.to(".hero-bg", {
      yPercent: 25,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.fromTo(
      "#about .highlight-word",
      { color: "rgba(234,234,234,0.12)" },
      {
        color: "rgba(234,234,234,1)",
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: "#about .highlight-text",
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1,
        },
      },
    );

    let activeService = 0;
    const switchServiceImage = (index) => {
      if (index === activeService) return;
      gsap.to(`#service-img-${activeService + 1}`, {
        opacity: 0,
        scale: 1.05,
        duration: 0.7,
        ease: "power2.inOut",
      });
      gsap.to(`#service-img-${index + 1}`, {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "power2.inOut",
      });
      activeService = index;
    };
    servicesRef.current.forEach((block, i) => {
      ScrollTrigger.create({
        trigger: block,
        start: "top center",
        end: "bottom center",
        onEnter: () => switchServiceImage(i),
        onEnterBack: () => switchServiceImage(i),
      });
      gsap.from(block.querySelector(".service-copy"), {
        x: 40,
        opacity: 0,
        duration: 0.8,
        immediateRender: false,
        scrollTrigger: { trigger: block, start: "top 90%", once: true },
      });
    });

    const track = document.querySelector("#projects-track");
    if (track && window.innerWidth > 1200) {
      const totalScroll = track.scrollWidth - window.innerWidth;
      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: "#projects-pin",
          start: "top top",
          end: () => `+=${totalScroll * 1.2}`,
          pin: true,
          scrub: 1.5,
          onUpdate: (self) => {
            const progress = document.querySelector("#projects-progress");
            if (progress) progress.style.width = `${self.progress * 100}%`;
          },
        },
      });
    }

    gsap.utils.toArray(".count-up").forEach((el) => {
      const target = Number(el.dataset.target);
      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        once: true,
        onEnter: () => {
          const counter = { val: 0 };
          gsap.to(counter, {
            val: target,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = `${Math.round(counter.val)}${el.dataset.suffix || ""}`;
            },
          });
        },
      });
    });

    ScrollTrigger.create({
      start: "top -80px",
      onUpdate: (self) =>
        document
          .getElementById("main-nav")
          ?.classList.toggle("nav-scrolled", self.scroll() > 80),
    });

    // Scroll-spy: add .active to navbar links when their section is in view
    const navLinks = Array.from(document.querySelectorAll("#main-nav nav a"));
    const sections = navLinks
      .map((a) => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);

    // Create a fixed bottom underline element used only for Contact
    const contactUnderline = document.createElement("div");
    contactUnderline.id = "contact-underline";
    document.body.appendChild(contactUnderline);

    const updateContactUnderline = () => {
      const form = document.querySelector(".contact-form");
      if (!form) return;
      const rect = form.getBoundingClientRect();
      const left = rect.left + window.scrollX;
      const width = document.documentElement.clientWidth - rect.left;
      contactUnderline.style.left = `${left}px`;
      contactUnderline.style.width = `${width}px`;
    };

    const ioOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        const link = document.querySelector(`#main-nav nav a[href="#${id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove("active"));
          link.classList.add("active");
          // If contact section is active, show the underline and position it
          if (id === "contact") {
            updateContactUnderline();
            contactUnderline.classList.add("visible");
          } else {
            contactUnderline.classList.remove("visible");
          }
        }
      });
    }, ioOptions);
    sections.forEach((s) => io.observe(s));

    // Recompute underline on resize while visible
    const onResize = () => {
      if (contactUnderline.classList.contains("visible"))
        updateContactUnderline();
    };
    window.addEventListener("resize", onResize);

    gsap.utils.toArray(".fade-up").forEach((el) => {
      gsap.fromTo(
        el,
        {
          y: 20,
          opacity: 0.25,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          immediateRender: false,
          scrollTrigger: { trigger: el, start: "top 95%", once: true },
        },
      );
    });

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    if (prefersReducedMotion) gsap.globalTimeline.timeScale(100);

    return () => {
      isActive = false;
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.removeEventListener("mousemove", mouseHandler);
      window.removeEventListener("load", onLoad);
      cursorHandlers.forEach(({ el, onEnter, onLeave }) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      magneticHandlers.forEach(({ btn, onMove, onLeave }) => {
        btn.removeEventListener("mousemove", onMove);
        btn.removeEventListener("mouseleave", onLeave);
      });
      if (cursorTicker) gsap.ticker.remove(cursorTicker);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      io.disconnect();
      // remove contact underline element and listeners
      try {
        contactUnderline.remove();
      } catch (e) {}
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="site">
      <div id="cursor-dot" />
      <div id="cursor-ring" />
      <header id="main-nav">
        <div className="logo">
          <img src="/logo1.png" className="w-28" alt="Company Logo" />
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#services">Media</a>
          <a href="#projects">Projects</a>
          <a href="#insights">Expertise</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          className="outline-btn magnetic-btn cursor-expand"
          data-cursor-label="Open"
        >
          Get in Touch
        </button>
      </header>
      <section id="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <p className="hero-label">
            <span className="blue-dot" />
            TRANSFORMING SPACES
          </p>
          <h1>
            <div className="hero-line">
              <span className="reveal-text">Inspiring</span>
            </div>
            <div className="hero-line">
              <span className="reveal-text">Experiences</span>
            </div>
          </h1>
          <p className="hero-sub">
            Creating remarkable spaces for luxury hospitality, residential
            developments and commercial environments.
          </p>
          <div className="hero-actions">
            <button
              className="filled-btn magnetic-btn cursor-expand"
              data-cursor-label="Next"
            >
              Explore Projects
            </button>
            <a href="#about">↓ Scroll to discover</a>
          </div>
          <div className="hero-points fade-up">
            <span>
              <span className="blue-dot" />
              Luxury Hospitality Experts
            </span>
            <span>
              <span className="blue-dot" />
              Residential & Commercial Specialists
            </span>
            <span>
              <span className="blue-dot" />
              Award-Winning Designs
            </span>
          </div>
        </div>
        <div className="marquee">
          <div>
            Residential · Hospitality · Commercial · Retail · Educational ·
            Mixed-Use ·
          </div>
        </div>
      </section>
      <section id="about" className="dot-grid-bg">
        <div className="about-left">
          <p>
            <span className="blue-dot" />
            ABOUT
          </p>
          <div className="about-line" />
          <div className="about-stat">35+</div>
          <small>Years of Excellence</small>
        </div>
        <div className="about-right">
          <p className="highlight-text">
            {aboutWords.map((word, i) => (
              <span key={`${word}-${i}`} className="highlight-word">
                {word}{" "}
              </span>
            ))}
          </p>
          <div className="about-mini">
            <span>Established 1991</span>
            <span>Award-Winning Studio</span>
          </div>
        </div>
      </section>
      <section id="services">
        <div className="services-left">
          {services.map((service, i) => (
            <img
              id={`service-img-${i + 1}`}
              key={service.title}
              src={service.image}
              alt={service.title}
              loading="lazy"
              decoding="async"
              className={i === 0 ? "active" : ""}
            />
          ))}
        </div>
        <div className="services-right">
          {services.map((service, i) => (
            <article
              key={service.id}
              id={`service-block-${i + 1}`}
              ref={(el) => {
                servicesRef.current[i] = el;
              }}
            >
              <div className="service-copy">
                <p className="service-num">{service.id}</p>
                <h2 className="reveal-heading">{service.title}</h2>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <span className="blue-dot" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="projects">
        <div className="projects-head">
          <p>
            <span className="blue-dot" />
            OUR PROJECTS
          </p>
          <h2 className="reveal-heading">Featured Projects</h2>
        </div>
        <div id="projects-progress" />
        <div id="projects-pin">
          <div id="projects-track">
            {projects.map(([name, meta, src]) => (
              <article
                key={name}
                className="project-card cursor-expand"
                data-cursor-label="View"
              >
                <img src={src} alt={name} loading="lazy" decoding="async" />
                <div className="project-info">
                  <h3>{name}</h3>
                  <p>{meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="stats">
        <div>
          <h3 className="count-up" data-target="550" data-suffix="+">
            0
          </h3>
          <p>Projects Launched</p>
        </div>
        <div>
          <h3 className="count-up" data-target="120" data-suffix="+">
            0
          </h3>
          <p>Clients & Operations</p>
        </div>
        <div>
          <h3 className="count-up" data-target="40" data-suffix="+">
            0
          </h3>
          <p>Years In Business</p>
        </div>
        <div>
          <h3 className="count-up" data-target="30" data-suffix="+">
            0
          </h3>
          <p>Countries</p>
        </div>
      </section>
      <section id="insights">
        <div className="insights-head">
          <p>
            <span className="blue-dot" />
            EXPERTISE
          </p>
          <h2 className="reveal-heading">Expertise</h2>
        </div>
        <div className="insight-grid">
          {insights.map((item) => (
            <article
              key={item.title}
              className="insight-card fade-up cursor-expand"
              data-cursor-label="Open"
            >
              <div className="insight-image">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                />
                <div className="insight-overlay">Read →</div>
              </div>
              <div className="insight-body">
                <p>
                  <span className="blue-dot" />
                  {item.tag}
                </p>
                <h3>{item.title}</h3>
                <p className="insight-excerpt">{item.excerpt}</p>
                <footer>
                  <span>{item.date}</span>
                  <a href="/">Read More →</a>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="contact" className="dot-grid-bg">
        <div className="contact-intro fade-up">
          <p>
            <span className="blue-dot" />
            GET IN TOUCH
          </p>
          <h2 className="reveal-heading">Start Your Project</h2>
          <p>
            Tell us about your brief and objectives. We collaborate closely with
            clients to deliver considered, buildable and beautiful outcomes.
          </p>
        </div>
        <div className="contact-grid">
          <form className="contact-form fade-up">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your name" />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@company.com" />
            <label htmlFor="service">Service</label>
            <select id="service">
              <option>Architecture</option>
              <option>Interiors</option>
              <option>Masterplanning</option>
              <option>Consultancy</option>
              <option>Other</option>
            </select>
            <label htmlFor="message">Project Brief</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Brief project description — programme, budget, timeline"
            />
            <button
              type="button"
              className="filled-btn magnetic-btn cursor-expand"
              data-cursor-label="Send"
            >
              Send Enquiry
            </button>
          </form>
          <aside className="contact-card fade-up">
            <p>
              Head Office: 123 Design Street, City Centre, 00000
              <br />
              Your City, Country
            </p>
            <p>
              <a href="tel:+15555550123">+1 (555) 555-0123</a>
              <br />
              <a href="mailto:hello@company.com">hello@company.com</a>
            </p>
            <div className="office">
              <h4>Dubai Office</h4>
              <p>
                Convention Tower
                <br />
                Office 204
                <br />
                Al Mustaqbal Street Zabeel
                <br />
                PO Box 9723
                <br />
                Dubai, United Arab Emirates
              </p>
              <p>
                <a href="tel:+97143292288">+971 (0) 4 329 2288</a>
                <br />
                <a href="mailto:dsa.dubai@dsa-arch.com">dsa.dubai@dsa-arch.com</a>
              </p>
            </div>
            <h4>Sectors / Services</h4>
            <ul>
              <li>Architecture</li>
              <li>Interiors</li>
              <li>Masterplanning</li>
              <li>Consultancy</li>
              <li>Other</li>
            </ul>
          </aside>
        </div>
      </section>
      <footer id="footer" className="dot-grid-bg">
        <p>
          <span className="blue-dot" />
          LET'S WORK TOGETHER
        </p>
        <h2>
          <span className="reveal-heading">Create</span>
          <span className="reveal-heading">
            Exceptional<span className="accent">.</span>
          </span>
        </h2>
        <button
          className="outline-blue magnetic-btn cursor-expand"
          data-cursor-label="Open"
        >
          Get In Touch
        </button>
        <div className="footer-grid fade-up">
          <div>
            <h4>Projects</h4>
            <a href="/">Luxury Hotels &amp; Resorts</a>
            <a href="/">Midscale Hotels &amp; Resorts</a>
            <a href="/">Residential</a>
            <a href="/">Commercial, Public &amp; Cultural</a>
            <a href="/">Retail, F&amp;B &amp; Leisure</a>
            <a href="/">Lodges</a>
            <a href="/">Healthcare &amp; Wellness</a>
            <a href="/">Master Planning &amp; Urban Design</a>
          </div>
          <div>
            <h4>About Us</h4>
            <a href="/">Who we are</a>
            <a href="/">What we do</a>
            <a href="/">Awards</a>
            <a href="/">Our People</a>
          </div>
          <div>
            <h4>Expertise</h4>
            <a href="/">Sustainability</a>
            <a href="/">BIM</a>
            <a href="/">Design Management</a>
            <a href="/">Quality Management</a>
          </div>
          <div>
            <h4>Media</h4>
            <a href="/">News</a>
            <a href="/">Downloads</a>
            <a href="/">Careers</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="/">Location</a>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com/DSA.Architects.Intl/" aria-label="facebook">Facebook</a>
            <a href="https://www.instagram.com/dsaarchitectsintl/" aria-label="instagram">Instagram</a>
            <a href="https://twitter.com/dsaarchitects?lang=en" aria-label="twitter">Twitter</a>
            <a href="https://www.linkedin.com/company/dsa-architects-international" aria-label="linkedin">LinkedIn</a>
            <a href="https://www.youtube.com/channel/UC97sDcbLzu6RoaLz4z4irQg" aria-label="youtube">YouTube</a>
          </div>
        </div>
        <div className="footer-meta">
          <div className="footer-meta-inner">
            <a href="/">Privacy Policy</a>
            <span>© 2026 Architects Intl</span>
            <span>Developed by <a style={{fontWeight: 'bold'}} href="https://www.linkedin.com/in/karam-dargham-426a96225/" target="_blank" >Karam Dargham</a></span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
