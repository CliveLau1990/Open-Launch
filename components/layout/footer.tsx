/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

import { RiGithubFill, RiTwitterXFill } from "@remixicon/react"

// Link groups for a columnar layout
const discoverLinks = [
  { title: "Trending", href: "/trending" },
  { title: "Categories", href: "/categories" },
  { title: "Submit Project", href: "/projects/submit" },
]

const resourcesLinks = [
  { title: "Pricing", href: "/pricing" },
  { title: "Sponsors", href: "/sponsors" },
]

const legalLinks = [
  { title: "Terms of Service", href: "/legal/terms" },
  { title: "Privacy Policy", href: "/legal/privacy" },
  { title: "Attribution Badges", href: "/legal/badges" },
]

// Liens pour la nouvelle colonne "Connect"
const connectLinkItems = [
  {
    href: "https://github.com/drdruide/open-launch",
    icon: RiGithubFill,
    label: "GitHub",
  },
  {
    href: "https://twitter.com/Ericbn09",
    icon: RiTwitterXFill,
    label: "Twitter / X",
  },
]

export default function FooterSection() {
  return (
    <footer className="bg-background border-t pt-6 pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-12 md:gap-x-8">
          {/* Left Section: Brand, Copyright, Author, Badges - Align left on mobile */}
          <div className="flex flex-col items-start text-left md:col-span-4 lg:col-span-4">
            <Link href="/" className="font-heading mb-3 flex items-center">
              <span className="font-heading flex items-center text-lg font-bold">
                <img src="/logo.svg" alt="logo" className="mr-1 h-6 w-6" />
                Open-Launch
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Open-Launch. All rights reserved.
            </p>
            <p className="text-muted-foreground mb-4 text-sm">
              Open source project by{" "}
              <Link
                href="https://x.com/Ericbn09"
                target="_blank"
                rel="noopener"
                className="hover:text-primary underline"
              >
                Eric
              </Link>
            </p>
            <div className="flex items-center justify-start space-x-3">
              <img
                src="/images/badges/top1-light.svg"
                alt="Top 1 Product Badge (Light Theme)"
                className="block w-[200px] dark:hidden"
              />
              <img
                src="/images/badges/top1-dark.svg"
                alt="Top 1 Product Badge (Dark Theme)"
                className="hidden w-[200px] dark:block"
              />
            </div>
          </div>

          {/* Right Section: Columnar Navigation Links - 2 colonnes sur mobile, 4 sur md */}
          <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-4">
            {/* Discover Column */}
            <div className="text-left">
              <h3 className="text-foreground text-sm font-semibold tracking-wider uppercase">
                Discover
              </h3>
              <ul role="list" className="mt-4 flex flex-col items-start space-y-3">
                {discoverLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary text-sm transition-colors duration-150"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="text-left">
              <h3 className="text-foreground text-sm font-semibold tracking-wider uppercase">
                Resources
              </h3>
              <ul role="list" className="mt-4 flex flex-col items-start space-y-3">
                {resourcesLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary text-sm transition-colors duration-150"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div className="text-left">
              <h3 className="text-foreground text-sm font-semibold tracking-wider uppercase">
                Legal
              </h3>
              <ul role="list" className="mt-4 flex flex-col items-start space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary text-sm transition-colors duration-150"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Column */}
            <div className="text-left">
              <h3 className="text-foreground text-sm font-semibold tracking-wider uppercase">
                Connect
              </h3>
              <ul role="list" className="mt-4 flex flex-col items-start space-y-3">
                {connectLinkItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary inline-flex items-center gap-1.5 text-sm transition-colors duration-150"
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Badges Section */}
        <div className="border-border/40 mt-8 border-t">
          <div className="mx-auto max-w-2xl pt-8">
            <h3 className="text-muted-foreground mb-6 text-center text-xs font-medium tracking-wider uppercase">
              Earned Badges
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://twelve.tools"
                target="_blank"
                rel="noopener"
                className="hidden dark:block"
              >
                <img
                  src="https://twelve.tools/badge0-dark.svg"
                  alt="Featured on Twelve Tools"
                  width="140"
                  height="38"
                />
              </a>
              <a
                href="https://twelve.tools"
                target="_blank"
                rel="noopener"
                className="block dark:hidden"
              >
                <img
                  src="https://twelve.tools/badge0-white.svg"
                  alt="Featured on Twelve Tools"
                  width="140"
                  height="38"
                />
              </a>
              <a
                href="https://bestdirectories.org"
                target="_blank"
                rel="noopener"
                className="hidden dark:block"
              >
                <img
                  src="https://bestdirectories.org/feature-badge-dark.svg"
                  alt="Featured on Best Directories"
                  width="140"
                  height="38"
                />
              </a>
              <a
                href="https://bestdirectories.org"
                target="_blank"
                rel="noopener"
                className="block dark:hidden"
              >
                <img
                  src="https://bestdirectories.org/feature-badge.svg"
                  alt="Featured on Best Directories"
                  width="140"
                  height="38"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
