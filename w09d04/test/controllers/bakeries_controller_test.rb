require 'test_helper'

class BakeriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @bakery = bakeries(:one)
  end

  test "should get index" do
    get bakeries_url, as: :json
    assert_response :success
  end

  test "should create bakery" do
    assert_difference('Bakery.count') do
      post bakeries_url, params: { bakery: { location: @bakery.location, name: @bakery.name } }, as: :json
    end

    assert_response 201
  end

  test "should show bakery" do
    get bakery_url(@bakery), as: :json
    assert_response :success
  end

  test "should update bakery" do
    patch bakery_url(@bakery), params: { bakery: { location: @bakery.location, name: @bakery.name } }, as: :json
    assert_response 200
  end

  test "should destroy bakery" do
    assert_difference('Bakery.count', -1) do
      delete bakery_url(@bakery), as: :json
    end

    assert_response 204
  end
end
