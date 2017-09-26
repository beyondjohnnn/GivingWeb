# This file is used by Rack-based servers to start the application.

require_relative 'config/environment'

run Rails.application

# require 'rack/cors'
# use Rack::Cors do 
# 	# allow all origins in development
# 	allow do
# 		origins 'http://localhost:5000'
# 		# origins '*'
# 		resource '*',
# 			:header => :any,
# 			:methods => [:get, :post, :delete, :put, :options]
# 	end
	
# end