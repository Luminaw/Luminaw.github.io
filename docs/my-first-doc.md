---
title: "My First Doc"
date: "2025-06-19"
layout: layouts/doc.njk
description: "This is the first documentation page."
---

## Welcome to my documentation!

This is the body of my first documentation page. I'm excited to start sharing my project's documentation with you.


### With some code mixed in

Javascript primes

``` js
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}
```
Rust primes
```rust
fn is_prime(n: u32) -> bool {
    if n <= 1 {
        return false;
    }
    for a in 2..n {
        if n % a == 0 {
            return false; // if it is not the last statement you need to use `return`
        }
    }
    true // last value to return
}
```