# ASCII

So computers are really good at processing numbers quickly, but a computer only really understands zeros and ones. What about letters? How do we translate binary into characters? In english we have 26 letters in the alphabet, so we assign these from 0 to 25 and give them binary values! But..that's not enough. What about uppercase letters? We want our computer to do that so we need an additional 26...and what about special characters? There are 32 of those (you can count them if you don't believe me), and the space bar also.

So where do we start? Do we start from 0? Or 20? or 40? In the early 1960s this was a big issue. Different computer manufactures would use different encoding schemes which made communication extremely difficult. So the American National Standards Institute (ANSI) set out to develop a common scheme and in 1963 they came out with ASCII which was designed as a __7__ bit encoding which means that each character is represented by a set of 7 0s or 1s, which means that we have 2^7 or 128 possible characters. We go from `0000000` (0) to `1111111` (127) in this scheme.

- 26 - lowercase characters
- 26 - uppercase characters
- 10  - digit characters
- 32 -  punctuation characters
- 1 - space character

So we're at 95....what's left?

So back in days of ASCII development, teletype machines (typewriters used to send messages across a network) were very common. These machines had additional characters to control them (new line key, carriage return key, backspace key etc.). These characters are called control characters and they make up the rest of the numbers.

Here is what an ASCII table looks like

![http://www.asciitable.com/index/asciifull.gif](http://upload.wikimedia.org/wikipedia/commons/d/dd/ASCII-Table.svg)

If you look at the table you can see the that capital letters always have a 0 in the 2^5 spot where lowercase letters always have 1 there. This was intentional and a smart way to distinguish easily between uppercase and lowercase letters


### Ok...nice history lesson, but why do I care about this?

Believe it or not, we use this quite a bit, this is what our .charCodeAt function does in JavaScript! Try typing `"A".charCodeAt(0);` in chrome console and see what you get? Then look up the value in an ASCII table and you will see it corresponds to `01000001`. You can use `charCode` to do manipulation with letters and strings which is very useful!
