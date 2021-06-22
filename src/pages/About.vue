<template>
    <div>
        <p class="color">
            {{ title }}
        </p>
    </div>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'

export default {
    setup () {
        const title = ref('hello about')
        return {
            title
        }
    }
}
</script>

<style lang="scss" scoped>
    .title {
        color: red;
    }
</style>
