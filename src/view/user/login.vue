<template>
  <div class="login-form">
    dsad
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "login",
  setup(){
    const formLayout = ref('horizontal');
    const handleSubmit = () => {

    }
    const handleChange = () => {

    }

    return {
      handleSubmit,
      handleChange,
      formLayout
    }
  }
}
</script>

<style scoped>
.login-form{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.login-form form {
  width: 300px;
}
</style>