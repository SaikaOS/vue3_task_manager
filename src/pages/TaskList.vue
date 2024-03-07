<template>
    <div class="w-4/5 m-auto flex flex-col min-h-screen place-items-center 
     justify-evenly bg-blue-200">
    <TaskForm />
    <h1 v-if="tasks.length === 0" class="text-5xl text-white">No tasks</h1>
    <ul v-else>
      <li v-for="task in tasks" :key="task.id">
        <SingleTask :task="task"/>
      </li>
    </ul>
    </div>
  </template>
  
<script setup lang="ts">
import { useTaskStore } from '../stores/task';
import TaskForm from '../components/TaskForm.vue';
import SingleTask from '../components/SingleTask.vue';

const { tasks } = useTaskStore()

</script>
  