import { DbInfoRepository } from "@/repositories/DbInfoRepository";

export const getHealthCheckData = async () => {
  const status = await DbInfoRepository.getStatus();

  return { ...status, version: Number(status.version) };
};
