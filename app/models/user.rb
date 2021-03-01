class User < ApplicationRecord
  has_many :tasks
  
  validates :email, presence: true, length: { maximum: 80 },
            format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i },
            uniqueness: { case_sensitive: false }
end
