class User < ApplicationRecord

  validates :email, presence: true, uniqueness: true

  has_many :submitted_urls,
    foreign_key: :user_id,
    class_name: :ShortenedUrl

  # has_many :visited_urls,

end