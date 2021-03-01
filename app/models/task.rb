class Task < ApplicationRecord
  belongs_to :user
  validates :title, presence: true, length: { maximum: 20 }
end
