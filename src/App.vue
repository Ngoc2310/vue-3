<template>
  <org-chart
    :datasource="ds"
    @node-click="selectNode"
    :background="true"
    :zoom="true"
    :zoomInLimit="7"
    :zoomOutLimit="0.5"
  ></org-chart>
  <show-detail :datasource="nodeData" :show="show" @showToast="hideToast" />
</template>

<script>
import OrgChart from "./components/OrganizationChartContainer.vue";
import NodeDetailToast from "./components/NodeDetailToast.vue";
import "../dist/orgchart.css";

export default {
  name: "App",
  components: {
    OrgChart,
    "show-detail": NodeDetailToast,
  },
  data() {
    return {
      ds: {
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
      },
      nodeData: {},
      show: "hide",
    };
  },
  methods: {
    selectNode(nodeData) {
      this.nodeData = nodeData;
      console.log(nodeData);
      this.show = "show";
    },
    hideToast() {
      this.show = "hide";
    },
  },
};
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>