<script setup>
import { ref } from 'vue';
import Input from '@/components/Input.vue';
import Checkbox from '@/components/Checkbox.vue';

const isActive = ref(false);

const toggleForm = () => {
	isActive.value = !isActive.value;
};
</script>


<template>
	<div class="flex items-center justify-center h-screen">
		<div
			:class="[
				'relative w-full max-w-4xl min-h-[480px] rounded-2xl overflow-hidden shadow-2xl',
				{ active: isActive },
			]"
		>
			<div
				:class="[
					'absolute inset-0 w-1/2 p-10 transition-transform duration-700',
					isActive
						? 'translate-x-full opacity-100 z-50'
						: 'opacity-0 z-10',
				]"
			>
				<form
					class="bg-white h-full flex flex-col items-center justify-center p-6 space-y-5"
				>
					<h1 class="text-2xl font-semibold">Create Account</h1>
					<Input
						type="text"
						label="Full Name"
					/>
					<Input
						type="number"
						label="CPF"
					/>
					<Input
						type="email"
						label="Email"
					/>
					<Input
						type="password"
						label="Password"
					/>
					<Input
						type="password"
						label="Confirm Password"
					/>
					<button
						class="px-8 py-2 bg-purple-700 text-white rounded-md font-semibold uppercase"
					>
						Sign Up
					</button>
				</form>
			</div>

			<div
				:class="[
					'absolute inset-0 w-1/2 p-10 transition-transform duration-700',
					!isActive
						? 'opacity-100 z-50'
						: 'translate-x-full opacity-0 z-10',
				]"
			>
				<form
					class="bg-white h-full flex flex-col items-center justify-center p-6 space-y-5"
				>
					<h1 class="text-2xl font-semibold">Sign In</h1>
					<Input
						type="email"
						label="Email"
					/>
					<Input
						type="password"
						label="Password"
					/>
					<div class="flex items-center justify-between w-full">
						<label class="flex items-center space-x-2">
							<Checkbox
								id="remember"
								label="Remember Me"
							/>
						</label>

						<a href="#" class="text-xs text-gray-600"
							>Forget Your Password?</a
						>
					</div>
					<button
						class="px-8 py-2 bg-purple-700 text-white rounded-md font-semibold uppercase"
					>
						Sign In
					</button>
				</form>
			</div>

			<div
				class="absolute inset-0 w-1/2 bg-purple-700 transition-transform duration-700 rounded-2xl z-50"
				:class="isActive ? 'translate-x-0' : 'translate-x-full'"
			>
				<div
					class="absolute inset-0 flex items-center justify-center text-white"
				>
					<div class="text-center">
						<h1 class="text-3xl font-bold mb-2">
							{{ isActive ? 'Welcome Back!' : 'Hello, Friend!' }}
						</h1>
						<p class="text-sm mb-4">
							{{
								isActive
									? 'Enter your personal details to use all of site features'
									: 'Register with your personal details to use all of site features'
							}}
						</p>
						<button
							class="px-8 py-2 text-white border border-white rounded-md uppercase font-semibold"
							@click="toggleForm"
						>
							{{ isActive ? 'Sign In' : 'Sign Up' }}
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
