1. What is Regular Expression in JavaScript? How to validate email id using Regular Expression?
Ans: Regualr expression is a sequence of character which define a specific pattern and also named as abbreviated regex or regexp and sometimes called a rational      expression. we can make regular expression like ( “/ABC/”  ,”Ab_123.Cd” ,”abc123.-@&”…) 

     They can be patterns or combination of alphabets(a,b..z) ,numbers(0,1…9), special character     ( |, (),^, ), Quantifiers(*, +, ?), wildcards(.) character      set[], character ranges[start ,end].
     
     Email address validation through regular expression - /^w+[+.w-]*@([w-]+.)*w+[w-]*.([a-z]{2,4}|d+)$/i
