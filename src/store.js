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
            sport: "Soccer", 
            league: "Premier League",
            matchId: "c2a78009-f79f-43c3-86f1-3a3ff1f71160",
            "start_time": new Date("2020-03-10T12:00:00Z"),
            "home_team": "Chelsea",
            "away_team": "Leicester City",
            "home_odd": 1.9,
            "away_odd": 1.9,
          },
          {
            matchId: "81de1c2f-b142-4cd8-9254-a4a47609c5ed",
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
              "matchId": "a0979c77-e196-4650-b1e5-5b48a8dc1998",
              "start_time": new Date("2020-03-10T12:00:00Z"),
              "home_team": "Broncos",
              "away_team": "Bills",
              "home_odd": 1.9,
              "away_odd": 1.9,
            },
            {
              "matchId": "ca4233f5-8dbd-44e1-9d97-74992891d76a",
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
          "matchId": "89ccd4cd-483a-466d-be05-5dd6a80edd51",
          "start_time": new Date("2020-03-10T12:00:00Z"),
          "home_team": "Red Sox",
          "away_team": "Indians",
          "home_odd": 1.9,
          "away_odd": 1.9,
        },
        {
          "matchId": "305ad34d-0e93-41c1-a909-42415966638d",
          "start_time": new Date("2020-03-10T12:00:00Z"),
          "home_team": "Yankees",
          "away_team": "Twins",
          "home_odd": 1.83,
          "away_odd": 2.0,
        },
      ],
    },
    "Basketball": {
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
          matchId: "dcc7ac4d-1b0c-4c21-9211-56a37c0d5bab",
          "start_time": new Date("2020-03-10T12:00:00Z"),
          "home_team": "Pacers",
          "away_team": "Heat",
          "home_odd": 1.9,
          "away_odd": 1.9,
        },
        {
          matchId: "ad0439c5-a6a7-401a-a77a-ab1a76df2149",
          "start_time": new Date("2020-03-10T12:00:00Z"),
          "home_team": "76ers",
          "away_team": "Nets",
          "home_odd": 1.83,
          "away_odd": 2.0,
        },
      ],
    },
    "Ice Hockey": {
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
        matchId: "bf23fa06-04d2-4ba9-8d6e-df88b9a8f1b0",
        "start_time": new Date("2020-03-10T12:00:00Z"),
        "home_team": "Penguins",
        "away_team": "Maple Leafs",
        "home_odd": 1.9,
        "away_odd": 1.9,
      },
      {
        sport: "Ice Hockey", 
          league: "NHL",
          matchId: "32419935-84bb-4787-8ce7-3435f13f0fdc",
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
    fav: 1.36,
    underDog: 3
  },
  {
    fav: 1.33,
    underDog: 3.3
  },
  {
    fav: 1.3,
    underDog: 3.25
  },
  {
    fav: 1.29,
    underDog: 3.5
  },
  {
    fav: 1.25,
    underDog: 3.75
  },
  {
    fav: 1.22,
    underDog: 4.0
  },
  {
    fav: 1.2,
    underDog: 4.33
  },
  {
    fav: 1.18,
    underDog: 4.5
  },
  {
    fav: 1.17,
    underDog: 5.0
  },
  {
    fav: 1.14,
    underDog: 5.5
  },
  {
    fav: 1.13,
    underDog: 6
  },
  {
    fav: 1.11,
    underDog: 6.5
  },
  {
    fav: 1.10,
    underDog: 7.0
  },
  {
    fav: 1.08,
    underDog: 8.0
  },
  {
    fav: 1.07,
    underDog: 9.0
  },
  {
    fav: 1.06,
    underDog: 10.0
  },
  {
    fav: 1.05,
    underDog: 11.0
  },
  {
    fav: 1.04,
    underDog: 13.0
  },
  {
    fav: 1.03,
    underDog: 17.0
  },
  {
    fav: 1.02,
    underDog: 21.0
  },
  {
    fav: 1.01,
    underDog: 26.0
  },
]

export const matches = {
  "Soccer": {
    leagues: {
      "Premier League": [
        {
          sport: "Soccer", 
          league: "Premier League",
          matchId: "c2a78009-f79f-43c3-86f1-3a3ff1f71160",
          "start_time": new Date("2020-03-10T12:00:00Z"),
          "home_team": "Chelsea",
          "away_team": "Leicester City",
          "home_odd": 1.9,
          "away_odd": 1.9,
        },
        {
          sport: "Soccer", 
          league: "Premier League",
          matchId: "81de1c2f-b142-4cd8-9254-a4a47609c5ed",
          "start_time": new Date("2020-03-10T12:00:00Z"),
          "home_team": "Tottenham",
          "away_team": "Burnley",
          "home_odd": 1.83,
          "away_odd": 2.0,
        },
      ]
    }, 
  },
  "American Football": {
    leagues: {
      "NFL": [
        {
          sport: "American Football", 
          league: "NFL",
          matchId: "a0979c77-e196-4650-b1e5-5b48a8dc1998",
          "start_time": new Date("2020-03-10T12:00:00Z"),
          "home_team": "Broncos",
          "away_team": "Bills",
          "home_odd": 1.9,
          "away_odd": 1.9,
        },
        {
          sport: "American Football", 
          league: "NFL",
          matchId: "b53386e5-94e7-48f9-bbcf-bab6f26b95cc",
          "start_time": new Date("2020-03-10T12:00:00Z"),
          "home_team": "Patriots",
          "away_team": "Chiefs",
          "home_odd": 1.83,
          "away_odd": 2.0,
        },
      ],
    }, 
  }, 
  "Baseball": {
    leagues: {
      "MLB": [
        {
          sport: "Baseball", 
          league: "MLB",
          matchId: "23306082-04dd-437d-a39e-6e18269116b0",
          "start_time": new Date("2020-03-10T12:00:00Z"),
          "home_team": "Red Sox",
          "away_team": "Indians",
          "home_odd": 1.9,
          "away_odd": 1.9,
        },
        {
          sport: "Baseball", 
          league: "MLB",
          matchId: "d4a458a3-fece-41b1-afe7-3354bed045b8",
          "start_time": new Date("2020-03-10T12:00:00Z"),
          "home_team": "Yankees",
          "away_team": "Twins",
          "home_odd": 1.83,
          "away_odd": 2.0,
        },
      ]
    }, 
  }, 
  "Basketball": {
    leagues: {
      "NBA": [
        {
          sport: "Basketball", 
          league: "NBA",
          matchId: "a179b1c4-3049-4fb6-bfcf-a576223c03f2",
          "start_time": new Date("2020-03-10T12:00:00Z"),
          "home_team": "Pacers",
          "away_team": "Heat",
          "home_odd": 1.9,
          "away_odd": 1.9,
        },
        {
          sport: "Basketball", 
          league: "NBA",
          matchId: "4199a64b-bd3f-4728-8a19-83582f833a76",
          "start_time": new Date("2020-03-10T12:00:00Z"),
          "home_team": "76ers",
          "away_team": "Nets",
          "home_odd": 1.83,
          "away_odd": 2.0,
        },
      ]
    }, 
  }, 
  "Ice Hockey": {
    leagues: {
      "NHL": [
        {
          sport: "Ice Hockey", 
          league: "NHL",
          matchId: "bf23fa06-04d2-4ba9-8d6e-df88b9a8f1b0",
          "start_time": new Date("2020-03-10T12:00:00Z"),
          "home_team": "Penguins",
          "away_team": "Maple Leafs",
          "home_odd": 1.9,
          "away_odd": 1.9,
        },
        {
          sport: "Ice Hockey", 
          league: "NHL",
          matchId: "32419935-84bb-4787-8ce7-3435f13f0fdc",
          "start_time": new Date("2020-03-10T12:00:00Z"),
          "home_team": "Lightning",
          "away_team": "Hurricanes",
          "home_odd": 1.83,
          "away_odd": 2.0,
        },
      ]
    }, 
  }, 

}