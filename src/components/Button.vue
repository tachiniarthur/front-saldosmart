<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
	label: {
		type: String,
		default: 'Button',
	},
	type: {
		type: String,
		default: 'button',
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	customClasses: {
		type: String,
		default: '',
	},
});

const emit = defineEmits(['click']);

const handleClick = (event) => {
	if (!props.disabled) {
		emit('click', event);
	}
};
</script>

<template>
	<button
		:type="type"
		:disabled="disabled"
		@click="handleClick"
		:class="`rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${customClasses}`"
	>
		{{ label }}
	</button>
</template>
