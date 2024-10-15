<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
	id: {
		type: String,
		default: null,
	},
	name: {
		type: String,
		default: null,
	},
	label: {
		type: String,
		default: 'Type Here...',
	},
	type: {
		type: String,
		default: 'text',
	},
	modelValue: [String, Number],
	placeholder: String,
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event) => {
	emit('update:modelValue', event.target.value);
};
</script>

<template>
	<div class="w-full max-w-sm min-w-full">
		<div class="relative">
			<input
				:id="id"
				:name="name"
				:type="type"
				:value="modelValue"
				:placeholder="placeholder"
				@input="updateValue"
				class="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
			/>
			<label
				:for="id"
				class="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400"
				:class="{
					'-top-2 left-2.5 text-xs scale-90': modelValue,
				}"
			>
				{{ label }}
			</label>
		</div>
	</div>
</template>
