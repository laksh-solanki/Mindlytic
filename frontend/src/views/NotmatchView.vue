<script>
export default {
  methods: {
    goBack() {
      window.history.back();
    }
  }
}
</script>

<template>
  <v-btn @click="goBack" variant="flat" icon="mdi-arrow-left"
    class="btn-css text-primary-emphasis bg-primary-subtle border-2 border-primary-subtle"></v-btn>

  <v-empty-state headline="Whoops, 404" class="" title="Page not found"
    text="The page you were looking for does not exist"
    image="https://static.vecteezy.com/system/resources/previews/059/904/717/non_2x/hand-holding-a-question-mark-symbol-in-a-minimal-flat-design-illustration-vector.jpg"></v-empty-state>
</template>
<style>
.btn-css {
  border-start-start-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  border-top-right-radius: 0% !important;
}
</style>
