import { MdOutlineEmojiEmotions } from "react-icons/md";
import {
  FaGithub,
  FaLinkedin,
  FaReddit,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaPaperPlane,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheck,
} from "react-icons/fa";
import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "c6e95106-1ee1-48e9-8b15-646fdb1f4402",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: `Subject: ${formData.subject}\n\n Message: ${formData.message}`,
          from_name: formData.name,
          reply_to: formData.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again later.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };
  const socialLinks = [
    {
      id: 1,
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/Innocent-Alive",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/innocent-alive/",
    },
    {
      id: 3,
      name: "Reddit",
      icon: FaReddit,
      url: "https://www.reddit.com/user/Effective-Arrival335/",
    },
    {
      id: 4,
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/innocent_alive/",
    },
    {
      id: 5,
      name: "Facebook",
      icon: FaFacebook,
      url: "https://www.facebook.com/TheInnocentAlive",
    },
    {
      id: 6,
      name: "Twitter",
      icon: FaTwitter,
      url: "https://x.com/Innocent_Alive_",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.from(".contact-title", {
        scrollTrigger: {
          trigger: ".contact-title",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Split layout animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".contact-grid",
          start: "top 75%",
        },
      });

      tl.from(".contact-info", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }, 0)
      .from(".contact-form", {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }, 0.2);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-20 bg-background border-b-4 border-primary relative overflow-hidden bg-news-dots"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Page Header */}
        <div className="flex justify-between items-end border-b-2 border-primary pb-4 mb-16 contact-title">
          <h2 className="headline-serif text-4xl md:text-6xl font-black uppercase tracking-tighter text-primary leading-none">Classifieds: Connect</h2>
          <span className="uppercase-label text-muted-text hidden md:block font-black underline tracking-widest">CORRESPONDENCE / SECTION B</span>
        </div>

        <div className="contact-grid grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Column - Contact Details & Socials */}
          <div className="md:col-span-4 flex flex-col gap-8 contact-info">
            <div className="border-4 border-primary p-8 bg-white shadow-[10px_10px_0px_0px_rgba(17,17,17,1)] group hover:-translate-y-1 transition-all">
              <h3 className="uppercase-label text-xl font-black mb-8 border-b-4 border-primary pb-2 text-primary">Direct Line</h3>
              <div className="space-y-8 mono-data text-xs font-black">
                <div className="flex flex-col gap-2 border-b-2 border-primary/10 pb-6 group-hover:border-accent transition-colors">
                  <span className="text-accent underline text-[0.6rem]">RETURN_ADDR@EMAIL:</span>
                  <span className="text-primary truncate text-sm">ABHAY744DAS@GMAIL.COM</span>
                </div>
                <div className="flex flex-col gap-2 border-b-2 border-primary/10 pb-6 group-hover:border-accent transition-colors">
                  <span className="text-accent underline text-[0.6rem]">TELECOMM_SIGNAL:</span>
                  <span className="text-primary text-sm">+91 8169805273</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-accent underline text-[0.6rem]">GLOBAL_BUREAU:</span>
                  <span className="text-primary uppercase text-sm">MUMBAI, INDIA</span>
                </div>
              </div>
            </div>

            <div className="border-4 border-primary p-8 bg-neutral-100 shadow-[10px_10px_0px_0px_rgba(17,17,17,1)]">
              <h3 className="uppercase-label text-xl font-black mb-8 border-b-4 border-primary pb-2 text-primary">Social Registry</h3>
              <div className="grid grid-cols-3 gap-6">
                {socialLinks.map((link) => (
                  <a 
                    key={link.id} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border-2 border-primary p-4 flex items-center justify-center bg-white hover:bg-accent transition-all duration-300 group hover:shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]"
                  >
                    <link.icon className="w-6 h-6 text-primary group-hover:text-background transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp Classified ad */}
            <a
              href="https://wa.me/918169805273"
              target="_blank"
              rel="noopener noreferrer"
              className="border-4 border-primary p-6 bg-accent text-background flex flex-col items-center gap-2 hover:scale-[1.02] transition-transform shadow-[10px_10px_0px_0px_rgba(17,17,17,1)]"
            >
              <FaWhatsapp className="w-8 h-8" />
              <span className="uppercase-label font-black text-center text-sm">Urgent Dispatch via WhatsApp</span>
            </a>
          </div>

          {/* Right Column - The Form */}
          <div className="md:col-span-8 border-4 border-primary p-8 md:p-12 bg-white shadow-[15px_15px_0px_0px_rgba(17,17,17,1)] contact-form">
            <h3 className="headline-serif text-3xl md:text-5xl font-black mb-10 border-b-4 border-primary pb-6 uppercase tracking-tighter text-primary">Letter to the Editor</h3>
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="uppercase-label text-xs font-black text-primary">Subject Name (Full)</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="ENTER NAME"
                    className="w-full border-b-4 border-primary p-4 mono-data text-sm font-black focus:outline-none focus:border-accent transition-colors bg-neutral-50 placeholder:opacity-30"
                  />
                </div>
                <div className="space-y-3">
                  <label className="uppercase-label text-xs font-black text-primary">Return Routing (Email)</label>
                  <input 
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="USER@DOMAIN.COM"
                    className="w-full border-b-4 border-primary p-4 mono-data text-sm font-black focus:outline-none focus:border-accent transition-colors bg-neutral-50 placeholder:opacity-30"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="uppercase-label text-xs font-black text-primary">Context / Thread Subject</label>
                <input 
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="RE: PROJECT INQUIRY // 2024"
                  className="w-full border-b-4 border-primary p-4 mono-data text-sm font-black focus:outline-none focus:border-accent transition-colors bg-neutral-50 placeholder:opacity-30"
                />
              </div>

              <div className="space-y-3">
                <label className="uppercase-label text-xs font-black text-primary">The Correspondance Body</label>
                <textarea 
                  rows="5"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="TYPE YOUR MESSAGE HERE... EVERY CHARACTER COUNTS."
                  className="w-full border-4 border-primary p-6 mono-data text-sm font-black focus:outline-none focus:border-accent transition-colors bg-neutral-50 resize-none placeholder:opacity-30 min-h-[200px]"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-6 uppercase-label text-xl font-black transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] active:translate-y-1 active:shadow-none border-4 border-primary flex justify-center items-center gap-4 ${
                  isSubmitting ? "bg-neutral-200 text-primary cursor-not-allowed" : "bg-primary text-background hover:bg-accent hover:border-accent"
                }`}
              >
                {isSubmitting ? (
                   <span className="animate-pulse">TRANSMITTING...</span>
                ) : isSuccess ? (
                   <div className="flex items-center gap-3">
                     <FaCheck /> <span>DISPATCH SENT</span>
                   </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <FaPaperPlane className="rotate-12" /> <span>SEND DISPATCH</span>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Background Page Number Decor */}
      <div className="absolute bottom-10 left-10 opacity-5 text-[8rem] font-black uppercase-label select-none pointer-events-none">
        0B2
      </div>
    </section>
  );
};

export default Contact;
