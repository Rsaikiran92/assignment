const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];

console.log(people.map((i)=>(`${i.name} lives in ${i.address.city} on ${i.address.street.name}`)));