class MembersController < ApplicationController

    def index
      render json: Member.all.as_json({
        include: [:donations, :comments]
        })
    end
 end
