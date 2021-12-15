<template>
  <teleport to='body' >
    <div v-if="isOpen" class="ui-modal">
      <div class="ui-modal-content-container" :class="{'ui-modal-full-width':fullWidth}">
        <button class="ui-modal-close-button" @click="$emit('close')"></button>
        <div class="ui-modal-content">
          <p v-if="headline" class="ui-modal-headline">
            {{headline}}
          </p>
          <div>
            <slot></slot>
          </div>

        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: 'UiModal',
  props:{
    isOpen:{
      type:Boolean,
      default:true,
    },
    fullWidth:{
      type:Boolean,
      default:false,
    },
    headline:{
      type:String,
      default:'',
    },
  },
  emits: ['close'],
  data() {
    return {
    }
  },
  methods:{
    emitClose(){
      // do things
    }
  }
}
</script>

<style lang="pcss" scoped>
  .ui-modal {
    @apply fixed h-full w-full flex items-center justify-center;
    background:rgba(0,0,0,0.5);
  }

  .ui-modal-content-container {
    @apply bg-white p-8 pt-10 max-w-screen-sm relative;
  }
  .ui-modal-full-width {
    @apply max-w-7xl;
  }
  .ui-modal-content {
    @apply overflow-y-scroll;
    max-height:80vh;
  }

  .ui-modal-close-button {
    @apply bg-transparent border-none absolute right-4 top-4;
    font-size: 2rem;
  }
  .ui-modal-close-button:after{
    display: inline-block;
    content: "\00d7"; /* This will render the 'X' */
  }

  .ui-modal-headline {
    @apply font-bold text-lg;
  }


</style>
