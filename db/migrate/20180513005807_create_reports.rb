class CreateReports < ActiveRecord::Migration[5.1]
  def change
    create_table :reports do |t|
      t.string :title
      t.string :description
      t.string :status

      t.timestamps
    end
  end
end
