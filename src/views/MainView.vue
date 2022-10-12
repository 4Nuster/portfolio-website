<template>
  <article class="scroller">
    <section class="hero grid grid-cols-2 h-screen content-center">
      <div class="hero-left-container">
        <div class="hero-left -skew-x-12 -skew-y-1">
          <h1 class="title hero-text drop-shadow-[-.05em_.05em_4px_#1f3f6f49]">
            <span style="--index: 0;">YASSINE BACHA</span>
            <span style="--index: 1;">YASSINE BACHA</span>
            <span style="--index: 2;">YASSINE BACHA</span>
          </h1>
          <div class="subtitle hero-text">
            FRONT-END DEVELOPER<br>
            MSc IN COMPUTER VISION
          </div>
          <!-- <a class="projects-button drop-shadow-md" href="#">PROJECTS</a> -->
          <div class="scroll">SCROLL DOWN<i class="fa-solid fa-caret-down"></i></div>
        </div>
      </div>
      <div class="hero-right"></div>
    </section>
    <section class="skills">

    </section>
  </article>
</template>

<script>
export default {
  
}
</script>

<style>
  .scroller {
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
  }

  .scroller section {
    scroll-snap-align: start;
  }
  .hero {
    background-color: #fff;
    background: url("../assets/pattern-bg.jpg");
    background-size: cover;
    height: 100vh;
  }

  .hero-right {
    /*background-image: linear-gradient(to right, rgba(255,255,255,0.7), rgba(0,0,0,0)), url("../assets/hero\ bg.png");*/
    background-image: url("../assets/V4.png");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
  }

  .hero-left {
    padding-left: 3em;
    margin-top: 6em;
    /*background: -webkit-linear-gradient(#196d7c, #1b313f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;*/
  }
  
  .hero-left-container {
    background: linear-gradient(to right, rgba(255, 255, 255, .8), #fff);
  }

  .title {
    font-family: Russo One;
    font-size: 8em;
    line-height: .8em;
    text-align: left;
    /* color: #195d6c; */
    color: #196d7c;
    -webkit-text-stroke: .5px #fff;

    display: grid;
    grid-template-columns: 1fr;
  }
  
  .subtitle {
    text-align: left;
    font-weight: 600;
    font-size: 2.5em;
    font-family: Nunito Sans;
    line-height: 1em;
    color: #2b515f;

    margin-top: 1rem;
    margin-bottom: 5rem;
  }

  .scroll {
    font-family: Nunito Sans;
    font-weight: 600;
    font-size: 2.5em;
    color: #1b313f;

    animation: fade-in-out 2s ease alternate-reverse infinite;
  }

  .scroll i {
    margin-left: .5em;
  }

  @keyframes fade-in-out {
    0% {
      color: #1b313f00;
    }
    100% {
      color: #1b313fff;
    }
  }

  /* .projects-button {
    color: white;
    font-family: Nunito Sans;
    font-size: 2.5em;
    font-weight: 600;
    letter-spacing: .05em;
    background: linear-gradient(180deg, #196d7c, #1b313f);
    padding: .5em 2em;
    border-radius: .4em 0 .4em 0;
    border: 5px solid #2f2f2f;
    
    border-left: .2em solid #f00;
    border-top: .1em solid #f00;
    border-right: .2em solid #0ff;
    border-bottom: .1em solid #0ff;
  }
  
  .projects-button:hover {
    background: linear-gradient(180deg, #1b313f, #196d7c);
    color: #ddd;
  } */

  /* animation-begin */
  .title span {
    font-weight: bold;
    grid-row-start: 1;
    grid-column-start: 1;
    /*font-size: 4rem;*/
    --stack-height: calc(100% / var(--stacks) - 1px);
    --inverse-index: calc(calc(var(--stacks) - 1) - var(--index));
    --clip-top: calc(var(--stack-height) * var(--index));
    --clip-bottom: calc(var(--stack-height) * var(--inverse-index));
    clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);
    animation: stack 340ms cubic-bezier(.46,.29,0,1.24) 1 backwards calc(var(--index) * 120ms), glitch 2s ease infinite 1s alternate-reverse;
  }

  .title span:nth-child(odd) { --glitch-translate: 8px; }
  .title span:nth-child(even) { --glitch-translate: -8px; }

  @keyframes stack {
    0% {
      opacity: 0;
      transform: translateX(-50%);
      text-shadow: -4px 6px 0 #f00, 4px -6px 0 #0ff;
    };
    60% {
      opacity: 0.5;
      transform: translateX(50%);
    }
    80% {
      transform: none;
      opacity: 1;
      text-shadow: 4px -6px 0 #f00, -4px 6px 0 #0ff;
    }
    100% {
      text-shadow: none;
    }
  }

  @keyframes glitch {
    0% {
      text-shadow: -4px 6px 0 #f00, 4px -6px 0 #0ff;
      transform: translate(var(--glitch-translate));
    }
    3% {
      text-shadow: 4px -6px 0 #f00, -4px 6px 0 #0ff;
    }
    6%, 100% {  text-shadow: none; transform: none; }
  }
  /* animation-end */

  .skills {
    height: 100vh;
  }
</style>