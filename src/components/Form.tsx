import * as React from 'react';

import ResultsContainer from "./ResultsContainer";

export interface FormState {
	firstValue: string;
	secondValue: string;
	thirdValue: string
	questionNumber: number;
	isFormFinished: boolean;
	formResult: string;
	showEmptyInputWarning: boolean;
}

class Form extends React.Component<{}, FormState> {
	constructor(props?: any) {
		super(props);
		this.state = {
			questionNumber: 1,
			firstValue: '',
			secondValue: '',
			thirdValue: '',
			isFormFinished: false,
			formResult: '',
			showEmptyInputWarning: false,
		};
		this.questionParse = this.questionParse.bind(this);
		this.previousQuestion = this.previousQuestion.bind(this);
	}

	/** 
   	 * Renders the form.
   	 */
	render() {
		return (
			this.state.isFormFinished ?
				<ResultsContainer result={this.state.formResult} /> :
				<form onSubmit={(
					event: React.FormEvent<HTMLFormElement>) => {
					this.onSubmit(document.querySelectorAll('input'), event)
				}}>
					{this.questionParse(this.state.questionNumber)}
					{this.state.showEmptyInputWarning ? <p className="errorPopup fadeInOut"><i>Woof!</i> Please answer before proceeding to the next question.</p>
						: null}
					<div className="rowButtons">
						{this.state.questionNumber == 1 ? null :
							<button type="button" onClick={() => this.previousQuestion()}>Previous</button>}
						<button type="submit">Next</button>
					</div>
				</form>
		);
	}

	/**
	 * This function handles argument q and compares it to all question statements. 
	 * Returns the correct question.
	 * @param q The question index as number.
	 * @returns HTML-element with question and input fields.
	 */
	questionParse(q: number) {
		if (q == 1) {
			return (
				<div className="formQuestions">
					<h2>How active are you?</h2>
					<div>
						<input
							type="radio"
							name="active"
							checked={this.state.firstValue === 'A'}
							id="Very active"
							onChange={this.onRadioChangeFirst}
							value="A" />
						<label htmlFor="Very active">Very active </label>
					</div>

					<div>
						<input
							type="radio"
							name="active"
							checked={this.state.firstValue === 'B'}
							id="Not very active"
							onChange={this.onRadioChangeFirst}
							value="B"
						/>
						<label htmlFor="Not very active">Not very active </label>
					</div>

					<div>
						<input
							type="radio"
							name="active"
							checked={this.state.firstValue === "C"}
							id="I'm an athletic"
							onChange={this.onRadioChangeFirst}
							value="C"
						/>
						<label htmlFor="I'm an athletic">I'm an athletic </label>
					</div>
				</div>
			);
		}
		if (q == 2) {
			return (
				<div className="formQuestions">
					<h2>Do you have any special interest?</h2>
					<div>
						<input
							type="radio"
							name="interest"
							checked={this.state.secondValue === "A"}
							id="I'm interested in hunting, search or rescue training"
							onChange={this.onRadioChangeTwo}
							value="A"
						/>
						<label htmlFor="I'm interested in hunting, search or rescue training">I'm interested in hunting, search or rescue training</label>
					</div>

					<div>
						<input
							type="radio"
							name="interest"
							checked={this.state.secondValue === "B"}
							id="I'm interested in herding sheep and living the farm life"
							onChange={this.onRadioChangeTwo}
							value="B"
						/>
						<label htmlFor="I'm interested in herding sheep and living the farm life">I'm interested in herding sheep and living the farm life</label>
					</div>

					<div>
						<input
							type="radio"
							name="interest"
							checked={this.state.secondValue === 'C'}
							id="I have no special interest"
							onChange={this.onRadioChangeTwo}
							value="C"
						/>
						<label htmlFor="I have no special interest">I have no special interest </label>
					</div>
				</div>
			);
		}
		if (q == 3) {
			return (
				<div className="formQuestions"> 
					<h2>Do you like dawgs?</h2>
					<div>
						<input
							type="radio"
							name="likes"
							checked={this.state.thirdValue === 'A'}
							id="Very mucho!"
							onChange={this.onRadioChangeThird}
							value="A"
						/>
						<label htmlFor="Very mucho!">Very mucho! </label>
					</div>

					<div>
						<input
							type="radio"
							name="likes"
							checked={this.state.thirdValue === 'B'}
							id="Not at all"
							onChange={this.onRadioChangeThird}
							value="B"
						/>
						<label htmlFor="Not at all">Not at all </label>
					</div>

					<div>
						<input
							type="radio"
							name="likes"
							checked={this.state.thirdValue === 'C'}
							id="Yaaas ofc!"
							onChange={this.onRadioChangeThird}
							value="C"
						/>
						<label htmlFor="Yaaas ofc!">Yaaas ofc! </label>
					</div>
				</div>
			);
		}
		return null;
	}

	/**
   	 * Function created for handling selected answers in form
   	 */
	handleResult() {
		let A = 0;
		let B = 0;
		let C = 0;
		Object.getOwnPropertyNames(this.state).map(
			answer => {
				if (this.state[answer] === 'A') {
					A++;
				} else if (this.state[answer] === 'B') {
					B++;
				} else if (this.state[answer] === 'C') {
					C++;
				}
			})
		this.countResult(A, B, C)
	}

	/**
	 * Function created for counting result in form
	 * @param A input value A
	 * @param B input value B
	 * @param C input value C
	 */
	countResult(A: number, B: number, C: number) {
		if (A > B && A > C) {
			this.answersA();
		} else if (B > A && B > C) {
			this.answersB();
		} else if (C > A && C > B) {
			this.answersC();
		} else {
			console.log("alla hundar passar dig")
			this.answersABC();
		}
	}

	/**
   	 * Functions for showing result
   	 */
	answersA() {
		console.log("En sällskapshunds skulle passa dig");
		this.setState({
			formResult: "sällskapshund"
		});
	}

	answersB() {
		console.log("En jakthund skulle passa dig");
		this.setState({
			formResult: "jakthund"
		});
	}

	answersC() {
		console.log("En vallhund skulle passa dig");
		this.setState({
			formResult: "vallhund"
		});
	}

	answersABC() {
		console.log("Alla hundraser passar dig");
		this.setState({
			formResult: "hundraser"
		});
	}

	/**
	 * Checks questionNumber for invalid value.
	 * Decrements the state questionNumber by 1.
	 */
	previousQuestion() {
		if (this.state.questionNumber == 1) {
			alert('Nu blev det fel!');
		} else {
			this.setState({
				questionNumber: this.state.questionNumber - 1
			});
		}
	}


	/**
	 * When button "next" is pressed, onSubmit is executed.
	 * If questionNumber is out of bounds, the form is finished.
	 * If any radio button has been checked, it saves the value.
	 * If conditions above have not been met, show error pop-up.
	 * @param inputs All currently rendered radio button inputs.
	 * @param event Submit event from form, only used to prevent page refresh.
	 */
	onSubmit = (inputs: NodeListOf<HTMLInputElement>, event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const { firstValue, secondValue, thirdValue } = this.state;

		// Checks if last question has been submitted
		if (this.state.thirdValue != "") {
			localStorage.setItem('firstValue', firstValue);
			localStorage.setItem('secondValue', secondValue);
			localStorage.setItem('thirdValue', thirdValue);

			this.setState({
				isFormFinished: true
			});

			this.handleResult();

		} // Checks if any radio button is checked in form is.
		else if (Array.from(inputs).some(input => input.checked == true)) {
			localStorage.setItem('firstValue', firstValue);
			localStorage.setItem('secondValue', secondValue);
			localStorage.setItem('thirdValue', thirdValue);

			this.setState({
				questionNumber: this.state.questionNumber + 1
			});
		} else {
			this.setState({
				showEmptyInputWarning: true,
			})
			setTimeout(() => {
				this.setState({
					showEmptyInputWarning: false
				})
			}, 4800);
		}
	};

	/**
	 * Event handlers for each question in form
	 */
	onRadioChangeFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			firstValue: e.target.value
		});
	};

	onRadioChangeTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			secondValue: e.target.value
		});
	};

	onRadioChangeThird = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			thirdValue: e.target.value
		});
	};
}

export default Form;
