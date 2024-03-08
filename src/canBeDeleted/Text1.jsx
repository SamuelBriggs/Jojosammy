import React from 'react'

const Text1 = () => {
  return (
    <div>
        <p className="md-body w-full lg:text-lg">
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
    </div>
  )
}

export default Text1