<template>
  <table class="charttable">
    <tbody>
      <tr>
        <td
          :colspan="
            datasource.children && datasource.children.length
              ? datasource.children.length * 2
              : null
          "
        >
          <div class="chartNode" style="min-width: 9rem" :id="datasource.id">
            <slot :node-data="datasource">
              <div class="chartTitle">
                <p>
                  {{ datasource.name }}
                </p>
              </div>
              <div class="chartContent">
                <p>
                  {{ datasource.title }}
                </p>
              </div>

              <div>
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button
                    type="button"
                    class="btn btn-xs btn-outline-secondary"
                    @click.stop="handleClick(datasource)"
                    id="showToastPlacement"
                  >
                    <span class="fa fa-eye"></span>
                  </button>
                  <button
                    v-if="datasource.children && datasource.children.length"
                    type="button"
                    class="btn btn-xs btn-outline-secondary"
                    @click.stop="toggleCollapse"
                  >
                    <span class="fa fa-chevron-down"></span>
                  </button>
                </div>
              </div>
            </slot>
          </div>
        </td>
      </tr>
      <template v-if="datasource.children && datasource.children.length">
        <Transition>
          <tr class="chartLines" v-show="!collapse">
            <td :colspan="datasource.children.length * 2">
              <div class="chartDownLine"></div>
            </td>
          </tr>
        </Transition>
        <Transition>
          <tr class="chartLines" v-show="!collapse">
            <td class="chartRightLine"></td>
            <template
              v-for="n in datasource.children.length - 1"
              v-bind:key="n"
            >
              <td class="chartLeftLine chartTopLine"></td>
              <td class="chartRightLine chartTopLine"></td>
            </template>
            <td class="chartLeftLine"></td>
          </tr>
        </Transition>
        <tr class="nodes">
          <td colspan="2" v-for="child in datasource.children" :key="child.id">
            <Transition>
              <node
                :datasource="child"
                :handle-click="handleClick"
                v-show="!collapse"
              >
                <template
                  v-for="slot in Object.keys($slots)"
                  v-slot:[slot]="scope"
                >
                  <slot :name="slot" v-bind="scope" />
                </template> </node
            ></Transition>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "node",
  props: {
    datasource: Object,
    handleClick: Function,
  },
  data() {
    return {
      collapse: false,
    };
  },
  methods: {
    toggleCollapse() {
      this.collapse = !this.collapse;
    },
  },
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
