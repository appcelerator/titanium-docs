# Modules.Cloud.Reviews

<ProxySummary/>

## Examples

### Create Review

This example creates a new review and checks the response.

    Cloud.Reviews.create({
        post_id: savedPostId,
        rating: 1,
        content: 'Good'
    }, function (e) {
        if (e.success) {
            var review = e.reviews[0];
            alert('Success:\n' +
                'id: ' + review.id + '\n' +
                'rating: ' + review.rating + '\n' +
                'content: ' + review.content + '\n' +
                'updated_at: ' + review.updated_at);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Show a Review

This example retrieves information about a review and checks the response.

    Cloud.Reviews.show({
        post_id: savedPostId,
        review_id: savedReviewId
    }, function (e) {
        if (e.success) {
            var review = e.reviews[0];
            alert('Success:\n' +
                'id: ' + review.id + '\n' +
                'rating: ' + review.rating + '\n' +
                'content: ' + review.content + '\n' +
                'updated_at: ' + review.updated_at);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Query for Reviews

This example requests a list of reviews and checks the response.

    Cloud.Reviews.query({
        page: 1,
        per_page: 20,
        where: {
            rating: { '$gt': 5.0 }
        }
    }, function (e) {
        if (e.success) {
            alert('Success:\n' +
                'Count: ' + e.reviews.length);
            for (var i = 0; i < e.reviews.length; i++) {
                var review = e.reviews[i];
                alert('id: ' + review.id + '\n' +
                    'id: ' + review.id + '\n' +
                    'rating: ' + review.rating + '\n' +
                    'content: ' + review.content + '\n' +
                    'updated_at: ' + review.updated_at);
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Update a Review

This example updates a review and checks the response.

    Cloud.Reviews.update({
        post_id: savedPostId,
        review_id: savedReviewId,
        rating: 100,
        content: 'Very good!'
    }, function (e) {
        if (e.success) {
            var review = e.reviews[0];
            alert('Success:\n' +
                'id: ' + review.id + '\n' +
                'rating: ' + review.rating + '\n' +
                'content: ' + review.content + '\n' +
                'updated_at: ' + review.updated_at);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Remove a Review

This example deletes a review and checks the response.

    Cloud.Reviews.remove({
        post_id: savedPostId,
        review_id: savedReviewId
    }, function (e) {
        if (e.success) {
            alert('Success');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

<ApiDocs/>
