class FeaturedMembersController < ApplicationController

    def index
      members = FeaturedMember.all.as_json({
        include: [:member]
        })
      render json: members
    end

    def create
      featured_member = FeaturedMember.new({member_id: params[:id], position: params[:position]})
      if featured_member.save
        render json: featured_member
      else
        render json: {errors: "did not save"}
      end
    end

    def destroy
      delete = FeaturedMember.where(member_id: params[:id])[0].delete
      render json: {out: "deleted"}
    end
 end
