---
mathjax: true
id: 6074
title: Python Decorator Function
date: 2023-07-15
permalink: '/dsblog/Python-Decorator-Function'
tags: [Python, Programming] 
categories: 

header:
    teaser: /assets/images/dspost/dsp6074-Python-Decorator-Function.jpg
excerpt_separator: "<!--more-->"  
excerpt:  
layout: single  
author_profile: true  
toc: true  
toc_sticky: true
---

![Python Decorator Function](/assets/images/dspost/dsp6074-Python-Decorator-Function.jpg)   

# Python Decorator Function

## What is Decorator Function in Python

In Python, a decorator is a special type of function that allows you to modify or extend the behavior of other functions or methods. Decorators provide a convenient way to add functionality to functions without modifying their code directly. They are commonly used for tasks such as logging, authorization, caching, and more.

A decorator function takes **another function as an argument*, adds some functionality to it, and returns a new function that includes the original function's behavior along with the additional functionality.

To define a decorator, you use the @decorator_name syntax above the function you want to decorate. When the decorated function is called, it is passed as an argument to the decorator function.

Here's a simple example of a decorator:

```python

def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()


Output:

Something is happening before the function is called.
Hello!
Something is happening after the function is called.

```

In this example, we have defined a decorator function my_decorator. The wrapper function is nested inside my_decorator, and it contains the additional functionality we want to add before and after calling the original function.

When we apply the @my_decorator syntax above the say_hello function, it is equivalent to doing say_hello = my_decorator(say_hello). This means that say_hello is replaced with the wrapper function returned by my_decorator.

So, when we call say_hello(), it actually calls the wrapper() function inside my_decorator, which, in turn, calls the original say_hello() function, while also adding the "Something is happening before..." and "Something is happening after..." messages.

Decorators can also take arguments and be stacked (using multiple decorators on the same function). Python provides the functools.wraps decorator to preserve the original function's metadata (e.g., docstrings) when defining your own decorators.

Decorators are powerful and widely used in Python to enhance the functionality of functions and methods in a clean and reusable way.

Let's understand this with one more practical senerio.
You are working on an banking application. Bank pays interest to to depositors. To calculate the inerest you already have 'Calculate_Interest' function in place. Now you want to add two more functionality in this function.  1- If there is notice from the Income tax department then do not pay them interest. 2- To deduct the TDS on the interest paid. You want to achieve this without modifying the original function. The reason for this may be. 1- Interest calculation function does not change. 2- Business and regulatory requirments around interest calculation keep changing from time to time. Here is the way you will implement it using decorator.


```python 
def calculate_interest_with_rules(func):
    def get_incometax_notified_account_list():
        #python code to get the list
        return the_list

    def calculate_tds():
        #pthon code to calculate tds
        return True

    notified_accounts = get_incometax_notified_account_list() 
    func(param1, param2, param3) #This is the main function.
    calculate_tds(param1, param2) 

@calculate_inerest_with_rules
def calculate_interest(param1, param2, param3):
    # python code to read the data
    # calculate the interest
    # and inform the interest has been calculated successfully.
    pass

# call the calculate interest function.

start_date='01-01-23'
end_end='31-03-23'
accounts=[1,2,3,4,5,6]
calculate_interest(accoutns, start_date, end_date)
```