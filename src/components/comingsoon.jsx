import { useEffect, useState } from "react";
import "./style.css";

export default function ComingSoon() {
  const launchDate = new Date("2026-02-14T00:00:00");
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = launchDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({});
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="cs-wrapper">
      {/* Header */}
      <header className="brand-header">
        <div className="brand">
            <img
            src="/favicon.jpeg"
            alt="Chicken Everyday Logo"
            className="brand-logo" width={60} height={60}
            />

            <div className="brand-text">
            <h1>CHICKEN EVERYDAY</h1>
            <p>Quality And Hygiene You Can Trust</p>
            </div>
        </div>
      </header>

      {/* Hero */}
      <section className="cs-hero">
        <div className="cs-content">
          <h2>ताज़गी का हर दिन अनुभव करें</h2>
          <p>ऑर्डर पर ताज़ा कट, शुद्ध चिकन</p>
          <p className="cs-soon">Launching Soon | जल्द आ रहा है</p>

          {/*<div className="cs-input-group">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email"
            />
            <button>Notify Me</button>
          </div>*/}

          {timeLeft.days !== undefined && (
            <div className="cs-countdown">
              <div>
                <span>{timeLeft.days}</span>
                <small>Days</small>
              </div>
              <div>
                <span>{timeLeft.hours}</span>
                <small>Hours</small>
              </div>
              <div>
                <span>{timeLeft.minutes}</span>
                <small>Minutes</small>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Us */}
      <section className="cs-video">
        <video controls loop autoPlay>
            <source src="/comingsoon-video-1.mp4" type="video/mp4" />
        </video>
      </section>
      <section className="cs-features">
        <div>✔ पूरा चिकन</div>
        <div>✔ करी कट</div>
        <div>✔ बोनलेस</div>
        <div>✔ कीमा</div>
      </section>

      {/* Footer */}
      <footer className="cs-footer">
        <p>Follow us</p>
        <div className="cs-social">
          <a href="#">Instagram</a>
          <a href="#">WhatsApp</a>
          <a href="#">Facebook</a>
        </div>
        <small>कॉपीराइट © 2025 Chicken Everyday  - सर्वाधिकार सुरक्षित.</small>
      </footer>
    </div>
  );
}
