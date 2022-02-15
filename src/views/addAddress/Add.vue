<template>
  <!--begin::Layout Builder Notice-->
<div class="card">
  <form>
    <div class="card-body">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Add Addresses" />
      </div>

      <br />
      <div class="form-group mb-1">
        <label for="exampleTextarea">Enter Address Here </label>
        <textarea class="form-control" id="exampleTextarea" rows="5"></textarea>
      </div>

      <button type="submit" class="btn btn-primary mr-2 mt-2">Submit</button>
    </div>
  </form>

  </div>
  <!--end::Layout Builder Notice-->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { config } from "@/core/helpers/config";
// import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { themeName } from "@/core/helpers/documentation";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "add",
  // components: {
  //   CodeHighlighter,
  // },
  setup() {
    const tabIndex = ref(0);

    onMounted(() => {
      // set the tab from previous
      tabIndex.value = parseInt(localStorage.getItem("builderTab") || "0");

      setCurrentPageTitle("Add");
    });

    /**
     * Reset config
     * @param event
     */
    const reset = (event) => {
      event.preventDefault();
      // remove existing saved config
      localStorage.removeItem("config");
      window.location.reload();
    };

    /**
     * Set active tab when the tab get clicked
     * @param event
     */
    const setActiveTab = (event) => {
      tabIndex.value = parseInt(event.target.getAttribute("data-tab-index"));
      // keep active tab
      localStorage.setItem("builderTab", tabIndex.value.toString());
    };

    /**
     * Submit form
     * @param event
     */
    const submit = (event) => {
      event.preventDefault();
      // save new config to localStorage
      localStorage.setItem("config", JSON.stringify(config.value));
      window.location.reload();
    };

    return {
      tabIndex,
      config,
      reset,
      setActiveTab,
      submit,
      themeName,
    };
  },
});
</script>
