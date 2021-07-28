class BrowseController < ApplicationController
    def browse
        @dogs = Account.where.not(id: current_account.id)
    end

    def approve
        logger.debug "User id is matching #{params[:id]}"
    end

    def decline
    end

end
