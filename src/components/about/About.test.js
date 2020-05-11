import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';

import About from "./About";

configure({adapter: new Adapter()});

describe('<About />', () => {
    it('renders three <About /> components', () => {
        const wrapper = shallow(<About />);
        expect(wrapper.find('div')).to.have.lengthOf(2);
    });

    it('renders three <About /> components', () => {
        const wrapper = shallow(<About />);
        expect(wrapper.find('h3')).to.have.lengthOf(2);
    });

    it('renders three <About /> components', () => {
        const wrapper = shallow(<About />);
        expect(wrapper.find('h1')).to.have.lengthOf(0);
    });
});
