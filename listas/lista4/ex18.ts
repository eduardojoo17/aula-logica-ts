let emails18: string[] = ["a@x.com", "b@x.com", "a@x.com", "c@x.com", "b@x.com"];
let unicos18: string[] = [...new Set(emails18)];

alert(`${unicos18.join(", ")} (${unicos18.length} de ${emails18.length})`);
