import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from '../../Assets/Artifice Studio.jpeg'
import {  ActionIcon, rem } from '@mantine/core';
import { IconBrandInstagram, IconBrandGmail, IconPhone } from '@tabler/icons-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageDropdownOpen(false);
  };

  const navItems = [
    { to: "/", text: t("Accueil") },
    { to: "/about", text: t("À propos de nous") },
    { to: "/Work", text: t("Portefeuille de travail") },
    {
      text: t("Prestations"),
      dropdown: [
        { to: "/branding", text: t("Notre Menu") },
        { to: "/review", text: t("Menu Général") },
        { to: "/gallery", text: t("Galerie") },
      ],
    },
    { to: "/contact", text: t("Contactez-nous") },
  ];

  const renderNavLinks = (isMobile = false) => (
    <>
      {navItems.map(({ to, text, dropdown }, index) => (
        <div key={to || text} className={`relative ${isMobile ? 'w-full border-b border-gray-700 last:border-b-0' : ''}`}>
          {dropdown ? (
            <div className={
              `${isMobile ? "group w-full flex flex-col justify-center items-center" : "group w-full inline-block"}`
            }>
              <button
                className={`${
                  isMobile
                    ? "w-full flex items-center justify-between px-4 py-3 text-left text-base font-medium text-white transition-colors"
                    : "text-white hover:text-gray-400 transition-colors py-2 px-4 rounded-md inline-flex items-center"
                }`}
                onClick={
                  isMobile
                    ? () => toggleDropdown(index)
                    : () =>
                        setActiveDropdown(
                          activeDropdown === index ? null : index
                        )
                }
              >
                <span>{text}</span>
                <svg
                  className={`h-5 w-5 transition-transform ${
                    activeDropdown === index ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {((isMobile && activeDropdown === index) ||
                (!isMobile && activeDropdown === index)) && (
                <div
                  className={`${
                    isMobile
                      ? "w-full bg-black"
                      : "absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  }`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div className={`${isMobile ? 'py-2' : 'py-1'}`} role="none">
                    {dropdown.map(({ to, text }) => (
                      <Link
                        key={to}
                        to={to}
                        className={`${
                          isMobile
                            ? "block w-full px-4 py-2 text-sm text-gray-300 hover:bg-black hover:text-white transition-colors"
                            : "text-gray-700 block px-4 py-2 text-sm hover:bg-black hover:text-white transition-colors"
                        }`}
                        role="menuitem"
                        onClick={isMobile ? toggleMenu : null}
                      >
                        {text}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              to={to}
              className={`${
                isMobile
                  ? "block w-full px-4 py-3 text-base font-medium text-white hover:bg-black transition-colors"
                  : "text-white hover:text-gray-400 transition-colors py-2 px-4 rounded-md"
              }`}
              onClick={isMobile ? toggleMenu : null}
            >
              {text}
            </Link>
          )}
        </div>
      ))}

      {/* Language Selector Dropdown */}
      <div className={`relative ${isMobile ? 'w-full mt-4' : ''}`}>
        <button
          onClick={toggleLanguageDropdown}
          className={`${
            isMobile
              ? "w-full flex items-center justify-between px-4 py-3 text-left text-base font-medium text-white transition-colors"
              : "text-white hover:text-gray-400 transition-colors py-2 px-4 rounded-md inline-flex items-center"
          }`}
        >
          <span>{i18n.language === 'fr' ? 'Français' : 'English'}</span>
          <svg
            className={`h-5 w-5 transition-transform ${
              isLanguageDropdownOpen ? 'rotate-180' : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isLanguageDropdownOpen && (
          <div
            className={`${
              isMobile
                ? "w-full bg-black"
                : "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            }`}
          >
            <div className={`${isMobile ? 'py-2' : 'py-1'}`}>
              <button
                onClick={() => changeLanguage("fr")}
                className={`${
                  isMobile
                    ? "block w-full px-4 py-2 text-left text-sm text-gray-300  hover:text-white transition-colors"
                    : "text-gray-700 block w-full px-4 py-2 text-left text-sm hover:text-gray-900 transition-colors"
                }`}
              >
                Français
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className={`${
                  isMobile
                    ? "block w-full px-4 py-2 text-left text-sm text-gray-300  hover:text-white transition-colors"
                    : "text-gray-700 block w-full px-4 py-2 text-left text-sm hover:text-gray-900 transition-colors"
                }`}
              >
                English
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );

  return (
    <div className="fixed w-full z-50 top-0">
      <div className="bg-black shadow-lg">
        <div className="flex flex-row justify-between items-center p-4 md:px-8 lg:px-16 xl:px-32 transition-all duration-300">
          {/* Logo */}
          <Link to="/">
            <div className="flex flex-row items-center cursor-pointer space-x-3">
              <img
                src={logo}
                alt="Artifice Graphic"
                className="w-20 h-20 md:w-20 md:h-20 object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-row items-center text-base lg:text-lg font-medium space-x-6 lg:space-x-8">
            {renderNavLinks()}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-white hover:text-gray-400 transition-colors focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black z-50 overflow-y-auto">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                className="text-white hover:text-gray-400 transition-colors focus:outline-none"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col items-stretch justify-start min-h-screen pb-16 pt-4">
              {renderNavLinks(true)}
              
              <div className="flex justify-center space-x-6 mt-8">
                
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandGmail
              style={{ width: rem(30), height: rem(30) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram
              style={{ width: rem(30), height: rem(30) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconPhone
              style={{ width: rem(30), height: rem(30) }}
              stroke={1.5}
            />
          </ActionIcon>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}