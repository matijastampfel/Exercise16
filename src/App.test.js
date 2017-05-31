import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, mount} from 'enzyme';

describe("react test", ()=>{
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it("check state", ()=>{
let wraper = shallow(<App/>);
let state = wraper.state("email");
expect(state).toBe("");

})

it("check update email",()=>{
  let wraper = mount(<App/>);
  let test = "Kurac";
  wraper.find("Form").children("input").first().simulate("change",{target:{value:test},type:"change"});
  let state = wraper.state("email");
  expect(state).toBe(test);
})

it("check update name",()=>{
  let wraper = mount(<App/>);
  let test = "Joni";
  wraper.find("Form").children("input").at(1).simulate("change",{target:{value:test},type:"change"});
  let state1 = wraper.state("name");
  expect(state1).toBe(test);
})


it("check delete",()=>{
  let wraper = mount(<App/>);
 wraper.setState({email : "Magarac", name: "Johan"});
  let test = "Picka";
  wraper.find("Button").children("button").simulate("click"); 
  let state = wraper.state("name");
  expect(state).toBe("");
})


});