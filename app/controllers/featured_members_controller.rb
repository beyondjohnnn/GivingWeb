class FeaturedMembersController < ApplicationController

    def index
      render json: {route: "index"}
    end

    def create
      render json: {route: "create", posted: params[:id]}
    end

    def destroy
      render json: {route: "delete", delete_id: params[:id]}
    end
 end
