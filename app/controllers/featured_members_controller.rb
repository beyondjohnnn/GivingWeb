class FeaturedMembersController < ApplicationController

  # Account.includes(:details).where(:id => current_account_id).first

    def index
      featured_members = FeaturedMember.order(:position)
      members = featured_members.map do |featured_member|
        {
          member: Member.where(id: featured_member.member_id)[0],
          position: featured_member.position
        }
      end
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
      render json: {route: "delete", delete_id: params[:id]}
    end
 end
