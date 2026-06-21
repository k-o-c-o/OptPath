const graph = 
{
    "A": [
        {
            "node": "B",
            "weight": 2
        },
        {
            "node": "G",
            "weight": 5
        },
        {
            "node": "H",
            "weight": 6
        }
    ],
    "B": [
        {
            "node": "A",
            "weight": 2
        },
        {
            "node": "C",
            "weight": 4
        },
        {
            "node": "H",
            "weight": 4
        },
        {
            "node": "I",
            "weight": 6
        }
    ],
    "C": [
        {
            "node": "B",
            "weight": 4
        },
        {
            "node": "D",
            "weight": 4
        },
        {
            "node": "I",
            "weight": 5
        },
        {
            "node": "J",
            "weight": 8
        }
    ],
    "D": [
        {
            "node": "C",
            "weight": 4
        },
        {
            "node": "E",
            "weight": 3
        },
        {
            "node": "J",
            "weight": 5
        },
        {
            "node": "K",
            "weight": 7
        }
    ],
    "E": [
        {
            "node": "D",
            "weight": 3
        },
        {
            "node": "F",
            "weight": 2
        },
        {
            "node": "K",
            "weight": 4
        },
        {
            "node": "L",
            "weight": 6
        }
    ],
    "F": [
        {
            "node": "E",
            "weight": 2
        },
        {
            "node": "L",
            "weight": 3
        }
    ],
    "G": [
        {
            "node": "H",
            "weight": 2
        },
        {
            "node": "A",
            "weight": 5
        },
        {
            "node": "M",
            "weight": 3
        },
        {
            "node": "N",
            "weight": 7
        }
    ],
    "H": [
        {
            "node": "G",
            "weight": 2
        },
        {
            "node": "I",
            "weight": 2
        },
        {
            "node": "B",
            "weight": 4
        },
        {
            "node": "N",
            "weight": 5
        },
        {
            "node": "A",
            "weight": 6
        },
        {
            "node": "O",
            "weight": 7
        }
    ],
    "I": [
        {
            "node": "H",
            "weight": 2
        },
        {
            "node": "J",
            "weight": 3
        },
        {
            "node": "C",
            "weight": 5
        },
        {
            "node": "O",
            "weight": 5
        },
        {
            "node": "B",
            "weight": 6
        },
        {
            "node": "P",
            "weight": 7
        }
    ],
    "J": [
        {
            "node": "I",
            "weight": 3
        },
        {
            "node": "K",
            "weight": 4
        },
        {
            "node": "D",
            "weight": 5
        },
        {
            "node": "P",
            "weight": 4
        },
        {
            "node": "C",
            "weight": 8
        },
        {
            "node": "Q",
            "weight": 7
        }
    ],
    "K": [
        {
            "node": "J",
            "weight": 4
        },
        {
            "node": "L",
            "weight": 4
        },
        {
            "node": "E",
            "weight": 4
        },
        {
            "node": "Q",
            "weight": 5
        },
        {
            "node": "D",
            "weight": 7
        },
        {
            "node": "R",
            "weight": 7
        }
    ],
    "L": [
        {
            "node": "K",
            "weight": 4
        },
        {
            "node": "F",
            "weight": 3
        },
        {
            "node": "R",
            "weight": 3
        },
        {
            "node": "E",
            "weight": 6
        }
    ],
    "M": [
        {
            "node": "N",
            "weight": 2
        },
        {
            "node": "G",
            "weight": 3
        },
        {
            "node": "S",
            "weight": 3
        },
        {
            "node": "T",
            "weight": 8
        }
    ],
    "N": [
        {
            "node": "M",
            "weight": 2
        },
        {
            "node": "O",
            "weight": 3
        },
        {
            "node": "H",
            "weight": 5
        },
        {
            "node": "T",
            "weight": 3
        },
        {
            "node": "G",
            "weight": 7
        },
        {
            "node": "U",
            "weight": 8
        }
    ],
    "O": [
        {
            "node": "N",
            "weight": 3
        },
        {
            "node": "P",
            "weight": 4
        },
        {
            "node": "I",
            "weight": 5
        },
        {
            "node": "U",
            "weight": 3
        },
        {
            "node": "H",
            "weight": 7
        },
        {
            "node": "V",
            "weight": 8
        }
    ],
    "P": [
        {
            "node": "O",
            "weight": 4
        },
        {
            "node": "Q",
            "weight": 2
        },
        {
            "node": "J",
            "weight": 4
        },
        {
            "node": "V",
            "weight": 3
        },
        {
            "node": "I",
            "weight": 7
        },
        {
            "node": "W",
            "weight": 7
        }
    ],
    "Q": [
        {
            "node": "P",
            "weight": 2
        },
        {
            "node": "R",
            "weight": 3
        },
        {
            "node": "K",
            "weight": 5
        },
        {
            "node": "W",
            "weight": 3
        },
        {
            "node": "J",
            "weight": 7
        },
        {
            "node": "X",
            "weight": 8
        }
    ],
    "R": [
        {
            "node": "Q",
            "weight": 3
        },
        {
            "node": "L",
            "weight": 3
        },
        {
            "node": "X",
            "weight": 4
        },
        {
            "node": "K",
            "weight": 7
        }
    ],
    "S": [
        {
            "node": "T",
            "weight": 2
        },
        {
            "node": "M",
            "weight": 3
        }
    ],
    "T": [
        {
            "node": "S",
            "weight": 2
        },
        {
            "node": "U",
            "weight": 2
        },
        {
            "node": "N",
            "weight": 3
        },
        {
            "node": "M",
            "weight": 8
        }
    ],
    "U": [
        {
            "node": "T",
            "weight": 2
        },
        {
            "node": "V",
            "weight": 4
        },
        {
            "node": "O",
            "weight": 3
        },
        {
            "node": "N",
            "weight": 8
        }
    ],
    "V": [
        {
            "node": "U",
            "weight": 4
        },
        {
            "node": "W",
            "weight": 2
        },
        {
            "node": "P",
            "weight": 3
        },
        {
            "node": "O",
            "weight": 8
        }
    ],
    "W": [
        {
            "node": "V",
            "weight": 2
        },
        {
            "node": "X",
            "weight": 4
        },
        {
            "node": "Q",
            "weight": 3
        },
        {
            "node": "P",
            "weight": 7
        }
    ],
    "X": [
        {
            "node": "W",
            "weight": 4
        },
        {
            "node": "R",
            "weight": 4
        },
        {
            "node": "Q",
            "weight": 8
        }
    ]
};

module.exports = graph;