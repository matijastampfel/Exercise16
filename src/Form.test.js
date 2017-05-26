import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Test Form', ()=>{
    it('Testing for forms',()=>{
      let wrapper = shallow(<Form/>)
      const input = <input type="text"/>; 
      expect(wrapper.contains(input)).toBe(true);
    })
    

})