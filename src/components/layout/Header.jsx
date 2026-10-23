
import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  UserRound,
} from "lucide-react";

import "./Header.css";
import schoolLogo from "../../assets/images/logo_aws.png";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    children: [
      { label: "About School", href: "/about" },
      { label: "Our History", href: "/history" },
      { label: "Management", href: "/management" },
    ],
  },
  {
    label: "Academics",
    children: [
      { label: "Pre Primary", href: "/academics/pre-primary" },
      { label: "Primary", href: "/academics/primary" },
      { label: "Secondary", href: "/academics/secondary" },
    ],
  },
  {
    label: "Branches",
    href: "/branches",
  },
  {
    label: "Gallery",
    children: [
      { label: "Photo Gallery", href: "/gallery/photos" },
      { label: "Video Gallery", href: "/gallery/videos" },
    ],
  },
  {
    label: "Contact Us",
    children: [
      { label: "Contact Details", href: "/contact" },
      { label: "Quick Enquiry", href: "/enquiry" },
    ],
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <a
          href="/"
          className="header-logo"
          aria-label="Aaryans World School Home"
          onClick={closeMenu}
        >
          <img src={schoolLogo} alt="Aaryans World School" />
        </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <nav
          className={`main-navigation ${menuOpen ? "navigation-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <div
              className={`nav-item ${
                activeDropdown === item.label ? "dropdown-active" : ""
              }`}
              key={item.label}
            >
              {item.children ? (
                <>
                  <button
                    type="button"
                    className="nav-link dropdown-trigger"
                    aria-expanded={activeDropdown === item.label}
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <ChevronDown size={15} strokeWidth={2.5} />
                  </button>

                  <div className="dropdown-menu">
                    {item.children.map((child) => (
                      <a
                        href={child.href}
                        className="dropdown-link"
                        key={child.label}
                        onClick={closeMenu}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}

          <a
            href="/login"
            className="login-button"
            aria-label="Login"
            title="Login"
            onClick={closeMenu}
          >
            <UserRound size={23} fill="currentColor" strokeWidth={2.5} />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

