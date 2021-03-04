require 'spec_helper'
require 'rails_helper'

feature 'the signup process' do
  background :each do
    visit new_user_url
  end

  scenario 'has a new user page' do
    expect(page).to have_content('Sign Up')
  end

  feature 'signing up a user' do
    scenario 'has username, password fields' do
      expect(page).to have_content("Username")
      expect(page).to have_content("Password")
    end

    scenario 'shows username on the homepage after signup' do
      fill_in "Username", with: "G-Man"
      fill_in "Password", with: "123456"

      click_button "Sign Up"

      expect(page).to have_content("G-Man")

      user = User.find_by(username: "G-Man")
      expect(current_path).to eq(user_path(user))
    end

  end
end

feature 'logging in' do
  background :each do
    visit new_session_url
  end

  scenario 'shows username on the homepage after login' do
    fill_in "Username", with: "G-Man"
    fill_in "Password", with: "123456"

    click_button "Sign In"

    expect(page).to have_content("G-Man")  
  end

end

feature 'logging out' do
  background :each do
    visit users_url
  end

  scenario 'begins with a logged out state' do
    expect(page).to have_content("Sign In")
  end

  scenario 'doesn\'t show username on the homepage after logout' do
    click_on "Sign In"
    
    fill_in "Username", with: "G-Man"
    fill_in "Password", with: "123456"

    click_button "Sign In"
    click_button "Sign Out"
    expect(page).not_to have_content("G-Man")
  end

end