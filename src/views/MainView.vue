<template>
  <article class="scroller h-screen">
    <section class="hero grid grid-cols-2 h-screen content-center">
      <div class="hero-left-container">
        <div class="hero-left -skew-x-12 -skew-y-1">
          <h1
            class="title glitch-animation-class hero-text drop-shadow-[-.5rem_.5rem_4px_#1f3f6f49]"
          >
            <span style="--index: 0">YASSINE BACHA</span>
            <span style="--index: 1">YASSINE BACHA</span>
            <span style="--index: 2">YASSINE BACHA</span>
          </h1>
          <div class="subtitle hero-text">
            FRONT-END DEVELOPER<br />
            MSc IN COMPUTER VISION
          </div>
          <!-- <a class="projects-button drop-shadow-md" href="#">PROJECTS</a> -->
          <div class="scroll">
            SCROLL DOWN<font-awesome-icon
              class="icon"
              icon="fa-solid fa-caret-down"
            />
          </div>
        </div>
      </div>
      <div class="hero-right"></div>
    </section>
    <section class="skills grid grid-cols-5 h-screen">
      <div class="col-span-3 -skew-x-12 -skew-y-1">DESCRIPTION GOES HERE</div>
      <div
        class="skills-menu col-span-2 grid gap-0 grid-cols-2 -skew-x-12 -skew-y-1"
      >
        <div class="skill left-skills"><span>JAVASCRIPT</span></div>
        <div class="skill right-skills"><span>HTML/CSS</span></div>
        <div class="skill left-skills"><span>PYTHON</span></div>
        <div class="skill right-skills"><span>JAVA</span></div>
        <div class="skill left-skills"><span>DATABASES</span></div>
        <div class="skill right-skills"><span>UI/UX</span></div>
        <div class="skill left-skills"><span>GRAPHIC DESIGN</span></div>
        <div class="skill right-skills"><span>3D MODELING</span></div>
        <div class="skill left-skills"><span>GAME DEV</span></div>
        <div class="skill right-skills"><span>C/C++</span></div>
      </div>
    </section>
  </article>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Nunito+Sans");
@import url("https://fonts.googleapis.com/css?family=Russo+One");

body {
  height: 100vh;
  overflow-y: hidden;
}

/* ::-webkit-scrollbar {
  display: none;
} */

.scroller {
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  text-align: center;
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
  padding-left: 3rem;
  margin-top: 6rem;
  /*background: -webkit-linear-gradient(#196d7c, #1b313f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;*/
}

.hero-left-container {
  background: linear-gradient(to right, rgba(255, 255, 255, 0.8), #fff);
}

.title {
  font-family: "Russo One", sans-serif;
  font-size: 8em;
  line-height: 0.8em;
  text-align: left;
  /* color: #195d6c; */
  color: #196d7c;
  -webkit-text-stroke: 0.5px #fff;

  display: grid;
  grid-template-columns: 1fr;
}

.subtitle {
  text-align: left;
  font-weight: 600;
  font-size: 2.5em;
  font-family: "Nunito Sans", sans-serif;
  line-height: 1em;
  color: #2b515f;

  margin-top: 1rem;
  margin-bottom: 5rem;
}

.scroll {
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  font-size: 2.5em;
  color: #1b313f;

  animation: fade-in-out 2s ease alternate-reverse infinite;
}

.scroll .icon {
  margin-left: 0.5rem;
}

@keyframes fade-in-out {
  from {
    color: #1b313f00;
  }
  to {
    color: #1b313fff;
  }
}

.skills {
  height: 100vh;
}

.skills-menu {
  align-items: center;
}

.left-skills {
  border: 2px solid #2b515f;
  border-radius: 2rem 1rem 1rem 2rem;
}

.right-skills {
  border: 2px solid #2b515f;
  border-radius: 1rem 2rem 2rem 1rem;
}

.skill {
  position: relative;
  height: 5rem;
  width: 12rem;
  color: #2b515f;
  animation: skill-hover 500ms easer reverse forwards;
}

.skill span {
  line-height: 5rem;
  vertical-align: middle;
}

.skill:hover {
  animation: skill-hover 500ms ease forwards;
}

@keyframes skill-hover {
  from {
    background-color: #fff;
    color: #2b515f;
    border-color: #2b515f;
  }
  to {
    background-color: #2b515f;
    color: #fff;
    transform: translateX(10%) translateY(-10%);
    box-shadow: -0.5rem 0.5rem 8px #1f3f6f49;
  }
}

/* animation-begin */
.glitch-animation-class span {
  font-weight: bold;
  grid-row-start: 1;
  grid-column-start: 1;
  /*font-size: 4rem;*/
  --stack-height: calc(100% / var(--stacks) - 1px);
  --inverse-index: calc(calc(var(--stacks) - 1) - var(--index));
  --clip-top: calc(var(--stack-height) * var(--index));
  --clip-bottom: calc(var(--stack-height) * var(--inverse-index));
  clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);
  animation: stack 340ms cubic-bezier(0.46, 0.29, 0, 1.24) 1 backwards
      calc(var(--index) * 120ms),
    glitch 2s ease infinite 1s alternate-reverse;
}

.glitch-animation-class span:nth-child(odd) {
  --glitch-translate: 8px;
}
.glitch-animation-class span:nth-child(even) {
  --glitch-translate: -8px;
}

@keyframes stack {
  0% {
    opacity: 0;
    transform: translateX(-50%);
    text-shadow: -4px 6px 0 #f00, 4px -6px 0 #0ff;
  }
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
  6%,
  100% {
    text-shadow: none;
    transform: none;
  }
}
/* animation-end */
</style>
