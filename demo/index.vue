<template>
	<div>
		<h1>Component</h1>
	</div>
	<Nested />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Nested from './nested.vue'

defineProps<{
	test: string
}>()

const element = ref<HTMLDivElement>()

const test = ''
const test2 = 0

const test3: any = ''

const array: string[] = []

for (const i in array) {
	console.log(array[i])
}

console.log({ test, test2 })
</script>
