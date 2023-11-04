
[//]: # (this code is commented in markdown. Keep one empty line before, and space after #)

  

# Markdown Code Help Note

# Styling & Headings

# Markdown heading1 styles 
## Markdown heading2 styles
### Markdown heading3 styles
#### Markdown heading4 styles

# Math Help
https://csrgxtu.github.io/2015/03/20/Writing-Mathematic-Fomulars-in-Markdown/

# Hyperlink
This is [hyperlink](https://csrgxtu.github.io/2015/03/20/Writing-Mathematic-Fomulars-in-Markdown/)

# Open link in New Window 
<a href="https://www.statisticssolutions.com/free-resources/directory-of-statistical-analyses/assumptions-of-linear-regression/" target="_blank">Linear Regression Open Link in Ne Window</a>


# Coding 
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```
   
```sh
127.0.0.1:8000
```

# Lines
***
---
___

# Special Characters Used in Markdown
```
\   backslash
`   backtick
*   asterisk
_   underscore
{}  curly braces
[]  square brackets
()  parentheses
#   hash mark
+   plus sign
-   minus sign (hyphen)
.   dot
!   exclamation mark
```

# Image from Dropbox with HTML
<img src="https://www.dropbox.com/s/7o1kkkfjwx1kilq/2021-06-25%2011_32_39-AI%20overview.jpg?raw=1" alt="Girl in a jacket" width=50%>       

# Image from Dropbox without HTML
![Girl in a jacket](https://www.dropbox.com/s/7o1kkkfjwx1kilq/2021-06-25%2011_32_39-AI%20overview.jpg?raw=1){: width="45"} 

# Display Image
![jason_brownlee](https://machinelearningmastery.com/wp-content/uploads/2013/11/jason_brownlee-221x300.jpg)

# Mathematics

- https://utensil-site.github.io/available-in-katex/

$ \begin{pmatrix}
aaa & b\cr
c   & ddd
\end{pmatrix} $

$\begin{vmatrix}
aaa & b\cr
c   & ddd
\end{vmatrix}$

$\begin{Vmatrix}
aaa & b\cr
c   & ddd
\end{Vmatrix}$

$\def\arraystretch{1.5}
  \begin{array}{c:c:c}
  a & b & c \\ \hline
  d & e & f \\ \hdashline
  g & h & i
\end{array}$

$\begin{aligned}
  a=b&+c \\
  d&+e=f
\end{aligned}$
=====
$ \sum_{\mathclap{1\le i\le n}} x_{i} $
===

$x = \begin{cases}
  a &\text{if } b \\
  c &\text{if } d
\end{cases}$

$\Biggl(  \Biggr) 
\iiint \\
\coprod \\
\prod \\
\bigoplus
$

${a+1 \over b+2}+c$

$n+1 \choose k+2$

$ \LARGE {a+1 \over b+2}+c $

$ \Huge {a+1 \over b+2}+c $

$\begin{matrix}
   a & b \\
   \hdashline
   c & d
\end{matrix}$

$\oiiint$

$\ddot x$

$\def\foo{x^6} \def\zoo{x^2} \foo + \zoo$

$\begin{array}{c}
x_1, \dots, x_n \cr
x_1 + \dots + x_n
\end{array}$

$\href{http://www.onemathematicalcat.org}{Math}$

$\Huge \int\limits_a^b f(x)\,dx$

$a + \lt b\gt + c$

$\gt \, \geq \, \ngeq \, \nleq $

$ \sum\nolimits_{k=1}^n a_k $

$\sum\limits_{k=1}^n a_k$

$\Sigma$

$\sum$

$\tfrac 12$

$x+\xcancel{5y}=0$


## Math Equation Using Latex & HTML
<img src="https://latex.codecogs.com/svg.latex?\Large&space;x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}" title="\Large x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}" />      

## Math Equation Using Latex but without HTML

![\large x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}](https://latex.codecogs.com/svg.latex?\Large&space;x=\frac{-b\pm\sqrt{b^2-4ac}}{2a})      

## Math Equation Using github & HTML
<img src="https://render.githubusercontent.com/render/math?math=x_{1,2} = \frac{-b \pm \sqrt{b^2-4ac}}{2b}">
      

## Math Equations without HTML & without Markdown Tags
$$ cos^2 \theta + sin^2 \theta  = 1  $$
 
$$ tan 2 \theta = {2tan \theta  \over 1 - tan^2 \theta}  $$


eqalign Used for equation alignment; for aligning multi-line displays at a single place.    
 
$$\eqalign{
cos 2 \theta = cos^2 \theta - sin^2 \theta \\
                       &=  2 cos^2  \theta -1 \\
                       &= 1 - 2sin^2 \theta
}$$
 
$$ \eqalign{
(a+b)^2 &= (a+b)(a+b) \\
        &= a^2 + ab + ba + b^2 \\
        &= a^2 + 2ab + b^2
} $$

# Matrix 1
	
$$ \left\lbrack \begin{matrix}
a & b &d \cr
c & d &e \cr
x & y & z \end{matrix}\rbrack\right $$


$$ \eqalign{
\int_1^2 (x + 4)^2 dx = \int_1^2 (x^2 + 8x + 16) dx \\
  &= \left\lbrack {x^3 \over 3} + {8x^2 \over 2} + 16x \right\rbrack_1^2 \\
  &= \left\lbrack {8 \over 3} + {8 * 4 \over 2} + 16 * 2 \right\rbrack
   - \left\lbrack {1 \over 3} + {8 \over 2}  + 16  \right\rbrack
} $$ 

# Matrix 2

$$ {\left\lbrack \matrix{2 & 3 \cr 4 & 5} \right\rbrack} 
* \left\lbrack \matrix{1 & 0 \cr 0 & 1} \right\rbrack
= \left\lbrack \matrix{2 & 3 \cr 4 & 5} \right\rbrack $$

$$ \begin{bmatrix}  2 & 3 \cr  4 & 5  \end{bmatrix} 

* \begin{bmatrix} 1 & 0 \cr 0 & 1 \end{bmatrix} 

= \begin{bmatrix} 2 & 3 \cr 4 & 5 \end{bmatrix} $$

$$ \begin{bmatrix} 
aaa & b & d\cr
c   & ddd & e\cr
x & y & z
\end{bmatrix} $$
 
$$ {
a &= 1\\
b &= 2\\
c &= 3}\\
ax + by &= c \\
 x + 2y &= 3 $$

$$ a  b  c\brack d+e+f $$

$$ \left(\vcenter{\frac{a+b}{\dfrac{c}{d}}}\right) $$

 $$ \begin{aligned} 
(a+b)^2 &= (a+b)(a+b)           \\
        &= a^2 + ab + ba + b^2  \\
        &= a^2 + 2ab + b^2  
\end{aligned} $$
 
Prove $$ \sqrt{ 1 - cos^2 \theta \over 1- sin^2 \theta} = tan \theta $$
 
$$ \sqrt{ 1 - cos^2 \theta \over 1- sin^2 \theta} 
= \sqrt{ sin^2 \theta \over cos^2 \theta} 
= {sin \theta \over cos \theta} = Tan \theta $$


Evaluate $$ \int_1^2 (x + 4)^2 dx $$


$$ \sum_{n=1}^n n = {n \over 2} (n + 1) $$
 
$$ \sum_{n=1}^n n^2 = {n \over 6} (n + 1)(2n + 1) $$


# Numbering
- [AngularJS] - HTML enhanced for web apps!
1. xbar
	- xx
	- yy
1. y 
1. z

# Creating Citation
[dill]: <https://github.com/joemccann/dillinger>
[git-repo-url]: <https://github.com/joemccann/dillinger.git>
   
# Block Quote
> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.

# Table

| Plugin | README    
| ---- 	| ----   
| My plugin | Documentation 
| Dropbox 	| [plugins/dropbox/README.md][PlDb] |
| GitHub 	| [plugins/github/README.md][PlGh] |


##### End of Help