
Capability | Benchmark | Description | Gemini 1.0 Pro | Gemini 1.0 Ultra | Gemini 1.5 Pro (Feb 2024) | Gemini 1.5 Flash | Gemini 1.5 Pro (May 2024)
--- | --- | --- | --- | --- | ---  | --- | --- 
General | MMLU | Representation of questions in 57 subjects (incl. STEM, humanities, and others) | 71.8% | 83.7% | 81.9% | 78.9% | 85.9%
Code | Natural2Code | Python code generation. Held out dataset HumanEval-like, not leaked on the web | 69.6% | 74.9% | 77.7% | 77.2% | 82.6%
Math | MATH | Challenging math problems (incl. algebra, geometry, pre-calculus, and others) | 32.6% | 53.2% | 58.5% | 54.9% | 67.7%
Reasoning | GPQA (main) | Challenging dataset of questions written by domain experts in biology, physics, and chemistry | 27.9% | 35.7% | 41.5% | 39.5% | 46.2%
  -- | Big-Bench Hard | Diverse set of challenging tasks requiring multi-step reasoning | 75.0% | 83.6% | 84.0% | 85.5% | 89.2%
Multilingual | WMT23 | Language translation | 71.7 | 74.4 | 75.2 | 74.1 | 75.3
Image | MMMU | Multi-discipline college-level reasoning problems | 47.9% | 59.4% | 58.5% | 56.1% | 62.2%
 --  | MathVista | Mathematical reasoning in visual contexts | 46.6% | 53.0% | 54.7% | 58.4% | 63.9%
Audio | FLEURS (55 languages) | Automatic speech recognition (based on word error rate, lower is better) | 6.4% | 6.0% | 6.6% | 9.8% | 6.5%
Video | EgoSchema | Video question answering | 55.7% | 61.5% | 65.1% | 65.7% | 72.2%

## What are the most popular LLM Benchmarks?

Certainly! Here’s a list of the provided LLM benchmarks with a two-line introduction for each:

### General

1. **MMLU (5-shot)**:
   Measures performance across a wide range of academic subjects using few-shot learning. It's designed to test a model's ability to generalize knowledge from minimal examples.

2. **AGIEval English (3-5 shot)**:
   Evaluates English proficiency and general reasoning skills through real-world scenarios and tasks. This benchmark aims to assess the model's adaptability to practical use cases.

3. **CommonSenseQA (7-shot)**:
   Tests common sense reasoning by requiring the model to answer questions that need general world knowledge. The benchmark focuses on evaluating how well the model understands everyday scenarios.

4. **Winogrande (5-shot)**:
   Assesses commonsense reasoning by resolving ambiguities in sentences that require an understanding of context. It challenges models to disambiguate sentences that humans find straightforward.

5. **BIG-Bench Hard (3-shot, CoT)**:
   Evaluates models on particularly challenging and diverse tasks, including those that require chain-of-thought prompting. This benchmark is part of the broader BIG-Bench suite, focusing on difficult tasks.

6. **ARC-Challenge (25-shot)**:
   The Advanced Reasoning Challenge focuses on hard science questions, testing deep understanding and logical reasoning. It's designed to push the limits of a model's scientific knowledge and reasoning skills.

### Knowledge Reasoning

7. **TriviaQA-Wiki (5-shot)**:
   Tests the model's ability to answer trivia questions using information from Wikipedia. This benchmark evaluates the breadth and accuracy of the model's factual knowledge.

### Reading Comprehension

8. **SQuAD (1-shot)**:
   The Stanford Question Answering Dataset assesses the model's comprehension based on reading passages. It requires the model to extract precise answers from given texts.

9. **QuAC (1-shot, F1)**:
   Question Answering in Context evaluates the model's ability to understand and respond to questions in a dialog-based format. It measures how well the model can handle interactive reading comprehension.

10. **BoolQ (0-shot)**:
    Tests the model's ability to answer yes/no questions based on a given passage. It evaluates the model's binary decision-making capability without prior examples.

11. **DROP (3-shot, F1)**:
    Discrete Reasoning Over Paragraphs assesses numerical and discrete reasoning abilities over text passages. This benchmark requires the model to perform complex reasoning tasks involving multiple pieces of information.

These benchmarks collectively cover a broad spectrum of skills, from general knowledge and reasoning to specific reading comprehension and discrete reasoning abilities.

