# CHANGELOG

## NEXT RELEASE

* Bumps dependencies
* Lints project with eslint `standard` style

## v2.0.0 (2021-06-21)

* Updates entire library to be compliant with the new `v2` API (endpoints, HTTP methods, etc)
* Build requests via a `client` now providing your email and api_key
* Added optional `baseUrl` and `timeout` options to client
* Module names are now plural
* The client now checks if an email and api_key is provided and raises an error if not
* Require Node >= 12
* Added unit tests (closes #1)

## v1.2.0 (2021-02-20)

* Adds a timeout to requests
* Renames `response` to `makeHttpRequest`

## v1.1.0 (2021-02-04)

* Added user-agent to requests (closes #2)
* Switched from Travis CI to GitHub Actions

## v1.0.1 (2020-07-26)

* Initial release
* Can create, retrieve, update, and delete Customers, Inventory, Locations, and Tickets
