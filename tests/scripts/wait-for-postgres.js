import { exec } from "node:child_process";

process.stdout.write("\n\n🔴 Aguardando conexão com Postgres.");

function checkPostgres() {
  exec(
    "docker exec db-honorio-acai pg_isready --host localhost",
    (error, stdout) => {
      if (stdout.search("accepting connections") === -1) {
        process.stdout.write(".");
        checkPostgres();
        return;
      }

      console.log("\n🟢 Postgres está aceitando conexões\n");
    },
  );
}

checkPostgres();
