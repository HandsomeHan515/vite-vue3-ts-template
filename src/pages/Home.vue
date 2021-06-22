<template>
    <div>
        <p class="color">
            {{ title }}
        </p>
    </div>
    <HelloWorld msg="Hello vite" />
</template>
<script lang="ts">

import { ref } from '@vue/reactivity'
import { defineComponent } from '@vue/runtime-core'
import HelloWorld from '../components/HelloWorld.vue'

export default defineComponent({
    components: { HelloWorld },
    setup () {
        const title = ref('hello home')
        return {
            title
        }
    }
})

</script>

<style
    lang="scss"
    scoped>
    .title {
        color: blue;
    }
</style>
