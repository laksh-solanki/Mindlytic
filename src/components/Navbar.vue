<template>
 <div></div>
</template>

<script setup>
defineOptions({ name: 'AppNavbar' });
</script>

<style scoped>
.router-link-active {
  background-color: rgba(237, 244, 245, 0.952);
  border-radius: 5px;
  color: rgb(0, 0, 0);
}

:deep(.p-menubar) {
  background-color: #1f2937;
  border-bottom: 1px solid #374151;
}

:deep(.p-menubar .p-menuitem-link) {
  color: #d1d5db;
}

:deep(.p-menubar .p-menuitem-link:hover) {
  background-color: #374151;
}
</style>
