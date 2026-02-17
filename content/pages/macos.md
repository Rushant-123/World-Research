---
title: "macOS Software"
company: "Apple"
country: "United States"
selling_price: 26
inputs:
  - name: "Software Engineers"
    cost: 20
    link: "software-developers"
  - name: "Development Tools"
    cost: 2
    link: "xcode-tools"
  - name: "Testing Infrastructure"
    cost: 2
    link: "ci-cd-systems"
  - name: "Servers"
    cost: 1
    link: "build-servers"
  - name: "Licenses"
    cost: 1
    link: "software-licenses"
value_created: 0
---

# How to Make macOS Software

**Market Leader:** [Apple](/companies/apple)



macOS is Apple's proprietary operating system for Mac computers. Built on Unix (Darwin kernel, BSD subsystems), with proprietary Apple frameworks (Cocoa, Metal, Core Animation). Developed by thousands of engineers over decades. Major version released annually, minor updates throughout year.

## What is it?

Complete operating system: kernel (XNU - hybrid of Mach microkernel and BSD), device drivers, system libraries, frameworks (AppKit, SwiftUI, Core Foundation), user interface (Aqua), bundled applications (Safari, Mail, Photos), and services (iCloud integration, Continuity). ~15 million lines of code. Optimized for Apple silicon (M-series chips).

## Development Process (simplified):
1. Thousands of [Software Engineers](software-developers) write code in Swift, Objective-C, C, C++
2. Use [Development Tools](xcode-tools) - Xcode IDE, compilers (Clang, Swift), debuggers (LLDB)
3. Version control: internal Git repositories
4. Code review: engineers review each other's code
5. Automated testing: unit tests, integration tests, UI tests on [Testing Infrastructure](ci-cd-systems)
6. Build system compiles millions of lines daily on [Build Servers](build-servers)
7. Beta testing: Apple employees, then developer beta, then public beta
8. Final Release Candidate (RC) build tested extensively
9. Code signing: cryptographic signatures prove authenticity
10. Distribution: via Mac App Store, Software Update, or fresh install
11. Installation size: 12-15 GB
12. Free update for all compatible Macs

**Key Technologies:**
- Darwin kernel (open source)
- Metal graphics API
- Core ML for machine learning
- SwiftUI for modern app UIs
- Continuity features (Handoff, Universal Clipboard)
- Security: Gatekeeper, FileVault encryption, T2/Secure Enclave
