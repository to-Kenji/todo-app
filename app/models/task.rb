class Task < ApplicationRecord
  belongs_to :user
  validates :title, presence: true, length: { maximum: 40 }
  scope :recent, -> { order(created_at: :desc) }
end
