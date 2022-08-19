<template>
  <div
    class="bs-toast toast toast-placement-ex m-2 fade bg-dark"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    :class="show"
  >
    <div class="toast-header">
      <i class="bx bx-show me-2"></i>
      <div class="me-auto fw-semibold">{{ datasource.name }}</div>
      <small>{{ datasource.title }}</small>
      <button
        type="button"
        class="btn-close"
        @click="$emit('showToast')"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datasource: {
      type: Object,
      required: true,
    },
    show: {
      type: String,
      default: "",
    },
  },
};
</script>
