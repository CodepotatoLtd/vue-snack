<template>
  <transition name="snack">
    <template v-if="button">
      <div v-if="active"
           :style="styles"
           :class="config.position"
           class="twackbar fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end">
        <div class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto">
          <div class="rounded-lg shadow-xs overflow-hidden">
            <div class="p-4">
              <div class="flex items-center">
                <div class="w-0 flex-1 flex justify-between">
                  <div class="w-0 flex-1 text-sm leading-5 font-medium text-gray-900">
                    <div class="twackbar__text">{{ text }}</div>
                  </div>
                  <button @click.prevent="action"
                          class="twackbar__action ml-3 flex-shrink-0 text-sm leading-5 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                    {{ button }}
                  </button>
                </div>
                <div class="ml-4 flex-shrink-0 flex">
                  <button
                    class="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150">
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-if="config.close">
      <div
        @click="$emit('close')"
        class="times">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="#E3E3E3"
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
    </template>
  </transition>
</template>

<script>
  export default {
    name: 'Twackbar',
    props: {
      config: Object
    },
    data() {
      return {
        active: false,
        text: '',
        button: '',
        theme: 'default',
        action: null
      }
    },
    computed: {
      styles() {
        return `--primary: ${this.config[this.theme].primary}`
      }
    }
  }
</script>
