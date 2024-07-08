// stores/uiStore.js
import { defineStore } from 'pinia';

export const useUIStore = defineStore('uiStore', {
  state: () => ({
    isSidebarOpen: false,
    resNav: false,
  }),
  actions: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    toggleResNav(){
      this.resNav = !this.resNav;
    },
  },
});
