class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :discription, :price#, :created_at

  # def created_at
  #   # created_at.strftime('%d %b %Y %I:%M %p')
  # end
end
