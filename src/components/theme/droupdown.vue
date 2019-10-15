<template>
    <div class="theme-droupdown">
        <a href="">{{droupdown}}</a>
        <ul class="theme-droupdown-list">
            <li v-for="(list, i) in droupdown.lits" :key="i" ></li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>