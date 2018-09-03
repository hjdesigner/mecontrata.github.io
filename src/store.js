import { create } from "reworm";
import { getpeople } from "./client";

export const store = create({
  loading: true,
  people: []
});

export const setLoading = loading => store.set({ loading });

export const getPeople = () => {
  getpeople()
    .then(response => {
      setLoading(false);
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
      return people;
    })
    .then(people => {
      store.set({
        people
      });
    })
    .catch(error => console.log(error));
};
