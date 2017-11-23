class BakeriesController < ApplicationController
  before_action :set_bakery, only: [:show, :update, :destroy]

  # GET /bakeries
  def index
    @bakeries = Bakery.all

    render json: @bakeries
  end

  # GET /bakeries/1
  def show
    render json: @bakery
  end

  # POST /bakeries
  def create
    @bakery = Bakery.new(bakery_params)

    if @bakery.save
      render json: @bakery, status: :created, location: @bakery
    else
      render json: @bakery.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bakeries/1
  def update
    if @bakery.update(bakery_params)
      render json: @bakery
    else
      render json: @bakery.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bakeries/1
  def destroy
    @bakery.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bakery
      @bakery = Bakery.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def bakery_params
      params.permit(:name, :location, item_ids: [])
    end
end
