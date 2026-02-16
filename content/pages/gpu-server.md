---
title: "GPU Server"
company: "Multiple Vendors"
country: "Global"
selling_price: 150000
inputs:
  - name: "Server Chassis"
    cost: 5000
    link: "server-chassis"
  - name: "NVIDIA GPUs"
    cost: 120000
    link: "nvidia-gpu"
  - name: "Server Motherboard"
    cost: 3000
    link: "server-motherboard"
  - name: "CPU Processors"
    cost: 8000
    link: "server-cpu"
  - name: "DDR5 Memory"
    cost: 6000
    link: "ddr5-memory"
  - name: "NVMe Storage"
    cost: 2000
    link: "nvme-storage"
  - name: "Power Supplies"
    cost: 3000
    link: "server-psu"
  - name: "Cooling System"
    cost: 3000
    link: "liquid-cooling"
value_created: 0
---

# How to Make GPU Server

A GPU server is a specialized computer designed for parallel computing tasks like AI training, inference, scientific simulations, and graphics rendering. Unlike standard servers, GPU servers contain multiple high-performance graphics processing units (GPUs) connected via high-speed interconnects.

## What is it?

A rack-mounted server housing 4-8 NVIDIA GPUs (A100, H100, or H200), dual high-core-count CPUs, 512GB-2TB RAM, NVMe storage, and advanced cooling. Used primarily for deep learning workloads. GPUs connect via PCIe Gen5 or NVLink for high-bandwidth inter-GPU communication. Draws 3-10 kW power. Costs $100,000-$300,000 depending on GPU configuration.

## Steps to Make:

**Hardware Planning:**
1. Determine workload requirements: training vs inference, model size, batch size
2. Select GPU model: A100 (40GB/80GB), H100 (80GB), H200 (141GB), or L40S
3. NVIDIA H100 specs: 16,896 CUDA cores, 80GB HBM3 memory, 3.35 TB/s bandwidth
4. Decide GPU count: 4-GPU or 8-GPU configuration (8-GPU most common)
5. Calculate power requirements: H100 draws 700W TDP, 8× = 5,600W just for GPUs
6. Total system power: 6-10 kW including CPUs, memory, cooling, fans
7. Select chassis: 4U or 5U rack-mount to fit 8 GPUs
8. Ensure proper airflow design: front-to-back or bottom-to-top

**Chassis and Structural Components:**
9. Source [Server Chassis](server-chassis) - typically Supermicro, Dell, HP, or custom
10. Chassis must support: extended depth (36-40 inches), high power delivery
11. 4U chassis dimensions: 19" wide × 7" tall × 36" deep
12. Made from steel or aluminum with EMI shielding
13. Hot-swap drive bays: 2-10× 2.5" NVMe bays
14. Redundant hot-swap fans: 6-10 counter-rotating fans (80mm or 120mm)
15. Cable management: organize hundreds of cables for GPUs, power, data
16. Removable panels for maintenance access
17. Install rack mounting rails and brackets

**GPU Selection and Installation:**
18. Purchase [NVIDIA GPUs](nvidia-gpu) - typically 8× H100 80GB SXM or PCIe
19. SXM version: direct board mount, proprietary connector, higher power/performance
20. PCIe version: standard PCIe Gen5 x16 slot, easier to replace
21. H100 SXM requires special HGX baseboard from NVIDIA partners
22. Inspect GPUs for physical damage before installation
23. Handle GPUs by edges only (ESD-sensitive components)
24. Install GPUs into PCIe slots or SXM sockets
25. For 8-GPU configuration, use PCIe risers or direct motherboard slots
26. Ensure proper spacing between GPUs (thermal concerns)

**NVLink Installation (SXM version):**
27. NVLink provides 900 GB/s bidirectional bandwidth between GPUs
28. Install NVLink bridges between adjacent GPUs
29. H100 has 18× NVLink connections (900 GB/s total)
30. Enables GPU-to-GPU communication without going through CPU
31. Critical for distributed training across multiple GPUs
32. Connect all 8 GPUs in full mesh or hybrid cube mesh topology
33. Verify NVLink connectivity with nvidia-smi nvlink --status

**Motherboard and CPU Installation:**
34. Install [Server Motherboard](server-motherboard) with dual CPU sockets
35. Motherboard requirements: PCIe Gen5 lanes, 8× PCIe x16 slots or SXM support
36. Common chipsets: AMD EPYC or Intel Xeon Scalable
37. Install [CPU Processors](server-cpu) - typically 2× AMD EPYC 9004 series
38. AMD EPYC 9654: 96 cores, 192 threads, 384MB L3 cache
39. Or Intel Xeon Platinum 8480+: 56 cores, 112 threads
40. Apply thermal paste to CPU heat spreaders
41. Install CPU heatsinks (air or liquid-cooled)
42. CPUs primarily handle data preprocessing, I/O, system management

**Memory Installation:**
43. Install [DDR5 Memory](ddr5-memory) - typically 512GB to 2TB
44. Use ECC registered DIMMs for reliability
45. DDR5-4800 or DDR5-5600 speeds
46. Populate all memory channels for maximum bandwidth
47. Typical: 16× 64GB DIMMs = 1TB total
48. Memory bandwidth: ~400 GB/s per CPU socket
49. Important for data feeding to GPUs during training
50. Test memory with memtest86+ before production use

**Storage Installation:**
51. Install [NVMe Storage](nvme-storage) - typically 2-8× 3.84TB or 7.68TB SSDs
52. NVMe Gen4 or Gen5 for maximum I/O throughput
53. Sequential read: 7-14 GB/s per drive
54. RAID 0 for performance or RAID 10 for redundancy
55. Store training datasets, model checkpoints, logs
56. Fast storage critical: GPUs can starve waiting for data
57. Some deployments use network-attached storage (NAS) instead
58. Local NVMe used for temporary data and caching

**Power Supply Installation:**
59. Install [Power Supplies](server-psu) - typically 3× 3,000W redundant PSUs
60. 80 PLUS Platinum or Titanium efficiency (92-96% efficient)
61. Total power capacity: 9,000W with 2+1 redundancy
62. If one PSU fails, others handle full load
63. 200-240V AC input required (standard datacenter power)
64. Each PSU connects to separate power circuits for redundancy
65. Power distribution: dedicated 12V rails for GPUs, CPUs, peripherals
66. Install power cables: PCIe power (6+2 pin or 12VHPWR), EPS12V for CPUs

**Cooling System:**
67. Install [Cooling System](liquid-cooling) - liquid cooling for GPUs and CPUs
68. Air cooling insufficient for 6-10 kW in 4U form factor
69. Direct liquid cooling: cold plates directly on GPU and CPU dies
70. Coolant: water with corrosion inhibitors or dielectric fluid
71. Pump: circulates coolant at 2-5 liters per minute
72. Radiator: external or door-mounted, dissipates 6-10 kW heat
73. Coolant temperature: inlet 20-25°C, outlet 35-45°C
74. Backup air cooling: 8-10 high-speed fans as secondary cooling
75. Fans: 15,000-20,000 RPM, 60-80 dB noise level

**Network Connectivity:**
76. Install network interface cards (NICs) - typically 2× 200GbE or 400GbE
77. NVIDIA ConnectX-7 or Broadcom Thor cards
78. InfiniBand HDR (200 Gb/s) or NDR (400 Gb/s) for AI clusters
79. Ethernet for management network (1 GbE or 10 GbE)
80. RDMA support for low-latency GPU-to-GPU communication across nodes
81. Connect to high-speed network fabric in datacenter

**BMC and Management:**
82. Baseboard Management Controller (BMC) for remote management
83. IPMI or Redfish API for remote power control, monitoring
84. Serial over LAN (SOL) for console access
85. Remote KVM for GUI access
86. Temperature sensors: monitor GPU, CPU, memory, ambient temps
87. Power monitoring: track per-component power draw
88. Fan speed control: adjust based on thermal load

**Cable Management:**
89. Route power cables: separate from data cables to reduce interference
90. Use cable ties and cable management arms
91. Label all cables: power, network, NVLink, PCIe
92. Ensure cables don't block airflow
93. Leave slack for maintenance (but not excessive)
94. Document cable routing for future technicians

**Firmware and BIOS Configuration:**
95. Update motherboard BIOS to latest version
96. Enable: IOMMU, SR-IOV, Resizable BAR (ReBAR)
97. Disable: unnecessary onboard devices, RGB lighting
98. Set PCIe speed: Gen5 for H100, Gen4 for A100
99. Enable: ECC memory, hardware prefetchers
100. Configure boot order: NVMe first, then network PXE
101. Update BMC firmware for latest features and security

**GPU Firmware and Drivers:**
102. Update GPU firmware (VBIOS) if necessary
103. Flash firmware via nvidia-smi or NVFLASH tool
104. Be careful: incorrect firmware can brick GPU
105. Update NVIDIA driver to latest datacenter driver
106. Driver version 525+ for H100, 470+ for A100
107. Install CUDA toolkit (CUDA 12.0+)
108. Install cuDNN (CUDA Deep Neural Network library)

**Operating System Installation:**
109. Install Linux OS - Ubuntu 22.04 LTS or Red Hat Enterprise Linux 9
110. Use minimal server installation (no GUI)
111. Configure disk partitioning: separate /home, /var/log
112. Enable RAID if using multiple drives
113. Install SSH server for remote access
114. Configure network: static IP for management and data networks
115. Set hostname: gpu-server-01, gpu-server-02, etc.

**Driver and Software Stack:**
116. Install NVIDIA driver from CUDA repository
117. Verify driver installation: nvidia-smi should show all GPUs
118. Install Docker for containerized workloads
119. Install NVIDIA Container Toolkit (nvidia-docker2)
120. Install Python 3.10+ and pip
121. Install PyTorch or TensorFlow
122. PyTorch: pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
123. TensorFlow: pip install tensorflow[and-cuda]

**Multi-GPU Configuration:**
124. Verify NVLink connectivity: nvidia-smi nvlink --status
125. Should show 18× NVLink connections per H100
126. Total NVLink bandwidth: 900 GB/s per GPU
127. Configure NCCL (NVIDIA Collective Communications Library)
128. NCCL enables efficient multi-GPU training
129. Set environment variables: NCCL_DEBUG=INFO for debugging
130. Test multi-GPU communication with NCCL tests

**Network Configuration for Distributed Training:**
131. Configure InfiniBand or RoCE network
132. Install OFED (OpenFabrics Enterprise Distribution) drivers
133. Test network bandwidth: ib_write_bw, ib_read_bw
134. Should achieve near line-rate: 190-195 Gb/s for 200GbE
135. Configure NCCL to use RDMA over InfiniBand
136. Set NCCL_IB_HCA for InfiniBand adapter selection
137. Test multi-node communication with NCCL tests

**Power and Thermal Testing:**
138. Run GPU burn-in test: stress-ng or gpu-burn
139. Monitor temperatures: nvidia-smi -q -d TEMPERATURE
140. H100 safe operating temp: up to 90°C (but keep <85°C)
141. Monitor power draw: nvidia-smi -q -d POWER
142. Verify PSUs distributing load evenly
143. Check for thermal throttling: nvidia-smi -q -d PERFORMANCE
144. If throttling, improve cooling or reduce workload

**Performance Benchmarking:**
145. Run GPU compute benchmarks: HPL (LINPACK), HPCG
146. MLPerf training benchmarks: ResNet-50, BERT, GPT-3
147. Measure throughput: TFLOPS (floating point operations per second)
148. H100 theoretical: 989 TFLOPS FP16 Tensor Core performance
149. Real-world: 70-85% of theoretical peak
150. Measure memory bandwidth with GPU-burn or bandwidthTest
151. H100 should achieve ~3 TB/s memory bandwidth

**AI Framework Testing:**
152. Test PyTorch distributed training (DDP - DistributedDataParallel)
153. Launch multi-GPU training: torchrun --nproc_per_node=8 train.py
154. Verify GPU utilization: nvidia-smi dmon -s u
155. Should see 90-100% GPU utilization during training
156. Test TensorFlow multi-GPU with tf.distribute.MirroredStrategy
157. Verify scaling efficiency: 8 GPUs should be 7-7.5× faster than 1 GPU
158. Test DeepSpeed or Megatron-LM for large language models

**Monitoring Setup:**
159. Install Prometheus exporter for GPU metrics
160. Install DCGM (Data Center GPU Manager) from NVIDIA
161. DCGM collects: GPU utilization, memory usage, temperature, power
162. Forward metrics to Prometheus or Grafana
163. Set up alerting: email/Slack if GPU errors, thermal throttling, low utilization
164. Monitor NVLink errors: nvidia-smi nvlink -e
165. Log all events to centralized logging system (ELK, Splunk)

**Workload Deployment:**
166. Deploy AI training job via Kubernetes or Slurm
167. Kubernetes: use NVIDIA GPU Operator for GPU scheduling
168. Request GPUs in pod spec: resources.limits.nvidia.com/gpu: 8
169. Slurm: sbatch script with #SBATCH --gres=gpu:8
170. Mount datasets from network storage or local NVMe
171. Training job loads data, trains model, saves checkpoints
172. Typical training run: 1-14 days for large language models

**Common Workloads:**
173. Large language model pre-training: GPT, LLaMA, Mistral (days to weeks)
174. Fine-tuning: adapt pre-trained model to specific task (hours to days)
175. Image generation: Stable Diffusion, DALL-E training
176. Computer vision: object detection, image classification
177. Recommendation systems: embedding generation
178. Scientific computing: molecular dynamics, climate modeling
179. Video processing: transcoding, enhancement, generation

**Maintenance and Reliability:**
180. Check GPU health weekly: nvidia-smi -q -d MEMORY
181. Look for remapped rows (indicates memory errors)
182. Check ECC error counters: nvidia-smi -q -d ECC_ERRORS
183. Update drivers quarterly (or as needed for bug fixes)
184. Clean dust filters monthly (if air-cooled)
185. Check coolant levels monthly (if liquid-cooled)
186. Replace thermal paste every 2-3 years
187. Expected lifespan: 5-7 years for GPUs, 3-5 years depreciation

**Troubleshooting:**
188. GPU not detected: reseat GPU, check PCIe power cables, update BIOS
189. Low performance: check thermal throttling, memory errors, driver version
190. Training crashes: check memory errors, reduce batch size, update framework
191. NVLink errors: reseat NVLink bridges, check firmware, RMA if persistent
192. Network issues: check InfiniBand cables, OFED drivers, switch configuration
193. Power issues: check PSU status LEDs, verify power distribution
194. High temperatures: improve airflow, check coolant flow, clean dust

**Cost Analysis:**
195. Hardware cost: $150,000 for 8× H100 system
    - 8× H100 80GB SXM: $120,000 ($15,000 each)
    - Dual AMD EPYC 9654: $8,000
    - 1TB DDR5 memory: $6,000
    - Chassis, PSU, cooling, storage: $16,000
    - Operating cost: $20-40/day for electricity (10 kW × $0.10/kWh × 24h)
    - Expected utilization: 80-95% (should not sit idle)
    - Cost per GPU-hour: $2-4 depending on amortization period
    - Break-even vs cloud: if usage >1,000 hours/month, buying cheaper than renting

**Performance Comparison:**
- NVIDIA H100: 989 TFLOPS FP16 Tensor, 3.35 TB/s memory bandwidth
- NVIDIA A100: 312 TFLOPS FP16 Tensor, 2.0 TB/s memory bandwidth
- H100 is 3× faster for AI training than A100
- 8× H100 system: ~8 PFLOPS FP16 Tensor Core performance

GPU servers are the backbone of modern AI infrastructure. They enable training massive language models, generating images and videos, and running real-time inference at scale. A single 8× H100 server can train GPT-3 scale models in weeks instead of months, making it essential for AI research and production workloads.
