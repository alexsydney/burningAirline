class ChangeColumnType < ActiveRecord::Migration[5.1]
  def change

    change_column :airplanes, :columns, :integer

  end
end
