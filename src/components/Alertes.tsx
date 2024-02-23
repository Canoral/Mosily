import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { IAlerts } from "../@types/alertes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch } from "../../commons/redux";
import { deleteAlert } from "../../redux/reducers/alerts";

export default function Alertes({ alerts }: { alerts: IAlerts[] }) {
  const dispatch = useAppDispatch();

  // Vérifier s'il y a des alertes "New"
  const hasNewAlerts = alerts.some(
    (alert) => alert.accountsAlerts[0].status === "New"
  );

  return (
    <section className="cards">
      <h1 className="text-lg font-bold text-center pt-2">Alertes !</h1>
      <div className="flex gap-2 justify-center tablet:flex-col tablet:items-center">
        {/* Mapping through alerts */}
        {hasNewAlerts ? (
          alerts.map((alert) =>
            alert.accountsAlerts[0].status === "New" ? (
              <div className="card w-full bg-base-100 shadow-xl" key={alert.id}>
                <div className="card-body justify-between">
                  <div className="badge badge-secondary">
                    {alert.accountsAlerts[0].status}
                  </div>
                  <h2 className="text-md font-bold">{alert.alert_text}</h2>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-sm mr-auto">
                      Solution
                    </button>
                    {/* Dispatching deleteAlert action */}
                    <button
                      className="mobile:m-auto"
                      onClick={() => {
                        dispatch(deleteAlert(alert.id));
                      }}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </div>
                </div>
              </div>
            ) : null
          )
        ) : (
          <p className="mt-5">Vous n'avez rien d'urgent</p>
        )}
      </div>
    </section>
  );
}
