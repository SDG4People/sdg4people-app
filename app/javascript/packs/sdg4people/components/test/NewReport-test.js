import NewReport from '../NewReport';
import { Api } from '../../middleware/api';

describe('NewReport', () => {
  let component, apiStub;

  beforeEach(() => {
    apiStub = sinon.stub(Api, "createReport");
    component = mount(<MemoryRouter><NewReport /></MemoryRouter>);
  });

  afterEach(() => {
    apiStub.restore(Api.createReports);
  });

  describe('layout', () => {
    it('displays a link to home', () => {
      const link = component.find(Link);
      expect(link.text()).to.eql("Home");
      expect(link.prop("to")).to.eql("/");
    });

    it('displays the form', () => {
      const labels = component.find('form').find('label');
      expect(labels.at(0).text()).to.eql("Title:")
      expect(labels.at(1).text()).to.eql("Description:")
    });
  });

  describe('interaction', () => {
    it('submits the new report', () => {
      let inputs = component.find('input');
      let title = 'test-title';
      let description = 'test-description';
      let expectedArg = {
        report: {
          title,
          description,
          status: 'open'
        }
      };
      inputs.at(0).simulate('change', {target: {value: title}});
      inputs.at(1).simulate('change', {target: {value: description}});
      component.find('input[type="submit"]').simulate('submit');
      expect(apiStub).to.have.been.calledWith(expectedArg);
    });
  });
});
