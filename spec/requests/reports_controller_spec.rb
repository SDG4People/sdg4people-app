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

  describe "search" do
    let(:query) { "water" }
    let!(:report) { Report.create(title: "We need water") }
    let!(:wrong_report) { Report.create(title: "We need air") }
    let(:expected_output) { [report].to_json }

    it "renders results with matches in the title" do
      get "/search", :params => { :query => query }

      expect(response).to have_http_status(:ok)
      expect(response.body).to eq(expected_output)
    end
  end
end
