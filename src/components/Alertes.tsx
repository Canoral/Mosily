import { IAlerts } from "../@types/alertes";

export default function Alertes({ alerts }: { alerts: IAlerts[] }) {
  console.log("alerts :", alerts);
  return (
    <div className="alerts">
      <h1 className="text-lg font-bold text-center mb-5">Alertes !</h1>
      <table className="table">
        <tbody>
          {alerts.map((alert) => (
            <tr key={alert.id}>
              <th>{alert.id}</th>
              <td>{alert.alert_text}</td>
              <td>{alert.alert_formula}</td>
              {alert.accountsAlerts.length > 0 &&
                alert.accountsAlerts[0].status === "New" && (
                  <td className="font-bold badge-primary text-center">
                    {alert.accountsAlerts[0].status}
                  </td>
                )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
