class FlightsUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :flights_users, id: false do |t|
      t.integer :flight_id
      t.integer :user_id
    end
  end
end
