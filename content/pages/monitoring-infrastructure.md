---
title: "Monitoring Infrastructure"
company: "Multiple Vendors"
country: "Global"
selling_price: 60000
inputs:
  - name: "Monitoring Servers"
    cost: 20000
    link: "server-hardware"
  - name: "Time-Series Database"
    cost: 10000
    link: "time-series-database"
  - name: "Log Storage System"
    cost: 12000
    link: "storage-array"
  - name: "Monitoring Software"
    cost: 8000
    link: "monitoring-software"
  - name: "Alerting System"
    cost: 5000
    link: "alerting-service"
  - name: "Visualization Tools"
    cost: 3000
    link: "grafana-dashboard"
  - name: "Network Equipment"
    cost: 2000
    link: "networking-equipment"
value_created: 0
---

# How to Make Monitoring Infrastructure

A monitoring infrastructure collects, stores, visualizes, and alerts on metrics, logs, and traces from servers, applications, and network devices. Provides real-time visibility into system health, performance, and availability, enabling rapid incident detection and troubleshooting.

## What is it?

Comprehensive observability platform: time-series metrics (Prometheus, InfluxDB), log aggregation (Elasticsearch, Loki), distributed tracing (Jaeger), visualization (Grafana), and alerting (PagerDuty, Opsgenie). Collects data from 100s-1000s of servers via agents, processes millions of metrics per second, stores 30-90 days data, provides dashboards, and alerts on-call engineers within seconds of incidents.

## Steps to Make:

**Architecture Planning:**
1. Define monitoring requirements: metrics, logs, traces, or all three (observability)
2. Metrics: numeric time-series data (CPU %, memory, requests/sec)
3. Logs: text records of events (errors, access logs, application logs)
4. Traces: distributed transaction tracking across microservices
5. Determine scale: number of hosts, metrics per host, retention period
6. Small: <100 hosts, medium: 100-1000 hosts, large: 1000+ hosts
7. Calculate storage: metrics at 10-second intervals = 8,640 points/day per metric
8. Example: 1,000 hosts × 100 metrics × 8,640 points × 8 bytes = 6.9 GB/day

**Monitoring Server Provisioning:**
9. Provision [Monitoring Servers](server-hardware) for different components
10. Metrics server: Prometheus or InfluxDB (16-32 cores, 64-128 GB RAM)
11. Log server: Elasticsearch cluster (32-64 cores, 128-256 GB RAM per node)
12. Visualization server: Grafana (8-16 cores, 16-32 GB RAM)
13. Alerting server: Alertmanager or PagerDuty integration (4-8 cores, 8-16 GB RAM)
14. Deploy as VMs or containers (Kubernetes) for flexibility
15. Separate workloads: metrics, logs, visualization on different servers
16. High availability: 3+ node cluster for production (no single point of failure)

**Time-Series Database Setup:**
17. Deploy [Time-Series Database](time-series-database) for metrics storage
18. Prometheus: pull-based, excellent for infrastructure monitoring, PromQL query language
19. InfluxDB: push-based, high write throughput, InfluxQL or Flux query language
20. VictoriaMetrics: Prometheus-compatible, better performance at scale
21. Install Prometheus: docker run -p 9090:9090 prom/prometheus
22. Configure retention: --storage.tsdb.retention.time=90d (keep 90 days)
23. Configure storage path: --storage.tsdb.path=/data/prometheus
24. Storage size: 1-10 TB depending on metrics volume and retention
25. Use SSD storage: time-series databases are I/O intensive

**Prometheus Configuration:**
26. Configure Prometheus scrape targets in prometheus.yml
27. Scrape interval: 10-60 seconds (balance freshness vs storage)
28. Static targets: manually list all servers to monitor
29. Service discovery: automatically discover targets from Kubernetes, Consul, AWS
30. Example: scrape_configs for monitoring Kubernetes pods
31. Relabeling: transform labels, drop unwanted metrics, rename
32. Remote write: send metrics to long-term storage (Thanos, Cortex, Mimir)
33. Federation: aggregate metrics from multiple Prometheus servers

**Metrics Collection Agents:**
34. Install metrics exporters on all monitored systems
35. Node Exporter: system metrics (CPU, memory, disk, network) for Linux
36. Windows Exporter: system metrics for Windows servers
37. cAdvisor: container metrics (CPU, memory per container)
38. Blackbox Exporter: probe endpoints (HTTP, ICMP, TCP, DNS)
39. Custom exporters: application-specific metrics (e.g., nginx_exporter, postgres_exporter)
40. Application instrumentation: add metrics to application code
41. Prometheus client libraries: Go, Python, Java, Node.js
42. Example: counter for requests, gauge for queue depth, histogram for latency

**Key Metrics to Monitor:**
43. System metrics: CPU utilization (%), memory usage (%), disk space (%)
44. Network metrics: bytes in/out, packet drops, errors
45. Application metrics: requests per second, error rate, response time (p50, p95, p99)
46. Database metrics: queries per second, connection pool, cache hit rate, replication lag
47. Infrastructure metrics: power usage, temperature, fan speed
48. Business metrics: signups per hour, revenue per minute, active users
49. The four golden signals: latency, traffic, errors, saturation
50. RED method: Rate (requests/sec), Errors (error rate), Duration (latency)

**Log Collection Setup:**
51. Deploy log aggregation system: Elasticsearch + Logstash + Kibana (ELK stack)
52. Or Grafana Loki: designed for logs, integrates with Grafana, cheaper than ELK
53. Or Splunk: commercial, powerful search, expensive ($$$/GB/day)
54. Install Elasticsearch cluster: 3+ nodes for production
55. Elasticsearch node roles: master (coordination), data (storage), ingest (processing)
56. Configure [Log Storage System](storage-array): 1-10 TB depending on log volume
57. Retention policy: 7-90 days (logs take lots of storage)
58. Hot-warm-cold architecture: new logs on SSD, old logs on HDD, archive to S3

**Log Shipping Agents:**
59. Install log shippers on all servers: Filebeat, Fluentd, or Vector
60. Filebeat: lightweight, forwards logs to Logstash or Elasticsearch
61. Fluentd: more powerful, can transform logs before shipping
62. Configure log paths: /var/log/syslog, /var/log/nginx/*.log, /var/log/app/*.log
63. Parse log formats: JSON, syslog, custom (use grok patterns)
64. Add metadata: hostname, environment (prod/staging), service name
65. Buffer logs locally: if network fails, don't lose logs
66. Rate limiting: prevent log flood from overwhelming system

**Elasticsearch Configuration:**
67. Configure Elasticsearch cluster in /etc/elasticsearch/elasticsearch.yml
68. cluster.name: production-logs
69. node.name: es-node-01
70. discovery.seed_hosts: list of other Elasticsearch nodes
71. Index settings: number of shards and replicas
72. Example: 5 primary shards, 1 replica per shard (6× storage for redundancy)
73. Index lifecycle management (ILM): automatically delete old indices
74. Example: rollover daily, delete after 30 days
75. Tune JVM heap: -Xmx32g (set to 50% of RAM, max 32GB for best performance)

**Kibana Setup:**
76. Install Kibana for Elasticsearch log visualization
77. Kibana connects to Elasticsearch cluster
78. Create index patterns: define which indices to search
79. Discover view: search logs with Lucene query syntax
80. Example query: status:500 AND service:api AND @timestamp:[now-1h TO now]
81. Visualizations: pie charts, line graphs, heat maps from log data
82. Dashboards: combine multiple visualizations on one page
83. Saved searches: frequently used queries for quick access
84. Alerting: trigger alerts based on log patterns (e.g., >100 errors in 5 min)

**Distributed Tracing:**
85. Deploy distributed tracing for microservices: Jaeger, Zipkin, or Tempo
86. Tracing tracks requests across multiple services
87. Shows: which services involved, how long each step took, where errors occurred
88. Install Jaeger: jaeger-all-in-one (dev) or distributed deployment (prod)
89. Components: agent (on each host), collector (receives traces), query (UI), storage
90. Instrument applications: add tracing SDK (OpenTelemetry is standard)
91. Context propagation: pass trace ID in HTTP headers between services
92. Sampling: trace 1-10% of requests (tracing all is too expensive)

**Visualization with Grafana:**
93. Install [Visualization Tools](grafana-dashboard) - Grafana for metrics and logs
94. Grafana connects to: Prometheus, InfluxDB, Elasticsearch, Loki, CloudWatch
95. Create dashboards: panels with graphs, gauges, tables
96. Panel types: time-series, bar chart, stat, gauge, table, heatmap
97. Variables: dynamic dashboards (select server, time range, environment)
98. Templating: one dashboard for all services (template by service name)
99. Annotations: mark deployments, incidents on graphs
100. Alerting: trigger alerts from Grafana dashboards
101. Share dashboards: export JSON, import to other Grafana instances

**Dashboard Design:**
102. Create overview dashboard: system-wide health at a glance
103. Key metrics: total requests/sec, error rate, avg response time, active hosts
104. Use traffic light colors: green (good), yellow (warning), red (critical)
105. Create service-specific dashboards: one per application or microservice
106. Drill-down capability: overview → service → host → container
107. Include: request rate, error rate, latency (p50, p95, p99), saturation
108. Include infrastructure: CPU, memory, disk, network
109. Add links: click graph to view related logs or traces

**Alerting System Setup:**
110. Deploy [Alerting System](alerting-service): Alertmanager, PagerDuty, or Opsgenie
111. Alertmanager: open source, integrates with Prometheus
112. PagerDuty/Opsgenie: commercial, on-call scheduling, escalation policies
113. Define alert rules in Prometheus:
114. Example: alert if CPU >90% for 5 minutes
115. Example: alert if error rate >5% for 1 minute
116. Example: alert if disk space <10% remaining
117. Alert severity: critical (page immediately), warning (email/Slack), info (dashboard only)

**Alert Rule Configuration:**
118. Write alert rules in PromQL (Prometheus Query Language)
119. Example: up == 0 (server is down)
120. Example: rate(http_requests_total{status=~"5.."}[5m]) > 0.05 (5% error rate)
121. Example: node_filesystem_avail_bytes / node_filesystem_size_bytes < 0.1 (disk 90% full)
122. Annotations: include helpful context (what's wrong, which server, how to fix)
123. Labels: environment, severity, team (for routing alerts)
124. Thresholds: set based on normal behavior (use percentiles, not averages)
125. Avoid alert fatigue: tune thresholds to reduce false positives
126. Use inhibition: suppress related alerts (e.g., if server down, suppress disk full alert)

**Notification Channels:**
127. Configure notification channels: email, Slack, PagerDuty, webhooks
128. Email: good for non-urgent alerts, but easy to ignore
129. Slack: good for team awareness, but can be noisy
130. PagerDuty: best for critical alerts requiring immediate action
131. SMS/phone call: for most critical alerts (datacenter power loss)
132. Webhook: integrate with custom systems (ticketing, ChatOps)
133. Routing: send critical alerts to PagerDuty, warnings to Slack, info to email
134. On-call rotation: PagerDuty schedules who receives alerts

**On-Call Management:**
135. Define on-call rotation: who's responsible for responding to alerts
136. Primary on-call: first responder, acknowledges alerts within 5 minutes
137. Secondary on-call: escalation if primary doesn't respond in 15 minutes
138. Rotation schedule: weekly or daily (balance burnout vs context)
139. Follow-the-sun: hand off between time zones for 24/7 coverage
140. Runbooks: document how to respond to common alerts
141. Post-incident review: analyze incidents, improve alerts and runbooks
142. On-call compensation: pay engineers for on-call duty (fair and legal)

**Incident Response Workflow:**
143. Alert fires → notification sent to on-call engineer
144. Engineer acknowledges alert within 5 minutes (or escalates)
145. Triage: check dashboards, logs, traces to understand issue
146. Mitigate: fix immediately or work around (restore service first, root cause later)
147. Communicate: update status page, notify stakeholders
148. Resolve: confirm issue fixed, mark alert as resolved
149. Document: write post-incident report with timeline, root cause, action items
150. Follow-up: implement preventive measures, improve monitoring/alerting

**Application Performance Monitoring (APM):**
151. Deploy APM for deep application insights: New Relic, Datadog APM, or Elastic APM
152. APM tracks: individual transactions, database queries, external API calls
153. Identifies: slow database queries, N+1 query problems, inefficient code
154. Code-level profiling: which functions taking most time
155. Error tracking: capture stack traces for exceptions
156. Deployment tracking: correlate performance changes with deployments
157. User experience: real user monitoring (RUM) tracks client-side performance

**Synthetic Monitoring:**
158. Create synthetic checks: proactively test services from external locations
159. HTTP checks: GET https://api.example.com/health every 1 minute
160. Expect: HTTP 200 response within 1 second
161. TCP checks: verify port open and accepting connections
162. DNS checks: verify domain resolves correctly
163. Multi-step checks: login, perform action, verify result (end-to-end test)
164. Global monitoring: test from multiple geographic locations
165. Alert if: check fails 3 consecutive times (avoid flapping)

**Infrastructure as Code for Monitoring:**
166. Store monitoring configs in Git: Prometheus rules, Grafana dashboards, alert rules
167. Terraform: provision monitoring infrastructure (servers, storage, networking)
168. Ansible: configure monitoring software, deploy agents
169. Jsonnet or Grafonnet: generate Grafana dashboards from code
170. Prometheus operator: Kubernetes-native Prometheus deployment
171. Benefits: version control, code review, reproducibility, disaster recovery
172. CI/CD pipeline: test monitoring configs before deploying to production

**Network Monitoring:**
173. Monitor [Network Equipment](networking-equipment): switches, routers, firewalls
174. SNMP monitoring: collect interface stats, CPU, memory from network devices
175. Flow monitoring: NetFlow, sFlow, IPFIX for traffic analysis
176. Packet capture: Wireshark, tcpdump for deep troubleshooting
177. Network performance monitoring: ThousandEyes, Catchpoint for end-to-end latency
178. BGP monitoring: track route changes, detect hijacks
179. DNS monitoring: verify DNS resolution from multiple locations
180. SSL certificate monitoring: alert before certificates expire

**Capacity Planning:**
181. Use historical metrics to predict future capacity needs
182. Trend analysis: if disk grows 10 GB/week, will be full in 10 weeks
183. Seasonality: traffic higher during business hours, weekends, holidays
184. Growth rate: year-over-year comparison (traffic doubled last year, will it again?)
185. Headroom: maintain 20-30% spare capacity for spikes
186. Forecasting: use machine learning (Prophet, ARIMA) to predict future load
187. Alerts: warn when approaching capacity limits (80% disk, 70% CPU for 1 day)

**Cost Monitoring:**
188. Track infrastructure costs: cloud bills, license fees, staff time
189. Cloud cost allocation: tag resources by team, project, environment
190. Metrics per dollar: requests served per $ spent (efficiency metric)
191. Right-sizing: identify over-provisioned resources (low CPU, high cost)
192. Reserved instances: commit to 1-3 years for 30-60% discount
193. Spot instances: use spare capacity for 70-90% discount (for fault-tolerant workloads)
194. Cost anomaly detection: alert on unexpected cost spikes

**Security Monitoring:**
195. Monitor security events: failed logins, privilege escalations, config changes
    - SIEM (Security Information and Event Management): Splunk, ELK, or QRadar
    - Correlate logs across systems: detect multi-stage attacks
    - Threat intelligence: integrate feeds of known malicious IPs, domains
    - Anomaly detection: unusual login times, locations, access patterns
    - Compliance: prove adherence to SOC 2, ISO 27001, HIPAA, PCI-DSS
    - Alert on: SSH brute force attempts, sudo usage, AWS API key usage
    - Forensics: retain logs 1+ year for post-incident investigation

**Performance Optimization:**
- Metric cardinality: limit unique label combinations (high cardinality = slow queries)
- Downsampling: aggregate old data to reduce storage (1-min resolution → 1-hour after 30 days)
- Recording rules: pre-compute expensive queries, store results
- Sharding: split data across multiple Prometheus instances
- Caching: cache dashboard queries for faster loading
- Compression: use time-series compression (10-50× reduction)

**Monitoring Infrastructure Costs:**
- Small deployment (100 hosts): $5-10K (self-hosted open source)
- Medium deployment (1000 hosts): $60K (includes hardware, storage, staff)
- Large deployment (10,000 hosts): $500K+ (includes redundancy, support)
- SaaS alternatives: Datadog ($15-23/host/month), New Relic ($99-349/host/month)
- Break-even: self-hosted cheaper at 500+ hosts for 3+ years

**Common Monitoring Stacks:**
- TICK: Telegraf, InfluxDB, Chronograf, Kapacitor (metrics)
- ELK: Elasticsearch, Logstash, Kibana (logs)
- Prometheus + Grafana + Alertmanager (metrics + alerting)
- Datadog: all-in-one SaaS (metrics, logs, traces, APM)
- New Relic: all-in-one SaaS (focus on APM)
- Elastic Observability: metrics, logs, traces, APM (self-hosted or SaaS)

**Best Practices:**
- Monitor the monitoring: ensure monitoring infrastructure itself is healthy
- Test alerts: manually trigger alerts quarterly to verify on-call responds
- Avoid dashboard overload: 5-10 key metrics, not 100
- Document everything: what metrics mean, what thresholds indicate, how to fix
- Start simple: monitor basics first (up/down, CPU, memory), add complexity gradually

Monitoring infrastructure is essential for operating reliable systems at scale. Without visibility into system behavior, incidents take hours to detect and days to resolve. With comprehensive monitoring, teams detect and resolve issues in minutes, often before users notice. The investment in monitoring infrastructure pays for itself many times over in reduced downtime and faster troubleshooting.
