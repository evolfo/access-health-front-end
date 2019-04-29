require 'test_helper'

class Api::V1::ChargesControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get api_v1_charges_new_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_charges_create_url
    assert_response :success
  end

end
