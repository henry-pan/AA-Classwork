class Artwork < ApplicationRecord

  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :User

  has_many :shares,
    foreign_key: :artwork_id,
    class_name: :ArtworkShare

  has_many :shared_viewers,
    through: :shares,
    source: :viewer

  def self.artworks_index_user_id(user_id)
    Artwork
      .left_joins(:shares)
      .where('artworks.artist_id = ? OR artwork_shares.viewer_id = ?', user_id, user_id)
  end
    
end
