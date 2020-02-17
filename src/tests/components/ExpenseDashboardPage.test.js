import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('should ExpenseDashboardPage NotFounPage correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    //expect(wrapper.find('h1').text()).toBe('Expensify');
    expect(toJSON(wrapper)).toMatchSnapshot();
});
