#!/bin/bash

curl -H 'X-Auth-Token: 591024a7b9c74f66b6a079e9d34a0f04' -X GET http://api.football-data.org/v1/competitions/445/leagueTable > ./_data/epl-201718-standings.json
curl -H 'X-Auth-Token: 591024a7b9c74f66b6a079e9d34a0f04' -X GET http://api.football-data.org/v1/competitions/445/fixtures > ./_data/epl-201718-fixtures.json
curl -H 'X-Auth-Token: 591024a7b9c74f66b6a079e9d34a0f04' -X GET http://api.football-data.org/v1/competitions/445/teams > ./_data/epl-201718-teams.json
curl -H 'X-Auth-Token: 591024a7b9c74f66b6a079e9d34a0f04' -X GET http://api.football-data.org/v1/competitions/446/leagueTable > ./_data/elc-201718-standings.json
curl -H 'X-Auth-Token: 591024a7b9c74f66b6a079e9d34a0f04' -X GET http://api.football-data.org/v1/competitions/446/fixtures > ./_data/elc-201718-fixtures.json
curl -H 'X-Auth-Token: 591024a7b9c74f66b6a079e9d34a0f04' -X GET http://api.football-data.org/v1/competitions/446/teams > ./_data/elc-201718-teams.json
curl -H 'X-Auth-Token: 591024a7b9c74f66b6a079e9d34a0f04' -X GET http://api.football-data.org/v1/competitions/447/leagueTable > ./_data/el1-201718-standings.json
curl -H 'X-Auth-Token: 591024a7b9c74f66b6a079e9d34a0f04' -X GET http://api.football-data.org/v1/competitions/447/fixtures > ./_data/el1-201718-fixtures.json
curl -H 'X-Auth-Token: 591024a7b9c74f66b6a079e9d34a0f04' -X GET http://api.football-data.org/v1/competitions/447/teams > ./_data/el1-201718-teams.json
curl -H 'X-Auth-Token: 591024a7b9c74f66b6a079e9d34a0f04' -X GET http://api.football-data.org/v1/competitions/448/leagueTable > ./_data/el2-201718-standings.json
curl -H 'X-Auth-Token: 591024a7b9c74f66b6a079e9d34a0f04' -X GET http://api.football-data.org/v1/competitions/448/fixtures > ./_data/el2-201718-fixtures.json
curl -H 'X-Auth-Token: 591024a7b9c74f66b6a079e9d34a0f04' -X GET http://api.football-data.org/v1/competitions/448/teams > ./_data/el2-201718-teams.json
curl -H 'X-Auth-Token: 591024a7b9c74f66b6a079e9d34a0f04' -X GET http://api.football-data.org/v1/competitions/450/leagueTable > ./_data/fl1-201718-standings.json
curl -H 'X-Auth-Token: 591024a7b9c74f66b6a079e9d34a0f04' -X GET http://api.football-data.org/v1/competitions/450/fixtures > ./_data/fl1-201718-fixtures.json
curl -H 'X-Auth-Token: 591024a7b9c74f66b6a079e9d34a0f04' -X GET http://api.football-data.org/v1/competitions/450/teams > ./_data/fl1-201718-teams.json
curl -H 'X-Auth-Token: 591024a7b9c74f66b6a079e9d34a0f04' -X GET http://api.football-data.org/v1/competitions/451/leagueTable > ./_data/fl2-201718-standings.json
curl -H 'X-Auth-Token: 591024a7b9c74f66b6a079e9d34a0f04' -X GET http://api.football-data.org/v1/competitions/451/fixtures > ./_data/fl2-201718-fixtures.json
curl -H 'X-Auth-Token: 591024a7b9c74f66b6a079e9d34a0f04' -X GET http://api.football-data.org/v1/competitions/451/teams > ./_data/fl2-201718-teams.json
