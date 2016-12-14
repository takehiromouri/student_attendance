class Memo < ApplicationRecord
  belongs_to :student

  validates :content, :student, presence: true

  default_scope { order("created_at ASC") }
end
