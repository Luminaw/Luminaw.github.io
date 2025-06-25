---
title: "Code Cleanup: A Tour of My Old Projects"
date: "2025-06-25"
layout: layouts/post.njk
description: "Some of my old projects that I decided to release."
---


# Code Cleanup: A Tour of My Old Projects

I spent some time this week digging through old folders, cleaning up some past projects, and finally uploading them to GitHub. Each one was built to solve a specific problem or to learn something new. Here’s a quick tour.

---

### `window_closer`
[**GitHub Link**](https://github.com/Luminaw/window_closer)

A small program I wrote in Rust as an alternative to the popular `SuperF4` utility. This was mainly a learning project to get more familiar with using the Windows API (WinAPI) in a Rust environment.

### `spamKey`
[**GitHub Link**](https://github.com/Luminaw/spamKey)

This is a classic "scratch your own itch" tool. I threw it together to spam the spacebar in a game I was playing. It's essentially a keyboard autoclicker where you can easily edit the C++ source to spam any [Virtual-Key Code](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes).

### `sops`
[**GitHub Link**](https://github.com/Luminaw/sops)

I created `sops` as a workaround for a tricky integration. I had an application that only supported WebSockets, but I needed it to communicate using named pipes. Instead of rewriting a library to add named pipe support for Lua, I built this middle layer to translate all calls between the two.

### `rdrand`
[**GitHub Link**](https://github.com/Luminaw/rdrand)

A tiny, single-purpose utility to test if a CPU supports the `RDRAND` hardware instruction for generating random numbers. I made this to quickly check a few different machines I was working with at the time.

### `pass`
[**GitHub Link**](https://github.com/Luminaw/pass)

I noticed that while many password generators list a password's entropy, very few let you generate a password *by targeting* a specific entropy level. So, I wrote `pass` to do just that. It generates a password using random words until it hits your desired entropy threshold.

### `mem_test`
[**GitHub Link**](https://github.com/Luminaw/mem_test)

After experiencing random crashes in some apps, I needed a way to test my RAM without having to reboot and run `memtest86` for hours. This Windows console app floods an address space with bits and then checks if any of them have flipped, giving me a quick way to check for memory errors without losing my uptime.

### `MicUp`
[**GitHub Link**](https://github.com/Luminaw/MicUp)

My microphone was just too quiet, even at 100% volume. `MicUp` is my solution: a console app with a visualizer that uses a virtual audio cable to boost an input device’s gain far beyond the default limits.
