import React from 'react'
import { useState } from 'react';
export default function Fourteen() {
  const peopleNames = [
    "John", "Alice", "Michael", "Emily", "Jacob", "Sophia", "William", "Emma", "Joshua", "Olivia",
    "Matthew", "Ava", "Daniel", "Isabella", "James", "Mia", "David", "Charlotte", "Joseph", "Amelia",
    "Benjamin", "Harper", "Andrew", "Evelyn", "Logan", "Abigail", "Samuel", "Elizabeth", "Ryan", "Sofia",
    "Nathan", "Ella", "Jonathan", "Grace", "Ethan", "Avery", "Christian", "Chloe", "Gabriel", "Eleanor",
    "Dylan", "Lily", "Jackson", "Hannah", "Caleb", "Madison", "Lucas", "Natalie", "Isaac", "Scarlett",
    "Owen", "Layla", "Luke", "Victoria", "Jack", "Penelope", "Isaiah", "Lillian", "Henry", "Addison",
    "Liam", "Aubrey", "Sebastian", "Zoey", "Wyatt", "Stella", "Hunter", "Aria", "Carter", "Lillian",
    "Jayden", "Nora", "Julian", "Hazel", "Elijah", "Brooklyn", "Levi", "Samantha", "Nicholas", "Audrey",
    "Lincoln", "Claire", "Eli", "Skylar", "Brayden", "Lucy", "Michael", "Paisley", "Alexander", "Anna",
    "Carson", "Leah", "Connor", "Bella", "William", "Maya", "Mateo", "Zoe"
];
  const [search , setSearch] = useState("");
  const people = peopleNames.filter((peopleName)=>peopleName.toLowerCase().includes(search.toLowerCase()));
  return (
    <div>
      <input type="text" placeholder="Search"  onChange={(e)=> setSearch(e.target.value)}/>
      <ul>
        {
     people.map((peopleName, index)=>(<li key={index}>{peopleName}</li>))
        }
      </ul>
    </div>
  )
}
