"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const BLUR_DATA_URL =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalScroll) * 100;
            setScrollProgress(progress);
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                isScrolled ? "bg-white/95 backdrop-blur-xl border-b border-amber-200/30 shadow-lg" : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4 group cursor-pointer">
                        <div className="relative">
                            <Link href={"/"} className="block">
                                <Image
                                    src="/marakech-quad-camel/logo/logo-desktop.jpeg"
                                    alt="Quad Camel Marrakech - Desert Adventures"
                                    width={80}
                                    height={80}
                                    className="w-15 h-15 rounded-2xl group-hover:scale-110 transition-all duration-500 shadow-lg"
                                    quality={85}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    placeholder="blur"
                                    blurDataURL={BLUR_DATA_URL}
                                />
                            </Link>
                            {/* Floating particles */}
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-amber-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse delay-300"></div>
                        </div>

                        {/* Brand Text */}
                        <div className="  hidden md:flex flex-col ">
                            <Link href={"/"} className="text-slate-800 font-semibold text-xl tracking-widest leading-none">
                                QuadCamelMarrakesh
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Menu - WITH HOME LINK ADDED */}
                    <div className="hidden md:flex items-center space-x-3 px-6">
                        {[
                            { name: "HOME", href: "/", emoji: "🏠" }, // ADDED HOME LINK
                            { name: "EXPERIENCES", href: "/experiences/quad-biking-and-camel-ride-in-the-agafay-desert", emoji: "🏜️" },
                            { name: "GALLERY", href: "/gallery", emoji: "📸" },
                            { name: "STORIES", href: "/stories", emoji: "📖" },
                            { name: "CONTACT", href: "/contact-us", emoji: "💌" },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="group  flex items-center space-x-2 text-slate-600 hover:text-amber-600 text-sm font-semibold tracking-widest transition-all duration-500 hover:scale-105"
                            >
                                <span className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                    {item.emoji}
                                </span>
                                <span className="relative">
                                    {item.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-500"></span>
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA & Mobile Menu */}
                    <div className="flex items-center space-x-4">
                        {/* Main CTA Button */}
                        <Link
                            href="/contact-us"
                            className="hidden md:block bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 text-sm font-medium tracking-widest rounded-full transition-all duration-500 hover:scale-105 hover:shadow-xl group relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center space-x-2">
                                <span>BOOK ADVENTURE</span>
                                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </span>
                            <div className="absolute inset-0 bg-linear-to-r from-white/20 to-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            aria-label="Toggle menu"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden w-10 h-10 rounded-full border border-slate-300 hover:border-amber-500 flex items-center justify-center text-slate-600 hover:text-amber-600 transition-all duration-300 hover:scale-110"
                        >
                            <div className={`flex flex-col space-y-1 transition-all duration-300 ${isMenuOpen ? "rotate-90" : ""}`}>
                                <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
                                <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></div>
                                <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - WITH HOME LINK ADDED */}
            {isMenuOpen && (
                <div className="md:hidden bg-white/98 backdrop-blur-2xl border-t border-amber-200/20">
                    <div className="px-6 py-6 space-y-4">
                        {[
                            { name: "HOME", href: "/", emoji: "🏠" }, // ADDED HOME LINK
                            { name: "EXPERIENCES", href: "/experiences/quad-biking-and-camel-ride-in-the-agafay-desert", emoji: "🏜️" },
                            { name: "GALLERY", href: "/gallery", emoji: "📸" },
                            { name: "STORIES", href: "/stories", emoji: "📖" },
                            { name: "CONTACT", href: "/contact-us", emoji: "💌" },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-amber-50 transition-all duration-300 group font-semibold"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300">
                                    <span className="text-lg">{item.emoji}</span>
                                </div>
                                <div className="flex-1">
                                    <div className="text-slate-800 font-medium group-hover:text-amber-600 transition-colors">{item.name}</div>
                                </div>
                                <span className="text-slate-400 group-hover:text-amber-500 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                    →
                                </span>
                            </Link>
                        ))}

                        {/* Mobile CTA Buttons */}
                        <div className="pt-4 border-t border-slate-200 space-y-3">
                            <a
                                href="https://wa.me/212627349254"
                                className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-medium transition-all duration-300"
                            >
                                <span>💬</span>
                                <span>Chat on WhatsApp</span>
                            </a>
                            <Link
                                href="/contact-us"
                                className="w-full bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-3 rounded-xl font-bold transition-all duration-300 text-center block"
                            >
                                Book Your Adventure
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Scroll Progress Bar */}
            <div className="w-full h-1 bg-slate-100/50">
                <div
                    className="h-full bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 transition-all duration-150 rounded-r-full shadow-lg"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>
        </nav>
    );
};

export default Header;
