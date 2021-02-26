require "action_view"

class Cat < ApplicationRecord
  
  include ActionView::Helpers::DateHelper
  
  COLORS = ["white", "black", "orange", "gray", "brown"]

  validates :birth_date, :color, :name, :sex, :description, presence: true
  validates :color, inclusion: { in: COLORS }
  validates :sex, inclusion: { in: %w(M F) }

  def age
    time_ago_in_words(birth_date)
  end

end