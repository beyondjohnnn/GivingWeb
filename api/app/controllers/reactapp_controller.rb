class ReactappController < ApplicationController
  def index
    puts 'you put me here!!!!'

    render 'public/index'
  end

end
