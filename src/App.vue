<template>
	<div id="app">
		<control-list msg="Number input control"/>
	</div>
</template>

<script>
import ControlList from './components/ControlList.vue'

export default {
	name: 'app',
	components: {
		ControlList,
	},
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
