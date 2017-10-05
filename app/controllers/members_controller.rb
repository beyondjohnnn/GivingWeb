class MembersController < ApplicationController

    def index
      render json: Member.all.as_json({
        include: :donations
        })

      # members = Member.all
      # donations = Donation.all
      # new_members = []
      #
      # members.each do |member|
      #   total_amount = 0;
      #   donations.each do |donation|
      #     if(donation.member_id == member.id)
      #       total_amount += donation.total
      #     end
      #   end
      #   new_member = {}
      #   new_member["id"] = member.id
      #   new_member["name"] = member.name
      #   new_member["info"] = member.info
      #   new_member["post_date"] = member.post_date
      #   new_member["snippet"] = member.snippet
      #   new_member["location"] = member.location
      #   new_member["goal"] = member.goal
      #   new_member["title"] = member.title
      #   new_member["meta_description"] = member.meta_description
      #   new_member["donations"] = total_amount
      #   new_members.push(new_member)
      # end

      # render json: new_members.reverse
    end
 end
