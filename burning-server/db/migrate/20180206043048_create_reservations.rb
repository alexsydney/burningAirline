class CreateReservations < ActiveRecord::Migration[5.1]
  def change
    create_table :reservations do |t|
      t.integer :flight_id
      t.integer :user_id
      t.text :seat

      t.timestamps
    end
  end
end
