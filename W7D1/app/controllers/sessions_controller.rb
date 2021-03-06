class SessionsController < ApplicationController

    before_action :require_logged_out, only: [:new]

    def new
        render :new
    end

    def create
        user = User.find_by_credentials(params[:user][:user_name], params[:user][:password])
        if user
            user.reset_session_token!
            session[:session_token] = user.session_token
            redirect_to cats_url
        else
            render :new
        end
    end

    def destroy
        logout!
        redirect_to new_session_url
    end
end