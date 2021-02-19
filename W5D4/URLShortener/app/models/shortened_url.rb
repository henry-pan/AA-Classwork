require "securerandom"

class ShortenedUrl < ApplicationRecord
    validates :long_url, presence: true, uniqueness: true
    validates :short_url, presence: true, uniqueness: true
    
    def self.random_code
        random = SecureRandom.urlsafe_base64

        while ShortenedUrl.exists?(:short_url => random)
            random = SecureRandom.urlsafe_base64
        end

        random
    end

    def self.create_short_url(user, long_url)
        ShortenedUrl.create!(long_url: long_url, short_url: ShortenedUrl.random_code, user_id: user.id)
    end

    belongs_to :submitter,
    foreign_key: :user_id,
    class_name: :User
end

