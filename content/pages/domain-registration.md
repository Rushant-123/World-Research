---
title: "Domain Name Registration"
company: "Registrars (Namecheap, GoDaddy, Google Domains)"
country: "Various"
selling_price: 12
inputs:
  - name: "Domain Registry"
    cost: 7
    link: "icann-registry"
  - name: "DNS Servers"
    cost: 2
    link: "dns-server"
  - name: "WHOIS Database"
    cost: 1
    link: "whois-database"
  - name: "Payment Processing"
    cost: 1
    link: "payment-gateway"
  - name: "Registrar Platform"
    cost: 1
    link: "domain-management-system"
value_created: 0
---

# How to Make Domain Name Registration

Domain registration reserves a unique name (like example.com) on the Internet for specified period. Managed by hierarchical system: ICANN (policy) → registries (TLD operators) → registrars (retail) → customers.

## What is it?

Process of claiming a domain name for exclusive use. You pay registrar (like Namecheap, $12/year for .com), they register with [Domain Registry](icann-registry) (Verisign for .com). Your ownership recorded in [WHOIS Database](whois-database). You control [DNS Servers](dns-server) that map your domain to IP addresses. Renewable annually. Registration doesn't include hosting - just the name.

## Registration Process:
1. Customer searches for available domain on registrar website
2. Registrar queries registry's WHOIS database for availability
3. If available, customer provides: contact info, payment, DNS nameservers
4. [Payment Processing](payment-gateway) charges customer (typically $10-15/year for .com)
5. Registrar submits registration to [Domain Registry](icann-registry) (Verisign, PIR, etc.)
6. Registry adds domain to central database with expiration date
7. Registry updates root zone file (authoritative record of all domains)
8. Customer configures [DNS Servers](dns-server) to point domain to web host
9. DNS propagates globally (24-48 hours)
10. Domain now resolves to customer's website

**Structure:** .com TLD managed by Verisign (registry), sold through 1000+ registrars. ICANN oversees entire system. Registries pay ICANN $0.25 per domain. Registrars pay registry $7.85/year for .com.
