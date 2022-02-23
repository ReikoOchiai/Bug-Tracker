import bugModel from "../Modules/bugModel";

export function retrieveBugs() {
  let data = [];
  data.push(
    new bugModel({
      id: 1234,
      name: "Crash on load",
      details: "Crashes after 3 seconds",
      steps: "Open application and it will crash",
      version: "V2.0",
      assigned: "Ryan Baasley",
      creator: "John Bloggs",
      priority: 1,
      time: "23:38",
    })
  );
  data.push(
    new bugModel({
      id: 12345,
      name: "Wont on load",
      details: "Crashes after 3 seconds",
      steps: "Open application and it will crash",
      version: "V2.0",
      assigned: "Ryan Baasley",
      creator: "John Bloggs",
      priority: 3,
      time: "23:38",
    })
  );

  let sorted = data.sort((a, b) => {
    return a.priority - b.priority;
  });
  return sorted;
}
