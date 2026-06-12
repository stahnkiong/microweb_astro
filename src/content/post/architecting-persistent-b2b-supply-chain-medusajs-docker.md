---
publishDate: 2026-01-26T00:00:00Z
updatedDate: 2026-06-12T00:00:00Z
author: Admin
title: 'Supply Chain Architecture: Engineering High-Availability B2B Infrastructure via MedusaJS and Docker'
excerpt: 'A technical breakdown of the Omnia Foods B2B core: Implementing high-performance container persistence, zero-latency edge delivery via Cloudflare, and isolated API dual-domain masking.'
image: ~/assets/images/blog/logistics.webp
tags:
  - MedusaJS
  - Cloud Infrastructure
  - Docker Architecture
  - B2B Marketplace
metadata:
  canonical: https://www.microweb.my/clients/architecting-persistent-b2b-supply-chain-medusajs-docker
---

Scaling a B2B supply chain marketplace within regional infrastructure limits requires a strict focus on backend predictability. For the Sarawak F&B sector, where inventory data fresh-rates directly dictate cold-chain logistics timelines, system latency and data dropouts represent direct operational losses.

During the foundational engineering phase of the **Omnia Foods** B2B ecosystem, we avoided generic monolithic deployments. Instead, we architected a decoupled, containerized infrastructure designed for maximum transaction velocity, data persistence, and perimeter security.

---

## The Infrastructure Topology: Edge Routing to Linux Host

The production architecture is deployed across a dedicated **DigitalOcean Droplet Compute Node** running an optimized Linux core, protected behind an aggressive **Cloudflare Edge Network** perimeter.

[Client App] ──> [Cloudflare Edge (Kuching Node)] ──> [Nginx Reverse Proxy] ──> [Docker / MedusaJS API]

By leveraging localized edge routing nodes, we achieve sub-second Time to First Byte (TTFB) across East Malaysia. This network configuration ensures that warehouse managers and procurement officers experience zero interface lag—even when transmitting high-volume orders over erratic cellular connections.

---

## Resolving Container State Persistence

A fundamental challenge of containerized headless environments (like MedusaJS running inside a Docker runtime) is handling ephemeral storage. If an active container crashes or is replaced during an automated CI/CD deployment, any application state written within the container layer is destroyed.

To ensure absolute asset permanence without introducing the latency overhead of early-stage remote network storage, we engineered a high-velocity **Direct-to-Disk persistent volume bridge** on the host machine.

### Core Implementation Parameters:

- **Host-Bound Volume Mounts:** We isolated high-wear asset directories (such as generated invoices and product media payloads) and hard-mapped them directly out of the containerized environment into the host's physical NVMe storage layer.
- **Cached Asset Delivery:** Media assets are served directly from the physical disk layer via an optimized Nginx reverse-proxy cache, combined with Cloudflare’s global edge caching rules. This workflow completely bypasses the Node.js application layer for static file requests, minimizing CPU overhead.
- **Decoupled Architecture Scaling:** While local NVMe storage satisfies our initial velocity targets, the underlying file-service layout is fully abstracted. This design allows us to seamlessly swap the storage driver to an S3-compatible object storage cluster as transaction volume expands.

---

## Perimeter Security: The Dual-Domain Isolation Strategy

To protect core enterprise logic and inventory management databases from discovery and automated scanning bots, we implemented a strict **Dual-Domain Security Layout**:

1. **The Public Storefront Layer:** The client-facing web application and static asset catalogs are served via the public-facing domain environment (`PasarNow`). This layer handles all standard, non-privileged web traffic.
2. **The Stealth API Layer:** The MedusaJS core engine and database orchestrators are isolated on a completely separate, obfuscated private subdomain infrastructure. This endpoint operates behind strict Cross-Origin Resource Sharing (CORS) security guidelines and JWT token validation protocols, rendering the core backend invisible to unauthorized public traversal.

---

## The Operational Yield: Engineering for Survival

We don't over-engineer backend infrastructure to follow abstract industry trends; we build to eliminate real-world business failure states. For our B2B marketplace stakeholders, this predictable architecture delivers concrete business outcomes:

- **Synchronized Inventory Accuracy:** Real-time state updates eliminate the risk of double-booking perishable stock or showing inaccurate warehouse levels to restaurants.
- **Uptime During Fleet Redeployments:** Security patches and application updates can be pushed to the Docker environment concurrently without interrupting live orders or endangering past transactional data.
- **Hardened Data Records:** Every invoice, cold-chain ledger entry, and order history asset is immediately hard-saved to permanent storage, creating a reliable ledger that local businesses can confidently rely upon.
