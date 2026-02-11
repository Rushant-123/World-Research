---
title: "GPU Training Cluster"
company: "NVIDIA / CoreWeave / Lambda Labs"
country: "USA / Global"
selling_price: 500000
inputs:
  - name: "H100 GPUs"
    cost: 200000
    link: "h100-gpu"
  - name: "Server Chassis"
    cost: 30000
    link: "rack-servers"
  - name: "InfiniBand Switches"
    cost: 80000
    link: "infiniband-network"
  - name: "NVMe Storage"
    cost: 40000
    link: "nvme-storage"
  - name: "Data Center Space"
    cost: 50000
    link: "data-center"
  - name: "Cooling Infrastructure"
    cost: 30000
    link: "liquid-cooling"
  - name: "Power Infrastructure"
    cost: 40000
    link: "power-distribution"
  - name: "Electricity"
    cost: 30000
    link: "electricity"
value_created: 0
---

# How to Make a GPU Training Cluster

A GPU training cluster is the infrastructure used to train large AI models like Claude. It consists of thousands of interconnected high-performance GPUs that work together to process massive datasets and adjust billions of model parameters.

## What is it?

A specialized supercomputer optimized for machine learning workloads. Unlike traditional supercomputers (optimized for physics simulations), training clusters prioritize:
- **Tensor operations** (matrix multiplications)
- **High memory bandwidth** (model parameters must fit in memory)
- **Fast inter-GPU communication** (gradients must synchronize across GPUs)
- **Sustained throughput** (training runs for weeks/months continuously)

Modern frontier models (GPT-4, Claude, Gemini) require clusters with 10,000-30,000+ GPUs running 24/7 for 3-6 months.

## Scale Required for Frontier Models

| Model Class | GPUs Required | Training Time | Cost |
|-------------|---------------|---------------|------|
| GPT-3 (175B params) | ~1,000 A100s | 34 days | $5-10M |
| Claude 3 (~200B params) | ~4,000 H100s | 2-3 months | $30-50M |
| GPT-4 (~1.7T params, MoE) | ~25,000 A100s | 3-4 months | $100M+ |
| Frontier lab cluster | 10,000-50,000 H100s | Continuous | $500M-2B capex |

## Steps to Make:

**1. Acquire GPUs (Hardest Part)**

1. Place orders with NVIDIA for [H100 GPUs](h100-gpu) — lead time is 6-18 months
2. H100 SXM5 (data center version): $25,000-40,000 per GPU
3. For a 10,000 GPU cluster: $250M-400M in GPU costs alone
4. Alternative: rent from cloud providers (CoreWeave, Lambda, AWS) at $2-4/GPU-hour
5. Rental cost for 3-month training run (10,000 GPUs): $45M-90M

**2. Build Network Fabric**

6. GPU training is communication-bound — GPUs must synchronize gradients
7. Install [InfiniBand Switches](infiniband-network) — NVIDIA Quantum-2 (400 Gb/s per port)
8. Fat-tree topology: every GPU can talk to every other GPU with minimal hops
9. For 10,000 GPUs: need ~500 leaf switches + ~100 spine switches
10. Total network cost: $50M-100M
11. Alternative: NVLink for intra-node (8 GPUs), InfiniBand for inter-node
12. NVIDIA DGX SuperPOD: pre-built solution (256 GPUs per pod, $50M+)

**3. Assemble Compute Nodes**

13. Each node contains 8 H100 GPUs connected via NVLink
14. [Server Chassis](rack-servers): DGX H100 or custom HGX H100 platform
15. Per-node specs: 8×H100 (640GB HBM3), 2×AMD EPYC CPUs, 2TB RAM
16. Install [NVMe Storage](nvme-storage): 30TB+ per node for checkpoints and data staging
17. 10,000 GPUs = 1,250 nodes
18. Rack density: 4-8 nodes per rack → 150-300 racks

**4. Build Power Infrastructure**

19. Each H100 consumes 700W at full load
20. 10,000 GPUs × 700W = 7MW just for GPUs
21. Add cooling, networking, storage, overhead → 12-15MW total
22. [Power Distribution](power-distribution): redundant feeds, UPS, PDUs
23. Need dedicated substation or locate near power plant
24. Monthly electricity cost at $0.05/kWh: $450,000-550,000
25. For 3-month training: $1.5M in [Electricity](electricity) alone

**5. Install Cooling**

26. 7MW of heat must be removed continuously
27. Traditional air cooling struggles above 30kW/rack
28. DGX H100 nodes: 10kW+ per node → need [Liquid Cooling](liquid-cooling)
29. Direct-to-chip liquid cooling: cold plates on GPUs, warm water out
30. Rear-door heat exchangers for remaining heat
31. Cooling infrastructure: $20-50M for 10,000 GPU cluster
32. PUE (Power Usage Effectiveness): target 1.2-1.4

**6. Set Up Data Center**

33. Lease space in colocation [Data Center](data-center) or build dedicated facility
34. Requirements: Class A power, fiber connectivity, physical security
35. Floor space: 10,000-20,000 sq ft for 10,000 GPUs
36. Hot aisle/cold aisle containment
37. Fire suppression (clean agent, not water)
38. 24/7 NOC (Network Operations Center) staffing

**7. Configure Software Stack**

39. Install NVIDIA CUDA and cuDNN libraries
40. Set up distributed training framework (PyTorch FSDP, DeepSpeed, Megatron-LM)
41. Configure NCCL (NVIDIA Collective Communications Library) for multi-GPU comms
42. Install Slurm or Kubernetes for job scheduling
43. Set up monitoring: GPU utilization, memory, thermals, network bandwidth
44. Configure checkpoint storage: save model state every N steps to survive failures

**8. Network and Storage Setup**

45. Connect cluster to internet via multiple 100GbE+ uplinks
46. Set up parallel file system (Lustre, GPFS, or object storage)
47. Pre-stage training data on high-speed storage
48. Training data for Claude-scale model: 1-10 petabytes of text
49. Need ~1TB/s aggregate read bandwidth during training

**9. Testing and Burn-In**

50. Run stress tests: verify all GPUs hit target FLOPs
51. Run NCCL tests: verify all-reduce bandwidth across full cluster
52. Test failure scenarios: what happens when 1 GPU fails? 1 node? 1 switch?
53. Typical failure rate: 1-2 GPU failures per day in 10,000 GPU cluster
54. Need automated health checks and job rescheduling

**10. Begin Training**

55. Load pre-tokenized training data
56. Initialize model weights (random or from smaller pre-trained model)
57. Distribute model across GPUs using tensor/pipeline/data parallelism
58. Start training loop: forward pass → loss → backward pass → optimizer step
59. Monitor loss curves, gradient norms, learning rate
60. Training duration: 2-6 months for frontier model

## Economics

**Capital expenditure (10,000 H100 cluster):**
- GPUs: $300M
- Networking: $80M  
- Servers/chassis: $50M
- Power/cooling infrastructure: $50M
- Data center build-out: $30M
- **Total: ~$500M-600M**

**Operating expenditure (monthly):**
- Electricity: $500K
- Data center lease: $200K
- Staff (SREs, admins): $300K
- Maintenance/replacement: $200K
- **Total: ~$1.2M/month**

**Cost per training run (3 months):**
- Depreciation (3-year life): $50M
- Operating costs: $4M
- Staff: $2M
- **Total: ~$55M per frontier model training**

This is why only a handful of labs (OpenAI, Anthropic, Google, Meta, xAI) can train frontier models — the upfront investment is $500M+ and each training run costs $50-100M.
