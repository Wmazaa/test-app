<template>
	<div class="container">
		<div class="row pb-4">
			<div class="col-md">
				<h1>{{ msg }}</h1>
			</div>
		</div>
		<control-list-item :name="'Control 1'" sum />
		<control-list-item :name="'Control 2'" :constant-value="1000" constant />
		<control-list-item :name="'Control 3'" />
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
}
</script>

<style scoped>
	input::-webkit-inner-spin-button {
		opacity: 1;
	}
	.form-control {
		margin-right: 2rem;

	}
</style>