import { DbInfoServices } from "@/services/DbInfoServices";

import { describe, expect, test } from "vitest";

describe("DbInfoServices", () => {
  describe("getHealthCheckData", () => {
    test("search data", async () => {
      const status = await DbInfoServices.getHealthCheckData();
      expect(status).toEqual({
        max_connections: 100,
        opened_connections: 9,
        version: 18.1,
      });
    });
  });
});
