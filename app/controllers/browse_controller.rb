class BrowseController < ApplicationController
    def browse
        @dogs = Account.where.not(id: current_account.id)
    end

    def approve
    end

    def decline
    end

end
