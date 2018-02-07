class Airplane < ApplicationRecord

  has_many :flights
  has_many :reservations, through: :flights

end
