# Project REST-Rant

REST-Rant is an app where users can review restaurants.

As a admin I need a page so I can create a  place.

As a admin I need a page so I can edit a place.

As a admin I need a page so I can read a place.

As a admin I need a page so I can delete a place.

ROUTES
-----------------------------------------------------------------------------------------

|--------|-------------------------|----------------------------------------------------|
| Method | Path                    | Purpose                                            |
|--------|-------------------------|----------------------------------------------------|
| GET    |  /                      | Home Page                                          |
|--------|-------------------------|----------------------------------------------------|
| GET    | /places                 | Places Index Page                                  |
|--------|-------------------------|----------------------------------------------------|
| POST   | /places                 | Create new place                                   |
|--------|-------------------------|----------------------------------------------------|
| GET    | /places/new             | Form page for creating a new place                 |
|--------|-------------------------|----------------------------------------------------|
| GET    | /places/:id             | Details about a particular place                   |
|--------|-------------------------|----------------------------------------------------|
| PUT    | /places/:id             | Update a particular place                          |
|--------|-------------------------|----------------------------------------------------|
| GET    | /places/:id/edit        | Form page for editing existing place               |
|--------|-------------------------|----------------------------------------------------|
| DELETE | /places/:id             | Delete a particular place                          |
|--------|-------------------------|----------------------------------------------------|
| POST   | /places/:id/rant        | Create a rant (comment) about particular place     |
|--------|-------------------------|----------------------------------------------------|
| DELETE |/places/:id/rant/:rantid | Delete a rant (comment) about a particular place   |
|--------|-------------------------|----------------------------------------------------|
| GET    | *                       | 404 page (matches any route not defined above)     |
|--------|-------------------------|----------------------------------------------------|

DATABASE
_________________________________________________________________________________________


PLACES
_________________________________________________________________________________________________________________________________________________________________________

|----------|----------------|
|  Field   |    Type        |
|----------|----------------|
| _id      | Object ID      |
|----------|----------------|
| Name     | String         |
|----------|----------------|
| City     | String         |
|----------|----------------|
| State    | String         |
|----------|----------------|
| Cuisines | String         |
|----------|----------------|
| Pic      | String (a URL) |      |
|----------|----------------|




