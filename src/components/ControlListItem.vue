<template>
    <div class="row" style="min-height: 4rem;">
			<div class="col-md">
				<div class="container">
					<div class="row">
						<div class="col-7">
							{{ name }}
						</div>
						<div class="col-3">
							<div class="row">
								<div v-on-clickaway="removeSelection" class="input-group" @keydown="handleKeyPress($event)">
                                    <div v-if="!selected" class="btn-group">
                                        <button type="button" class="btn btn-link" @click="select()">
                                            {{ formattedValue }}
                                        </button>
                                        <button
                                            type="button"
                                            class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            disabled
                                        >
                                        </button>
                                    </div>
									<input
                                        :ref="current.input"
                                        v-if="selected"
										v-model.number="value"
										v-mask="mask"
										type="text"
										class="form-control"
									>
								</div>
							</div>
							<div v-if="sum || constant" class="row pt-1">
								<a v-show="sum && selected" href="#" class="badge badge-primary" @click="getSum">сумма</a>
                                <a v-show="constant && selected" href="#" class="badge badge-primary" @click="addConstant">константа</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway';

const inputs = [
    'input1',
    'input2',
    'input3',
];

export default {
    directives: {
        onClickaway,
    },
    props: {
        name: {
            type: String,
            required: true,
        },
        sum: {
            type: Boolean,
            default: false,
        },
        constant: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            value: 0,
        };
    },
    computed: {
        current() {
            if (this.sum) {
                return {
                    input: 'input1',
                    figure: 'figure1',
                };
            }
            if (this.constant) {
                return {
                    input: 'input2',
                    figure: 'figure2',
                };
            }
            return {
                input: 'input3',
                figure: 'figure3',
            };
        },
        selected() {
            return this.$store.getters.selected[this.current.input];
        },
        formattedValue() {
            if (this.value) {
                return this.value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
            }
            return 0;
        },
		mask() {
            const mask = new Array(this.value.toString().length + 2).join('#');
			return mask;
		},
    },
    watch: {
        selected() {
            if(this.selected) {
                // eslint-disable-next-line no-console
                // console.log(document.getElementsByClassName('form-control')[0]);
                this.$nextTick(() => document.getElementsByClassName('form-control')[0].focus());
            }
        },
    },
    methods: {
        addConstant() {
            this.value = 1000;
            // this.$store.commit('figure2', this.value);
        },
		getSum() {
			this.value = this.$store.getters.figure2 + this.$store.getters.figure3;
			this.$store.commit('figure1', this.value);
        },
        handleKeyPress(event) {
            switch (event.keyCode) {
                case 27:
                    this.removeSelection(false);
                    break;
                case 13:
                    this.removeSelection();
                    break;
                case 9:
                    event.preventDefault();
                    if (event.shiftKey) {
                        this.removeSelection();
                        this.selectPrevious();
                    } else {
                        this.removeSelection();
                        this.selectNext();
                    }
                    break;
                default:
            }
        },
        removeSelection(save = true) {
            if (save) {
                this.value = this.value ? this.value : 0;
                this.$store.commit(this.current.figure, this.value);
            } else {
                this.value = this.$store.getters[this.current.figure];
            }
            this.$store.commit('removeSelect', this.current.input);
        },
        select() {
            this.$store.commit('select', this.current.input);
        },
        selectNext() {
            const index = inputs.indexOf(this.current.input) < 2 ? inputs.indexOf(this.current.input) + 1 : 0;
            this.$store.commit('select', inputs[index]);
        },
        selectPrevious() {
            const index = inputs.indexOf(this.current.input) > 0 ? inputs.indexOf(this.current.input) - 1 : 2;
            this.$store.commit('select', inputs[index]);
        },
    },
}

</script>

<style scoped>
    .btn-link {
        color: black;
        white-space: pre;
    }
    .btn-link:hover {
        color: #007bff;
        text-decoration: none;
    }
    .dropdown-toggle-split {
        width: 50%;
        background-color: white;
        border: none;
    }
    .dropdown-toggle-split:hover {
        cursor: auto;
    }
    .dropdown-toggle-split {
        color: black;
    }
    .btn-group>.btn:not(:first-child) {
        margin-left: -0.5rem;
    }
</style>