require "rails_helper"

describe "ReportsController" do
  describe "index" do
    let(:report) { Report.create }

    it "renders all reports" do
      expected_output = [report].to_json
      get "/reports"
      
      expect(response.content_type).to eq("application/json")
      expect(response.body).to eq(expected_output)
    end
  end

  describe "create" do
    let(:title) { "A Title" }
    let(:description) { "A Description" }
    let(:status) { "A Status" }
    let(:params) { {
      title: title,
      description: description,
      status: status
    } }
    
    it "creates a new report" do
      old_report_count = Report.all.count

      post "/reports", :params => { :report => params }

      expect(response).to have_http_status(:created)
      expect(Report.all.count).to eq(old_report_count + 1)
    end
  end
end
