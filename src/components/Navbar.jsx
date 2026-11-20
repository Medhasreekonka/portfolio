
import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Internship", id: "internship" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" }
  ];

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = document.querySelectorAll("section[id]");
      const marker = window.scrollY + window.innerHeight * 0.35;

      let currentSection = "home";

      sections.forEach((section) => {
        if (section.offsetTop <= marker) {
          currentSection = section.id;
        }
      });

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5
      ) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", updateActiveSection, {
      passive: true
    });

    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <a
        href="#home"
        className="logo"
        onClick={() => {
          setActiveSection("home");
          closeMenu();
        }}
      >
        Medha<span>.</span>
      </a>

      <ul
        id="primary-navigation"
        className={`nav-links ${menuOpen ? "active" : ""}`}
      >
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={() => {
                setActiveSection(item.id);
                closeMenu();
              }}
              className={activeSection === item.id ? "active" : ""}
              aria-current={
                activeSection === item.id ? "location" : undefined
              }
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="navbar-actions">
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
