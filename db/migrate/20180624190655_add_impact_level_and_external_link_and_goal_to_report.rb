class AddImpactLevelAndExternalLinkAndGoalToReport < ActiveRecord::Migration[5.1]
  def up
    add_column :reports, :impact_level, :string
    add_column :reports, :external_link, :string
    add_column :reports, :goal, :string
  end

  def down
    remove_column :reports, :impact_level
    remove_column :reports, :external_link
    remove_column :reports, :goal
  end
end
