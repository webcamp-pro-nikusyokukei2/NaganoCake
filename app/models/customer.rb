class Customer < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :orders, dependent: :destroy
  has_many :cart_items, dependent: :destroy
  has_many :deliveries, dependent: :destroy

  validates :last_name, presence: true
  validates :first_name, presence: true
  validates :last_name_kana, presence: true, format: {with: /\A[ァ-ヶー－]+\z/}
  validates :first_name_kana, presence: true, format: {with: /\A[ァ-ヶー－]+\z/}
  validates :postal_code, presence: true, format: {with: /\A\d{7}\z/}
  validates :address, presence: true
  validates :phone_number, presence: true, format: {with: /\A\d{10,11}\z/}
  validates :email, presence: true
  validates :encrypted_password, presence: true

  enum customer_status: { '有効': true, '退会済': false }

  def active_for_authentication?
    super && (self.customer_status == '有効')
  end
end
