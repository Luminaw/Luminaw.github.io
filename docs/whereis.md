---
title: "whereis"
date: "2025-06-25"
layout: layouts/doc.njk
description: "An alternative to where on windows."
---

# `whereis` - Comprehensive Documentation

## Table of Contents

- [`whereis` - Comprehensive Documentation](#whereis---comprehensive-documentation)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [The Problem with `where` in PowerShell](#the-problem-with-where-in-powershell)
  - [How `whereis` Works](#how-whereis-works)
    - [Environment Variables](#environment-variables)
    - [Search Process](#search-process)
  - [Installation](#installation)
    - [From Releases](#from-releases)
    - [Building from Source](#building-from-source)
  - [Usage](#usage)
    - [Basic Usage](#basic-usage)
    - [Searching for Multiple Files](#searching-for-multiple-files)
    - [Output Format](#output-format)
  - [Examples](#examples)
  - [Platform Support](#platform-support)

---

## Introduction

`whereis` is a command-line utility written in Rust that helps you find the location of executables on your system. It serves as a powerful and reliable alternative to the built-in `where` command on Windows, especially for users of PowerShell.

## The Problem with `where` in PowerShell

In the Windows Command Prompt (`cmd.exe`), the `where` command is a utility for locating files. However, in PowerShell, `where` is a default alias for the `Where-Object` cmdlet. `Where-Object` is used for filtering objects in a pipeline and does not serve the same purpose as the original `where` command.

This conflict forces PowerShell users to use `where.exe` to access the file-finding utility, which can be inconvenient. `whereis` solves this problem by providing a dedicated, cross-platform command that is not aliased by default in any major shell.

## How `whereis` Works

The core logic of `whereis` is straightforward. It iterates through command-line arguments and searches for matching files within the directories specified by the system's `PATH` environment variable.

### Environment Variables

`whereis` relies on two key environment variables:

*   **`PATH`**: A list of directories where the operating system looks for executable files. `whereis` splits this variable to get a list of all directories to search.
*   **`PATHEXT`**: A list of file extensions that the operating system considers executable (e.g., `.EXE`, `.COM`, `.BAT` on Windows). `whereis` uses these extensions to find executable files even if the extension is not provided in the command-line argument.

### Search Process

For each command-line argument (the name of a program to find):

1.  `whereis` gets the list of directories from the `PATH` variable.
2.  It joins the program name with each directory to form a potential full path.
3.  For each potential path, it appends each extension from the `PATHEXT` variable.
4.  It checks if a file exists at the resulting path.
5.  If a file is found, its full path is printed to the console.

This process ensures a comprehensive search for the specified programs across all relevant system directories.

## Installation

### From Releases

The easiest way to install `whereis` is to download a pre-compiled binary.

1.  Go to the project's [Releases page](https://github.com/Luminaw/whereis/releases).
2.  Download the archive that matches your operating system and architecture.
3.  Extract the archive.
4.  Move the `whereis` executable to a directory that is included in your system's `PATH`.

### Building from Source

If you have the [Rust toolchain](https://www.rust-lang.org/tools/install) installed, you can build `whereis` from its source code.

1.  Clone the repository:
    ```sh
    git clone https://github.com/Luminaw/whereis.git
    cd whereis
    ```

2.  Build the project in release mode for optimal performance:
    ```sh
    cargo build --release
    ```

3.  The compiled executable will be available in the `target/release/` directory. You can then move this file to a directory in your `PATH`.

## Usage

### Basic Usage

To find a single program, pass its name as an argument to `whereis`:

```sh
whereis node
```

If `node` is in your `PATH`, `whereis` will output its full path, for example:
`C:\Program Files\nodejs\node.exe`

### Searching for Multiple Files

You can search for multiple programs in a single command by providing them as separate arguments:

```sh
whereis git python rustc
```

`whereis` will print the path for each program found on a new line.

### Output Format

The output is a simple list of the full paths to the executables found. Each path is printed on a new line. This format is designed to be easily parsable by other scripts or tools.

## Examples

**Find the location of the `cmd` executable on Windows:**

```sh
whereis cmd
```
**Output:**
```
C:\Windows\System32\cmd.exe
```

**Find both `npm` and `npx`:**

```sh
whereis npm npx
```
**Output:**
```
C:\Program Files\nodejs\npm.cmd
C:\Program Files\nodejs\npx.cmd
```

## Platform Support

`whereis` is written in Rust and is designed to be cross-platform. It is tested on:

*   Windows
*   macOS
*   Linux

The behavior of `whereis` depends on the `PATH` and `PATHEXT` environment variables, which may differ between operating systems.