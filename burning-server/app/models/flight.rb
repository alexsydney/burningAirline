class Flight < ApplicationRecord


  belongs_to :airplane
  has_many :users, through: :reservations
  has_many :reservations


end
