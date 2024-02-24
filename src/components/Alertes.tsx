import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { IAlerts } from "../@types/content";
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
    <section className="cards w-[90%] m-auto">
      <h1 className="text-5xl font-bold text-center mt-10 text-accent">
        ALERTES
      </h1>
      <div className="grid grid-cols-2 gap-5 justify-items-center mt-5">
        {/* Mapping through alerts */}
        {hasNewAlerts ? (
          alerts.map((alert) =>
            alert.accountsAlerts[0].status === "New" ? (
              <div className="card w-[80%] shadow-xl" key={alert.id}>
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
                      className="ml-auto"
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
          <p className="col-span-2 mt-5 text-center">
            Vous n'avez rien d'urgent
          </p>
        )}
      </div>
    </section>
  );
}
