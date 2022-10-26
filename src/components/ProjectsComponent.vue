<template>
  <section class="projects">
    <div class="bg-transparent d-flex min-h-[100vh]">
      <div class="d-flex flex-col min-w-[30vw]  max-w-[30vw] ml-[2em] mt-[2em]">
        <div class="-skew-x-12 -skew-y-1">
          <TitleComponent text="PROJECTS" class="title"/>
        </div>
        <v-tabs
          v-model="category"
          color="primary"
          show-arrows
        >
          <v-tab v-for="item in categories" :value="item.option" :key="item.title">
            {{item.title}}
          </v-tab>
        </v-tabs>
        <v-window v-model="category">
          <v-window-item value="all">
            <v-tabs
              v-model="tab"
              direction="vertical"
              color="primary"
            >
              <v-tab v-for="item in projectsList" :value="item.option" :key="item.title">
                {{item.title}}
              </v-tab>
            </v-tabs>
          </v-window-item>

          <v-window-item value="webdev">
          </v-window-item>

          <v-window-item value="uiux">
          </v-window-item>

          <v-window-item value="ai">
          </v-window-item>

          <v-window-item value="gamedev">
          </v-window-item>

          <v-window-item value="softdev">
          </v-window-item>
        </v-window>
        
      </div>
      
      <v-window v-model="tab">
        <v-window-item value="option-1">
          <v-card flat class="min-h-[100vh] min-w-[70vw] max-h-[70vw] bg-transparent">
            <v-card-text>
              <p>
                Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
              </p>

              <p>
                Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.
              </p>

              <p class="mb-0">
                Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="option-2">
          <v-card flat class="min-h-[100vh] min-w-[70vw] max-h-[70vw] bg-transparent">
            <v-card-text>
              <p>
                Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
              </p>

              <p>
                Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
              </p>

              <p>
                Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
              </p>

              <p>
                Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
              </p>

              <p class="mb-0">
                Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="option-3">
          <v-card flat class="min-h-[100vh] min-w-[70vw] max-h-[70vw] bg-transparent">
            <v-card-text>
              <p>
                Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              </p>

              <p class="mb-0">
                Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </div>
    <!-- <div class="m-auto col-span-3 -skew-x-12 -skew-y-1">
      <TitleComponent text="PROJECTS" />
    </div> -->
  </section>
</template>

<script>
import TitleComponent from './TitleComponent.vue';
export default {
  components: {
    TitleComponent
  },
  data: () => ({
    tab: 'option-1',
    projectsList: [
      {option: "option-1", title: "Project 1"},
      {option: "option-2", title: "Project 2"},
      {option: "option-3", title: "Project 3"},
    ],
    category: 'all',
    categories: [
      {option: "all", title: 'All'},
      {option: "webdev", title: 'Web Development'},
      {option: "uiux", title: 'UI/UX Design'},
      {option: "ai", title: 'Artificial Intelligence'},
      {option: "gamedev", title: '3D & Game Development'},
      {option: "softdev", title: 'Software Development'}
    ]
  }),
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

.projects {
  height: 100vh;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.8),
    #fff,
    #fff
  );
}

.title {
  padding-top: 1rem;
  padding-bottom: 1.3rem;
  text-align: center;
  font-size: clamp(1rem, 10vw, 4rem);
  -webkit-text-stroke: 0.2rem #fff;
}
</style>
