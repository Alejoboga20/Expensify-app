import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import NotFounPage from '../../components/NotFoundPage';

test('should render NotFounPage correctly', () => {
    const wrapper = shallow(<NotFounPage />);
    //expect(wrapper.find('h1').text()).toBe('Expensify');
    expect(toJSON(wrapper)).toMatchSnapshot();
});
