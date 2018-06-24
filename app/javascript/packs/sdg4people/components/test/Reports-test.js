import Reports from '../Reports';
import ListedReport from '../ListedReport';
import { Api } from '../../middleware/api';

describe('Reports', () => {
  let component, reports, apiStub;

  beforeEach(() => {
    apiStub = sinon.stub(Api, "getReports");
    component = mount(<MemoryRouter><Reports /></MemoryRouter>);
    reports = [{title: "first-report"}, {title: "second-report"}];
  });

  afterEach(() => {
    apiStub.restore(Api.getReports);
  });

  describe('layout', () => {
    it('displays a link to create a new Report', () => {
      expect(component.text()).to.eql("New Report");
    });

    it('displays the reports', () => {
      component.find(Reports).instance().setState({reports});
      component.update();
      expect(component.find(ListedReport).length).to.eql(reports.length);
    });
  });
});
