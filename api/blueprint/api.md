# Money movements API
Money movements is an app to provide the ability of creating categories and link
your movements to them.

## Categories [/api/categories]

### List all user categories [GET]

+ Parameters

    + page (enum, optional) - Pagination information

        + Members
            + number - Page number
            + size - Results per page

            + Default: 1, 50

+ Response 200 (application/vnd.api+json)
{
  "data": [{
      "type": "category",
      "id": "1",
      "attributes": {
          "name": "Clothing",
          "keywords": "Asos;Springfield"
      },
      "links": {
          "self": "/api/categories/1"
      }
  }],
  "jsonapi": {
      "version": "1.0"
  }
}
