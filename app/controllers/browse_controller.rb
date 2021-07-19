class BrowseController < ApplicationController
    def browse
        @dogs = Account.all
    end

    def approve
    end

    def decline
    end

end
