class App

    init: ->
        console.log 'hello world'

    @onReady: (fn) ->
        # add event listener

App.onReady -> new App().init()

