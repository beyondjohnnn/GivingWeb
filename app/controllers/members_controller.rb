class MembersController < ApplicationController

    def index
      render json: Member.all.as_json({
        include: [:donations, :comments]
        })
    end

    def show
    	render json: Member.find(params[:id]).as_json({
        include: [:donations, :comments]
        })
    end
 end
