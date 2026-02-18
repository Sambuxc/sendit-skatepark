<template>
	<h3>Get in touch</h3>
	<form id="contact-us" @submit="onFormSubmit" class="form">
		<div class="field">
			<label for="name">Your name</label>
			<input id="name" type="text" name="name" placeholder="Your name" v-model="name" autocomplete="given-name" :aria-invalid="getInvalidMsg(name)" />
			<InvalidMsg v-if="getInvalidMsg(name)" :msg="getInvalidMsg(name)"/>
		</div>

		<div class="field">
			<label for="email">Your email</label>
			<input id="email" type="email" name="email" placeholder="Your email" v-model="email" autocomplete="email" />
			<!-- <InvalidMsg v-if="invalidName" :msg="invalidName"/> -->
		</div>

		<div class="field">
			<label for="subject">Subject</label>
			<input id="subject" type="text" name="subject" placeholder="Subject" v-model="subject" />
			<!-- <InvalidMsg v-if="invalidName" :msg="invalidName"/> -->
		</div>

		<div class="field">
			<label for="message">Message</label>
			<textarea id="message" type="text" name="message" v-model="message"/>
			<!-- <InvalidMsg v-if="invalidName" :msg="invalidName"/> -->
		</div>

		<div class="field">
			<button type="submit" :disabled="submitting">
				<span v-if="submitting">Submitting...</span>
				<span v-else>Send</span>
			</button>
			<InvalidMsg v-if="invalidSubmit" :msg="invalidSubmit"/>
			<InvalidMsg v-if="statusMsg" :msg="statusMsg"/>
		</div>
	</form>
</template>

<script setup>
import { ref } from 'vue'
import InvalidMsg from './form/InvalidMsg.vue';

const submitting = ref(false)
const email = ref('')
const name = ref('')
const subject = ref('')
const message = ref('')
const invalids = ref({})
const invalidSubmit = ref('')
const statusMsg = ref('')

function validateFields() {
	if (!name.value && name.value.length > 3) {
		invalids.value.name = 'Missing name field'
	} else {
		invalids.value.name = ''
	}
	if (!email.value) {
		invalids.value.email = 'Missing email field'
	} else {
		invalids.value.email = ''
	}
	if (!subject.value) {
		invalids.value.subject = 'Missing subject field'
	} else {
		invalids.value.subject = ''
	}
	if (!message.value) {
		invalids.value.message = 'Missing message field'
	} else {
		invalids.value.message = ''
	}
}

const getInvalidMsg = (field) => {
	return invalids.value[field] || null
}

async function onFormSubmit(e) {
	e.preventDefault()
	// Show loading state
	submitting.value = true;

	validateFields()

	if (invalids.value) {
		const form = document.querySelector('.form')

		const formData = {
			email: email.value,
			name: name.value,
			subject: subject.value,
			message: message.value,
			service: 'Send It Skatepark',
		}

		try {
			const response = await fetch('https://lib-tech.work/send-mailer', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData)
			});

			const data = await response.json();

			if (response.ok) {
				invalidSubmit.value = 'Message sent successfully!';
				form.reset(); // Clear the form
			} else {
				invalidSubmit.value = `Error: ${data.message || 'Failed to send message'}`;
			}
		} catch (error) {
			invalidSubmit.value = 'Network error. Please try again.';
			console.error('Error:', error);
		} finally {
			// Reset loading state
			submitting.value = false
		}
	} else {
		// Reset loading state
		submitting.value = false
		invalidSubmit.value = 'Invalid form fields'
	}
}
</script>
