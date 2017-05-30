import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

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
  let wraper = shallow(<App/>);
  let test = "Kurac";
  wraper.find("Form").simulate("update",{target:{value:test},type:"change"});
  let state = wraper.state("email");
  expect(state).toBe(test);
})

it("check update name",()=>{
  let wraper = shallow(<App/>);
  wraper.find("Form").simulate("update");
  let state1 = wraper.state("name");
  expect(state1).toBe("");
})


it("check delete",()=>{
  let wraper = shallow(<App/>);
 wraper.setState({email : "Magarac", name: "Johan"});
  let test = "Picka";
  wraper.find("Button").simulate("gumb"); 
  let state = wraper.state("name");
  expect(state).toBe("");
})


});