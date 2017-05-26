import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe("Button CSS",()=>{
    it("CSS Class for Button",()=>{
        let wrap = shallow(<Button/>)
        const btn = "buttonClass";
        expect(wrap.hasClass(btn)).toBe(true)
    })
})