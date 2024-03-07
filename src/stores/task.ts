import { defineStore } from 'pinia';
import { ref, watchEffect } from 'vue';

export interface Task {
    id: any,
    title: string | number
}

export const useTaskStore = defineStore("tasks", () => {
    const tasks = ref<Task[]>(JSON.parse(localStorage.getItem('tasks') || '[]'));

    watchEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks.value));
    });

    const addTask = (task: Task) => {
        tasks.value.push({ id: Date.now(), title: task.title });
    }

    const editTask = (task: Task, input: string | number) => {
        const index = tasks.value.findIndex(t => t.id === task.id);
        if (index !== -1) {
            const updatedTask = { ...tasks.value[index], title: input };
            tasks.value.splice(index, 1, updatedTask);
        }
    }
    
    const deleteTask = (task: Task) => {
        const index = tasks.value.findIndex(currentTask => currentTask.id === task.id)
        tasks.value.splice(index, 1)
    }

    return { tasks, addTask, editTask, deleteTask }
});
