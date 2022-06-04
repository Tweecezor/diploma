<template>
  <div class="loader" />
</template>

<script>
export default {
};
</script>

<style lang="postcss" scoped>
.loader {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border-top: 10px solid transparent;
  border-right: 10px solid #D70F3D;
  border-left: 10px solid #D70F3D;
  border-bottom: 10px solid #D70F3D;
  background: transparent;
  transform: rotate(-45deg);
  transition: all 2s;
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>