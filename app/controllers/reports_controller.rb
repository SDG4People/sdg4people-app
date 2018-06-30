class ReportsController < ApplicationController
  def index
    @reports = Report.all
    render json: @reports
  end

  def create
    Report.create(report_params)
    render json: params, status: :created
  end

  def search
    @reports = []
    reports = Report.all
    reports.each do |report|
      if report.title.split(" ").include? params[:query]
        @reports << report
      end
    end
    render json: @reports
  end

  private

  def report_params
    params.require(:report).permit(:title, :description, :status, :impact_level, :external_link, :goal)
  end
end
