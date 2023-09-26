<script setup lang="ts">
    import PostService from '../services/PostService'
    import {onMounted, computed} from 'vue'
    import {useRoute} from 'vue-router'

    const service = new PostService();
    const post = service.getPost();

    onMounted(async () => {
        const r = useRoute();
        await service.fetchPostById(r.params.id);
    })

</script>
<template>
    <h1>PostDetail</h1>
    <div class="post-container">
        <div class="post-card">
            <h3>{{post.title}}</h3>
            <p>{{post.body}}</p>

        </div>
        <router-link :to="{name:'postlist'}">Regresar</router-link>
    </div>


</template>
<style scoped lang="scss">

a {
  display: inline-block;
  padding: 10px 20px;
  background-color: $primaryColor;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

</style>