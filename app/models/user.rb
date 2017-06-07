class User < ActiveRecord::Base

  attr_accessor :email

  has_secure_password
  
end
