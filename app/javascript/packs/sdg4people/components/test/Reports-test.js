import Reports from '../Reports';
import ListedReport from '../ListedReport';
import SearchBar from '../SearchBar';
import { Api } from '../../middleware/api';

describe('Reports', () => {
  let component, reports, apiStub, reportsComponent;

  beforeEach(() => {
    apiStub = sinon.stub(Api, "getReports");
    component = mount(<MemoryRouter><Reports /></MemoryRouter>);
    reports = [{title: "first-report"}, {title: "second-report"}];
    reportsComponent = component.find(Reports);
  });

  afterEach(() => {
    apiStub.restore(Api.getReports);
  });

  describe('layout', () => {
    it('displays a link to create a new Report', () => {
      expect(reportsComponent.find(Link).text()).to.eql("New Report");
    });

    it('displays a SearchBar', () => {
      expect(reportsComponent.find(SearchBar).length).to.eql(1);
    });

    it('displays the reports', () => {
      component.find(Reports).instance().setState({reports});
      component.update();
      expect(component.find(ListedReport).length).to.eql(reports.length);
    });
  });
});
