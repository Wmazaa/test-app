<template>
	<div class="container">
		<div class="row pb-4">
			<div class="col-md">
				<h1>{{ msg }}</h1>
			</div>
		</div>
		<control-list-item :name="'Control 1'" :focus="focus" sum />
		<control-list-item :name="'Control 2'" :focus="focus" constant />
		<control-list-item :name="'Control 3'" :focus="focus" />
	</div>
</template>

<script>
import ControlListItem from './ControlListItem.vue';

export default {
	components: {
		ControlListItem,
	},
	props: {
		msg: String,
		default() {
			return 'Test App';
		},
	},
	computed: {
		elements () {
			return document.getElementsByClassName('input');
		},
		focus() {
			return '';
		},
	},
}
</script>

<style scoped>
	input::-webkit-inner-spin-button {
		opacity: 1;
	}
</style>