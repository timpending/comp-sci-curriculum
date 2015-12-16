# Memory Management

So....what's the difference between Ruby and Java? PHP and C? Javascript and C++? One of the main differences is that some of these languages are compiled (C, C++, Java) and others are interpreted (Ruby, PHP)!

Don't know what a compiler is or what it does? Check out [this](https://www.youtube.com/watch?v=CSZLNYF4Klo&list=PLhQjrBD2T380dhmG9KMjsOQogweyjEeVQ&index=13) quick video for a good introduction.

There is another huge difference between C, C++ and all the other languages listed.  C and C++ does not include memory management for you.  You must manually allocate and deallocate memory as you use it.  As a programmer that is familiar with higher level languages such as ruby, PHP and even Java, this concept may be new to you.  In all of the higher level languages mentioned, memory is automatically allocated for you.  Here is an example:

```ruby
my_ruby_hash = Hash.new
```
In the above ruby code, memory is allocated by the ruby interpreter for your new hash that was created.  But you do not have to write any extra code to make sure that memory exists, ruby does it for you.  Additionaly, when that memory is no longer needed, it will be removed from your computer.  This process is known as __grabage collection__.
