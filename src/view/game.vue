<template lang="pug">
#game.pt-24.flex.h-full
  .numbers.flex.justify-center.border-b-2.fixed.w-full.top-0.z-50.flex-wrap(
    :class="success ? 'bg-green-100 border-green-300 pt-6' : 'bg-red-100 border-red-300 py-6'",
  )
    .number.border-2.rounded.w-12.h-12.bg-white.text-center.leading-number.text-4xl.font-mono(
      v-for="(item, index) in numbers",
      :class="[{'ml-3': index > 0, 'outline-yellow': index === current && !success, 'animated wobble bg-red-200': wrong.indexOf(index) !== -1}, success ? 'border-green-500 text-green-600' : 'border-red-500']",
    ) {{item}}

    .success-info.leading-relaxed.text-green-600.w-full.text-center.py-3(v-if="success")
      span.text-3xl Congratulations!
      br
      | 🎉🎉🎉🎉🎉🎉
      br
      | You took {{time}}

  article.px-5.flex-1.flex.flex-col
    h4.my-3.text-gray-500.sticky History
    dl.flex.flex-wrap.overflow-auto.flex-1
      template(v-for="item in history")
        dt.tracking-widest.text-center.font-mono(class="w-1/2") {{item.numbers.join('')}}
        dd.text-center.font-mono(class="w-1/2")
          strong.text-green-600 {{item.a}}
          span.text-green-600.mx-1 A
          strong.text-yellow-600 {{item.b}}
          span.text-yellow-600.ml-1 B
</template>

<script>
import clone from 'lodash/clone';
import {
  nextTick,
  onMounted,
  onBeforeUnmount,
  ref,
} from 'vue';
import {createReals, formatTime, getResult} from "@/helper";

let startTime = 0;

export default {
  setup() {
    const numbers = new Array(4).fill('?');
    const current = ref(0);
    const history = ref([]);
    const time = ref('');
    const wrong = ref([]);
    const success = ref(false);

    function checkNumbers() {
      for (let i = 1; i < 4; i++) {
        const sub = numbers.slice(0, i);
        const index = sub.indexOf(numbers[i]);
        if (index !== -1) {
          wrong.value.push(index, i);
          return;
        }
      }
      wrong.value.splice(0, wrong.value.length);
      const result = getResult(numbers);
      history.value.unshift({
        numbers: clone(numbers),
        ...result,
      });
      if (result.a >= 4) {
        return showSuccess();
      }
    }

    function moveNext(check = false) {
      current.value = current.value < 3 ? current.value + 1 : 0;
      if (check && current.value === 0 && history.value.length === 0) {
        checkNumbers();
      }
    }

    function reset() {
      nextTick()
        .then(() => {
          for (let i = 0; i < 4; i++) {
            numbers[i] = '?';
          }
        });
    }

    function showSuccess() {
      time.value = formatTime(Date.now() - startTime);
      success.value = true;
      reset();
    }

    function onKeyPress(event) {
      const {key} = event;
      switch (key) {
        case 'ArrowLeft':
          current.value = current.value > 0 ? current.value - 1 : 3;
          break;

        case 'ArrowRight':
          moveNext();
          break;

        case 'Enter':
          checkNumbers();
          break;

        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          numbers[current.value] = Number(key);
          moveNext(true);
          break;
      }
    }

    onMounted(() => {
      createReals();
      startTime = Date.now();
      document.body.addEventListener('keydown', onKeyPress);
    });
    onBeforeUnmount(() => {
      document.body.removeEventListener('keydown', onKeyPress);
    })

    return {
      current,
      numbers: ref(numbers),
      history,
      success,
      time,
      wrong,
    };
  }
};
</script>
