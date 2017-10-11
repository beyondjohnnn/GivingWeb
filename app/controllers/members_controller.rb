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

    def create
      member = Member.new(name: params[:name], info: params[:info], snippet: params[:snippet], location: params[:location], goal: params[:goal], url_image: params[:url_image])
      if member.save
        render json: member
      else
        render json: {errors: ['Invalid member profile']}
      end
    end
 end
