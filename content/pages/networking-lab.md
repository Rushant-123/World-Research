---
title: "Networking Lab Setup"
company: "Cisco/GNS3/EVE-NG"
country: "USA"
selling_price: 12000.0
inputs:
  - name: "Network Routers"
    cost: 4000.0
    link: "network-router"
  - name: "Network Switches"
    cost: 3000.0
    link: "network-switch"
  - name: "Server Hardware"
    cost: 2500.0
    link: "server-computer"
  - name: "Cabling Infrastructure"
    cost: 800.0
    link: "ethernet-switch"
  - name: "Rack Cabinet"
    cost: 1200.0
    link: "rack-infrastructure"
  - name: "Network Tools"
    cost: 500.0
    link: "network-tools"
value_created: 0.0
---

## Lab Space Design and Preparation

1. Survey 400 square foot dedicated lab space with concrete flooring rated for 250 pounds per square foot distributed load to support fully loaded equipment racks.

2. Install raised floor system with 18-inch clearance providing 12 inches for underfloor cabling and 6 inches for HVAC airflow distribution across 16 perforated tiles.

3. Deploy dedicated 30-ton precision cooling unit maintaining 68°F ±2°F temperature and 45% ±5% relative humidity with hot aisle/cold aisle containment architecture.

4. Install electrical infrastructure with dual 208V 3-phase 100A circuits feeding separate distribution panels, providing 34.6 kW total capacity with N+1 redundancy.

5. Mount eight dedicated 20A 120V circuits with NEMA 5-20R receptacles spaced every 6 feet along perimeter walls for test equipment and workstations.

6. Ground all equipment racks to building ground with #6 AWG copper conductors maintaining less than 1 ohm resistance to earth ground per IEEE 1100 standards.

7. Install LED lighting system providing 750 lux illumination at work surface height with emergency backup lighting maintaining 150 lux minimum during power failures.

8. Deploy environmental monitoring system with 8 temperature sensors, 8 humidity sensors, and 4 water detection cables under raised floor reporting to central dashboard.

9. Mount fire suppression system using FM-200 clean agent with 12 discharge nozzles providing coverage for entire lab space without damaging electronic equipment.

10. Install security system with badge reader access control, motion detectors, and 8 IP cameras providing complete coverage with 30-day video retention.

## Rack Infrastructure Installation

11. Position four 42U server racks (24 inches wide, 42 inches deep) in two rows with 48-inch hot aisle and 48-inch cold aisle spacing for optimal airflow.

12. Level each rack to within 1/16 inch using adjustable feet and secure to raised floor using seismic anchor bolts rated for Zone 4 earthquake loads.

13. Install vertical cable management arms on both sides of each rack with 6-inch wide channels and toolless mounting fingers for organized cable routing.

14. Mount 16-outlet vertical PDUs in rear of each rack providing 208V single-phase power with per-outlet current monitoring and remote power cycling capability.

15. Install blanking panels in all unused rack spaces to prevent hot air recirculation and maintain proper front-to-back airflow through populated equipment.

16. Deploy rack-mounted environmental sensors monitoring intake temperature at bottom, middle, and top positions with alert thresholds at 77°F and 82°F.

17. Label each rack with identifier (LAB-R01 through LAB-R04) using 2-inch high reflective letters visible from lab entrance for emergency responder navigation.

18. Install rack-mounted LED work lights with motion sensors providing 1000 lux illumination inside each rack for maintenance and troubleshooting activities.

19. Mount cable runway system overhead connecting all four racks with 12-inch wide ladder rack supporting maximum load of 50 pounds per linear foot.

20. Bond all racks together and to building ground using #6 AWG copper busbars maintaining electrical continuity across entire rack infrastructure.

## Core Router Deployment

21. Install Cisco ISR 4451 router in LAB-R01 rack at 38U position, securing with rack mount ears and connecting to redundant PDU outlets on separate circuits.

22. Connect router console port to terminal server using Cisco RJ-45 to DB-9 rollover cable enabling remote out-of-band management access.

23. Power on router and interrupt boot sequence within 60 seconds, entering ROMMON mode by sending break signal to bypass startup configuration.

24. Configure router boot parameters setting config-register to 0x2102, boot system flash pointing to IOS-XE 17.6.3a image on bootflash filesystem.

25. Perform initial configuration setting hostname to CORE-RTR-01, enabling secret with SHA-256 encrypted password, and disabling unused services including HTTP server and CDP on WAN interfaces.

26. Configure management interface GigabitEthernet0/0/0 with IP address 10.100.0.1/24, enabling SSH version 2 with RSA 4096-bit keys and 5-minute timeout.

27. Create local user accounts for administrative access with privilege level 15, enforcing minimum 14-character passwords with complexity requirements.

28. Enable logging to syslog server at 10.100.10.50 with facility local6, severity level informational, including millisecond timestamps and source interface.

29. Configure NTP client synchronization to GPS-referenced stratum-1 server at 10.100.10.100 with authentication using MD5 key, setting local time zone to UTC.

30. Install four 1000BASE-LX SFP modules in router GigabitEthernet slots connecting to distribution switches via single-mode fiber with LC connectors.

## Distribution Switch Configuration

31. Rack mount two Cisco Catalyst 9300-48P switches in LAB-R01 at positions 35U and 34U, installing power supplies in slots 1 and 2 for redundancy.

32. Stack both switches using 100G StackWise-480 cables connecting stack ports 1 and 2 in ring topology, setting stack priority to 15 on master and 14 on member.

33. Power on switch stack and verify stack membership with "show switch" command confirming both members active with stack bandwidth of 480 Gbps bidirectional.

34. Configure stack master as DIST-SW-01 with management IP 10.100.0.11/24 on VLAN 100, enabling IP routing for inter-VLAN communication.

35. Create VLANs: 10 (Users), 20 (Servers), 30 (Management), 40 (Storage), 50 (Voice), 60 (Guest), 70 (DMZ), 80 (IoT), 90 (Security), 100 (Infrastructure).

36. Configure VLAN interfaces for each VLAN with IP addresses in respective subnets: 10.10.x.1/24 where x corresponds to VLAN number, enabling HSRP for gateway redundancy.

37. Set up trunk ports to core router using interfaces TenGigabitEthernet1/1/1 and 2/1/1 with "switchport mode trunk" and allowing all VLANs except native VLAN 999.

38. Configure PortFast and BPDU Guard on all access ports to prevent spanning tree topology changes and protect against rogue switch connections.

39. Enable DHCP snooping globally and on all access VLANs, trusting only uplink ports to core router and DHCP server ports to prevent rogue DHCP attacks.

40. Deploy Dynamic ARP Inspection (DAI) on all VLANs with rate limiting of 15 packets per second to prevent ARP spoofing and man-in-the-middle attacks.

## Access Layer Switch Deployment

41. Install six Cisco Catalyst 2960-X switches in LAB-R02 and LAB-R03 racks (three per rack) at positions 30U, 28U, and 26U for access layer connectivity.

42. Configure each access switch with hostname pattern ACCESS-SW-0X (where X is 1-6) and management IP addresses 10.100.0.21 through 10.100.0.26 in VLAN 100.

43. Establish dual uplinks from each access switch to distribution switches using GigabitEthernet0/1 and 0/2 configured as LACP EtherChannel with load balancing based on source-destination IP and MAC.

44. Configure 24 access ports on each switch with "switchport mode access", "switchport access vlan X" based on port assignment, and "spanning-tree portfast" for workstation connections.

45. Enable PoE+ on all 24 ports providing 30 watts per port with priority levels: critical for IP phones, high for wireless APs, low for cameras and sensors.

46. Deploy 802.1X port-based authentication with RADIUS server at 10.100.0.50, configuring MAB as fallback for devices without supplicant support.

47. Create authentication policies: corporate devices to VLAN 10, guest devices to VLAN 60, failed authentication to quarantine VLAN 95 with restricted ACL.

48. Configure storm control on all access ports limiting broadcast to 10%, multicast to 10%, and unknown unicast to 10% of port bandwidth to prevent network flooding.

49. Enable LLDP-MED on voice VLANs automatically assigning IP phones to VLAN 50 with QoS DSCP marking of EF (46) for voice traffic priority.

50. Set up port security limiting MAC addresses to 3 per port with violation action of restrict, logging security violations to syslog server.

## Structured Cabling Infrastructure

51. Install cable management vertical ducts in each rack with hinged covers, creating separate channels for copper network cables, fiber optic cables, and power cables.

52. Deploy Cat6A patch panels in each rack with 48-port density, terminating horizontal cabling from workspace outlets using 110-punch down blocks.

53. Create fiber optic patch panel in LAB-R01 with 96 LC duplex ports, organizing single-mode and multimode fibers in separate rows with color-coded adapters.

54. Run 10-meter single-mode LC-LC duplex fiber cables from core router to distribution switches, testing insertion loss below 0.5 dB at 1310nm and 1550nm wavelengths.

55. Install 5-meter Cat6A copper patch cables from distribution switches to access switches, verifying all 8 conductors properly terminated with less than 0.1 ohm DC resistance.

56. Label every cable at both ends using Brother P-Touch labels with format: SOURCE-PORT:DEST-PORT (example: CORE-RTR-01-Gi0/0/1:DIST-SW-01-Te1/1/1).

57. Create cable color coding standard: blue for user VLANs, yellow for server VLANs, red for management, green for voice, gray for infrastructure, black for uplinks.

58. Document all cable runs in Excel spreadsheet tracking source device/port, destination device/port, cable type, length, installation date, and test results.

59. Install velcro cable ties every 12 inches along vertical cable management, avoiding zip ties which can create pinch points damaging cable jackets.

60. Perform cable certification testing on all Cat6A cables using Fluke DSX-5000 verifying performance to 500 MHz including NEXT, FEXT, return loss, and propagation delay.

## IP Addressing and Subnetting Scheme

61. Design hierarchical IP addressing plan using 10.0.0.0/8 private space, allocating /16 blocks by location and /24 subnets by VLAN and function.

62. Assign 10.10.0.0/16 block to main lab site, subdividing into VLAN-based /24 networks: 10.10.10.0/24 for VLAN 10, 10.10.20.0/24 for VLAN 20, continuing sequentially.

63. Reserve first 10 addresses in each subnet for network infrastructure: .1 for primary gateway (HSRP virtual IP), .2 and .3 for HSRP router addresses.

64. Allocate 10.10.10.11 through 10.10.10.254 as DHCP scope for user VLAN, excluding static assignments in 10.10.10.1-10 range for printers and shared resources.

65. Configure point-to-point /30 subnets for router-to-router links: 10.100.1.0/30, 10.100.1.4/30, 10.100.1.8/30 enabling efficient address utilization with only 2 host addresses per link.

66. Establish loopback interfaces on all routers using 10.255.255.0/24 addressing, assigning .1 for CORE-RTR-01, .2 for EDGE-RTR-01, providing stable routing protocol identifiers.

67. Create management subnet 10.100.0.0/24 for all network device management interfaces including switches, routers, access points, and out-of-band management processors.

68. Deploy DNS infrastructure with primary DNS at 10.100.10.53 and secondary at 10.100.10.54, configuring forward and reverse lookup zones for lab.local domain.

69. Configure DHCP scopes on core router for each VLAN with appropriate options: option 3 (default gateway), option 6 (DNS servers), option 15 (domain name), option 42 (NTP servers).

70. Set DHCP lease time to 8 hours for user devices, 24 hours for printers and IoT devices, enabling conflict detection with 2 ping attempts before address assignment.

## VLAN Segmentation and Trunking

71. Configure native VLAN 999 on all trunk ports with no IP addressing, preventing VLAN hopping attacks by isolating untagged traffic to unused VLAN.

72. Enable VTP version 3 with domain name LAB-DOMAIN, setting distribution switches to primary server mode and access switches to client mode for centralized VLAN management.

73. Create VLAN 10 (Users) with name "Corporate-Users" allowing workstations, laptops, and personal devices with standard internet access and internal resource permissions.

74. Configure VLAN 20 (Servers) named "Production-Servers" hosting web servers, database servers, file servers with restricted access requiring authentication through firewalls.

75. Establish VLAN 30 (Management) named "Network-Management" dedicated to device management interfaces, accessible only from jump hosts with MFA authentication.

76. Deploy VLAN 40 (Storage) named "iSCSI-Storage" for storage area network traffic with jumbo frames enabled (MTU 9000) optimizing large data transfers.

77. Set up VLAN 50 (Voice) named "VoIP-Phones" with QoS priority queue, DSCP marking EF (46), and separate DHCP scope providing TFTP server option 150.

78. Create VLAN 60 (Guest) named "Guest-Wireless" with captive portal authentication, rate limiting to 10 Mbps per client, and no access to internal networks.

79. Configure VLAN 70 (DMZ) named "Public-DMZ" hosting externally accessible services with stateful firewall inspection and IPS monitoring on all traffic flows.

80. Establish VLAN 80 (IoT) named "IoT-Devices" for building automation, security cameras, environmental sensors with strict outbound filtering allowing only required protocols.

## Routing Protocol Implementation

81. Enable OSPF routing protocol on core and distribution routers using process ID 1, area 0 for backbone, assigning router IDs matching loopback interface addresses.

82. Configure OSPF network statements advertising connected subnets: network 10.10.0.0 0.0.255.255 area 0 for all user VLANs, network 10.100.0.0 0.0.0.255 area 0 for management.

83. Set OSPF reference bandwidth to 100000 (100 Gbps) ensuring accurate cost calculations for 1G, 10G, 40G, and 100G interface speeds.

84. Enable OSPF authentication using MD5 on all interfaces with key ID 1 and rotating keys every 90 days, preventing unauthorized routers from joining topology.

85. Configure OSPF timers: hello interval 10 seconds, dead interval 40 seconds on LAN interfaces; hello 30 seconds, dead 120 seconds on point-to-point WAN links.

86. Tune OSPF for fast convergence enabling BFD (Bidirectional Forwarding Detection) on all critical links with 300ms detection time and 100ms transmit intervals.

87. Implement OSPF route filtering using prefix-lists preventing advertisement of management, guest, and DMZ subnets to specific areas maintaining security boundaries.

88. Deploy BGP for external connectivity using AS 65001 for lab environment, establishing eBGP peering with ISP routers and iBGP full mesh between internal routers.

89. Configure BGP attributes: local preference 150 for primary ISP, 100 for backup ISP; MED 50 for primary uplink, 100 for secondary uplink influencing traffic paths.

90. Enable BGP route dampening with penalty threshold 2000, suppress limit 3000, reuse limit 1000, half-life 15 minutes preventing routing instability from flapping routes.

## High Availability Configuration

91. Configure HSRP (Hot Standby Router Protocol) version 2 on distribution switches for each VLAN using group numbers matching VLAN IDs with millisecond timers.

92. Set HSRP priorities: primary router 110, secondary router 100, enabling preemption with 60-second delay ensuring stable failover without excessive flapping.

93. Configure HSRP authentication using MD5 key string, tracking upstream interfaces so backup becomes active if primary loses connectivity to core router.

94. Deploy VRRP (Virtual Router Redundancy Protocol) on edge routers providing default gateway redundancy for internet-facing subnets with sub-second failover.

95. Enable interface tracking on HSRP routers monitoring uplink ports, decrementing priority by 20 if link fails triggering automatic failover to backup gateway.

96. Configure EtherChannel using LACP active mode on all uplinks creating logical interfaces with aggregate bandwidth and automatic member failure detection.

97. Set up redundant trunk paths between distribution and core layers, configuring spanning tree root bridge priority to 4096 on primary, 8192 on secondary.

98. Deploy Rapid PVST+ spanning tree protocol with portfast on access ports, BPDU guard protecting against loops, and root guard preventing rogue root bridges.

99. Enable UDLD (Unidirectional Link Detection) aggressive mode on all fiber connections detecting and disabling ports with unidirectional traffic flow preventing loops.

100. Configure switch stack redundancy with dual power supplies on separate circuits, redundant stack cables in ring topology, and stack master priority ensuring deterministic failover.

## Network Simulation Environment

101. Deploy VMware ESXi 7.0 hypervisor on Dell PowerEdge R740 server with dual Xeon Gold 6248R CPUs (48 cores total), 768GB DDR4-2933 RAM, and 8TB NVMe storage.

102. Create vSwitch with 10 virtual port groups mapping to physical VLANs, configuring promiscuous mode, MAC address changes, and forged transmits for packet capture capabilities.

103. Install GNS3 VM appliance version 2.2.37 allocating 16 vCPUs, 64GB RAM, 500GB thin-provisioned storage, and direct passthrough access to physical NICs for realistic latency.

104. Configure GNS3 server connecting to compute servers via API, distributing simulations across 4 physical servers balancing CPU and memory utilization.

105. Import Cisco IOS images for routers (c7200, ISR4000), switches (3750, 9000), and ASA firewalls enabling realistic device simulation with full feature sets.

106. Deploy EVE-NG Pro on separate server with 32 cores, 256GB RAM, running Ubuntu 20.04 LTS hosting large-scale topologies with 100+ simulated network devices.

107. Create template-based network topologies: small branch office (2 routers, 3 switches), medium enterprise (5 routers, 12 switches), ISP core (20 routers, BGP full tables).

108. Configure resource limits per simulation: maximum 8 vCPUs, 16GB RAM, 50 network interfaces ensuring fair allocation and preventing single topology consuming all resources.

109. Enable nested virtualization allowing Docker containers inside GNS3 VMs running Mininet for SDN testing and network function virtualization experiments.

110. Integrate network simulation tools with physical lab allowing virtual routers to peer with physical devices over VLAN trunks testing hybrid scenarios.

## Virtual Machine Lab Environment

111. Create Windows Server 2022 domain controller VM with 4 vCPUs, 16GB RAM, 150GB storage, configuring Active Directory Domain Services for lab.local domain.

112. Deploy Linux Ubuntu 22.04 LTS server VM with 8 vCPUs, 32GB RAM, 500GB storage running containerized services including web servers, databases, and monitoring tools.

113. Install Kali Linux 2023.1 penetration testing VM with 8 vCPUs, 16GB RAM, 200GB storage, configuring virtual network adapters for VLAN access and packet capture.

114. Configure Windows 10 Enterprise workstation VM template with 2 vCPUs, 8GB RAM, 80GB storage, domain joined, serving as baseline for cloning test endpoints.

115. Deploy pfSense firewall VM with 4 vCPUs, 8GB RAM, 100GB storage, configuring WAN, LAN, and DMZ interfaces with dedicated virtual NICs per zone.

116. Create VyOS router VM with 2 vCPUs, 4GB RAM, 40GB storage running BGP, OSPF, and MPLS protocols for advanced routing protocol testing.

117. Install Cisco DNA Center virtual appliance (3-node cluster) with 32 vCPUs, 256GB RAM per node, 3TB storage for intent-based networking and automation testing.

118. Deploy security onion VM with 16 vCPUs, 64GB RAM, 2TB storage running Suricata IDS, Zeek network analyzer, and Elastic Stack for security monitoring.

119. Configure VMware vCenter Server managing all hypervisors, enabling vMotion for live migration, DRS for load balancing, and HA for automatic failover.

120. Set up snapshot schedules for all VMs: hourly snapshots retained 24 hours, daily snapshots retained 7 days, weekly snapshots retained 4 weeks with automated cleanup.

## Traffic Generation and Testing

121. Install Spirent TestCenter with 4-port 10GbE module in LAB-R04 rack generating realistic traffic patterns testing throughput, latency, jitter, and packet loss.

122. Configure Spirent traffic profiles: HTTP web browsing (port 80/443), video streaming (UDP 1-10 Mbps), VoIP calls (G.711 codec), and file transfers (FTP/SMB).

123. Deploy iPerf3 servers on dedicated VMs in each VLAN measuring TCP throughput, UDP bandwidth, packet loss percentage, and bidirectional performance metrics.

124. Create baseline performance tests running 24-hour continuous traffic at 70% link utilization documenting latency percentiles (50th, 95th, 99th) and zero packet loss thresholds.

125. Configure Cisco IOS IP SLA probes on all routers measuring ICMP echo latency to critical destinations every 60 seconds with 5000ms threshold alerts.

126. Deploy TRex traffic generator on bare-metal server with Intel XL710 40GbE NICs generating stateful TCP flows at 10 million connections per second rates.

127. Install Ostinato packet crafter creating custom protocols, malformed packets, and edge cases testing firewall inspection, IPS detection, and device stability.

128. Configure network emulation with Netem on Linux bridge introducing controllable latency (1-500ms), jitter (1-100ms), packet loss (0.1-10%), and bandwidth restrictions.

129. Deploy IXIA BreakingPoint application simulator generating exploits, DoS attacks, and malware traffic in isolated VLAN testing security device effectiveness.

130. Create automated test suites using Python Paramiko library running 500+ test cases validating routing convergence, failover times, and QoS policy enforcement.

## Packet Capture Infrastructure

131. Deploy dedicated packet capture server with dual Intel Xeon Gold 6248R CPUs, 512GB RAM, 24TB RAID-10 storage array sustaining 20 Gbps continuous capture rates.

132. Install Ubuntu 22.04 LTS with tuned kernel parameters: net.core.rmem_max=134217728, net.core.netdev_max_backlog=300000 optimizing packet buffer handling.

133. Configure 8x 10GbE Intel X710 NICs in SR-IOV mode with dedicated CPU cores pinned to network interrupt handlers minimizing packet loss during capture.

134. Deploy Wireshark 4.0.3 with tshark command-line utility capturing to multiple files with 2GB rotation size and pcapng format including interface statistics.

135. Install Moloch full packet capture system with Elasticsearch backend indexing packet metadata, enabling rapid search across terabytes of captured traffic by IP, port, protocol.

136. Configure SPAN (Switched Port Analyzer) on distribution switches mirroring all inter-VLAN traffic to dedicated monitoring port connected to capture server.

137. Deploy network TAPs (Test Access Points) on critical fiber links providing passive full-duplex copies of traffic without introducing latency or failure points.

138. Set up remote packet capture using rpcapd daemon on strategic routers enabling Wireshark remote capture of specific interfaces without local console access.

139. Create capture filters optimizing performance: capture only TCP SYN packets for connection tracking, exclude broadcast/multicast reducing data volume by 60%.

140. Configure ring buffer captures with 10GB memory allocation retaining most recent 5 minutes of traffic in RAM enabling retroactive analysis of transient issues.

## Network Monitoring Implementation

141. Deploy LibreNMS monitoring system on Ubuntu VM with 8 vCPUs, 32GB RAM, 1TB SSD storage discovering and monitoring 150+ network devices via SNMP polling.

142. Configure SNMPv3 on all network devices with authentication using SHA-256, privacy using AES-256, unique credentials per device preventing unauthorized monitoring access.

143. Enable SNMP trap reception on monitoring server port 162 capturing device-generated alerts including link state changes, hardware failures, and security events.

144. Install Grafana 9.4.3 with Prometheus data source creating real-time dashboards displaying interface utilization, CPU/memory usage, packet rates, and error counters.

145. Deploy InfluxDB time-series database storing network metrics with 10-second resolution, 90-day retention for raw data, 1-year retention for 5-minute aggregates.

146. Configure Telegraf agents on all Linux VMs collecting system metrics (CPU, memory, disk, network) and custom scripts polling application-specific performance indicators.

147. Set up NetFlow v9 export on all routers sending flow records to collector at 10.100.10.70 enabling traffic analysis by source/destination, protocol, and application.

148. Deploy Elastiflow analyzer processing 50,000 NetFlow records per second, indexing into Elasticsearch, providing 90-day flow history with Kibana visualization dashboards.

149. Install PRTG Network Monitor with 1000 sensors monitoring device availability via ICMP, service availability via TCP port checks, and bandwidth utilization via SNMP.

150. Create custom SNMP sensors polling Cisco-specific OIDs: cpmCPUTotal5minRev (CPU), cempMemPoolHCUsed (memory), ciscoEnvMonTemperatureStatusValue (temperature).

## Advanced Monitoring Dashboards

151. Design executive dashboard displaying lab health: 98 devices online status, aggregate bandwidth utilization 4.2 Gbps, average latency 2.3ms, zero critical alerts.

152. Create network topology map using LibreNMS auto-discovery showing Layer 2 adjacencies via LLDP/CDP, Layer 3 routing via OSPF/BGP, color-coding links by utilization.

153. Configure capacity planning dashboard projecting interface exhaustion dates based on 90-day growth trends, alerting when forecast shows 80% utilization within 60 days.

154. Deploy application performance dashboard tracking response times for key services: DNS queries <10ms, DHCP assignments <50ms, HTTP requests <200ms, database queries <100ms.

155. Create security monitoring dashboard displaying firewall block counts, IPS alerts by severity, failed authentication attempts, and rogue device detection events.

156. Configure SLA monitoring dashboard tracking uptime percentage (target 99.9%), mean time between failures (MTBF >720 hours), mean time to repair (MTTR <30 minutes).

157. Deploy device inventory dashboard listing all network equipment with serial numbers, software versions, hardware models, warranty expiration dates, and license compliance status.

158. Create power monitoring dashboard showing per-device power consumption (watts), per-rack power usage (kVA), UPS load percentage, and monthly power costs.

159. Configure environmental monitoring dashboard displaying temperature gradients across racks, humidity levels, airflow CFM rates, and CRAC unit operational status.

160. Set up change management dashboard tracking configuration changes with timestamps, user attribution, before/after diffs, and automated backup verification status.

## Security Zone Architecture

161. Implement defense-in-depth strategy with five security zones: Trusted (internal users), Restricted (servers), Management (network devices), DMZ (public services), Untrusted (internet).

162. Deploy Cisco ASA 5525-X firewall with FirePOWER services between zones enforcing stateful inspection, application control, URL filtering, and malware detection.

163. Configure security levels: Trusted=100, Restricted=75, Management=50, DMZ=25, Untrusted=0 with default deny policies requiring explicit permits between lower and higher zones.

164. Create access control lists permitting only required protocols: Trusted to Restricted allows HTTPS (443), SSH (22), SMB (445); denying all other ports.

165. Deploy next-generation firewall features: SSL/TLS decryption for outbound traffic, antivirus scanning at wire speed, sandboxing suspicious files before delivery.

166. Configure intrusion prevention system (IPS) with Snort 3 ruleset inspecting 10 Gbps throughput, blocking exploit attempts, scanning evasion, and command-and-control traffic.

167. Enable geolocation filtering blocking traffic from high-risk countries (North Korea, Iran, Syria) while allowing business-critical regions with logging for compliance.

168. Deploy Security Information and Event Management (SIEM) system aggregating logs from 200+ sources, correlating events, and detecting multi-stage attack patterns.

169. Configure automated response playbooks: detect port scan > block source IP for 24 hours; detect brute force > trigger account lockout; detect malware > isolate infected host to quarantine VLAN.

170. Implement network access control (NAC) with Cisco ISE authenticating devices via 802.1X, assigning VLAN based on posture assessment checking OS patches, antivirus status, and encryption compliance.

## Quality of Service Configuration

171. Configure hierarchical QoS policy with 6 classes: Voice (EF, 20% bandwidth guarantee), Video (AF41, 25%), Critical-Data (AF31, 20%), Best-Effort (default, 25%), Scavenger (CS1, 5%).

172. Enable DSCP-based classification at network edge trusting markings from IP phones (EF), remarking all other traffic to default (DSCP 0) preventing QoS abuse.

173. Deploy NBAR (Network Based Application Recognition) classifying applications by deep packet inspection: Office365, Zoom, Netflix, BitTorrent with appropriate QoS treatment.

174. Configure priority queuing with low-latency queuing (LLQ) allocating dedicated 30% bandwidth to voice class, guaranteeing <150ms latency, <30ms jitter, <1% packet loss.

175. Enable Weighted Random Early Detection (WRED) on Best-Effort class beginning drops at 70% queue depth, preventing tail drop and TCP global synchronization.

176. Configure bandwidth reservations per-interface: GigabitEthernet interfaces allocate 200 Mbps to voice, 250 Mbps to video, 300 Mbps to critical data with strict enforcement.

177. Deploy AutoQoS on access switches automatically detecting Cisco IP phones, configuring appropriate trust boundaries, and applying standard QoS templates.

178. Enable QoS statistics collection exporting per-class packet counts, drop counts, queue depths, and average delays to monitoring system for SLA verification.

179. Configure traffic shaping limiting guest VLAN to 100 Mbps total bandwidth with per-client policers restricting individual devices to 10 Mbps preventing bandwidth hogging.

180. Deploy Class-Based Weighted Fair Queuing (CBWFQ) on WAN links allocating guaranteed minimums while allowing unused bandwidth sharing during low-congestion periods.

## Network Automation and Orchestration

181. Install Ansible 2.14 automation platform with ansible-core and network device collections (cisco.ios, cisco.nxos, arista.eos) managing 150+ devices via SSH.

182. Create Ansible inventory organizing devices by role (routers, switches, firewalls), location (rack01-04), and function (core, distribution, access) enabling targeted playbook execution.

183. Develop configuration templates using Jinja2 templating: interface configurations, routing protocols, ACLs, QoS policies with variables for device-specific customization.

184. Deploy Ansible Tower (AWX) with web interface, role-based access control, job scheduling, and credential management automating daily configuration audits and compliance checks.

185. Create Python scripts using Netmiko library performing bulk configuration changes across 50 switches simultaneously with automatic rollback on error detection.

186. Deploy Git repository storing all network configurations with CI/CD pipeline: configuration change > automated syntax validation > simulation testing > peer review > scheduled deployment.

187. Implement configuration backup automation running nightly via Ansible backing up configurations to three locations: local NAS, cloud storage, off-site tape maintaining 365-day retention.

188. Configure compliance validation comparing running configurations against security baselines detecting violations: weak SNMP communities, disabled logging, missing authentication.

189. Deploy network telemetry using YANG data models and NETCONF protocol streaming real-time operational data at 1-second intervals for immediate anomaly detection.

190. Create self-service portal allowing developers to request VLAN provisioning, firewall rule additions, DNS entries via web forms triggering automated Ansible workflows.

## Documentation and Knowledge Management

191. Create detailed network diagram using Microsoft Visio showing physical topology with rack elevations, logical topology with IP addressing, and VLAN assignments across 8 detailed sheets.

192. Document IP address management in Excel spreadsheet tracking all allocated subnets, VLAN assignments, DHCP scopes, static assignments with utilization percentage and growth projections.

193. Maintain port assignment spreadsheet mapping every physical port to connected device, VLAN assignment, PoE status, cable number, patch panel location with color-coded status indicators.

194. Generate automated network documentation using Netbox IPAM system maintaining source of truth for all devices, interfaces, cables, VLANs, IP addresses with REST API integration.

195. Establish standard operating procedures documenting common tasks: adding new devices (15 steps), troubleshooting connectivity (20 steps), performing software upgrades (25 steps), recovering from failures (30 steps) with screenshots and command examples ensuring consistent operations across team members.
