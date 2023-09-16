<script setup lang="ts">
    import {defineProps, defineEmits, Ref, ref} from 'vue';
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
    const emit = defineEmits(["sayHi"])
    const alClick = ():void => {
        emit("sayHi",m.value)

    }
    let m:Ref<string> = ref("");
</script>
<template >
    <div class="post">
        <h4 v-custom-size.xxl.blue>{{props.title}}</h4>
        <p v-custom-size:sm>{{props.content}}</p>
        <input type="text" v-model="m">
        <button @click="alClick">Saludar</button>
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