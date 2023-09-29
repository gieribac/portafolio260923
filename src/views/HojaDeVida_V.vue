<script setup lang="ts"> 
  
</script>
<template>
   
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