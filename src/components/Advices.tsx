import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch } from "../../commons/redux";
import { IAdvices } from "../@types/adives";
import { deleteAdvice } from "../../redux/reducers/advices";

export default function Advices({ advices }: { advices: IAdvices[] }) {
  const dispatch = useAppDispatch();

  // Vérifier s'il y a des alertes "New"
  const hasNewAlerts = advices.some(
    (advice) => advice.accountsAdvice[0].status === "New"
  );

  return (
    <section className="cards w-[90%] m-auto">
      <h1 className="text-5xl font-bold text-center mt-10 text-primary">
        CONSEILS
      </h1>
      <div className="grid grid-cols-2 gap-5 justify-items-center mt-5">
        {/* Mapping through alerts */}
        {hasNewAlerts ? (
          advices.map((advice) =>
            advice.accountsAdvice[0].status === "New" ? (
              <div className="card w-[80%] shadow-xl" key={advice.id}>
                <div className="card-body justify-between">
                  <div className="badge badge-secondary">
                    {advice.accountsAdvice[0].status}
                  </div>
                  <h2 className="text-md font-bold">{advice.advice_text}</h2>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-sm mr-auto">
                      Solution
                    </button>
                    {/* Dispatching deleteadvice action */}
                    <button
                      className="ml-auto"
                      onClick={() => {
                        dispatch(deleteAdvice(advice.id));
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
