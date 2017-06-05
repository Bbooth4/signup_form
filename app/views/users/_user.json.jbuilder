json.extract! user, :id, :email, :title, :company, :company_size, :created_at, :updated_at
json.url user_url(user, format: :json)
