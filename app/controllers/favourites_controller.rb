class FavouritesController < ApplicationController
    before_action :set_house
    def index
        json_response(@current_user.favourites)
    end

    def show
        json_response(@house)
    end

    def create
        @favour = current_user.add_favour(@house)
        json_response(@favour, :created)
    end

    def destroy
        current_user.cancel_favour(@house)
        head :no_content
    end

    private

    def favour_params
        params.permit(:user_id, :house_id)
    end
    
    def set_house
        @house = House.find(params[:house_id])
    end
end
