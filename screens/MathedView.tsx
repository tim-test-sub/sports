import React from 'react';
import { Bracket } from '../React-native-tournament-brackets/React-bracket-native.js';

const matches = [{
    "title": "Round 1",
    "seeds": [
        {
            "id": 69524817,
            "teams": [
                {
                    "id": 15325956,
                    "name": "Archnemesis"
                },
                {
                    "id": 15287766,
                    "name": "GGCT | HarmShroom"
                }
            ],
            "winnerId": 15325956
        }
    ]},
    {
        "title": "Round 2",
        "seeds": [
            {
                "id": 69524824,
                "teams": [
                    {
                        "id": 15315304,
                        "name": "Runitbackeddie"
                    },
                    {
                        "id": 15325956,
                        "name": "Archnemesis"
                    }
                ],
                "winnerId": 15315304
            },
            {
                "id": 69524825,
                "teams": [
                    {
                        "id": 15165926,
                        "name": "Deviant"
                    },
                    {
                        "id": 15324680,
                        "name": "GGCT | Burningbunhole"
                    }
                ],
                "winnerId": 15324680
            },
            {
                "id": 69524826,
                "teams": [
                    {
                        "id": 15153710,
                        "name": "ForGreatEvil"
                    },
                    {
                        "id": 15287613,
                        "name": "GGCT | Robbjam"
                    }
                ],
                "winnerId": 15153710
            },
            {
                "id": 69524827,
                "teams": [
                    {
                        "id": 15326313,
                        "name": "morg"
                    },
                    {
                        "id": 15324688,
                        "name": "GGCT Kenny"
                    }
                ],
                "winnerId": 15326313
            }
        ]
    },
    {
        "title": "Round 3",
        "seeds": [
            {
                "id": 69524828,
                "teams": [
                    {
                        "id": 15315304,
                        "name": "Runitbackeddie"
                    },
                    {
                        "id": 15324680,
                        "name": "GGCT | Burningbunhole"
                    }
                ],
                "winnerId": 15315304
            },
            {
                "id": 69524829,
                "teams": [
                    {
                        "id": 15153710,
                        "name": "ForGreatEvil"
                    },
                    {
                        "id": 15326313,
                        "name": "morg"
                    }
                ],
                "winnerId": 15153710
            }
        ]
    },
    {
        "title": "Round 4",
        "seeds": [
            {
                "id": 69524830,
                "teams": [
                    {
                        "id": 15315304,
                        "name": "Runitbackeddie"
                    },
                    {
                        "id": 15153710,
                        "name": "ForGreatEvil"
                    }
                ],
                "winnerId": 15153710
            }
        ]
    },
    {
        "title": "Round 5",
        "seeds": [
            {
                "id": 69524831,
                "teams": [
                    {
                        "id": 15153710,
                        "name": "ForGreatEvil"
                    },
                    {
                        "id": 15315304,
                        "name": "Runitbackeddie"
                    }
                ],
                "winnerId": 15315304
            }
        ]
    }
];

<Bracket rounds={matches} />

