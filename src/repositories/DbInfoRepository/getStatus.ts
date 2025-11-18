import { Prisma } from "../../../generated/prisma/client";
import { prismaClient } from "../../../prisma/prismaClient";

export const getStatus = async () => {
  await prismaClient.$connect();
  const status = (await prismaClient.$queryRaw(
    Prisma.sql`
    SELECT
        (SELECT setting FROM pg_settings WHERE name = 'server_version') AS version,
        (SELECT setting::int FROM pg_settings WHERE name = 'max_connections') AS max_connections,
        (SELECT count(*)::int FROM pg_stat_activity) AS opened_connections;`,
  )) as [
    {
      version: string;
      max_connections: number;
      opened_connections: number;
    },
  ];

  await prismaClient.$disconnect();

  return status[0];
};
