<script lang="ts">

import etoile_empty from '@/assets/etoile_empty.png'

export default {
  props: {
    rating: Number,
    width: {
      type: String,
      default: '11rem',
    },
  },
  emits: ['select'],
  data() {
    return {
      etoileEmpty: etoile_empty,
      hoverIndex: 0,
      informationData: ["", "0.5 Nul", "1 Très mauvais", "1.5 Mauvais", "2. Pas terrible", "2.5 Moyen", "3 Pas mal", "3.5 Bien", "4 Très bien", "4.5 Excellent", "5 Chef-d'oeuvre"],
    }
  },
  methods: {
    checkRating(): number {
      return this.rating || this.hoverIndex
    },
    information(): string {
      return this.informationData[this.hoverIndex] || ""
    },
    handleClick(index: number) {
      this.$emit('select', index)
    }
  }
}
</script>

<template>
  <div v-if="!rating || hoverIndex > 0" class="mt-2 px-2 min-h-1 bg-black text-white rounded-lg"
       :style="{ width }"
       :class="hoverIndex === 0 ? 'bg-white text-white' : ''"
  >
    {{ information() || '&nbsp;' }}
  </div>
  <div class="relative" :style="{ width, aspectRatio: '5 / 1' }">
    <div class="grid grid-cols-10 gap-0 h-full" :class="{ 'pointer-events-none': rating } " @mouseleave="hoverIndex = 0">
      <div
          v-for="n in 10"
          :key="n"
          :class="[n <= checkRating() ? 'bg-amber-300' : 'bg-white' ,  { 'cursor-pointer': !rating }] "
          @mouseenter="hoverIndex = n"
          @click="handleClick(n)"
      >
      </div>
    </div>
    <div class="grid grid-cols-5 absolute inset-0 pointer-events-none">
      <img v-for="n in 5" :key="n" class="aspect-square" :src="etoileEmpty" alt="star" />
    </div>
  </div>
</template>