---
mathjax: true
id: 6080
title: Introduction to Prompt Engineering
date: 2023-07-24
permalink: '/dsblog/Introduction-to-Prompt-Engineering'
tags: [LLM, Prompt Engineering, Google Cloud, AWS Cloud, Auzre Cloud, Language Models] 
categories:
  - dsblog

header:
    teaser: /assets/images/dspost/dsp6080-Introduction-to-Prompt-Engineering.jpg
excerpt_separator: "<!--more-->"   
author: Hari Thapliyaal   
layout: dspost-layout   
excerpt:   
author_profile: true   
share: true   
toc: true   
toc_sticky: true 
mathjax: "true"
---

![Introduction to Prompt Engineering](/assets/images/dspost/dsp6080-Introduction-to-Prompt-Engineering.jpg)

# Introduction to Prompt Best Engineering 

Prompts can contain questions, instructions, contextual information, examples, and partial input for the model to complete or continue. After the model receives a prompt, depending on the type of model being used, it can generate text, embeddings, code, images, videos, music, and more. Below are **14 examples of good prompts**.

## Example 1 (Entity input)
```
Classify the following items as [large, small].
Elephant
Mouse
Snail
```
## Example 2 (completion input)
Some strategies to overcome writer's block include

## Example 3 (Restrict boundaries)
Give information to the model, or restrict the boundaries of the responses
``` 
Marbles:
Color: red
Number: 12
Color: blue
Number: 28
Color: yellow
Number: 15
Color: green
Number: 17

How many green marbles are there?
```

## Example 4 (prompt to give the model an example of an ideal response.)
```
Classify the following.
Options:
- red wine
- white wine


Text: Chardonnay
The answer is: white wine
Text: Cabernet
The answer is: red wine
Text: Moscato
The answer is: white wine

Text: Riesling
The answer is:
```  
 
## Example 5: Give instructions

``` 
Summarize this text. 

Text: A quantum computer exploits quantum mechanical phenomena to perform
calculations exponentially faster than any modern traditional computer. At very
tiny scales, physical matter acts as both particles and as waves, and quantum
computing uses specialized hardware to leverage this behavior. The operating
principles of quantum devices is beyond the scope of classical physics. When
deployed at scale, quantum computers could be used in a wide variety of
applications such as: in cybersecurity to break existing encryption methods
while helping researchers create new ones, in meteorology to develop better
weather forecasting etc. However, the current state of the art quantum
computers are still largely experimental and impractical.
  
Summarize this text.
Write the summary so that a fifth grader can understand it.
Text: A quantum computer exploits quantum mechanical phenomena to perform
calculations exponentially faster than any modern traditional computer. At very
tiny scales, physical matter acts as both particles and as waves, and quantum
computing uses specialized hardware to leverage this behavior. The operating
principles of quantum devices is beyond the scope of classical physics. When
deployed at scale, quantum computers could be used in a wide variety of
applications such as: in cybersecurity to break existing encryption methods
while helping researchers create new ones, in meteorology to develop better
weather forecasting etc. However, the current state of the art quantum
computers are still largely experimental and impractical.  
```
  
## Example 6 : Zero-shot 

Please choose the best explanation to the question:
```
Question: How is snow formed?
Explanation1: Snow is formed when water vapor in the air freezes into ice crystals in the atmosphere, which can combine and grow into snowflakes as they fall through the atmosphere and accumulate on the ground.
Explanation2: Water vapor freezes into ice crystals forming snow.
Answer:

```

## Example 7 : few-shot prompts

```
Please choose the best explanation to the question:
Question: Why is sky blue?
Explanation1: The sky appears blue because of Rayleigh scattering, which causes shorter blue wavelengths of light to be scattered more easily than longer red wavelengths, making the sky look blue.
Explanation2: Due to Rayleigh scattering effect.
Answer: Explanation2, because Explanation2 is shorter.

Question: What is the cause of earthquakes?
Explanation1: Sudden release of energy in the Earth's crust.
Explanation2: Earthquakes happen when tectonic plates suddenly slip or break apart, causing a release of energy that creates seismic waves that can shake the ground and cause damage.
Answer: Explanation1, because Explanation1 is shorter.

Question: How is snow formed?
Explanation1: Snow is formed when water vapor in the air freezes into ice crystals in the atmosphere, which can combine and grow into snowflakes as they fall through the atmosphere and accumulate on the ground.
Explanation2: Water vapor freezes into ice crystals forming snow.
Answer:
```

> At the same time, if you include too many examples, the model may start to overfit the response to the examples.

## Example 8: Pattern vs Antipattern
Use examples to show patterns instead of antipatterns.  Using examples to show the model a pattern to follow is more effective than using examples to show the model an antipattern to avoid.

Wrong example
```
Don't end haikus with a question:
Haiku are fun
A short and simple poem
Don't you enjoy them?
```

Right example 
```
Always end haikus with an assertion:
Haiku are fun
A short and simple poem
A joy to write
```

## Example 9 :Let the model complete partial input

```
For the given order, return a JSON object that has the fields cheeseburger, burger, fries, or drink, with the value being the quantity.

Order: A burger and a drink.
  
```

## Example 10: Field Validation for Json.

```
Valid fields are cheeseburger, hamburger, fries, and drink.
Order: Give me a cheeseburger and fries
Output: {"cheeseburger": 1, "fries": 1}

Order: I want two burgers, a drink, and waffles.
Output:
```

## Example 11: Prompt the model to format its response
```
Create an outline for an essay about hummingbirds.
```

- Example 11a:
```
Create an outline for an essay about hummingbirds.
I. Introduction
   *
```

## Example 12: Add contextual information
```
What should I do to fix my disconnected wifi? The light on my Google Wifi router is yellow and blinking slowly.
```

## Example 13- Add contextual info.
```
Answer the question using the text below. Respond with only the text provided.
Question: What should I do to fix my disconnected wifi? The light on my Google Wifi router is yellow and blinking slowly.

Text:
Color: Slowly pulsing yellow
What it means: There is a network error.
What to do:
Check that the Ethernet cable is connected to both your router and your modem and both devices are turned on. You might need to unplug and plug in each device again.

Color: Fast blinking yellow
What it means: You are holding down the reset button and are factory resetting this device.
What to do:
If you keep holding down the reset button, after about 12 seconds, the light will turn solid yellow. Once it is solid yellow, let go of the factory reset button.

Color: Solid yellow
What it means: Router is factory resetting.
What to do:
This can take up to 10 minutes. When it's done, the device will reset itself and start pulsing white, letting you know it's ready for setup.
Image Solid red light Solid red Something is wrong. Critical failure. Factory reset the router. If the light stays red, contact Wifi customer support."
```

## Example 14- Add prefixes
	- Input prefix: Adding a prefix to the input signals semantically meaningful parts of the input to the model. For example, the prefixes "English:" and "French:" demarcate two different languages.
	- Output prefix: Even though the output is generated by the model, you can add a prefix for the output in the prompt. The output prefix gives the model information about what's expected as a response. For example, the output prefix "JSON:" signals to the model that the output should be in JSON format.
	- Example prefix: In few-shot prompts, adding prefixes to the examples provide labels that the model can use when generating the output, which makes it easier to parse output content.

```
Classify the text as one of the following categories.
- large
- small

Text: Rhino
The answer is: large
Text: Mouse
The answer is: small
Text: Snail
The answer is: small
Text: Elephant
The answer is:
```
## Designing Chat Prompt

### Chatbot use cases
The following are common use cases for chatbots.

- Customer service: Answer customer questions, troubleshoot issues, and provide information.
- Sales and marketing: Generate leads, qualify prospects, answer questions.
- Productivity: Schedule appointments, create action items, and find information.
- Education and training: Assess the students level, answer questions, and give feedback.
- Research: Collect data, conduct surveys, and analyze data.

### Best practices for chat prompts
- For the best results, provide your model contextual information.
- For example, you might provide information for the model to use or instructions for the model to follow.
- Chat prompt components
	- PaLM API chat prompts are composed of the following three components:
		- Messages (required)
		- Context (optional)
		- Examples (optional)

### Talk to Chat 
What is your favorite show?   
Who is your favorite character on the show?   

### Giving context
You can give your chatbot additional context in advance to shape its responses. You can specify words the model can or cannot use, topics to focus on or avoid, or response format or style.

The context enables you to customize the model's behavior during a conversation. You can use context to do the following:   
- Specify words that the model can and can't use.   
- Specify topics to focus on or to avoid.   
- Specify the style, tone, or format of the response.   
- Assume a character, figure, or role.   

```
Example
In the following prompt we customize a chatbot for Lola Lollipops, a candy store.
Context:
You are Lola, a customer service chatbot for Lola Lollipops.
You only answer customer questions about Lola Lollipops and its products.

What's the weather like?
```

### Add Examples
Giving examples shows the model what an appropriate response looks like. You can write your own example input and outputs with a prefix: questions are for USER and answers are for AI.

Provide in-context examples:   
You can also provide a list of structured messages to the model to learn how to respond to the conversation.

You can add an example of how the chatbot greets customers.

### More functions
Customize other parameters
In this UI, you cannot specify temperature, maxOutputTokens, topK and topP parameters. If you would like to make changes to those, use cURL command to trigger desired chat responses

### Perform model tuning
For instructions on prompt engineering strategies and model tuning in the Generative AI Studio, see the other tutorials.

## Experiment with different parameter values
	- Max output tokens: Maximum number of tokens that can be generated in the response. A token is approximately four characters. 100 tokens correspond to roughly 60-80 words.Specify a lower value for shorter responses and a higher value for longer responses.

	- Temperature: The temperature is used for sampling during response generation, which occurs when topP and topK are applied. Temperature controls the degree of randomness in token selection. Lower temperatures are good for prompts that require a more deterministic and less open-ended or creative response, while higher temperatures can lead to more diverse or creative results. A temperature of 0 is deterministic, meaning that the highest probability response is always selected.
	For most use cases, try starting with a temperature of 0.2. If the model returns a response that's too generic, too short, or the model gives a fallback response, try increasing the temperature.

	- Top-K: Top-K changes how the model selects tokens for output. A top-K of 1 means the next selected token is the most probable among all tokens in the model's vocabulary (also called greedy decoding), while a top-K of 3 means that the next token is selected from among the three most probable tokens by using temperature. For each token selection step, the top-K tokens with the highest probabilities are sampled. Then tokens are further filtered based on top-P with the final token selected using temperature sampling. Specify a lower value for less random responses and a higher value for more random responses. The default top-K is 40.

	- Top-P: Top-P changes how the model selects tokens for output. Tokens are selected from the most (see top-K) to least probable until the sum of their probabilities equals the top-P value. For example, if tokens A, B, and C have a probability of 0.3, 0.2, and 0.1 and the top-P value is 0.5, then the model will select either A or B as the next token by using temperature and excludes C as a candidate.
	Specify a lower value for less random responses and a higher value for more random responses. The default top-P is 0.95.
	
## Prompt iteration strategies
	- Use different phrasing
	```
	Version 1:
	How do I bake a pie?

	Version 2:
	Suggest a recipe for a pie.

	Version 3:
	What's a good pie recipe?
	```
	
	- Switch to an analogous task
	```
	Which category does The Odyssey belong to:
	- thriller
	- sci-fi
	- mythology
	- biography
	
	
	Multiple choice problem: Which of the following options describes the book The Odyssey?
	Options:
	- thriller
	- sci-fi
	- mythology
	- biography
	```
## Change the order of prompt content

	Version 1:
	[examples]
	[context]
	[input]

	Version 2:
	[input]
	[examples]
	[context]

	Version 3:
	[examples]
	[input]
	[context]
	
## Fallback response
	```
	"I'm not able to help with that, as I'm only a language model."
	```
	
## Things to avoid
	- Avoid relying on models to generate factual information.
	- Use with care on math and logic problems.
	
## References 
- [Prompt Best Practices by Google](https://developers.generativeai.google/guide/prompt_best_practices)
- [Chatgpt Usecases by Hari Thapliyaal](https://dasarpai.com/dsblog/chatgpt-usecases)
- [GPT Usecases by by Hari Thapliyaal](https://dasarpai.com/dsblog/gpt-usecases)
- [Business Usecase of GPT by Hari Thapliyaal](https://dasarpai.com/dsblog/business-usecases-of-gpt)
- [Will AI Replace Human by Hari Thapliyaal](https://dasarpai.com/dsblog/will-ai-replace-human)
