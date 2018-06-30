import Reports from '../Reports';
import ListedReport from '../ListedReport';
import SearchBar from '../SearchBar';
import { Api } from '../../middleware/api';

describe('Reports', () => {
  let component, reports, getReportsStub, searchReportsStub, reportsComponent, query;

  beforeEach(() => {
    getReportsStub = sinon.stub(Api, "getReports");
    searchReportsStub = sinon.stub(Api, "searchReports");
    component = mount(<MemoryRouter><Reports /></MemoryRouter>);
    reports = [{title: "first-report"}, {title: "second-report"}];
    reportsComponent = component.find(Reports);
  });

  afterEach(() => {
    Api.getReports.restore();
    Api.searchReports.restore();
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

  describe('interaction', () => {
    describe('search', () => {
      beforeEach(() => {
        query = 'first-report';
        reportsComponent.instance()._search(query);
        searchReportsStub.callArgWith(1, [reports[0]])
        component.update();
      });

      it('sends the search query over the API', () => {
        expect(searchReportsStub).to.be.calledWith(query);
      });

      it('displays the correct results', () => {
        expect(component.find(ListedReport).length).to.eql(1);
      });
    });
  });
});
