class MembersController < ApplicationController

    def index
      members = Member.all.as_json({
        include: [:donations, :comments]
        })
      render json: members.reverse
    end

    def show
    	render json: Member.find(params[:id]).as_json({
        include: [:donations, :comments]
        })
    end
 end
