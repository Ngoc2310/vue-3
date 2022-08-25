<template>
  <div id="app">
    <OrgChart
      :data="chartData"
      :html-to-canvas="html2canvas"
      node-id="id"
      container-class="orgchart-container"
      chart-class="orgchart-chart"
      common-class="fa"
      spinner-class="fa fa-circle-o-notch fa-spin spinner"
      export-btn-class=""
      left-arrow-class="fa-chevron-left"
      right-arrow-class="fa-chevron-right"
      up-arrow-class="fa-chevron-up"
      down-arrow-class="fa-chevron-down"
      toggle-btn-on-class="fa-plus-square"
      toggle-btn-off-class="fa-minus-square"
      parent-node-symbol-class=""
      @drag="updateDataOnDrag"
    >
      <template v-slot="{ nodeData }">
        <div class="title">{{ nodeData.name }}</div>
        <div class="content">this is #{{ nodeData.title }}</div>
      </template>
    </OrgChart>
  </div>
</template>

<script>
import OrgChart from "./components/OrgChart.vue";
import createWalk from "tree-walk";
import html2canvas from "html2canvas";
import "font-awesome/css/font-awesome.min.css";
import "./orgchart.css";

const walk = createWalk((node) => node.children);

const ds = {
  id: "1",
  name: "Augustin Ribreau",
  title: "director",
  children: [
    { id: "2", name: "Bo Miao", title: "department manager" },
    {
      id: "3",
      name: "Su Miao",
      title: "department manager",
      children: [
        { id: "4", name: "Tie Hua", title: "senior engineer" },
        {
          id: "5",
          name: "Hei Hei",
          title: "senior engineer",
          children: [
            { id: "6", name: "Pang Pang", title: "engineer" },
            { id: "7", name: "Xiang Xiang", title: "UE engineer" },
          ],
        },
      ],
    },
    { id: "8", name: "Hong Miao", title: "department manager" },
    { id: "9", name: "Chun Miao", title: "department manager" },
  ],
};

export default {
  name: "App",
  components: {
    OrgChart,
  },
  data() {
    return {
      chartData: ds,
      html2canvas,
    };
  },
  mounted() {
    setTimeout(() => {
      this.chartData = ds;
    }, 2500);
  },
  methods: {
    findNodeById(nodeId) {
      return walk.find(this.chartData, (node) => node.id === nodeId);
    },
    findParentNodeById(nodeId) {
      return walk.find(
        this.chartData,
        (node) =>
          node.children && node.children.some((child) => child.id === nodeId)
      );
    },
    updateDataOnDrag({ targetId, sourceId, destinationId }) {
      const target = this.findNodeById(targetId);
      const source = this.findNodeById(sourceId);
      const destination = this.findNodeById(destinationId);
      source.children = source.children.filter(
        (child) => child.id !== target.id
      );
      if (source.children.length === 0) this.$delete(source, "children");
      if (!destination.children) this.$set(destination, "children", []);
      destination.children.push(target);
    },
  },
};
</script>

<style>
.orgchart-container {
  position: relative;
  display: inline-block;
  width: 500px;
  height: 500px;
  background-color: blanchedalmond;
  border: 2px solid gray;
  border-radius: 5px;
}
.orgchart-chart {
  width: 100%;
  height: 100%;
}

.pre {
  display: inline-block;
  vertical-align: top;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 12px;
}
</style>