class HomesController < ApplicationController
    before_action :set_home, only: [:show, :update, :destroy]

    def index
        @homes = Home.all
        json_response(@homes)
    end
    def create
        @home = Home.create!(home_params)
        json_response(@home, :created)
      end
    # PUT /homes/:id
    def update
        @home.update(home_params)
        head :no_content
    end

    # DELETE /homes/:id
    def destroy
        @home.destroy
        head :no_content
    end

    private

    def home_params
        # whitelist params
        params.permit(:name, :price, :rating)
    end

    def set_home
        @home = Home.find(params[:id])
    end
end
