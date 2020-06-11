require 'rails_helper'

RSpec.describe 'Home API', type: :request do
    let!(:homes) { create_list(:home, 10) }
    let(:home_id) { homes.first.id }

     # Test suite for GET /homes
    describe 'GET /homes' do
        # make HTTP get request before each example
        before { get '/homes' }

        it 'returns homes' do
        # Note `json` is a custom helper to parse JSON responses
        expect(json).not_to be_empty
        expect(json.size).to eq(10)
        end

        it 'returns status code 200' do
        expect(response).to have_http_status(200)
        end
    end
end
