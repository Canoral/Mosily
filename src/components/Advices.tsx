import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { IAlerts } from "../@types/alertes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch } from "../../commons/redux";
import { deleteAlert } from "../../redux/reducers/alerts";

export default function Alertes({ alerts }: { alerts: IAlerts[] }) {
  const dispatch = useAppDispatch();

  return (
    <section className="advices">
      <h1 className="text-lg font-bold text-center pt-2">Alertes !</h1>
      <div className="flex gap-2 justify-center tablet:flex-col tablet:items-center">
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
                  Solution est par là !
                </button>
                <button
                  onClick={() => {
                    dispatch(deleteAlert(alert.id));
                  }}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
            </div>
          </div>
        ))}
        {alerts.length === 0 && (
          <p className="mt-5">Vous n'avez rien d'urgent</p>
        )}
      </div>
    </section>
  );
}
