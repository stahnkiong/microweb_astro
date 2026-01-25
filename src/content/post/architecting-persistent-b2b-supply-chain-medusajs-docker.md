---
publishDate: 2026-01-26T00:00:00Z
author: Admin
title: 'Technical Journey: Architecting a Persistent B2B Supply Chain Platform with MedusaJS and Docker'
excerpt: 'Discover how Omnia Foods engineered a bulletproof B2B supply chain platform in Sarawak using MedusaJS, Docker, and a custom "Direct-to-Disk" persistent storage bridge on DigitalOcean.'
image: ~/assets/images/blog/logistics.webp
tags:
  - Docker
  - MedusaJS
  - Supply Chain
  - Sarawak Tech
  - DigitalOcean
  - Cloudflare
metadata:
  canonical: https://www.microweb.my/architecting-persistent-b2b-supply-chain-medusajs-docker
---

We recently hit a major milestone in developing the **Omnia Foods** ecosystem. While most see a [simple ordering app](/mobile-app), the "engine" underneath is a [sophisticated setup](/software) designed for high availability and data integrity. This post explores how we solved the complex challenge of persistent cloud storage for a localized B2B marketplace right here in Sarawak.

## The Architecture: From Local to Production

Moving from a local development environment to a production-grade setup is never just a "copy-paste" job. For Omnia Foods, we needed an architecture that could withstand the demands of a bustling F&B supply chain.

We transitioned to a robust **DigitalOcean Droplet**, fortified behind a **Cloudflare edge network**. This combination ensures that our infrastructure is not only scalable but also protected against common web threats. Cloudflare's edge nodes in East Malaysia allow us to achieve sub-second loading times, ensuring that users in Kuching and beyond experience a snappy, responsive application—even on mobile data.

## The Persistent Storage Challenge

One of the most critical technical hurdles we faced was data persistence in a containerized environment. In a standard Docker setup, data can be ephemeral—if a container restarts, unpersisted data is lost. For a B2B marketplace cataloguing fresh produce and inventory, losing product images or invoices is not an option.

We engineered a **"Direct-to-Disk" bridge** between our Docker containers and the physical server storage. This custom solution ensures that every product image, invoice, and critical document is written directly to the persistent disk of the host machine.

This "Direct-to-Disk" methodology means:

- **Zero Data Loss:** Even if we redeploy the entire application stack, the data remains safe.
- **Lightning Speed:** Serving assets directly from the physical disk, cached by Nginx and Cloudflare, drastically reduces latency categories.

## Security & Stealth: The Dual-Domain Strategy

Security for a B2B platform is paramount. We implemented a **dual-domain "Masking" strategy** to separate our concerns and reduce the attack surface.

1.  **Core API (Stealth Mode):** Our backend API resides on a secure, private subdomain. This layer is shielded from direct public traversal, accessible only through authenticated channels.
2.  **Frontend Assets (Public Facing):** The primary branded domain (`PasarNow`) serves the user interface and static assets.

This separation ensures that our core business logic remains secure while the storefront remains accessible and fast.

## B2B Value Prop: Why This Matters for the Customer

Why do we obsess over "backend bridges" and "container persistence"? Because for the F&B industry, technology is a tool for survival and growth.

For our stakeholders and customers, this architecture translates to:

- **Real-Time Inventory Visibility:** What you see is what is actually there. No caching errors or lost updates.
- **Reliable Cold-Chain Logistics Data:** Seamless tracking of orders from warehouse to kitchen.
- **Uninterrupted Service:** Platform updates can happen in the background without losing a single invoice or order history.

## Conclusion

Building for the F&B industry in Sarawak means moving beyond "it works on my machine." It requires architecting systems that are as resilient as the supply chain itself. With MedusaJS, Docker, and our optimized persistence strategy, Omnia Foods is ready to redefine B2B logistics in the region.

The warehouse is ready. The cold storage logic is locked. The engine is purring.

---

### Keep up with our journey

If you're in the F&B space and want to see how we're removing the friction from supply chain logistics, keep an eye on our latest developments.

#SarawakTech #B2BLogistics #MedusaJS #StartupLife #SupplyChain
