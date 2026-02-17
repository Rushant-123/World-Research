---
title: "Database Server"
company: "Olin / Westlake Chemical / Formosa Plastics"
country: "Global"
selling_price: 100000
inputs:
  - name: "Server Hardware"
    cost: 30000
    link: "server-hardware"
  - name: "Storage Arrays"
    cost: 40000
    link: "storage-array"
  - name: "RAID Controller"
    cost: 5000
    link: "raid-controller"
  - name: "NVMe SSDs"
    cost: 15000
    link: "nvme-storage"
  - name: "ECC Memory"
    cost: 8000
    link: "ecc-memory"
  - name: "Backup System"
    cost: 10000
    link: "backup-system"
  - name: "Network Equipment"
    cost: 5000
    link: "networking-equipment"
  - name: "Database Software"
    cost: 2000
    link: "database-software"
value_created: 0
---

# How to Make Database Server

**Top Market Leaders:**
- [Olin](/companies/olin)
- [Westlake Chemical](/companies/westlake-chemical)
- [Formosa Plastics](/companies/formosa-plastics)



A database server is a specialized computer optimized for storing, retrieving, and managing structured data. It runs database management software (PostgreSQL, MySQL, Oracle, SQL Server) and uses RAID arrays, high memory, and fast storage to ensure data integrity, performance, and availability.

## What is it?

A server designed for database workloads with high I/O performance: 128-512 GB RAM, 16-32 CPU cores, RAID 10 SSD arrays (10-100 TB capacity), battery-backed cache, redundant power, and 10/25 GbE networking. Runs PostgreSQL, MySQL, Oracle, or SQL Server. Handles 10K-100K queries per second. Includes automated backups, replication, point-in-time recovery, and monitoring.

## Steps to Make:

**Requirements Analysis:**
1. Define database workload: transactional (OLTP) vs analytical (OLAP) vs mixed
2. OLTP: many small transactions, high concurrency, low latency (e-commerce, banking)
3. OLAP: large queries, data aggregation, reporting (data warehouse, analytics)
4. Estimate data size: current and projected 3-5 years (affects storage)
5. Estimate query volume: queries per second, concurrent connections
6. Define availability requirements: 99.9% (8.7h downtime/year) vs 99.99% (52min/year)
7. Define backup requirements: RPO (Recovery Point Objective), RTO (Recovery Time Objective)
8. RPO: how much data loss acceptable (1 hour, 1 minute, 0 seconds)

**Hardware Selection:**
9. Procure [Server Hardware](server-hardware) optimized for database workloads
10. CPU: Intel Xeon Gold/Platinum or AMD EPYC (16-32 cores, high clock speed)
11. Transactional databases benefit from high single-thread performance
12. Analytical databases benefit from high core count for parallelism
13. Recommended: Dual AMD EPYC 9004 series (96 cores total) or Intel Xeon 8480+
14. Form factor: 2U rack-mount server for balance of density and cooling
15. Hot-swap components: drives, fans, power supplies for maintenance without downtime
16. Redundant components: dual power supplies, RAID controllers, network cards

**Memory Configuration:**
17. Install large [ECC Memory](ecc-memory): 128-512 GB for small/medium, 1-2 TB for large
18. ECC (Error-Correcting Code) critical: detects and corrects memory errors
19. Single bit errors corrected automatically, double bit errors detected
20. Use registered (RDIMM) or load-reduced (LRDIMM) DIMMs for capacity >256 GB
21. Memory speed: DDR4-3200 or DDR5-4800 (faster = better query performance)
22. Populate all memory channels: maximize bandwidth (8-12 channels per CPU)
23. Database servers are memory-hungry: more memory = more data cached = faster queries
24. Rule of thumb: memory = 10-25% of database size, minimum 64 GB

**Storage Architecture Design:**
25. Determine storage capacity: 10-100 TB typical for enterprise databases
26. Separate storage types: OS (2× SATA SSD), data (NVMe/SAS SSD array), logs (NVMe)
27. Data files: largest storage, moderate I/O (read-heavy for OLTP)
28. Transaction logs: small storage, very high I/O (sequential writes)
29. Temp space: high I/O for sorting, joins, temporary tables
30. Backups: large capacity, sequential I/O (separate system or NAS)
31. Calculate IOPS needs: OLTP databases need 10K-100K IOPS
32. Calculate throughput needs: analytical queries need 1-10 GB/s sequential reads

**RAID Configuration:**
33. Install [RAID Controller](raid-controller) - hardware RAID for performance and reliability
34. RAID 10 (1+0): best for databases - combines mirroring and striping
35. RAID 10: 50% capacity (2× drives for redundancy), excellent random I/O
36. RAID 10 tolerates: 1 drive failure per mirrored pair
37. RAID 5/6 alternative: better capacity (75-90%), worse write performance
38. Avoid RAID 5/6 for transaction logs: write penalty hurts performance
39. Battery-backed write cache: 2-4 GB cache with battery backup
40. Cache accelerates writes: acknowledge immediately, write to disk later (safely)

**NVMe SSD Installation:**
41. Install [NVMe SSDs](nvme-storage) for primary database storage
42. NVMe advantages: 7,000 MB/s read, 5,000 MB/s write, 1M+ IOPS, <100µs latency
43. Enterprise SSDs: higher endurance, power loss protection, consistent performance
44. Recommended: Intel P5520, Samsung PM9A3, Micron 7450 (3.84-15.36 TB each)
45. Install 8-12× NVMe drives in RAID 10 configuration
46. Example: 8× 7.68TB NVMe = 30.7 TB usable in RAID 10
47. Configure RAID 10 via RAID controller or software RAID (mdadm, ZFS)
48. NVMe for data files: excellent random read/write for transactional databases

**Storage Array Setup:**
49. Install [Storage Arrays](storage-array) for large-capacity secondary storage
50. SAS (Serial Attached SCSI) SSD arrays for capacity + performance balance
51. Or external SAN (Storage Area Network) via Fibre Channel or iSCSI
52. SAN advantages: shared storage, easier backups, storage tiering
53. DAS (Direct Attached Storage) simpler: lower latency, lower cost
54. Configure RAID 10 or RAID 6 depending on performance vs capacity needs
55. Storage tiering: hot data on NVMe, warm data on SAS SSD, cold data on HDD
56. Thin provisioning: allocate storage as needed, not upfront (saves capacity)

**Transaction Log Storage:**
57. Dedicate separate NVMe drives for transaction logs (write-ahead log, WAL)
58. Transaction logs: every database write recorded sequentially
59. Log performance critical: slow logs = slow commits = slow application
60. Use 2× NVMe SSDs in RAID 1 (mirroring): redundancy + performance
61. Example: 2× 960GB NVMe for logs
62. Sequential writes: NVMe can sustain 3-5 GB/s sequential writes
63. No need for large capacity: logs archived/truncated regularly
64. Separate physical drives: prevents contention between data and log I/O

**Network Configuration:**
65. Install high-speed [Network Equipment](networking-equipment)
66. Dual 10 GbE or 25 GbE NICs for redundancy and bandwidth
67. Bond NICs in active-backup or LACP for failover and aggregation
68. Separate networks: production traffic, backup traffic, replication traffic
69. Low latency critical: <1ms between application and database servers
70. Jumbo frames: MTU 9000 for reduced CPU overhead on large transfers
71. RDMA (Remote Direct Memory Access) for ultra-low latency (optional)
72. Connect to redundant network switches: no single point of failure

**Operating System Installation:**
73. Install Linux: Ubuntu Server 22.04 LTS, Red Hat Enterprise Linux 9, or SUSE SLES
74. Or Windows Server 2022 for SQL Server
75. Minimal installation: only essential packages
76. Partition layout: separate /var/lib/postgresql (or /var/lib/mysql) for data
77. Mount data volumes with noatime option: don't update access time (performance)
78. File system: XFS (recommended for databases), ext4, or ZFS
79. XFS advantages: excellent performance, efficient allocation, good for large files
80. Disable swap: databases should use memory, not swap (or minimal swap)
81. Kernel tuning: adjust vm.swappiness=1, increase file handles
82. Security hardening: disable unnecessary services, configure firewall
83. Time synchronization: install NTP or chrony for accurate timestamps
84. Install monitoring agents: node_exporter, postgres_exporter for metrics

**Database Software Installation:**
85. Install [Database Software](database-software): PostgreSQL, MySQL, Oracle, or SQL Server
86. PostgreSQL: open source, full-featured, excellent for OLTP and analytics
87. MySQL: open source, simpler, excellent for web applications
88. Oracle: commercial ($17,500+/core), enterprise features, maximum performance
89. SQL Server: commercial ($3,717+/core), Windows-based, tight Microsoft integration
90. PostgreSQL installation: apt install postgresql-15 or compile from source
91. Initialize database cluster: initdb or pg_ctl init
92. Configure data directory: point to RAID array mount point

**Database Configuration:**
94. Tune PostgreSQL configuration (/etc/postgresql/15/main/postgresql.conf)
95. shared_buffers: 25% of system RAM (32 GB for 128 GB server)
96. effective_cache_size: 50-75% of RAM (tells planner how much RAM available for caching)
97. work_mem: memory per query operation (sorting, hashing) - 128 MB to 1 GB
98. maintenance_work_mem: memory for VACUUM, CREATE INDEX - 1-4 GB
99. max_connections: 100-1000 depending on application concurrency
100. checkpoint_timeout: 10-30 minutes (how often to write dirty pages to disk)
101. checkpoint_completion_target: 0.9 (spread checkpoint I/O over time)
102. wal_buffers: 16 MB (buffer for transaction log writes)

**Storage Configuration:**
103. Configure data directory: /var/lib/postgresql/15/main on NVMe RAID 10
104. Configure WAL directory: pg_wal on separate NVMe (optional but recommended)
105. Symlink WAL directory to dedicated NVMe: ln -s /mnt/wal/pg_wal
106. Configure tablespaces: map database objects to specific storage
107. Example: hot tables on NVMe, archive tables on SAS SSD
108. Configure temp tablespace: use fast NVMe for temporary tables
109. Set autovacuum: automatic cleanup of dead tuples
110. Autovacuum prevents table bloat, maintains statistics, reclaims space

**Connection Pooling:**
111. Install connection pooler: PgBouncer (PostgreSQL) or ProxySQL (MySQL)
112. Connection pooling: reuse database connections, reduce overhead
113. Applications connect to pooler (port 6432), pooler connects to database (port 5432)
114. Pool modes: session (default), transaction (more efficient), statement (aggressive)
115. Transaction pooling: allows 1,000+ application connections with 100 database connections
116. Configure pool size: match max_connections on database server
117. Connection pooling reduces memory usage and connection overhead on database

**Replication Setup:**
118. Configure primary-replica replication for high availability
119. PostgreSQL streaming replication: WAL records streamed to replica in real-time
120. MySQL replication: binary log replication (statement-based or row-based)
121. Replica configuration: standby server with identical hardware
122. Replication lag: <1 second typical, <100ms achievable with tuning
123. Synchronous replication: commit waits for replica acknowledgment (zero data loss)
124. Asynchronous replication: commit doesn't wait (better performance, possible data loss)
125. Configure multiple replicas: 1 primary + 2-3 replicas for read scaling

**Backup System:**
126. Install [Backup System](backup-system) for disaster recovery
127. Backup strategies: full backup + incremental backups + continuous WAL archiving
128. Full backup: pg_basebackup (PostgreSQL) or mysqldump (MySQL)
129. Schedule full backup: weekly or daily depending on data size
130. Incremental backup: only changed data since last backup
131. WAL archiving: continuous backup of transaction logs
132. Point-in-time recovery (PITR): restore to any second in time
133. Example: restore to 30 seconds before accidental DELETE statement
134. Backup storage: separate server, NAS, or cloud storage (S3, Azure Blob)

**Backup Configuration:**
135. Configure WAL archiving: archive_mode = on, archive_command to copy WAL files
136. Example: archive_command = 'rsync %p backup-server:/archive/%f'
137. Retention policy: keep 7 daily backups, 4 weekly, 12 monthly
138. Test backups: restore to test server monthly to verify recoverability
139. Backup performance: use parallel backup for large databases
140. pg_basebackup -j 8 for 8 parallel streams
141. Compression: gzip or zstd to reduce backup size (10-50% of original)
142. Backup validation: verify backup integrity with checksums

**High Availability Configuration:**
143. Deploy multiple database servers for fault tolerance
144. Primary-replica architecture: 1 primary (read/write) + replicas (read-only)
145. Automatic failover: Patroni (PostgreSQL), MySQL Router, or Oracle Data Guard
146. Patroni: distributed consensus (etcd, Consul) detects primary failure
147. Failover time: 30 seconds to 2 minutes (depends on detection and promotion)
148. Virtual IP: single IP address that moves to new primary during failover
149. Fencing: ensure old primary can't accept writes after failover (split-brain prevention)
150. Multi-site replication: replicas in different data centers for disaster recovery

**Monitoring Setup:**
151. Install monitoring agents: Prometheus postgres_exporter, Datadog agent, or Zabbix
152. Collect metrics: queries per second, cache hit rate, replication lag, connections
153. Key metrics:
154. - Queries per second (QPS): throughput indicator
155. - Cache hit rate: should be >95% (means data served from memory, not disk)
156. - Replication lag: should be <1 second
157. - Disk I/O: IOPS and throughput utilization
158. - Checkpoint timing: ensure spread evenly, not causing I/O spikes
159. Set up alerts: email/Slack when metrics exceed thresholds
160. Alert: cache hit rate <90%, replication lag >10 seconds, disk >80% full

**Query Performance Tuning:**
161. Enable query logging: log slow queries (>1 second)
162. log_min_duration_statement = 1000 (log queries taking >1000ms)
163. Analyze slow queries: EXPLAIN ANALYZE shows query execution plan
164. Create indexes: speed up SELECT, WHERE, JOIN operations
165. Index types: B-tree (default), Hash, GiST, GIN (full-text search)
166. Avoid over-indexing: indexes speed reads but slow writes
167. Update statistics: ANALYZE table to update query planner statistics
168. Vacuum regularly: removes dead tuples, prevents bloat

**Security Configuration:**
169. Configure authentication: pg_hba.conf (PostgreSQL) or user grants (MySQL)
170. Require password authentication: md5 or scram-sha-256
171. Disable remote root login: root should only connect locally
172. Create application users: dedicated user per application with minimal privileges
173. Grant least privilege: GRANT SELECT, INSERT, UPDATE on specific tables only
174. Enable SSL/TLS: encrypt connections between application and database
175. Configure SSL: ssl = on, ssl_cert_file, ssl_key_file
176. Firewall rules: only allow connections from application servers
177. No public internet access: database should be on private network

**Load Testing:**
178. Test database performance before production deployment
179. Tools: pgbench (PostgreSQL), sysbench (MySQL), HammerDB (multiple databases)
180. pgbench: simulates banking transactions, measures TPS (transactions per second)
181. Run: pgbench -c 100 -j 4 -T 300 database_name
182. 100 concurrent clients, 4 threads, 300 second test
183. Measure: TPS, average latency, p95/p99 latency
184. Goal: >10,000 TPS for typical OLTP workload on this hardware
185. Tune configuration based on results: adjust shared_buffers, work_mem, etc.

**Operational Procedures:**
186. Database maintenance: weekly VACUUM ANALYZE to reclaim space and update stats
187. Index maintenance: REINDEX to rebuild fragmented indexes (quarterly)
188. Monitor disk space: databases grow over time, plan capacity
189. Partition large tables: split by date or ID range for manageability
190. Archive old data: move to archive database or cold storage
191. Upgrade planning: test major version upgrades on replica first
192. Change management: test schema changes on development environment first
193. Disaster recovery drills: practice failover and restore procedures quarterly
194. Performance review: monthly review of slow queries and optimization opportunities
195. Capacity forecasting: project growth and plan hardware upgrades 6 months ahead

**Performance Benchmarks:**
196. Expected performance (8× 7.68TB NVMe RAID 10, 256 GB RAM, dual EPYC):
    - OLTP: 50,000+ TPS (simple transactions)
    - Read IOPS: 500,000+ (NVMe RAID 10)
    - Write IOPS: 250,000+ (RAID 10 write penalty)
    - Sequential read: 20+ GB/s (parallel reads)
    - Sequential write: 10+ GB/s (RAID 10 write penalty)
    - Query latency: <1ms for indexed queries, <100ms for complex queries
    - Concurrent connections: 1,000-10,000 (with connection pooling)
    - Database size supported: 10-50 TB on this hardware
    - Cost: $100,000 for hardware (server, storage, RAID, network)
    - Operating cost: $500-1,000/month (electricity, licensing, support)
    - Lifespan: 5 years hardware, refresh or upgrade after

**Database Server vs Cloud Database:**
- Self-hosted: full control, higher upfront cost, operational overhead
- Cloud RDS (AWS): managed service, pay monthly, automatic backups/patches
- Break-even: >50% utilization for 3+ years makes self-hosted cheaper
- Cloud advantages: easy scaling, no hardware management, built-in HA
- Self-hosted advantages: lower cost at scale, no vendor lock-in, full customization

**Common Database Use Cases:**
- Web applications: user accounts, sessions, content management
- E-commerce: product catalog, orders, inventory, customer data
- Financial: transactions, account balances, audit logs (requires ACID)
- Analytics: data warehouse, business intelligence, reporting
- SaaS applications: multi-tenant databases, per-customer data isolation

Database servers are the foundation of modern applications. They ensure data is stored reliably, retrieved quickly, and remains consistent even during failures. With proper hardware selection, RAID configuration, replication, and backups, a database server can deliver years of reliable service handling billions of queries.
