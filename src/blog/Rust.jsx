import React from "react";
import BlogFooter from "../pages/BlogFooter";
import Image1 from "../images/jpeg/Code1.JPG";
import Logo from "../images/svg/Logo.svg";
import VideoPlayer from "../video/VideoPlayer";
import "../styles/Rust.css";
import Links from "../pages/Links";
import PostBody from "../writing-component/RustBody";


const Rust = () => {
  return (
    <div
      className="mt-40 ml-40 flex flex-row space-x-20 md:ml-20 mlg:ml-20
    sm:flex sm:flex-col sm:-ml-9 sm:mr-8 sm:overflow-x-hidden 
    md:-ml-10 md:overflow-x-hidden md:flex md:justify-center md:-ml-5 
    mlg:overflow-x-hidden mlg:-ml-5
    lg:overflow-x-hidden lg:ml-0
    custom:flex custom:flex-col custom:justify-center 
    custom:ml-10 custom:mr-10 custom:overflow-x-hidden
    custom2:flex custom2:flex-col custom2:justify-center 
    custom2:ml-7 custom2:mr-7 custom2:overflow-x-hidden

    custom3:flex custom3:flex-col custom3:justify-center
    custom3:ml-4 custom3:mr-4 custom3:overflow-x-hidden
    
    xl:overflow-x-hidden xl:w-7/12
    2xl:overflow-x-hidden 2xl:w-8/12">

        <div className="sm:ml-20 sm:space-y-10 md:hidden mlg:hidden 
         custom:space-y-10 lg:hidden custom2:space-y-10 custom3:space-y-10 xl:hidden 2xl:hidden
         ">
        <div className="sm:flex sm:justify-center custom:flex 
        custom:justify-center custom2:flex custom2:justify-center 
        custom3:flex custom3:justify-center">
        <img
            className="
            custom2:w-full custom2:justify-center
            custom:flex custom:justify-center
            custom2:flex custom2:justify-center
            custom3:flex custom3:justify-center"
            onClick={() => {
              window.location.href = "/";
            }}
            style={{ width: "35px", height: "35px", cursor: "pointer" }}
            src={Logo}
            alt=""
          />
          </div>

        <div
          className="header sm:flex sm:justify-center custom:flex 
          custom:justify-center custom2:flex custom2:justify-center custom3:flex custom3:justify-center"
          onClick={() => { window.location.href = "/"}}
          style={{ cursor: "pointer" }}>
          Samuel Alawode
        </div>

        </div>

      <div className="sm:hidden custom:w-12 flex-shrink-0 
      custom2:justify-center custom3:flex-col custom3:justify-center 
      custom:w-full custom2:hidden custom3:hidden ">
          <img
            className="custom:hidden  custom3:justify-center custom3:ml-20 custom2:w-full custom2:ml-16 custom2:justify-center"
            onClick={() => {
              window.location.href = "/";
            }}
            style={{ width: "35px", height: "35px", cursor: "pointer" }}
            src={Logo}
            alt=""
          />

        <div className="sm:hidden sm:ml-0 custom:w-full custom:-ml-20">
          <Links />
        </div>
        
      </div>

      <div className="md:hidden mlg:hidden lg:hidden xl:hidden 2xl:hidden
      custom:hidden custom3:-ml-5">
          <Links />
        </div>

      <div className="h-full md:w-3/4 sm:mt-10 custom:w-full">
        <div
          className="custom2:hidden custom3:hidden custom:hidden custom:ml-40 custom:w-52 text-white text-2xl font-bold name 
        custom2:justify-center custom2:mt-10 custom3:mt-8 sm:ml-20 sm:hidden"
          onClick={() => {
            window.location.href = "/";
          }}
          style={{ cursor: "pointer" }}
        >
          Samuel Alawode
        </div>

        <br />
        <br />
        <div className="w-90 md:w-11/12 sm:-mt-10 mlg:w-11/12 lg:mr-20
        custom:w-full custom:-ml-20 custom2:-ml-20 custom3:-ml-20
        lg:w-10/12 xl:w-11/12 2xl:w-11/12">


          {/* This is the post title and date, date was hardcoded here*/}          
          <div className="flex flex-row justify-between">
            <h3 className="md-header">Ghostty Devlog 006</h3>
            <p className="italic text-[#acaeb8] xl:mr-40 text-sm">March 2, 2024</p>
          </div>
          <br />
          <br />



          {/* This will be the header of your post, you can always ask ChatGPT 
          to give you emoji if your system doesn't have one */}
          <p className="md-body lg:text-lg">
            Hello! Welcome to the official devlog for Ghostty 👻!
          </p>
          <br />



          {/* This is the first paragraph or body */}
          <div className="mlg:w-full">
          <PostBody />
          </div>



          
          <div className="border md-body bg-[#0e121a] p-5 lg:text-lg xl:w-10/12">
            <p className="text-[#FF0800]">
            If you missed previous devlogs, or you want to learn more about what
            Ghostty is, please see the Ghostty page on this website.
          </p>
          </div>



          <br />
          <br />
          {/* This is the underline code, if you ever need it */}
          <div
            className="border-b border-[#808080]"
            style={{ width: "90%" }}
          />{" "}
          <br />
          <br />



          <p className="md-body lg:text-lg">
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
            Control characters have various formats but one thing almost all of
            them2 have in <br />
            common is they start with the escape character (hex 0x1B). <br />A
            naive, but typical approach is to read the bytes in a for loop:{" "}
            <br />
            <br />
            <div className="border md-body body bg-[#0e121a] p-5 lg:text-lg xl:w-10/12">
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
            the minutia of individual CPU instructions. Unfortunately, compilers
            are notoriously <br />
            bad at autovectorization and with the exception of relatively
            trivial loops, compilers <br />
            rarely autovectorize effectively. SIMD is a rare scenario where
            hand-writing assembly <br />
            (or near it) often results in significantly better performance over
            a state of the art <br />
            optimizing compiler. The SIMD approach to finding control sequences
            above looks like this:
            <br />
            <br />
          </p>
          
          <div className="border md-body bg-[#0e121a] p-5 lg:text-lg xl:w-10/12">
            <p className="text-[#FF0800]">const bytes = read()</p>
          </div>
          
          <br />
          <br />
          
          <div className="border md-body bg-[#0e121a] p-5 lg:text-lg xl:w-10/12">
            <p className="text-[#FF0800]">
              Benchmark 1: memcpy Time (mean ± σ): 52.7 ms ± 0.7 ms [User: 41.6
              ms, System: 47.6 ms] Range (min … max): 50.7 ms … 54.6 ms 53 runs{" "}
              <br />
              <br />
              Benchmark 2: scalar Time (mean ± σ): 382.3 ms ± 4.0 ms [User:
              408.6 ms, System: 39.1 ms] Range (min … max): 376.1 ms … 388.7 ms
              10 runs <br />
              <br />
              Benchmark 3: simd (aarch64 neon) Time (mean ± σ): 52.3 ms ± 0.6 ms
              [User: 53.8 ms, System: 47.2 ms] Range (min … max): 51.3 ms … 54.2
              ms 54 runs <br />
              <br />
              Summary simd ran 1.01 ± 0.02 times faster than memcpy 7.32 ± 0.11
              times faster than scalar
            </p>
          </div>
          <br />
          <br />
          {/* This is the line code, if you ever need it */}
          <div
            className="border-b border-[#808080]"
            style={{ width: "90%" }}
          />{" "}
          <br />
          <p className="md-body lg:text-lg">
            Assume in the above two examples that the comparison operation takes
            exactly the <br />
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
            hardware, that might be 16 bytes (aarch64 neon instruction set such
            as on Apple <br />
            Silicon), 32 bytes for AVX2, 64 bytes for AVX512, etc. And its not
            just the size that <br />
            varies, the literal CPU instructions (binary code) varies.
            Therefore, you must write or <br />
            compile the code multiple times.
            <br />
            <br />
            Ghostty now uses SIMD to execute roughly the second code sample
            above. <br />
            Additionally, we use SIMD to also decode UTF-83 multiple bytes at a
            time. On Apple <br />
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


          <div>
            <PostBody />
          </div>
          <br />



          {/* The video incase you need to replace with video, 
          go inside the video player and add the url to the video */}
          <div className="sm:hidden md:hidden custom2:hidden custom3:hidden custom:hidden mlg:hidden">
            <VideoPlayer />
            <p className="text-sm text-[#acaeb8] italic ml-60 w-full">
              The video label will be here
            </p>
          </div>{" "}
          <br />
          <br />
          <br />
          <div>
            <p className="md-body italic lg:text-lg">The End! Thanks for reading</p>
          </div>
        </div>

        <div className="mb-40 mlg:w-5/6 md:mr-8 lg:mr-20 xl:mr-40">
          <BlogFooter />
        </div>
      </div>
    </div>
  );
};

export default Rust;
