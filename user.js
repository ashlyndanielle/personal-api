var user = {
  name: "Ashlyn",
  location: "Provo",
  occupations: ['bartender', 'server', 'developer', 'unicorn'],
  hobbies: [
    {
      name: "running",
      type: "athletics"
    },
    {
      name: "painting",
      type: "arts"
    },
    {
      name: "yoga",
      type: "spirit"
    }
  ],
  family: [
    {
      name: "Kayla",
      relation: "sister",
      gender: "female"
    },
    {
      name: "Brandon",
      relation: "brother",
      gender: "male"
    },{
      name: "Narin",
      relation: "best friend",
      gender: "female"
    }
  ],
  restaurants: [
    {
      name: "vertical diner",
      type: "vegan",
      rating: 10
    },
    {
      name: "budz",
      type: "sandwiches",
      rating: 10
    },
    {
      name: "my own kitchen",
      type: "anything",
      rating: 1
    }
  ]
}


module.exports = user;