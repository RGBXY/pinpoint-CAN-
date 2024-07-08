import { defineStore } from "pinia";
export const useResNavstore = defineStore('resNav', {
    state: () => ({
        isOpen: false,
    })
})