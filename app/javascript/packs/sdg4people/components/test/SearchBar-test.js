import SearchBar from '../SearchBar';
import { Api } from '../../middleware/api';

describe('SearchBar', () => {
  let component, apiStub, spy;

  beforeEach(() => {
    spy = sinon.spy();
    component = mount(<MemoryRouter><SearchBar search={spy} /></MemoryRouter>);
  });

  describe('layout', () => {
    it('displays an input field', () => {
      expect(component.find('input').length).to.eql(1);
    });
  });

  describe('interaction', () => {
    it('performs a search', () => {
      let query = 'water';
      let input = component.find('input');
      let button = component.find('button');
      input.simulate('change', {target: {value: query}});
      button.simulate('click');
      expect(component.find(SearchBar).prop('search')).to.have.been.calledWith(query);
    });
  });
});
