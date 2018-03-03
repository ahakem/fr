/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // check if the url is defiend and not empty
        it('URL defined and not empty', function() {
          for (const feed of allFeeds) {
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
          }
        });


        // check if the name is defiend and not empty
        it('Name defined and not empty', function() {
          for (const feed of allFeeds) {
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
          }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe("The menu", function() {
     
      it("The menu element is hidden by default", function() {
        expect($("body").hasClass("menu-hidden")).toBe(true);

      });
        
      it("when the menu icon clicked the menu toggle", function() {

        // menu hidden by default and will click to open it
        $(".menu-icon-link").click();
        expect($("body").hasClass("menu-hidden")).toBe(false);

        // menu opend after the last click and will click again to close it
        $(".menu-icon-link").click();
        expect($("body").hasClass("menu-hidden")).toBe(true);

      });

    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe("Initial Entries", function() {
      beforeEach(function(done) {
        loadFeed(0,function(){
          done();
        });
      });

      it("checking if loadfeed function is called", function(done) {
        
        expect($(".feed .entry").length).not.toBe(0);
        done();
      });
     
    });
        

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe("New Feed Selection", function() {
    
      var oldContent;
      beforeEach(function(done) {
        loadFeed(0,function(){
          oldContent = $(".feed").html();
          done();
        });
      });

      it("make sure the content changes", function(done) {
        loadFeed(1,function(){
          var newContent = $(".feed").html();
          expect(newContent).not.toEqual(oldContent);
          done();
        });

      });

    });
        
}());
