<template lang="pug">
#game
  .numbers.flex.bg-red-100.justify-center.py-6.border-b-2.border-red-300
    .number.border-2.rounded.border-red-500.w-12.h-12.bg-white.text-center.leading-number.text-4xl.font-mono(
      v-for="(item, index) in numbers",
      :class="{'ml-3': index > 0}",
    ) {{item}}

  h4 History
</template>

<script>
import {ref} from 'vue';

export default {
  setup() {
    const numbers = new Array(4).fill('?');

    return {
      numbers: ref(numbers),
    };
  },
};
</script>
