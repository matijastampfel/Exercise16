import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from './Form';

describe('Test Form', ()=>{
    it('Testing for forms',()=>{
      let wrapper = mount(<Form/>)
      let props = wrapper.instance()
      const input = <div>
                 <input onChange={props.updateEmail} title="email" type="text" value={props.emailState}/>
                 <input onChange={props.updateName} title="name" type="text" value={props.nameState}/>
                  </div>
      expect(wrapper.contains(input)).toBe(true);
    })
    

})