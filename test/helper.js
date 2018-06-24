import 'jsdom-global/register';
import Enzyme from 'enzyme';
import React from 'react';
import { Link, MemoryRouter, StaticRouter } from 'react-router-dom'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, render, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow
global.render = render
global.mount = mount
global.expect = expect
global.React = React
global.Link = Link
global.MemoryRouter = MemoryRouter
global.StaticRouter = StaticRouter
global.sinon = sinon
