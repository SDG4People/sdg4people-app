const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}

Object.defineProperty(window, 'location', {
  writable: true,
  value: 'some url'
});

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

import 'jsdom-global/register';
import Enzyme from 'enzyme';
import React from 'react';
import { Link, MemoryRouter, StaticRouter } from 'react-router-dom'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, render, mount } from 'enzyme';
import { expect } from 'chai';
import chai from 'chai';
import sinon from 'sinon';
chai.use(require('sinon-chai'));

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
