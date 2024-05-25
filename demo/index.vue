<template>
	<div>
		<h1>Component</h1>
	</div>
</template>

<script lang="ts" setup>
const test = ''
const test2 = 0

const test3: any = ''

const array: string[] = []

for (const i in array) {
  console.log(array[i]);
}

console.log({ test, test2 })
</script>
