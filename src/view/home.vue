<template lang="pug">
#home.flex.flex-col
  h1.text-center.text-3xl.border-b-4.border-purple-600.bg-purple-400.px-6.pb-4.pt-6.text-white.text-bold.font-serif Guess number

  .flex-1.mt-7.mx-auto(class="w-3/4")
    router-link.block.bg-green-600.rounded.text-white.text-center.leading-loose.text-xl(
      :to="{name: 'game'}",
    )
      i.bi.bi-puzzle-fill.mr-2
      | Start
    router-link.block.bg-blue-600.rounded.text-white.text-center.leading-loose.text-xl.mt-3(
      :to="{name: 'help'}",
    )
      i.bi.bi-patch-question-fill.mr-2
      | Help
</template>

<script>
export default {
  setup() {

  }
}
</script>
