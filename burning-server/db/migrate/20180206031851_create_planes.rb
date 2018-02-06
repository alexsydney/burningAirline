class CreatePlanes < ActiveRecord::Migration[5.1]
  def change
    create_table :planes do |t|
      t.text :name
      t.integer :rows
      t.text :columns
      t.boolean :is_available

      t.timestamps
    end
  end
end
