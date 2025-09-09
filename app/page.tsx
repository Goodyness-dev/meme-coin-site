"use client";

import Image from "next/image";
import { Twitter, Send } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // ✅ Tokenomics cards scroll animation
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.fromTo(
      ".token-card",
      { opacity: 1, y: 0 }, // visible by default
      {
        opacity: 1,
        y: -20,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tokenomics-section",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      }
    );
  }, []);

  // ✅ Roadmap items scroll animation
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.fromTo(
      ".roadmap-item",
      { opacity: 1, x: 0 },
      {
        opacity: 1,
        x: 20,
        duration: 0.8,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".roadmap-section",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      }
    );
  }, []);

  // ✅ Glitch effect on heading
  useEffect(() => {
    gsap.to(".glitch-text", {
      x: () => gsap.utils.random(-5, 5),
      y: () => gsap.utils.random(-2, 2),
      skewX: () => gsap.utils.random(-5, 5),
      repeat: -1,
      duration: 0.05,
      yoyo: true,
      ease: "none",
    });
  }, []);

  // ✅ Neon breathing background
  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = document.documentElement;

    root.style.setProperty("--grad1", "#0f0f0f");
    root.style.setProperty("--grad2", "#000000");

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { duration: 6, ease: "sine.inOut" },
    });
    tl.to(root, { "--grad1": "#1a0033", "--grad2": "#000000" })
      .to(root, { "--grad1": "#6a0dad", "--grad2": "#000000" })
      .to(root, { "--grad1": "#4b0082", "--grad2": "#000000" })
      .to(root, { "--grad1": "#000000", "--grad2": "#000000" });
  }, []);

  // ✅ Video observer logic
  useEffect(() => {
    if (!videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current!.currentTime = 0;
            videoRef.current!.play();
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <main className="main min-h-screen relative overflow-hidden">
      {/* ✅ Header */}
      <header className="bg-black/40 backdrop-blur-md border-b border-purple-900/40 top-0 z-50 fixed w-full">
        <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-3">
            <Image
              src="/pablo'simage.jpg"
              alt="coin Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-purple-400 tracking-wide">
              Timmy Turner
            </span>
          </div>
        </nav>
      </header>

      <div className="h-14"></div>
      <div className="scanlines pointer-events-none absolute inset-0 z-50"></div>

      {/* ✅ Hero Section */}
      <section
        className="flex flex-col text-center justify-center items-center pt-20 py-20 px-6 relative bg-black bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/pablo\\'simage2.jpg')" }}
      >
        <h1
          className="glitch-text text-5xl font-bold mb-4 relative"
          data-text="Welcome to Timmy Turner"
        >
          Welcome to Timmy Turner
        </h1>

        <a
          href="https://t.me/yourcommunity"
          className="px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition bg-black border border-pink-500 text-pink-400"
        >
          Join Telegram
        </a>
      </section>

      {/* ✅ About Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <div className="bg-black/40 border border-purple-500 rounded-2xl shadow-[0_0_20px_#a020f0] p-6">
          <h2 className="text-3xl font-bold mb-4 text-purple-400">
            About Timmy Turner
          </h2>
          <p className="text-lg text-gray-300">
            ✨🎩 Welcome to Timmy’s Crypto Wish Community 🎩✨ Timmy Turner has
            finally broken free from Dimmsdale and brought us the ultimate
            wish-granting duo – Cosmo & Wanda – not for toys or candy this time,
            but for monetary magic 🪄💸.
          </p>
        </div>
      </section>

      {/* ✅ Tokenomics with Video */}
      <section className="tokenomics-section py-16 px-6 bg-black/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-purple-400 text-neon">
            Tokenomics
          </h2>

          <div className="relative flex justify-center items-center mb-16 bg-black">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              preload="none"
              className="w-[400px] h-[400px] object-contain rounded-xl bg-black"
              poster="/pablo'simage.jpg"
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>

          {/* ✅ Token Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/60 p-6 rounded-2xl shadow-xl token-card border border-purple-900/40">
              <h3 className="text-xl font-semibold mb-2">30% Liquidity</h3>
              <p>Keeps trading smooth & stable 💧</p>
            </div>

            <div className="bg-black/60 p-6 rounded-2xl shadow-xl token-card border border-purple-900/40">
              <h3 className="text-xl font-semibold mb-2">50% Community</h3>
              <p>Half of the coin goes to the people. No whales allowed 🐳.</p>
            </div>

            <div className="bg-black/60 p-6 rounded-2xl shadow-xl token-card border border-purple-900/40">
              <h3 className="text-xl font-semibold mb-2">10% Team Admins</h3>
              <p>Fuel for devs & mods — keeping the rocket alive 🚀</p>
            </div>

            <div className="bg-black/60 p-6 rounded-2xl shadow-xl token-card border border-purple-900/40">
              <h3 className="text-xl font-semibold mb-2">10% Game & Tech</h3>
              <p>Funds for meme games & future upgrades 🎮✨.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Roadmap Section */}
      <section className="roadmap-section py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-purple-400">Roadmap</h2>
        <ul className="space-y-4">
          <li className="roadmap-item">
            ✅ Launch MemeCoin and Telegram community
          </li>
          <li className="roadmap-item">✅ Meme contest & first NFT drop</li>
          <li className="roadmap-item">
            🚀 Timmy Turner Game Launch (Coming Soon)
          </li>
          <li className="roadmap-item">🌕 Timmy Turner to the Moon!</li>
        </ul>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-black/40 py-10 text-center border-t border-purple-900/40">
        <h3 className="text-xl font-semibold mb-4 text-purple-400">
          Join the community
        </h3>
        <div className="flex gap-6 justify-center">
          <a
            href="https://t.me/yourcommunity"
            className="hover:text-yellow-400 flex items-center gap-2 px-4 py-2 transition rounded-lg"
          >
            <Send size={20} /> Telegram
          </a>
          <a
            href="https://twitter.com/yourhandle"
            className="hover:text-yellow-400 flex items-center gap-2 px-4 py-2 transition rounded-lg"
          >
            <Twitter size={20} /> X
          </a>
        </div>
        <p className="text-gray-400 mt-6">
          © 2025 Timmy Turner. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
