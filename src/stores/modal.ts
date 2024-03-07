import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore("modal", () => {
    const isModal = ref<boolean>(false)

    const openModal = () => {
        isModal.value = true
      }
  
      const closeModal = () => {
        isModal.value = false
      }

    return { isModal, openModal, closeModal }
})
