# Binary

Let's learn to count like computers.

Computers only use the numbers zero and one. Everything that you see or hear on the computer, every interaction, click, scroll and computation is stored using just those two numbers!

Numeric values can be represented in binary.  The binary value `10`, is 2 in base 10 (base 10 is how we think about numbers normally).  `10` represents 2 because the left most value is 1 * 2^1 and the 0 is equivalent to 0 * 2^0. In other words: `10 (binary) = 1 * 2^1 + 0 * 2^0 = 2 (base 10).

Now you should get the following joke:

> There are 10 types of people in the world, those who understand binary and those who don't.

Another example would be `101` = 1 * 2^2 + 0 * 2^1 + 1 * 2^0 = 5 (base 10).

The chart below shows the binary value `01000111`:

<table>
<tr>
  <td>Position</td>
  <td>2^7</td>
  <td>2^6</td>
  <td>2^5</td>
  <td>2^4</td>
  <td>2^3</td>
  <td>2^2</td>
  <td>2^1</td>
  <td>2^0</td>
</tr>
<tr>
  <td>Amount</td>
  <td>128</td>
  <td>64</td>
  <td>32</td>
  <td>16</td>
  <td>8</td>
  <td>4</td>
  <td>2</td>
  <td>1</td>
</tr>
<tr>
  <td>Binary</td>
  <td>0</td>
  <td>1</td>
  <td>0</td>
  <td>0</td>
  <td>0</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
</tr>
<tr>
  <td>Count</td>
  <td></td>
  <td>64</td>
  <td></td>
  <td></td>
  <td></td>
  <td>4</td>
  <td>2</td>
  <td>1</td>
</tr>
</table>

With this table in mind:

`01000111 = 64 + 4 + 2 + 1`

`01000111 = 71`

Here is another example

<table>
<tr>
  <td>Binary</td>
  <td>1</td>
  <td>1</td>
  <td>0</td>
  <td>1</td>
  <td>0</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
</tr>
<tr>
  <td>Count</td>
  <td>128</td>
  <td>64</td>
  <td></td>
  <td>16</td>
  <td></td>
  <td>4</td>
  <td>2</td>
  <td>1</td>
</tr>
</table>

`11010111 = 128 + 64 + 16 + 4 + 2 + 1`

`11010111 = 215`

### What about addition?

What is `10010101 + 11110010?`
<table>
<tr>
<td>Binary One</td>
<td>1</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td>0</td>
<td>1</td>
<td>0</td>
<td>1</td>
</tr>

<tr>
<td>Binary Two</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>

<tr>
<td>Sum</td>
<td>2</td>
<td>1</td>
<td>1</td>
<td>2</td>
<td>0</td>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>
</table>

We now take this sum and multiply the total binary amounts by their respective base 2 amount

<table>
<tr>
<td>Sum</td>
<td>2</td>
<td>1</td>
<td>1</td>
<td>2</td>
<td>0</td>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>

<tr>
  <td>Amount</td>
  <td>128</td>
  <td>64</td>
  <td>32</td>
  <td>16</td>
  <td>8</td>
  <td>4</td>
  <td>2</td>
  <td>1</td>
</tr>

<tr>
<tr>
  <td>Total</td>
  <td>128 * 2</td>
  <td>64 * 1</td>
  <td>32 * 1</td>
  <td>16 * 2</td>
  <td>8 * 0</td>
  <td>4 * 1</td>
  <td>2 * 1</td>
  <td>1 * 1</td>
</tr>
</table>


`10010101 + 11110010` =  `128* 2	 + 64 *1 + 	+  32 *1	+  16* 2	+  8 * 0	+  4 *1	+  2 * 1	 + 1 *1`

`10010101 + 11110010` = `256 + 64 + 32 + 32 + 4 +2 +1`

`10010101 + 11110010` = `391`

Try subtraction! It works too!

## Resources

- http://www.garlikov.com/Soc_Meth.html
