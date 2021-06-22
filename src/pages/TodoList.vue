<template>
    <div class="todo-list">
        <div>
            <div>
                <label>新增待办</label>
                <input
                    v-model="todo"
                    @keyup.enter="handleAddTodo">
            </div>
        </div>
        <div>
            <h3>待办列表</h3>
            <ul>
                <li
                    v-for="item in todos"
                    :key="item.id"
                    @click="handleChangeStatus(item, true)">
                    <input type="checkbox">
                    <label>{{ item.text }}</label>
                </li>
            </ul>
        </div>
        <div>
            <h3>已完成列表</h3>
            <ul>
                <li
                    v-for="item in dones"
                    :key="item.id"
                    @click="handleChangeStatus(item, false)">
                    <input
                        type="checkbox"
                        checked>
                    <label>{{ item.text }}</label>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs } from 'vue'
import { TodoItem } from '../types'

export default defineComponent({
    setup () {
        const state = reactive({
            todoList: [
                {
                    id: '1',
                    done: false,
                    text: '打游戏'
                },
                {
                    id: '2',
                    done: true,
                    text: '睡觉'
                },
                {
                    id: '3',
                    done: false,
                    text: '吃饭'
                }
            ] as TodoItem[]
        })

        const todo = ref('')

        const todos = computed(() => state.todoList.filter(item => !item.done))

        const dones = computed(() => state.todoList.filter(item => item.done))

        const handleChangeStatus = (item: TodoItem, status: boolean) => {
            item.done = status
        }

        const handleAddTodo = ():void => {
            if (!todo.value) {
                return alert('请输入待办事项')
            }
            state.todoList.push({
                text: todo.value,
                id: Date.now().toString(),
                done: false
            })
            todo.value = ''
        }

        return {
            ...toRefs(state),
            todo,
            todos,
            dones,
            handleChangeStatus,
            handleAddTodo
        }
    }
})
</script>

<style lang="scss" scoped>
.todo-list {
    text-align: center;

    ul {
        list-style: none;

        li {
            text-align: left;
            list-style: none;
        }
    }
}
</style>
