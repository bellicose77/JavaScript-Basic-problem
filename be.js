const nestedObj = {
    name: { first: "Robert", middle: "", last: "Smith" },
    age: 25,
    DOB: "-",
    hobbies: ["running", "coding", "-"],
    education: { highschool: "N/A", college: "Yale" },
  };
  
  const removeFalsyValue = (obj) => {
    Object.keys(obj).forEach((key, index) => {
      if (obj[key] && typeof obj[key] === "object") {
        removeFalsyValue(obj[key]);
      }
      if (obj[key] === "-" || obj[key] === "" || obj[key] === "N/A") {
        delete obj[key];
      }
      if (Array.isArray(obj[key])) {
        const value = obj[key].filter((item) => item !== "h");
        obj[key] = value;
      }
    });
    return obj;
  };
  
  const updatedObj = removeFalsyValue(nestedObj);
  console.log(nestedObj);