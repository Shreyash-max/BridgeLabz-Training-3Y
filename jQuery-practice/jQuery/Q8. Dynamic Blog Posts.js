/**
 * Q8 – Dynamic Blog Posts
 * Demonstrates:
 * 1. "Add New Post" -> append a new post to the list using .append().
 * 2. "Prepend Featured Post" -> add a post at the top using .prepend().
 * 3. "Remove Last Post" -> delete last element using .remove().
 * 4. Add tags to posts -> use .before()/.after() for placement.
 * 5. Highlight posts with specific keywords dynamically.
 */

$(document).ready(function () {

    let postCounter = 5;

    /**
     * Requirement 1: "Add New Post" -> append a new post to the list
     */
    $("#btnAppendPost").on("click", function () {
        postCounter++;
        const newPostHtml = $(
            '<article class="blog-card" id="post-' + postCounter + '">' +
            '  <h3 class="post-title">Post #' + postCounter + ': Dynamic Web Architecture</h3>' +
            '  <p class="post-excerpt">This article was dynamically appended to the bottom of the feed using jQuery .append().</p>' +
            '</article>'
        );

        // Append to container with smooth fadeIn
        newPostHtml.hide().appendTo("#postsContainer").fadeIn(400);
    });

    /**
     * Requirement 2: "Prepend Featured Post" -> add a post at the top
     */
    $("#btnPrependPost").on("click", function () {
        postCounter++;
        const featuredPostHtml = $(
            '<article class="blog-card featured" id="post-' + postCounter + '">' +
            '  <div class="tag-pill-before">⭐ BREAKING FEATURED</div>' +
            '  <h3 class="post-title">Featured Announcement #' + postCounter + ': Version 4.0 Released</h3>' +
            '  <p class="post-excerpt">This critical update was prepended to the top of the feed using jQuery .prepend().</p>' +
            '</article>'
        );

        // Prepend to container with smooth slideDown
        featuredPostHtml.hide().prependTo("#postsContainer").slideDown(400);
    });

    /**
     * Requirement 3: "Remove Last Post" -> delete last element
     */
    $("#btnRemoveLast").on("click", function () {
        const lastCard = $("#postsContainer .blog-card").last();

        if (lastCard.length === 0) {
            alert("No more blog posts to remove!");
            return;
        }

        // Fade out smoothly and remove from DOM
        lastCard.fadeOut(300, function () {
            $(this).remove();
        });
    });

    /**
     * Requirement 4: Add tags to posts -> use .before() and .after() for placement
     * Places a category pill before the post title, and a timestamp tag after the post title
     */
    $("#btnAddTags").on("click", function () {
        // Prevent duplicate tags
        $(".tag-pill-before, .tag-pill-after").remove();

        // Target each post title
        $(".blog-card .post-title").each(function (index) {
            // .before() inserts content immediately before the targeted element
            $(this).before('<div class="tag-pill-before">Category: Technology &bull; Topic #' + (index + 1) + '</div>');

            // .after() inserts content immediately after the targeted element
            $(this).after('<div class="tag-pill-after">🕒 Published: 5 mins ago &bull; 4 min read</div>');
        });
    });

    /**
     * Requirement 5: Highlight posts with specific keywords dynamically
     */
    $("#btnHighlight").on("click", function () {
        const keyword = $("#keywordInput").val().toLowerCase().trim();

        // Clear previous keyword highlights
        $(".blog-card").removeClass("keyword-match");

        if (keyword === "") {
            alert("Please type a keyword into the input box to highlight matching posts.");
            return;
        }

        let matchCount = 0;

        $(".blog-card").each(function () {
            const cardText = $(this).text().toLowerCase();

            if (cardText.indexOf(keyword) !== -1) {
                // Add highlighted class and trigger subtle zoom
                $(this).addClass("keyword-match");
                matchCount++;
            }
        });

        if (matchCount === 0) {
            alert("No posts found containing keyword: \"" + keyword + "\"");
        }
    });

});
