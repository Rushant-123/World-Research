---
title: "Internet Connection"
company: "ISPs (Comcast, AT&T, Verizon, etc.)"
country: "United States"
selling_price: 5
inputs:
  - name: "Fiber Optic Cable"
    cost: 1.5
    link: "fiber-optic-cable"
  - name: "Network Router"
    cost: 0.8
    link: "network-router"
  - name: "Modem"
    cost: 0.5
    link: "cable-modem"
  - name: "Network Switches"
    cost: 0.3
    link: "ethernet-switch"
  - name: "Cell Tower"
    cost: 0.4
    link: "cellular-tower"
  - name: "Data Center"
    cost: 0.6
    link: "data-center"
  - name: "Undersea Cables"
    cost: 0.3
    link: "submarine-cable"
  - name: "DNS Servers"
    cost: 0.1
    link: "dns-server"
  - name: "BGP Routers"
    cost: 0.2
    link: "bgp-router"
  - name: "Electricity"
    cost: 0.2
    link: "electricity"
  - name: "Network Technicians"
    cost: 0.1
    link: "network-engineers"
value_created: 0
---

# How to Make an Internet Connection

An internet connection provides access to the global Internet - a network of networks connecting billions of devices worldwide. Your connection links your device to your ISP (Internet Service Provider), which connects to backbone networks, which interconnect through Internet Exchange Points (IXPs), enabling worldwide communication.

## What is it?

A data connection from your device to the Internet, typically providing 50-1,000 Mbps download speed and 10-100 Mbps upload. Technologies include: fiber optic (fastest), cable (DOCSIS), DSL (phone line), cellular (4G/5G), or satellite. Data travels through multiple networks using TCP/IP protocol, routed dynamically based on network conditions.

## Steps to Make:

**Last Mile Infrastructure (Home to ISP):**

1. **For Fiber Connection:**
   - ISP runs [Fiber Optic Cable](fiber-optic-cable) from street to your home
   - Fiber: glass or plastic strand carrying light pulses
   - Single-mode fiber for long distances (8-9 micron core)
   - Install ONT (Optical Network Terminal) at your home
   - ONT converts optical signals to electrical Ethernet
   - Fiber connects to neighborhood node serving 32-128 homes
   - Node connects via fiber to ISP central office

2. **For Cable Connection:**
   - Use existing coaxial cable (originally for cable TV)
   - ISP installs [Modem](cable-modem) at your home
   - DOCSIS 3.1 modem: 1 Gbps download, 200 Mbps upload
   - Cable connects to neighborhood node (fiber node)
   - Hybrid fiber-coax (HFC) architecture
   - Node converts to fiber for backhaul to ISP

3. **For Cellular:**
   - Your device connects wirelessly to nearest [Cell Tower](cellular-tower)
   - Radio frequencies: 600 MHz to 39 GHz (5G mmWave)
   - Tower coverage radius: 1-30 km depending on frequency
   - Tower connects via fiber backhaul to mobile core network

**Home Network Setup:**
4. Connect modem/ONT to [Network Router](network-router)
5. Router assigns local IP addresses via DHCP (192.168.x.x or 10.x.x.x)
6. Router performs NAT (Network Address Translation)
7. NAT allows multiple devices to share one public IP address
8. Router includes wireless access point (Wi-Fi)
9. Wi-Fi standards: 802.11ax (Wi-Fi 6), 802.11ac (Wi-Fi 5)
10. Frequencies: 2.4 GHz (longer range) and 5 GHz (faster speed)
11. Connect devices: laptops, phones, IoT devices via Ethernet or Wi-Fi
12. Powered by [Electricity](electricity) - router draws 5-15W

**ISP Network (Regional):**
13. Your traffic flows from home to ISP's regional [Data Center](data-center)
14. ISP operates network of routers and [Network Switches](ethernet-switch)
15. Routers forward packets based on destination IP address
16. Core routers: Cisco CRS, Juniper MX series - 100 Gbps to 400 Gbps ports
17. ISP aggregates traffic from thousands of subscribers
18. Load balancing across multiple fiber paths for reliability
19. ISP assigns you public IP address from their address block
20. IPv4: 32-bit address (4 billion total, mostly exhausted)
21. IPv6: 128-bit address (340 undecillion addresses)

**DNS Resolution (Finding Websites):**
22. Your browser requests www.example.com
23. Router queries ISP's [DNS Servers](dns-server)
24. DNS = Domain Name System, converts names to IP addresses
25. DNS server checks cache - if not found, queries root servers
26. Root server points to .com TLD (top-level domain) server
27. TLD server points to example.com's authoritative nameserver
28. Authoritative server returns IP address: 93.184.216.34
29. Browser connects to that IP address
30. DNS resolution takes 10-100 milliseconds
31. Result cached for TTL (time to live) period, usually 5 minutes to 24 hours

**Internet Backbone:**
32. ISP connects to Tier 1 backbone providers (AT&T, Verizon, NTT, Deutsche Telekom)
33. Connection happens at IXP (Internet Exchange Point)
34. Major IXPs: DE-CIX (Frankfurt), AMS-IX (Amsterdam), LINX (London)
35. IXPs are physical facilities with [BGP Routers](bgp-router)
36. BGP (Border Gateway Protocol) routes traffic between autonomous systems
37. Each ISP/company is an autonomous system (AS) with unique AS number
38. BGP routers exchange routing tables
39. 900,000+ routes in global BGP table
40. Traffic takes shortest path by AS hop count (not geographic distance)
41. Redundant paths for fault tolerance

**Intercontinental Links:**
42. Traffic between continents travels through [Undersea Cables](submarine-cable)
43. 400+ submarine cables totaling 1.3 million km worldwide
44. Each cable: 96-864 fiber pairs, 200-400 Gbps per fiber pair
45. Cables laid on ocean floor at 1,000-8,000 meter depth
46. Repeaters every 50-100 km amplify optical signals
47. Powered by shore stations (10,000 volts DC)
48. Major cables: TAT-14 (Atlantic), SEA-ME-WE (Asia-Europe), Pacific Light
49. Cable laying ships: specialized vessels with cable tanks
50. Cable repair ships fix breaks (from ship anchors, earthquakes, sharks)
51. Latency: 60-120 ms cross-Atlantic, 100-180 ms transpacific

**Data Packet Journey (Example: Loading Website):**
52. Browser creates HTTP GET request
53. OS encapsulates in TCP segment (port 80 or 443)
54. TCP wrapped in IP packet (source: your IP, destination: server IP)
55. IP packet wrapped in Ethernet frame
56. Frame sent to router via Wi-Fi or Ethernet
57. Router strips Ethernet, reads IP destination
58. Router uses routing table to select next hop
59. Router encapsulates in new frame and forwards
60. Packet traverses: home router → ISP router → backbone router → destination ISP → destination server
61. Typically 10-20 hops
62. Each hop adds 1-10 ms latency
63. Total round-trip time (RTT): 10-200 ms depending on distance

**Server Response:**
64. Server receives packet, processes HTTP request
65. Server sends response: HTML, CSS, images
66. Large responses split into many packets (1,500 byte MTU)
67. TCP ensures reliable delivery: ACKs, retransmissions
68. Packets may take different paths through network
69. TCP reassembles packets in correct order at destination
70. Browser renders webpage

**Network Technologies:**

**Fiber Optic (FTTH - Fiber to the Home):**
71. Speed: 100 Mbps to 10 Gbps
72. Latency: <10 ms
73. Upstream/downstream symmetric (1 Gbps up, 1 Gbps down)
74. No interference from weather or electrical noise
75. Future-proof: capacity upgradable by changing endpoint equipment

**Cable (DOCSIS):**
76. Speed: 100 Mbps to 1 Gbps down, 10-50 Mbps up
77. Shared bandwidth in neighborhood (slowdown during peak hours)
78. Coaxial cable susceptible to interference
79. Asymmetric: upload much slower than download

**DSL (Digital Subscriber Line):**
80. Speed: 1-100 Mbps down, 0.5-10 Mbps up
81. Uses existing phone lines (twisted pair copper)
82. Speed degrades with distance from DSLAM (max 5 km)
83. Dedicated line (not shared with neighbors)

**5G Cellular:**
84. Speed: 50-1,000 Mbps down, 10-100 Mbps up
85. Latency: 10-50 ms
86. Frequency bands: Sub-6 GHz (coverage) and mmWave 24-39 GHz (speed)
87. mmWave: multi-Gbps but limited range (300 meters)
88. Mobile, no fixed infrastructure required at home

**Satellite (Starlink, HughesNet):**
89. Speed: 50-200 Mbps down, 10-20 Mbps up
90. Latency: 20-40 ms (Starlink LEO), 600+ ms (geostationary)
91. Available anywhere with clear sky view
92. Weather sensitive, expensive equipment

**Quality of Service (QoS):**
93. ISPs prioritize traffic types: VoIP > video streaming > web > file downloads
94. Ensures low latency for real-time applications
95. Some ISPs throttle specific services or protocols
96. Net neutrality regulations vary by country

**Network Congestion:**
97. Peak hours (6-11 PM): network utilization 60-90%
98. Off-peak (2-6 AM): utilization 20-40%
99. ISPs provision for 40:1 to 100:1 oversubscription ratio
100. Assumes not all subscribers use full bandwidth simultaneously
101. Bufferbloat: excessive buffering causes latency spikes under load

**IPv6 Transition:**
102. IPv4 exhaustion: last addresses allocated 2011
103. IPv6 adoption: 35-40% globally as of 2025
104. Dual-stack: ISPs provide both IPv4 and IPv6
105. NAT64/DNS64 allows IPv6-only clients to reach IPv4 servers
106. IPv6 benefits: no NAT required, better routing, improved security

**Security:**
107. ISPs filter malicious traffic at border routers
108. DDoS mitigation: detect and block flood attacks
109. BGP hijacking prevention: RPKI (Resource Public Key Infrastructure)
110. DNS filtering: block malware/phishing domains (optional)
111. Traffic inspection: deep packet inspection (DPI) for security or monitoring

**Monitoring:**
112. [Network Technicians](network-engineers) monitor 24/7 in NOC (Network Operations Center)
113. SNMP (Simple Network Management Protocol) collects metrics
114. Monitor: link utilization, packet loss, latency, errors
115. Automated alerts if metrics exceed thresholds
116. Proactive capacity planning: add capacity before saturation

**Costs:**
- Installation: $0-500 (fiber trenching can be expensive)
- Monthly service: $30-100 for 100-1,000 Mbps residential
- Equipment rental: $5-15/month for modem/router (or buy your own)
- Business connections: $100-10,000+/month for dedicated fiber

**Bandwidth Units:**
- 1 Mbps = 1,000,000 bits per second
- 100 Mbps connection downloads 12.5 MB/s (megabytes per second)
- 1 GB file takes 80 seconds at 100 Mbps
- 4K video streaming: 25-50 Mbps
- Zoom call: 2-4 Mbps
- Web browsing: 1-5 Mbps

**Global Internet Statistics:**
- Users: 5.3 billion (66% of world population)
- Websites: 1.1 billion
- IPv4 addresses in use: 4.3 billion (exhausted)
- IPv6 addresses allocated: 0.001% of total space
- Global traffic: 4.8 zettabytes per year (2025)
- Average global speed: 100-200 Mbps (varies widely by country)
- Fastest average speeds: South Korea, Singapore, Hong Kong (500+ Mbps)
- Submarine cable capacity: 600+ Tbps transoceanic

The Internet is a distributed network with no central control. Traffic routes around failures automatically via BGP. A packet from California to Tokyo might route through Seattle → Tokyo, or Los Angeles → Tokyo, or even California → New York → London → Tokyo depending on network congestion and peering agreements between ISPs. The entire global internet is held together by voluntary agreements (peering) between autonomous systems and standardized protocols (TCP/IP).
