import React from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import Image1 from "../images/jpeg/Code1.JPG";
import Image2 from "../images/jpeg/Code2.JPG";
import Logo from "../images/svg/Logo.svg";
import VideoPlayer from "../video/VideoPlayer";
import "../styles/Rust.css";
import Links from "../pages/Links";

const Rust = () => {
  return (
    <div className="mt-40 ml-40 flex flex-row space-x-20">

        <div className="">
        <div className=" custom:w-12 flex-shrink-0 custom2:justify-center custom3:flex-col custom3:justify-center">
        <img className="custom3:justify-center custom3:ml-20 custom2:w-full custom2:ml-16 custom2:justify-center" 
        onClick={() => { window.location.href = "/" }} 
        style={{ width: "35px", height: "35px", cursor: "pointer" }} 
        src={Logo} />
        </div>

          <Links />
        </div>

        <div className="">
          <div
            className="custom:ml-40 custom:w-52 text-white text-2xl font-bold name 
        custom2:justify-center custom2:mt-10 custom3:mt-8 sm:ml-20 md:ml-20 lg:ml-20"
            onClick={() => {
              window.location.href = "/";
            }}
            style={{ cursor: "pointer" }}
          >
            Samuel Alawode
          </div>

          <br />
          <br />
          <div className="">
            <div className="flex flex-row justify-between">
              <h3 className="header">Ghostty Devlog 006</h3>
              <p className="italic text-[#acaeb8]">March 2, 2024</p>
            </div>
            <br />
            <br />
            <p className="body">
              Hello! Welcome to the official devlog for Ghostty 👻!
            </p>
            <br />
            <p className="body">
              This devlog is going to be focused on speed 🚀. I'm going to show
              various ways we've <br />
              made Ghostty really, really, fast in recent weeks. There are many
              ways to measure the <br />
              speed of a terminal emulator. Perhaps in another blog post I'll
              define each of the ways, <br />
              but today I will simply state that the performance work showcased
              in this devlog will <br />
              all revolve around IO throughput.
              <br />
              <br />
              IO throughput is the speed that the program running within the
              terminal emulator <br />
              (the shell, neovim, tmux, cat, etc.) can pump bytes to the
              terminal emulator and have <br />
              them processed. This particular metric has a very real world
              impact, from tailing very <br />
              loud log output to accidentally dumping a large file to the
              terminal (we've all <br />
              been there).
              <br />
              <br />
            </p>
            <div
              className="border body"
              style={{
                backgroundColor: "#0e121a",
                color: "#FF0800",
                padding: "25px",
                width: "700px",
              }}
            >
              If you missed previous devlogs, or you want to learn more about
              what Ghostty is, <br />
              please see the Ghostty page on this website.
            </div>
            <br />
            <br />
            <div className="border-b" /> <br />
            <br />
            <p className="body">
              Improving Plain Text Throughput with SIMD (#1472) <br />
              <br />
              A program uses a single stream (a "pty") to communicate to the
              terminal emulator.
              <br />
              This stream can contain either plain text or control characters.{" "}
              <br />
              <br />
              Plain text prints directly to the terminal and is sent as-is. For
              example, to write "Hello, <br />
              World!" to the terminal, the program writes Hello World! UTF-8
              encoded1 to the pty. <br />
              <br />
              Control characters are used to do things such as set style
              attributes (foreground color, <br />
              underline, bold, etc.), move the cursor, delete lines, change the
              keyboard protocol, etc. <br />
              Control characters have various formats but one thing almost all
              of them2 have in <br />
              common is they start with the escape character (hex 0x1B). <br />A
              naive, but typical approach is to read the bytes in a for loop:{" "}
              <br />
              <br />
              <div
                className="border body"
                style={{
                  backgroundColor: "#0e121a",
                  padding: "25px",
                  width: "700px",
                  height: "200px",
                }}
              >
                <p className="text-[#FF0800]">const bytes = read();</p>
              </div>
              <br />
              <br />
              This looks at one byte at a time. But computers since the late 90s
              have been able <br />
              to perform operations on multiple bytes at a time using SIMD
              instructions ("Single <br />
              Instruction Multiple Data"). According to Valve's latest Steam
              Hardware Survey, over <br />
              99% of active computers support the ability to look at 16 to 32
              bytes in one CPU <br />
              instruction. <br />
              <br />
              We often rely on compilers to optimize our code for us so we don't
              have to think about <br />
              the minutia of individual CPU instructions. Unfortunately,
              compilers are notoriously <br />
              bad at autovectorization and with the exception of relatively
              trivial loops, compilers <br />
              rarely autovectorize effectively. SIMD is a rare scenario where
              hand-writing assembly <br />
              (or near it) often results in significantly better performance
              over a state of the art <br />
              optimizing compiler. The SIMD approach to finding control
              sequences above looks like this:
              <br />
              <br />
            </p>
            <div
              className="border body"
              style={{
                backgroundColor: "#0e121a",
                padding: "25px",
                width: "700px",
                height: "200px",
              }}
            >
              <p className="text-[#FF0800]">const bytes = read();</p>
            </div>
            <br />
            <br />
            <p className="body">
              Assume in the above two examples that the comparison operation
              takes exactly the <br />
              same amount of time. The SIMD example would process the bytes 16x
              faster. Reality is <br />
              not quite so simple, but you can get staggering speedups through
              SIMD.
              <br />
              <br />
              To further complicate things, SIMD instruction sets vary by CPU
              generation. If you're <br />
              distributing a binary form of your program and want to take
              advantage of the best <br />
              features available, you must write a variation for each SIMD
              instruction set, compile <br />
              each form, and choose the correct version at runtime using CPU
              feature detection (i.e. <br />
              using the cpuid instruction on x86).
              <br />
              <br />
              For example, the code above says "chunk of 16 bytes." Well,
              depending on the <br />
              hardware, that might be 16 bytes (aarch64 neon instruction set
              such as on Apple <br />
              Silicon), 32 bytes for AVX2, 64 bytes for AVX512, etc. And its not
              just the size that <br />
              varies, the literal CPU instructions (binary code) varies.
              Therefore, you must write or <br />
              compile the code multiple times.
              <br />
              <br />
              Ghostty now uses SIMD to execute roughly the second code sample
              above. <br />
              Additionally, we use SIMD to also decode UTF-83 multiple bytes at
              a time. On Apple <br />
              Silicon (M3 Max), Ghostty now processes ASCII input 7.3x faster:
              <br />
              <br />
            </p>
            <div
              className="border body"
              style={{
                backgroundColor: "#0e121a",
                padding: "25px",
                width: "700px",
                height: "360px",
              }}
            >
              <p className="text-[#FF0800]">
                Benchmark 1: memcpy Time (mean ± σ): 52.7 ms ± 0.7 ms [User:
                41.6 ms, System: 47.6 ms] Range (min … max): 50.7 ms … 54.6 ms
                53 runs <br />
                <br />
                Benchmark 2: scalar Time (mean ± σ): 382.3 ms ± 4.0 ms [User:
                408.6 ms, System: 39.1 ms] Range (min … max): 376.1 ms … 388.7
                ms 10 runs <br />
                <br />
                Benchmark 3: simd (aarch64 neon) Time (mean ± σ): 52.3 ms ± 0.6
                ms [User: 53.8 ms, System: 47.2 ms] Range (min … max): 51.3 ms …
                54.2 ms 54 runs <br />
                <br />
                Summary simd ran 1.01 ± 0.02 times faster than memcpy 7.32 ±
                0.11 times faster than scalar
              </p>
            </div>
            <br />
            <br />
            <p className="body">
              Assume in the above two examples that the comparison operation
              takes exactly the <br />
              same amount of time. The SIMD example would process the bytes 16x
              faster. Reality is <br />
              not quite so simple, but you can get staggering speedups through
              SIMD.
              <br />
              <br />
              To further complicate things, SIMD instruction sets vary by CPU
              generation. If you're <br />
              distributing a binary form of your program and want to take
              advantage of the best <br />
              features available, you must write a variation for each SIMD
              instruction set, compile <br />
              each form, and choose the correct version at runtime using CPU
              feature detection (i.e. <br />
              using the cpuid instruction on x86).
              <br />
              <br />
              For example, the code above says "chunk of 16 bytes." Well,
              depending on the <br />
              hardware, that might be 16 bytes (aarch64 neon instruction set
              such as on Apple <br />
              Silicon), 32 bytes for AVX2, 64 bytes for AVX512, etc. And its not
              just the size that <br />
              varies, the literal CPU instructions (binary code) varies.
              Therefore, you must write or <br />
              compile the code multiple times.
              <br />
              <br />
              Ghostty now uses SIMD to execute roughly the second code sample
              above. <br />
              Additionally, we use SIMD to also decode UTF-83 multiple bytes at
              a time. On Apple <br />
              Silicon (M3 Max), Ghostty now processes ASCII input 7.3x faster:
              <br />
              <br />
            </p>{" "}
            <br />
            <div style={{}} className="">
              <img src={Image1} alt="No Image" className="" />
              <p className="text-sm text-[#acaeb8] italic ml-60 w-full">
                The image label will be here
              </p>
            </div>{" "}
            <br />
            <p className="body">
              Assume in the above two examples that the comparison operation
              takes exactly the <br />
              same amount of time. The SIMD example would process the bytes 16x
              faster. Reality is <br />
              not quite so simple, but you can get staggering speedups through
              SIMD.
              <br />
              <br />
              To further complicate things, SIMD instruction sets vary by CPU
              generation. If you're <br />
              distributing a binary form of your program and want to take
              advantage of the best <br />
              features available, you must write a variation for each SIMD
              instruction set, compile <br />
              each form, and choose the correct version at runtime using CPU
              feature detection (i.e. <br />
              using the cpuid instruction on x86).
              <br />
              <br />
              For example, the code above says "chunk of 16 bytes." Well,
              depending on the <br />
              hardware, that might be 16 bytes (aarch64 neon instruction set
              such as on Apple <br />
              Silicon), 32 bytes for AVX2, 64 bytes for AVX512, etc. And its not
              just the size that <br />
              varies, the literal CPU instructions (binary code) varies.
              Therefore, you must write or <br />
              compile the code multiple times.
              <br />
              <br />
              Ghostty now uses SIMD to execute roughly the second code sample
              above. <br />
              Additionally, we use SIMD to also decode UTF-83 multiple bytes at
              a time. On Apple <br />
              Silicon (M3 Max), Ghostty now processes ASCII input 7.3x faster:
              <br />
              <br />
            </p>{" "}
            <br />
            <div>
              <VideoPlayer />
              <p className="text-sm text-[#acaeb8] italic ml-60 w-full">
                The video label will be here
              </p>
            </div>{" "}
            <br />
            <br />
            <br />
            <div>
              <p className="body italic">The End! Thanks for reading</p>
            </div>
          </div>

          <Footer />

        </div>
        
    </div>
  );
};

export default Rust;
