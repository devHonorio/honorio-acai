import { KeyValue } from "@/components/KeyValue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DbInfoServices } from "@/services/DbInfoServices";

export default async function Status() {
  const status = await DbInfoServices.getHealthCheckData();

  return (
    <div className="flex items-center justify-center h-svh">
      <Card>
        <CardHeader className="flex">
          <div className="h-2 w-2 rounded-full bg-green-400 shadow-xl" />
          <CardTitle>Status</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col divide-y">
          <KeyValue keyName="Versão" value={status.version} />
          <KeyValue keyName="Conexões máximas" value={status.max_connections} />
          <KeyValue
            keyName="Conexões abertas"
            value={status.opened_connections}
          />
        </CardContent>
      </Card>
    </div>
  );
}
