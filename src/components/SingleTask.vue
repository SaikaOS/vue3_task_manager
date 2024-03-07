<template>
    <div class="flex min-w-[500px] justify-around items-center bg-white h-[50px] rounded-lg">
        <p>{{ task.title }}</p>
        <div v-if="store.isModal" class="flex justify-between w-[200px]">
            <input type="text" v-model="inputValue" class="w-[100px] border-2 border-gray-100 rounded-lg">
            <button @click="handleCancel">
                <img src="../assets/cancel.svg" alt="edit" class="w-[20px] h-[20px]" />
            </button>
            <button @click="handleConfirm(task, inputValue)">
                <img src="../assets/confirm.svg" alt="edit" width="15" height="15"  />
            </button>
        </div>
        <button @click="store.openModal()">
        <img src="../assets/edit.svg" alt="edit" width="15" height="15"  />
        </button>
        <button @click="tasks.deleteTask(task)">
            <img src="../assets/delete.svg" alt="edit" width="15" height="15"  />
        </button>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { Task, useTaskStore } from '../stores/task';
import { useModalStore } from '../stores/modal';

const props = defineProps<{
    task: Task
}>()

const tasks = useTaskStore();
const store = useModalStore();
const inputValue = ref<string | number>('')

const handleCancel = () => {
    inputValue.value = ''
    store.closeModal()
}

const handleConfirm = (task: Task, inputValue: string | number) => {
    if (inputValue) {
        tasks.editTask(task, inputValue)
    }
    inputValue = ''
    store.closeModal()
}

</script>
