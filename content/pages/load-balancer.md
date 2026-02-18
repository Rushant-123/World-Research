---
title: "Load Balancer"
company: "Multiple Vendors"
country: "Global"
selling_price: 80000
inputs:
  - name: "Server Hardware"
    cost: 25000
    link: "server-hardware"
  - name: "Network Switches"
    cost: 15000
    link: "networking-equipment"
  - name: "Load Balancer Software"
    cost: 10000
    link: "load-balancer-software"
  - name: "SSL Certificates"
    cost: 3000
    link: "ssl-certificate"
  - name: "Monitoring System"
    cost: 5000
    link: "monitoring-infrastructure"
  - name: "Network Cards"
    cost: 8000
    link: "network-interface-card"
  - name: "Storage System"
    cost: 10000
    link: "storage-array"
  - name: "Power Supplies"
    cost: 4000
    link: "server-psu"
value_created: 0
lead_time_days: 51
minimum_order_quantity: 1
transportation_method: "air"
geopolitical_risk: "medium"
price_volatility: "medium"

certifications:
  - "ISO9001"
  - "ISO14001"
data_quality: "estimated"
---

# How to Make Load Balancer

A load balancer distributes incoming network traffic across multiple backend servers to ensure high availability, reliability, and performance. It acts as reverse proxy, monitoring server health and directing traffic only to healthy servers while providing SSL termination, caching, and traffic management.

## What is it?

Hardware or software that distributes client requests across multiple servers using algorithms like round-robin, least connections, or IP hash. Performs health checks every 5-30 seconds, removes failed servers from pool, handles SSL/TLS termination, provides session persistence (sticky sessions), supports Layer 4 (TCP/UDP) and Layer 7 (HTTP/HTTPS) load balancing. Capacity: 1-100 Gbps throughput, 100K-10M concurrent connections.

## Steps to Make:

**Architecture Design:**
1. Define requirements: expected traffic volume, concurrent connections, throughput
2. Choose load balancer type: hardware (F5, Citrix NetScaler) or software (HAProxy, Nginx)
3. Hardware appliances: 1-100 Gbps, $30K-$300K, dedicated hardware
4. Software load balancers: flexible, cheaper, runs on standard servers
5. Decide Layer 4 vs Layer 7: L4 (TCP/UDP, faster), L7 (HTTP/HTTPS, more features)
6. Plan high availability: deploy in pairs (active-passive or active-active)
7. Capacity planning: 1 load balancer handles 10K-100K requests/second
8. Design for redundancy: minimum 2 load balancers, prefer 3+ for large deployments

**Hardware Selection:**
9. Procure [Server Hardware](server-hardware) for software load balancer
10. Server specs: dual Intel Xeon or AMD EPYC CPUs (16-32 cores each)
11. Memory: 64-256 GB RAM (more for connection tracking, SSL sessions)
12. Network: 2-4× 10/25/40 Gbps NICs for high throughput
13. Storage: 2× 500GB SSDs in RAID 1 (configuration, logs, certificates)
14. Form factor: 1U or 2U rack-mount server
15. Install redundant [Power Supplies](server-psu): 2× 750W or 1,100W PSUs
16. Alternative: purpose-built hardware load balancer (F5 BIG-IP, Citrix ADC)

**Network Interface Setup:**
17. Install high-performance [Network Cards](network-interface-card)
18. Use Intel X710 or Mellanox ConnectX-5/6 NICs
19. 10 GbE for small deployments, 25/40 GbE for medium, 100 GbE for large
20. Enable SR-IOV for hardware offload and lower latency
21. Configure NIC bonding (LACP) for redundancy: 2 NICs bonded per link
22. Front-end NICs: connect to internet-facing network
23. Back-end NICs: connect to internal server network
24. Management NIC: dedicated network for admin access

**Operating System Installation:**
25. Install Linux OS: Ubuntu 22.04 LTS, Debian 12, or Red Hat Enterprise Linux 9
26. Minimal installation: no GUI, only essential packages
27. Kernel tuning for high performance:
28. Increase connection tracking: net.netfilter.nf_conntrack_max = 1048576
29. Enable TCP fast open: net.ipv4.tcp_fastopen = 3
30. Increase file descriptors: fs.file-max = 2097152
31. Tune TCP buffer sizes: net.ipv4.tcp_rmem and tcp_wmem
32. Enable BBR congestion control: net.ipv4.tcp_congestion_control = bbr
33. Disable unnecessary services: remove AppArmor/SELinux or configure minimal rules

**Load Balancer Software Installation:**
34. Install [Load Balancer Software](load-balancer-software): HAProxy, Nginx Plus, or Traefik
35. HAProxy: high performance, battle-tested, supports L4 and L7
36. HAProxy capacity: 100K+ req/s per server with proper tuning
37. Nginx Plus: commercial version with advanced features, API, dashboard
38. Traefik: cloud-native, auto-discovers services in Kubernetes/Docker
39. Install via package manager: apt install haproxy or nginx
40. Alternative: compile from source for latest features and optimizations
41. Install supporting tools: socat, hatop (HAProxy top), monitoring agents

**Basic Configuration:**
42. Configure HAProxy global settings in /etc/haproxy/haproxy.cfg
43. Set max connections: maxconn 100000 (adjust based on server capacity)
44. Configure logging: send to rsyslog or syslog-ng
45. Set user and group: haproxy:haproxy (non-root for security)
46. Enable stats page: for monitoring load balancer health
47. Configure SSL/TLS settings: ciphers, protocols, DH parameters
48. Set timeouts: connect 5s, client 30s, server 30s

**Frontend Configuration:**
49. Define frontend: listening endpoint for client connections
50. Example: bind *:443 ssl crt /etc/ssl/certs/site.pem
51. Listen on port 443 (HTTPS) with SSL certificate
52. Configure HTTP to HTTPS redirect: bind *:80, redirect scheme https
53. Enable HTTP/2: alpn h2,http/1.1
54. Set default backend: which server pool to use
55. Configure ACLs (Access Control Lists): route based on host, path, headers
56. Example: use_backend api_servers if { path_beg /api/ }

**Backend Configuration:**
57. Define backend: pool of servers that handle requests
58. List server IPs and ports: server web1 192.168.1.10:8080 check
59. Configure load balancing algorithm (see Load Balancing Algorithms section)
60. Enable health checks: check inter 10s fall 3 rise 2
61. Health check every 10 seconds, mark down after 3 failures, up after 2 successes
62. Configure connection limits per server: maxconn 5000
63. Enable HTTP keep-alive: reuse connections to backend servers
64. Configure server weights: assign more traffic to powerful servers

**Load Balancing Algorithms:**
65. Round-robin: distribute requests evenly across all servers (simplest)
66. Least connections: send to server with fewest active connections (dynamic)
67. Source IP hash: same client always goes to same server (session persistence)
68. URI hash: same URL always goes to same server (cache affinity)
69. Least response time: send to fastest responding server
70. Weighted round-robin: servers with higher weight receive more traffic
71. Algorithm choice: leastconn for long-lived connections, roundrobin for short requests
72. Configure: balance leastconn or balance roundrobin in backend section

**Health Check Configuration:**
73. HTTP health checks: GET /health every 10 seconds
74. Expect: HTTP 200 response with optional body check
75. TCP health checks: attempt TCP connection to port
76. Custom health checks: execute script, check specific conditions
77. Health check timeouts: fail check if no response in 5 seconds
78. Consecutive failures: mark server down after 3 consecutive failures
79. Consecutive successes: mark server up after 2 consecutive successes
80. Remove failed servers from pool: stop sending traffic immediately
81. Log health check failures: alert operations team

**SSL/TLS Configuration:**
82. Obtain [SSL Certificates](ssl-certificate) from Certificate Authority
83. Use wildcard certificate: *.example.com for multiple subdomains
84. Or use SAN certificate: multiple domains in one certificate
85. Install certificate: combine cert, private key, intermediate certs into single file
86. Configure SSL binding: bind *:443 ssl crt /etc/ssl/certs/site.pem
87. Disable weak protocols: no-sslv3 no-tlsv10 no-tlsv11 (use TLS 1.2+)
88. Configure cipher suites: prefer ECDHE-RSA-AES256-GCM-SHA384
89. Enable perfect forward secrecy: use ECDHE or DHE key exchange
90. Configure DH parameters: generate 2048-bit or 4096-bit DH params
91. Enable OCSP stapling: reduce SSL handshake time

**SSL Termination:**
92. Load balancer decrypts HTTPS traffic (SSL termination)
93. Inspect traffic: apply security rules, log requests, modify headers
94. Backend communication: HTTP (unencrypted) or HTTPS (re-encrypted)
95. HTTP to backend: simpler, faster, acceptable for trusted internal network
96. HTTPS to backend: more secure, required for compliance (PCI-DSS, HIPAA)
97. SSL passthrough alternative: don't decrypt, forward encrypted traffic (L4 only)
98. SSL passthrough: can't inspect traffic, but preserves end-to-end encryption

**Session Persistence:**
99. Sticky sessions: same client always goes to same backend server
100. Required when: server stores session state in memory (shopping cart, login)
101. Cookie-based persistence: load balancer inserts cookie with server ID
102. Example: Set-Cookie: SERVERID=web1; path=/
103. Client sends cookie on subsequent requests, routed to same server
104. IP-based persistence: hash client IP, always route to same server
105. Persistence timeout: 30 minutes to 2 hours (configurable)
106. Drawback: uneven load distribution if some clients generate more traffic

**Connection Pooling:**
107. Load balancer maintains pool of persistent connections to backend servers
108. Reuse connections: avoid TCP handshake overhead for each request
109. HTTP keep-alive: send multiple requests over single TCP connection
110. Configure max connections per server: 500-5000 depending on server capacity
111. Connection timeout: close idle connections after 5 minutes
112. Backend connection multiplexing: 1 client connection → multiple backend connections
113. Improves performance: reduces latency, increases throughput

**Request/Response Manipulation:**
114. Add headers: X-Forwarded-For (client IP), X-Forwarded-Proto (http/https)
115. Remove headers: internal headers that shouldn't reach backend
116. URL rewriting: modify request path before forwarding to backend
117. Example: /app/api/users → /users (strip /app prefix)
118. Compression: gzip or brotli compress responses to reduce bandwidth
119. Caching: cache static content (images, CSS, JS) in load balancer
120. Content switching: route to different backends based on URL, host, or headers

**Rate Limiting:**
121. Protect backend servers from overload and abuse
122. Per-IP rate limiting: 100 requests per minute per IP
123. Per-user rate limiting: 1,000 requests per minute per authenticated user
124. Global rate limiting: cap total requests to 50,000 req/s
125. Use stick-tables to track request counts per IP/user
126. Return HTTP 429 Too Many Requests when limit exceeded
127. Tarpit: slow down abusive clients by delaying responses
128. Blacklist: block IPs that exceed limits repeatedly

**Monitoring and Stats:**
129. Enable HAProxy stats page: listen on port 8080
130. Stats page shows: requests/sec, response time, error rate, server status
131. Configure [Monitoring System](monitoring-infrastructure) integration
132. Export metrics to Prometheus: install haproxy_exporter
133. Metrics: request rate, connection count, backend latency, error rate
134. Create Grafana dashboards: visualize load balancer performance
135. Set up alerts: email/Slack when error rate >5% or backend server down
136. Log all requests: access logs with timestamp, client IP, backend server, status code

**Logging Configuration:**
137. Configure detailed logging: log requests, responses, errors
138. Log format: timestamp, client IP, request method/URL, status code, bytes, duration
139. Send logs to centralized system: rsyslog, syslog-ng, or directly to ELK/Splunk
140. Access logs: every request for debugging and analytics
141. Error logs: only failed requests or server errors
142. Health check logs: track backend server health status changes
143. Log rotation: rotate logs daily, compress, retain 30 days
144. Log sampling: log 10% of requests if volume too high (millions per second)

**High Availability Setup:**
145. Deploy multiple load balancers: minimum 2 for high availability
146. Active-passive: primary handles traffic, secondary on standby
147. Active-active: both handle traffic, distribute via DNS or upstream load balancer
148. Virtual IP (VIP): single IP address that floats between load balancers
149. Use VRRP (Virtual Router Redundancy Protocol) or Keepalived for VIP management
150. Heartbeat: load balancers ping each other every 1-2 seconds
151. Failover: if primary fails, secondary takes over VIP in <5 seconds
152. Stateless design: no session state in load balancer (use sticky sessions if needed)

**Network Configuration:**
153. Install [Network Switches](networking-equipment) for connectivity
154. Front-end network: connects load balancer to internet router/firewall
155. Back-end network: connects load balancer to application servers
156. Use VLANs: separate front-end and back-end traffic
157. Configure static routes: route traffic to appropriate network
158. Enable jumbo frames: MTU 9000 for backend network (reduces overhead)
159. Disable spanning tree on point-to-point links: faster convergence
160. Configure link aggregation (LACP): bond multiple links for redundancy

**DNS Configuration:**
161. Point domain name to load balancer IP: api.example.com → 203.0.113.10
162. Use DNS failover: if primary load balancer fails, switch to secondary IP
163. TTL (Time To Live): 60-300 seconds for faster DNS updates
164. GeoDNS: route users to nearest load balancer based on geography
165. Health checks: DNS provider monitors load balancer, removes unhealthy IPs
166. Anycast: multiple load balancers share same IP, routing via BGP

**Security Configuration:**
167. Firewall rules: allow only ports 80 (HTTP) and 443 (HTTPS) from internet
168. Rate limiting: protect against DDoS attacks
169. IP blacklisting: block known malicious IPs
170. GeoIP blocking: block traffic from specific countries
171. Connection limits: max 10,000 connections per IP
172. SYN flood protection: use SYN cookies to prevent TCP attacks
173. HTTP request validation: reject malformed requests
174. WAF (Web Application Firewall): inspect traffic for SQL injection, XSS attacks

**Caching Configuration:**
175. Enable caching for static content: images, CSS, JavaScript, fonts
176. Cache in memory or on SSD: fast access, reduces backend load
177. Cache-Control headers: respect max-age, no-cache directives
178. Cache hit rate: aim for 60-80% for typical web applications
179. Cache size: 1-100 GB depending on content volume
180. Cache invalidation: purge cache when content updates (via API or TTL)
181. Conditional requests: support ETag and If-Modified-Since headers

**Performance Optimization:**
182. Enable TCP fast open: reduce connection setup latency
183. Increase connection tracking table: handle more concurrent connections
184. Tune TCP buffers: increase for high-bandwidth connections
185. Enable BBR congestion control: better throughput on lossy networks
186. Use CPU affinity: pin HAProxy processes to specific CPU cores
187. Enable multi-threading: HAProxy 1.8+ supports nbthread directive
188. Use eBPF: offload packet processing to kernel (XDP)
189. Optimize SSL: use hardware acceleration (Intel QAT, AES-NI)

**Testing and Validation:**
190. Load testing: simulate high traffic with Apache Bench, wrk, or Locust
191. Test with 10,000-100,000 requests per second
192. Measure latency: p50, p95, p99 response times
193. Verify health checks: stop backend server, confirm removed from pool
194. Test failover: stop primary load balancer, verify secondary takes over
195. Test SSL: verify certificate, check cipher suites, confirm TLS 1.2+ only
    - Capacity test: confirm 50K+ req/s with <10ms added latency
    - Expected performance: 100K req/s per load balancer with 16-core CPU
    - Cost: $80,000 for hardware load balancer pair (HA setup)
    - Operating cost: $2,000/month (electricity, maintenance, monitoring)
    - Alternative: cloud load balancers (AWS ELB/ALB: $20-200/month + data transfer)

**Common Load Balancer Implementations:**
- HAProxy: most popular open source, 100K+ req/s, L4/L7, free
- Nginx Plus: commercial, $2,500/year, advanced features, API
- F5 BIG-IP: hardware appliance, $30K-$300K, enterprise features, 10-100 Gbps
- AWS ELB: managed service, $20/month + $0.008/GB, auto-scaling
- Google Cloud Load Balancer: managed, $18/month + $0.008/GB, global

**Load Balancer vs Reverse Proxy vs API Gateway:**
- Load balancer: distribute traffic across servers, health checks, simple
- Reverse proxy: load balancing + caching + SSL termination + header manipulation
- API gateway: reverse proxy + authentication + rate limiting + API management

Load balancers are critical for high-availability systems. They ensure no single server is a bottleneck or single point of failure. By distributing traffic intelligently and removing failed servers automatically, load balancers enable websites and APIs to handle millions of users while maintaining reliability and performance.
