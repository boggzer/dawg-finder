import * as React from "react";

export interface FormState {
  firstValue: string
  secondValue: string
}

class Form extends React.Component<{}, FormState> {

  constructor(props?: any) {
    super(props);
    this.state = { 
      firstValue: "",
      secondValue: ""
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1> Form </h1>
        <ul>

          <section className="questionOne">
          <h2>How active are you?</h2>
            <input
              type="radio"
              name="active"
              checked={this.state.firstValue === "Very active"}
              onChange={this.onRadioChangeFirst}
              value="Very active" />
              <label htmlFor="Very active">Very active </label>
          
            <input
              type="radio"
              name="active"
              checked={this.state.firstValue === "Not very active"}
              onChange={this.onRadioChangeFirst}
              value="Not very active" />
               <label htmlFor="Not very active">Not very active </label>

              <input
              type="radio"
              name="active"
              checked={this.state.firstValue === "I'm an athletic"}
              onChange={this.onRadioChangeFirst}
              value="I'm an athletic"/>
               <label htmlFor="I'm an athletic">I'm an athletic </label>
               </section>

              <section className="questionTwo">
               <h2>Do you have any special interest?</h2>
              <input
              type="radio"
              name="interest"
              checked={this.state.secondValue === "I'm interested in hunting, search or rescue training"}
              onChange={this.onRadioChangeTwo}
              value="I'm interested in hunting, search or rescue training" />
              <label htmlFor="I'm interested in hunting, search or rescue training">I'm interested in hunting, search or rescue training </label>
          
            <input
              type="radio"
              name="interest"
              checked={this.state.secondValue === "I'm interested in herding sheep and living the farm life"}
              onChange={this.onRadioChangeTwo}
              value="I'm interested in herding sheep and living the farm life" />
               <label htmlFor="I'm interested in herding sheep and living the farm life">I'm interested in herding sheep and living the farm life </label>

              <input
              type="radio"
              name="interest"
              checked={this.state.secondValue === "I have no special interest"}
              onChange={this.onRadioChangeTwo}
              value="I have no special interest"/>
               <label htmlFor="I have no special interest">I have no special interest </label>
               </section>

          <button type="submit">Submit</button>
        </ul>
      </form>
    );
  }

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(this.state)
    const { firstValue } = this.state;
    localStorage.setItem('firstValue', firstValue);
    const { secondValue } = this.state;
    localStorage.setItem('secondValue', secondValue);
  }

  onRadioChangeFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      firstValue: e.target.value,
    })
  }
      onRadioChangeTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        secondValue: e.target.value
      })

  }
}
  
export default Form;
