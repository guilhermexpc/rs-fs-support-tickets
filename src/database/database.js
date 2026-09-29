import fs from "node:fs/promises";

// get the path to the database.json file
const DATABASE_PATH = new URL("./database.json", import.meta.url);

export class Database {
  #database = {};

  static Tables = Object.freeze({
    TICKETS: "tickets"
  });

  static TicketStatus = Object.freeze({
    OPEN: "open",
    CLOSED: "closed"
  });

  constructor() {
    fs.readFile(DATABASE_PATH, "utf-8")
      .then((data) => {
        this.#database = JSON.parse(data);
      })
      .catch((error) => {
        this.#persist();
      });
  }

  #persist() {
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database));
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }

    this.#persist();
  }

  select(table) {
    let data = this.#database[table] ?? [];
    return data;
  }
}
