class CreateFlights < ActiveRecord::Migration[5.1]
  def change
    create_table :flights do |t|
      t.text :flight_no
      t.text :origin
      t.text :destination
      t.text :date
      t.integer :plane_id

      t.timestamps
    end
  end
end
