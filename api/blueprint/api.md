# Money movements API
Money movements is an app to provide the ability of creating categories and link
your movements to them.

## Categories [/api/categories]

### List all user categories [GET]

+ Response 200 (application/vnd.api+json)

     <!-- include(categories/response/categories.get.json) -->

+ Response 204

+ Response 400

     <!-- include(errors/400.json) -->

### Save category [POST]

+ Request (application/json)

    + Body

        <!-- include(categories/request/categories.post.json) -->

+ Response 400

     <!-- include(errors/400.json) -->

## Category details [/api/categories/{id}]

+ Parameters

    + id (number, required) - Category id

### Get category details [GET]

+ Response 200 (application/vnd.api+json)

    <!-- include(categories/response/categories.{id}.get.json) -->

+ Response 400

     <!-- include(errors/400.json) -->


### Edit category [PUT]

+ Request (application/json)

    + Body

        <!-- include(categories/request/categories.post.json) -->

+ Response 400

     <!-- include(errors/400.json) -->

### Delete category [DELETE]

+ Response 204

+ Response 400

     <!-- include(errors/400.json) -->
