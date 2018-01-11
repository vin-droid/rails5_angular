class Product < ApplicationRecord
    attr_accessor :product_id

    def product_id
       'product' << id  
    end
end
