<script setup lang="ts"> 
    import PostService from '../services/PostService';
    import {onMounted} from 'vue';
    
    const service = new PostService();
    const posts = service.getPosts();

    onMounted(async () => {await service.fetchAll()})

     
</script>
<template>
    <h1>Posts</h1>
    <ul class="post-list">
        <li v-for="p in posts" :key="p.id"><router-link :to="{name:'postdetail', params: {id:p.id}}">
            {{p.id}}
        
        </router-link></li>
    </ul>

</template>
<style scoped lang="scss">

h1 {
    text-align: center;
}
.post-list{
    width: 95vw;
    height: 75px;
    padding: 20px;
    list-style: none;
    li {    
        padding: 10px;
        width: 100%;
        border: 1px solid #ccc;
        text-align: left;
        color: $primaryColor;
        cursor: pointer;
        a {
            text-decoration: none;
            color: $primaryColor;
        }
        a:hover {
            color: #ccc;
        }
    }
    li:hover {
        background-color: $primaryColor;
        color: #ccc
    }
    
}
</style>