'use client';
import Image from "next/image";
import Link from "next/link"
import bgimg from "./assets/dark.jpg"
import logo from "./assets/logo.png"
import React, { SVGProps } from 'react';
import CookieConsent from "react-cookie-consent";
import Gallery from "./components/Gallery"
 import '../lib/i18n';
import { useTranslation } from 'react-i18next';
export default function Home() {
   const { t } = useTranslation();
  return (
 
    <div className="flex min-h-[100dvh] flex-col">
      <header className="relative w-full">
        <div className="absolute inset-0 overflow-hidden">
          <Image src={bgimg} alt="Hero Background"  className="h-full w-full object-cover object-center" unoptimized />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto  relative z-10 py-24 md:py-32 lg:py-40  ">
          <div className="mx-auto max-w-2xl space-y-4 text-center text-primary-foreground ">
            <div className="flex justify-center">
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                {/* <MountainIcon className="h-6 w-6 text-primary" /> */}
                <Image src={logo} alt="digital creator hub" unoptimized className="h-10 w-10"   />
                <span className="font-semibold">Digital Creators Hub </span>
              </Link>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                {t('header_title')}
            </h1>
            <p className="text-xs opacity-90">CI Deployed • Firebase Hosting</p>
            <p className="text-lg md:text-xl">
              {t('header_sub_title')}
            </p>
            <Link
              href={t('message_whatsapp')}
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              {t('header_button')}
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto ">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">  {t('main_section1_title')}</h2>
              <p className="text-muted-foreground md:text-xl">
                {t('main_section1_description')}
              </p>
            </div>
          </div>
        </section>
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container mx-auto ">
            <div className="mx-auto max-w-5xl space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">  {t('main_section2_title')}</h2>
                <p className="text-muted-foreground md:text-xl">
                {t('main_section2_description')}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                <div className="flex flex-col items-center space-y-2">
                  <WebhookIcon className="h-12 w-12 text-icons" />
                  <h3 className="text-xl font-bold">  {t('main_section2_icon1_title')}</h3>
                  <p className="text-center text-muted-foreground">
                      {t('main_section2_icon1_desc')}
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <SearchCodeIcon className="h-12 w-12 text-icons" />
                  <h3 className="text-xl font-bold">  {t('main_section2_icon2_title')}</h3>
                  <p className="text-center text-muted-foreground">
                     {t('main_section2_icon2_desc')}
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <BracketsIcon className="h-12 w-12 text-icons" />
                  <h3 className="text-xl font-bold">  {t('main_section2_icon3_title')}</h3>
                  <p className="text-center text-muted-foreground">
                     {t('main_section2_icon3_desc')}
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <ShoppingCartIcon className="h-12 w-12 text-icons" />
                  <h3 className="text-xl font-bold">  {t('main_section2_icon4_title')}</h3>
                  <p className="text-center text-muted-foreground">
                      {t('main_section2_icon4_desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
           <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">  {t('main_section2_title_our_project')}</h2>
                <p className="text-muted-foreground md:text-xl">
                {t('main_section2_description_our_project')}
                </p>
              </div>
            <Gallery  />
        </section>
       
          <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container mx-auto ">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">  {t('main_section3_title')}</h2>
              <p className="text-muted-foreground md:text-xl">
                  {t('main_section2_description')}
              </p>
              <Link
                href={t('message_whatsapp')}
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                  {t('main_section2_button_cta')}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className=" p-6 md:py-12 w-full">
        <div className="container mx-auto  max-w-7xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-8 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <Image src={logo} alt="digital creator hub" unoptimized className="h-10 w-10"   />
                <span className="font-semibold">Digital Creators Hub </span>
            </div>
            <p>  {t('footer_address')}</p>
            <p>Phone: <a href="tel:+212635081648"> +212-635081648</a></p>
          </div>
          {/* <div className="grid gap-1">
            <h3 className="font-semibold">Quick Links</h3>
            <Link href="#" prefetch={false}>
              Home
            </Link>
            <Link href="#" prefetch={false}>
              About
            </Link>
            <Link href="#" prefetch={false}>
              Services
            </Link>
            <Link href="#" prefetch={false}>
              Contact
            </Link>
          </div>
       */}
        </div>
      </footer>
      <div className="fixed bottom-8    right-4">
        <Link
          href="tel:+212635081648"
          className="inline-flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-lg transition-colors hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
          prefetch={false}
        >
          <PhoneIcon className="h-6 w-6" />
          <span className="sr-only">WhatsApp</span>
        </Link>
      </div>
   <CookieConsent
      
      enableDeclineButton
      flipButtons
      location="top"
      buttonText="I understand"
      cookieName="digital-creatore-hub"
      style={{ margin: '0px' }}
      buttonStyle={{
        color: '#000',
        fontSize: '10px',
      }}
      declineButtonStyle={{
        margin: '3px 3px 3px 0',
        fontSize: '10px',
      }}
      expires={450}
    >
      This website uses cookies
    </CookieConsent>

    </div>
    
  )
}

function BracketsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 3h3v18h-3" />
      <path d="M8 21H5V3h3" />
    </svg>
  )
}


 


function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function SearchCodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m13 13.5 2-2.5-2-2.5" />
      <path d="m21 21-4.3-4.3" />
      <path d="M9 8.5 7 11l2 2.5" />
      <circle cx="11" cy="11" r="8" />
    </svg>
  )
}


function ShoppingCartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function WebhookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
      <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
      <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
    </svg>
  )
}

