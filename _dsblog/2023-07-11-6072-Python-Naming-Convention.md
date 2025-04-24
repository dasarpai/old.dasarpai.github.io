---
mathjax: true
id: 6072
title: Python Naming Convention
date: 2023-07-11
permalink: '/dsblog/Python-Naming-Convention'
tags: [Python, Programming, Code Style, Best Practices, Software Development, PEP 8] 
categories:
  - dsblog
keywords: [Python Naming Convention, PEP 8, Code Style Guide, Python Programming, Best Practices, Clean Code, Variable Naming, Function Naming]
header:
    teaser: /assets/images/dspost/dsp6072-Python-Naming-Convention.jpg
excerpt_separator: "<!--more-->"   
author: Hari Thapliyaal   
layout: dspost-layout   
excerpt: A comprehensive guide to Python naming conventions following PEP 8 standards. Learn best practices for naming variables, functions, classes, and modules to write clean, maintainable, and Pythonic code.   
author_profile: true   
share: true   
toc: true   
toc_sticky: true 
mathjax: "true"
---

![Python Naming Convention](/assets/images/dspost/dsp6072-Python-Naming-Convention.jpg)   

# Python Naming Convention

- UPPERCASE / UPPER_CASE_WITH_UNDERSCORES => module-level constants
- lowercase / lower_case_with_underscores => for variable and function name.
- CapitalizedWords (or CapWords, or CamelCase – so named because of the bumpy look of its letters [4]). This is also sometimes known as StudlyCaps. => CamelCase => Class
	- Note: When using acronyms in CapWords, capitalize all the letters of the acronym. Thus HTTPServerError is better than HttpServerError.
- mixedCase (differs from CapitalizedWords by initial lowercase character!)
- Capitalized_Words_With_Underscores (ugly!)
- \_single_leading_underscore: weak “internal use” indicator. E.g. from M import * does not import objects whose names start with an underscore.
- single_trailing_underscore_: used by convention to avoid conflicts with Python keyword, e.g.
tkinter.Toplevel(master, class_='ClassName')
- \__double_leading_underscore: when naming a class attribute, invokes name mangling (inside class FooBar, __boo becomes _FooBar__boo; see below).
- \__double_leading_and_trailing_underscore__: “magic” objects or attributes that live in user-controlled namespaces. E.g. \__init__, \__import__ or \__file__. Never invent such names; only use them as documented.
- Never use the characters ‘l’ (lowercase letter el), ‘O’ (uppercase letter oh), or ‘I’ (uppercase letter eye) as single character variable names.


# Programming Recommendations
## Use "is not" operator
- Correct:

```python
if foo is not None:
```

- Wrong:
```python 
if not foo is None:
```

## Always use a def statement
- Correct:
```python 
def f(x): return 2*x
```

- Wrong:
```python 
f = lambda x: 2*x
```

## all try/except clauses
- Correct:
```python
try:
    value = collection[key]
except KeyError:
    return key_not_found(key)
else:
    return handle_value(value)
```

- Wrong:
```python 
try:
    # Too broad!
    return handle_value(collection[key])
except KeyError:
    # Will also catch KeyError raised by handle_value()
    return key_not_found(key)
```

## Context managers should be invoked through separate functions or methods	

- Correct:

```python 
with conn.begin_transaction():
    do_stuff_in_transaction(conn)
```

- Wrong:

```python 
with conn:
    do_stuff_in_transaction(conn)
```

## Be consistent in return statements

- Correct:

```python
def foo(x):
    if x >= 0:
        return math.sqrt(x)
    else:
        return None

def bar(x):
    if x < 0:
        return None
    return math.sqrt(x)
```

- Wrong:

```python
def foo(x):
    if x >= 0:
        return math.sqrt(x)

def bar(x):
    if x < 0:
        return
    return math.sqrt(x)
```

## startswith, endswith 
- Use ''.startswith() and ''.endswith() instead of string slicing to check for prefixes or suffixes.		
- Correct:
if foo.startswith('bar'):
- Wrong:
if foo[:3] == 'bar':

## Object type comparisons
- Correct:
if isinstance(obj, int):
- Wrong:
if type(obj) is type(1):

## Sequences, (strings, lists, tuples)
-For sequences, (strings, lists, tuples), use the fact that empty sequences are false:

- Correct:

```python
if not seq:
	if seq:
```
- Wrong:

```python
if len(seq):
	if not len(seq):
```

## boolean value comparision
Don’t compare boolean values to True or False using ==:
- Correct:
if greeting:
- Wrong:
if greeting == True:
- Worse:
if greeting is True:

## Assignment
If an assignment has a right hand side, then the equality sign should have exactly one space on both sides:
- Correct:
```python 
code: int

class Point:
    coords: Tuple[int, int]
    label: str = '<unknown>'
```
- Wrong:
```python
code:int  # No space after colon
code : int  # Space before colon

class Test:
    result: int=0  # No spaces around equality sign
```
	
## References
- https://peps.python.org/pep-0008/#programming-recommendations
