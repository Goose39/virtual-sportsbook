export const sportsData = {
  "Soccer": {
    leagues: {
      "Premier League": {
        teams: {
          "Liverpool": {
            "id": 1,
            "ranking": 1,
          },
          "Man. City": {
            "id": 2,
            "ranking": 2,
          },
          "Leicester City": {
            "id": 3,
            "ranking": 3,
          },
          "Chelsea": {
            "id": 4,
            "ranking": 4,
          },
          "Man United": {
            "id": 5,
            "ranking": 5,
          },
          "Wolves": {
            "id": 6,
            "ranking": 6,
          },
          "Sheffield United": {
            "id": 7,
            "ranking": 7,
          },
          "Tottenham": {
            "id": 8,
            "ranking": 8,
          },
          "Arsenal": {
            "id": 9,
            "ranking": 9,
          },
          "Burnley": {
            "id": 10,
            "ranking": 10,
          },
        },
        "matches": [
          {
            "start_time": new Date("2020-03-10T12:00:00Z"),
            "home_team": "Chelsea",
            "away_team": "Leicester City",
            "home_odd": 1.9,
            "away_odd": 1.9,
          },
          {
            "start_time": new Date("2020-03-10T12:00:00Z"),
            "home_team": "Tottenham",
            "away_team": "Burnley",
            "home_odd": 1.83,
            "away_odd": 2.0,
          },
        ],
      },
    },
  },
  "American Football": {
    leagues: {
      "NFL": {
        teams: {
          "Patriots": {
            "id": 1,
            "ranking": 1,
          },
          "Bills": {
            "id": 2,
            "ranking": 2,
          },
          "Jets": {
            "id": 3,
            "ranking": 3,
          },
          "Dolphins": {
            "id": 4,
            "ranking": 4,
          },
          "Chiefs": {
            "id": 5,
            "ranking": 1,
          },
          "Broncos": {
            "id": 6,
            "ranking": 2,
          },
          "Chargers": {
            "id": 7,
            "ranking": 3,
          },
          "Raiders": {
            "id": 8,
            "ranking": 4,
          },
          "Ravens": {
            "id": 9,
            "ranking": 2,
          },
          "Texans": {
            "id": 10,
            "ranking": 2,
          },
        },
          matches: [
            {
              "start_time": new Date("2020-03-10T12:00:00Z"),
              "home_team": "Broncos",
              "away_team": "Bills",
              "home_odd": 1.9,
              "away_odd": 1.9,
            },
            {
              "start_time": new Date("2020-03-10T12:00:00Z"),
              "home_team": "Patriots",
              "away_team": "Chiefs",
              "home_odd": 1.83,
              "away_odd": 2.0,
            },
          ],
        },
      },
    },
    "Baseball": {
      leagues: {
        "MLB": {
          teams: {
            "Yankees": {
              "id": 1,
              "ranking": 1,
            },
            "Rays": {
              "id": 2,
              "ranking": 2,
            },
            "Red Sox": {
              "id": 3,
              "ranking": 3,
            },
            "Blue Jays": {
              "id": 4,
              "ranking": 4,
            },
            "Orioles": {
              "id": 5,
              "ranking": 5,
            },
            "Twins": {
              "id": 6,
              "ranking": 1,
            },
            "Indians": {
              "id": 7,
              "ranking": 2,
            },
            "White Sox": {
              "id": 8,
              "ranking": 3,
            },
            "Royals": {
              "id": 9,
              "ranking": 4,
            },
            "Tigers": {
              "id": 10,
              "ranking": 5,
            },
          },
        },
      },
      matches: [
        {
          "start_time": new Date("2020-03-10T12:00:00Z"),
          "home_team": "Red Sox",
          "away_team": "Indians",
          "home_odd": 1.9,
          "away_odd": 1.9,
        },
        {
          "start_time": new Date("2020-03-10T12:00:00Z"),
          "home_team": "Yankees",
          "away_team": "Twins",
          "home_odd": 1.83,
          "away_odd": 2.0,
        },
      ],
    },
    basketball: {
      leagues: {
        "NBA": {
          teams: {
            "Bucks": {
              "id": 1,
              "ranking": 1,
            },
            "Raptors": {
              "id": 2,
              "ranking": 2,
            },
            "Celtics": {
              "id": 3,
              "ranking": 3,
            },
            "Heat": {
              "id": 4,
              "ranking": 4,
            },
            "Pacers": {
              "id": 5,
              "ranking": 1,
            },
            "76ers": {
              "id": 6,
              "ranking": 2,
            },
            "Nets": {
              "id": 7,
              "ranking": 3,
            },
            "Magic": {
              "id": 8,
              "ranking": 4,
            },
            "Wizards": {
              "id": 9,
              "ranking": 2,
            },
            "Hornets": {
              "id": 10,
              "ranking": 2,
            },
          },
        },
      },
      matches: [
        {
          "start_time": new Date("2020-03-10T12:00:00Z"),
          "home_team": "Pacers",
          "away_team": "Heat",
          "home_odd": 1.9,
          "away_odd": 1.9,
        },
        {
          "start_time": new Date("2020-03-10T12:00:00Z"),
          "home_team": "76ers",
          "away_team": "Nets",
          "home_odd": 1.83,
          "away_odd": 2.0,
        },
      ],
    },
    ice_hockey: {
      leagues: {
        "NHL": {
          teams: {
            "Bruins": {
              "id": 1,
              "ranking": 1,
            },
            "Lightning": {
              "id": 2,
              "ranking": 2,
            },
            "Maple Leafs": {
              "id": 3,
              "ranking": 3,
            },
            "Panthers": {
              "id": 4,
              "ranking": 4,
            },
            "Canadiens": {
              "id": 5,
              "ranking": 1,
            },
            "Capitals": {
              "id": 6,
              "ranking": 1,
            },
            "Flyers": {
              "id": 7,
              "ranking": 2,
            },
            "Penguins": {
              "id": 8,
              "ranking": 3,
            },
            "Hurricanes": {
              "id": 9,
              "ranking": 4,
            },
            "Blue Jackets": {
              "id": 10,
              "ranking": 5,
            },
          },
        },
      },
    matches: [
      {
        "start_time": new Date("2020-03-10T12:00:00Z"),
        "home_team": "Penguins",
        "away_team": "Maple Leafs",
        "home_odd": 1.9,
        "away_odd": 1.9,
      },
      {
        "start_time": new Date("2020-03-10T12:00:00Z"),
        "home_team": "Lightning",
        "away_team": "Hurricanes",
        "home_odd": 1.83,
        "away_odd": 2.0,
      },
    ],
  }
}

export const oddsPairs = [
  {
    fav: 1.9,
    underDog: 1.9
  },
  {
    fav: 1.8,
    underDog: 1.9
  },
  {
    fav: 1.73,
    underDog: 2
  },
  {
    fav: 1.67,
    underDog: 2.1
  },
  {
    fav: 1.62,
    underDog: 2.2
  },
  {
    fav: 1.57,
    underDog: 2.25
  },
  {
    fav: 1.53,
    underDog: 2.38
  },
  {
    fav: 1.5,
    underDog: 2.5
  },
  {
    fav: 1.44,
    underDog: 2.63
  },
  {
    fav: 1.4,
    underDog: 2.75
  },
  {
    fav: 1.33,
    underDog: 3
  },
]

