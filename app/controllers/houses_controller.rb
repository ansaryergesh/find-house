class HousesController < ApplicationController
        before_action :set_house, only: [:show, :update, :destroy]
    
        def index
            @houses = House.all
            json_response(@houses)
        end

        def show
            json_response(@house)
        end

        def create
            @house = current_user.events.create!(house_params)
            json_response(@house, :created)
        end

        # PUT /homes/:id
        def update
            @house.update(house_params)
            head :no_content
        end
    
        # DELETE /homes/:id
        def destroy
            @house.destroy
            head :no_content
        end
    
        private
    
        def house_params
            # whitelist params
            params.permit(:name, :price, :user_id)
        end
    
        def set_house
            @house = House.find(params[:id])
        end
    
end
