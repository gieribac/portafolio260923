<script setup lang="ts">
    import PostDetail from './PostDetail.vue';
    import { ref, Ref } from 'vue';
    interface Post {
        title: string;
        content: string;
    }
    let info: Post[] = [
        {
            title: "Cartel 1",
            content: "Texto de ejemplo 1"
        },
        {
            title: "Cartel 2",
            content: "Texto de ejemplo 2"
        },
        {
            title: "Cartel 3",
            content: "Texto de ejemplo 3"
        },
        {
            title: "Cartel 4",
            content: "Texto de ejemplo 4"
        },
        {
            title: "Cartel 5",
            content: "Texto de ejemplo 5"
        },
        {
            title: "Cartel 6",
            content: "Texto de ejemplo 6"
        },
    ]

    const showAlert = (m: string):void => {
        alert(m);
    }
             
</script>
<template>
    <div class="container">
        <PostDetail v-for="e in info" :key="e.title" :title="e.title" 
        :content="e.content" @sayHi="showAlert"/>
    
    </div>
</template>
<style scoped>
    .container{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content:space-around;
    }
</style>