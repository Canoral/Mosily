import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { IAlerts } from "../@types/alertes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Alertes({ alerts }: { alerts: IAlerts[] }) {
  return (
    <section className="cards">
      <h1 className="text-lg font-bold text-center pt-2">Alertes !</h1>
      <div className="flex gap-2 tablet:flex-col tablet:items-center">
        {alerts.map((alert) => (
          <div className="card w-2/3 bg-base-100 shadow-xl" key={alert.id}>
            <div className="card-body">
              {alert.accountsAlerts[0] &&
              alert.accountsAlerts[0].status === "New" ? (
                <div className="badge badge-secondary">NEW</div>
              ) : (
                <div className="badge badge-neutral">OLD</div>
              )}
              <h2 className="text-md font-bold">{alert.alert_text}</h2>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm mr-auto">
                  Solution
                </button>
                <button onClick={() => {}}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
