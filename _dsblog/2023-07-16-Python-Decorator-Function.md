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

## Decorator Simple Example 1

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

## Decorator Example 2
Decorator function is without parameter.

```python 
import random 

def calculate_interest_with_rules(func):
    someothervar = random.randint(1,5)

    def get_incometax_notified_account_list():
        # python code to get the notified account list
        notified_list = {1, 2} 
        return notified_list

    def calculate_tds(interest, start_date, end_date):
        # python code to calculate tds
        tds = {}  # Initialize an empty dictionary
        for k,v in interest.items():
          tds[k] = v*0.1
          
        # Your code to calculate TDS should be here
        return tds  # Return the tds dictionary with TDS information

    def wrapper(someothervar, accounts, start_date, end_date): 
        #you can use someothervar here to some other logic

        notified_accounts = get_incometax_notified_account_list()
        clean_accounts = set(accounts).difference(notified_accounts)

        interest = func(clean_accounts, start_date, end_date)

        tds = calculate_tds(interest, start_date, end_date)  

        return interest, tds  # Return both interest and tds

    return wrapper  # Return the wrapper function

@calculate_interest_with_rules  # Correct the decorator name
def calculate_interest(accounts, start_date, end_date):  # Add missing parameters
    # python code to read the data
    # calculate the interest
    # and inform the interest has been calculated successfully.
    interest = {}
    for account in accounts:
        interest[account] = 200 * account * random.randint(2, 20)

    return interest

# call the calculate interest function.

start_date = '01-01-23'
end_date = '31-03-23'
accounts = [1, 2, 3, 4, 5, 6]
interest, tds = calculate_interest(accounts, start_date, end_date)  # Correct the variable name 'accoutns' to 'accounts'
print("Interest:", interest)
print("TDS:", tds)  # Display the TDS information as well

#output
Interest: {3: 8400, 4: 14400, 5: 5000, 6: 22800}
TDS: {3: 840.0, 4: 1440.0, 5: 500.0, 6: 2280.0}
```

## Dectorator Example 3
In this example decorator function is also having parameter.

```python 
import random 

def calculate_interest_with_rules(FOR_NRI_ACCOUNTS):  # Add param1 as a parameter to the decorator
    def get_incometax_notified_account_list():
        # python code to get the list
        notified_list = {1, 2}  # Use curly braces for a set
        return notified_list

    def calculate_tds(interest, start_date, end_date):
        # python code to calculate tds
        tds = {}  # Initialize an empty dictionary
        for k,v in interest.items():
          tds[k] = v*0.1
          
        # Your code to calculate TDS should be here
        return tds  # Return the tds dictionary with TDS information

    def decorator_wrapper(func):  # Wrap the decorator with another function to pass param1
        def wrapper(accounts, start_date, end_date):  # Add correct parameters to the wrapper
            if FOR_NRI_ACCOUNTS: #if the account we are processing is NRI account then only
              notified_accounts = get_incometax_notified_account_list()
              clean_accounts = set(accounts).difference(notified_accounts)

              interest = func(clean_accounts, start_date, end_date)  # Pass correct parameters to the func
              tds = calculate_tds(interest, start_date, end_date)  # Use the decorator's param1
            else:
              interest={}
              tds={}

            return interest, tds  # Return both interest and tds

        return wrapper  # Return the wrapper function

    return decorator_wrapper  # Return the decorator wrapper function

FOR_NRI_ACCOUNTS=True
@calculate_interest_with_rules(FOR_NRI_ACCOUNTS)  # Add param1 when applying the decorator
def calculate_interest(accounts, start_date, end_date):  # Add missing parameters
    # python code to read the data
    # calculate the interest
    # and inform the interest has been calculated successfully.
    interest = {}
    for account in accounts:
        interest[account] = 200 * account * random.randint(2, 20)

    return interest

# call the calculate interest function.

start_date = '01-01-23'
end_date = '31-03-23'
accounts = [1, 2, 3, 4, 5, 6]
interest, tds = calculate_interest(accounts, start_date, end_date)
print("Interest:", interest)
print("TDS:", tds)

output
Interest: {3: 12000, 4: 9600, 5: 18000, 6: 19200}
TDS: {3: 1200.0, 4: 960.0, 5: 1800.0, 6: 1920.0}
```