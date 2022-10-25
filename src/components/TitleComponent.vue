<template>
  <h1
    class="title glitch-animation-class hero-text drop-shadow-[-.5rem_.5rem_4px_#1f3f6f49]"
  >
    <span style="--index: 0">{{ text }}</span>
    <span style="--index: 1">{{ text }}</span>
    <span style="--index: 2">{{ text }}</span>
  </h1>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

.title {
  font-family: "Russo One", sans-serif;
  /* font-size: 8em; */
  font-size: clamp(1rem, 10vw, 8rem);
  line-height: 0.8em;
  text-align: left;
  color: #196d7c;
  -webkit-text-stroke: 0.3rem #fff;

  display: grid;
  grid-template-columns: 1fr;
}

/* animation-begin */
.glitch-animation-class span {
  /* font-weight: bold; */
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
