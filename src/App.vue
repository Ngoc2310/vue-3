
<template>
  <vo-edit
    style="background: #fff"
    :data="chartData"
    :draggable="true"
    :pan="true"
    :zoom="true"
  >
  </vo-edit>
</template>

<script>
import VoEdit from "./components/VoEdit.vue";
export default {
  components: { VoEdit },
  created() {
    this.chartData = {
      name: "Lao Lao",
      title: "general manager",
      children: [
        { name: "Bo Miao", title: "department manager" },
        {
          name: "Su Miao",
          title: "department manager",
          children: [
            { name: "Tie Hua", title: "senior engineer" },
            {
              name: "Hei Hei",
              title: "senior engineer",
              children: [
                { name: "Pang Pang", title: "engineer" },
                { name: "Xiang Xiang", title: "UE engineer" },
              ],
            },
          ],
        },
        { name: "Yu Jie", title: "department manager" },
        { name: "Yu Li", title: "department manager" },
        { name: "Hong Miao", title: "department manager" },
        { name: "Yu Wei", title: "department manager" },
        { name: "Chun Miao", title: "department manager" },
        { name: "Yu Tie", title: "department manager" },
      ],
    };
  },
};
</script>
```
