class ApplicationController < ActionController::Base
    before_action :configure_devise, if: :devise_controller?

    private

    def configure_devise
        devise_parameter_sanitizer.permit(:account_update, keys: [ :first_name, :dog_name, images: [] ])
        devise_parameter_sanitizer.permit(:sign_up, keys: [ :first_name, :dog_name, :username, images: [] ])
    end

end
