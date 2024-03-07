<template>
    <div class="flex justify-between items-center w-2/3">
      <input type="text"
       placeholder="Add task" 
       v-model="inputValue.title"
       class="border-2 border-gray-100 rounded-lg px-2 py-4 w-[400px]"/>

    <button 
     @click="handleSubmit"
     class="uppercase text-lg bg-white p-4 w-[150px] rounded-xl">
     Add
    </button>
    </div>
</template>

<script setup lang="ts">
import { Task, useTaskStore } from '../stores/task';
import { ref } from 'vue'

const tasks = useTaskStore()
const inputValue = ref<Task>({id: 0, title: ''})

const handleSubmit = () => {
  if(inputValue.value.title !== '') {
    tasks.addTask(inputValue.value)
  }
  inputValue.value.title = ''
}

</script>