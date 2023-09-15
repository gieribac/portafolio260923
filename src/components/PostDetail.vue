<script setup lang="ts">
    import {defineProps} from 'vue';
    const props = defineProps({
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        default: "no hay información para mostrar",
      },
    });
</script>
<template >
    <div class="post">
        <h4>{{props.title}}</h4>
        <p>{{props.content}}</p>
    </div>
</template>
<style scoped>
    .post{
        width: 300px;
        border-radius: 10px;
        background-color: #599;
        margin: 20px;
        padding: 15px;

    }
    
</style>