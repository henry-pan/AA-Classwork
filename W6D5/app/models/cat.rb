require "action_view"

class Cat < ApplicationRecord
  
  include ActionView::Helpers::DateHelper
  
  COLORS = ["White", "Black", "Orange", "Gray", "Brown"]

  validates :birth_date, :color, :name, :sex, :description, presence: true
  validates :color, inclusion: { in: COLORS }
  validates :sex, inclusion: { in: %w(M F) }

  def age
    time_ago_in_words(birth_date)
  end

  def colors
    COLORS
  end

end