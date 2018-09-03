import { getpeople } from "./client";

export const getPeople = () => {
  return new Promise((resolve, reject) => {
    getpeople()
      .then(response => {
        const rawIssues = response.data.repository.issues.edges;
        const rawPeople = rawIssues.map(issue => issue.node);
        const people = rawPeople
          .map(person => {
            const name = person.title.substring(
              person.title.lastIndexOf("]") + 1
            );
            const location = person.title.substring(
              person.title.indexOf("[") + 1,
              person.title.indexOf("]")
            );
            const username = person.author.login;
            const avatar = person.author.avatarUrl;

            return { name, location, username, avatar };
          })
          .filter(person => person);
        resolve(people);
      })
      .catch(error => reject(error));
  });
};
