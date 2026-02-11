---
title: "Claude AI Model"
company: "Anthropic"
country: "United States"
selling_price: 0
inputs:
  - name: "Training Data"
    cost: 0
    link: "text-datasets"
  - name: "GPU Clusters"
    cost: 0
    link: "training-cluster"
  - name: "ML Engineers"
    cost: 0
    link: "ai-researchers"
  - name: "Training Code"
    cost: 0
    link: "pytorch-framework"
  - name: "Electricity"
    cost: 0
    link: "electricity"
value_created: 0
---

# How to Make Claude AI Model

Claude is a large language model (LLM) trained by Anthropic using transformer architecture. Trained on vast text corpus to predict next tokens. Constitutional AI (CAI) training aligns model with human values. Billions of parameters enable sophisticated language understanding and generation.

## What is it?

Neural network with 100-400 billion parameters (trained weights). Transformer architecture processes text as tokens. Pre-training on internet text teaches language patterns. Fine-tuning with human feedback (RLHF - Reinforcement Learning from Human Feedback) improves helpfulness and safety. Constitutional AI adds explicit principles.

## Training Process (simplified):
1. Collect [Training Data](text-datasets): books, websites, papers (filtered for quality)
2. Build [GPU Clusters](training-cluster): thousands of H100/A100 GPUs interconnected
3. [ML Engineers](ai-researchers) implement training pipeline in [PyTorch](pytorch-framework)
4. Pre-training: predict next token on massive text corpus
   - Requires months on GPU cluster
   - Consumes megawatts of [Electricity](electricity)
   - Cost: $10-100 million per model
5. Fine-tuning: RLHF with human preference data
6. Constitutional AI: train model to follow principles
7. Red-team testing: find and fix failure modes
8. Evaluation: test on benchmark tasks
9. Deploy model weights to inference servers
10. Serve via API (AWS Bedrock)

**Capabilities:** Natural language understanding, code generation, analysis, creative writing, multi-turn conversation, tool use, long context (200k tokens).
