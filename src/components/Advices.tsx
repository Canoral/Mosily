import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch } from "../../commons/redux";
import { IAdvices } from "../@types/adives";
import { deleteAdvice } from "../../redux/reducers/advices";

export default function Advices({ advices }: { advices: IAdvices[] }) {
  const dispatch = useAppDispatch();
  const hasNewAdvices = advices.some(
    (advice) => advice.accountsAdvice[0].status === "New"
  );

  return (
    <section className="advices mt-5">
      <h1 className="text-lg font-bold text-center pt-2">Conseils !</h1>
      <div className="flex gap-2 justify-center tablet:flex-col tablet:items-center">
        {/* Mapping through alerts */}
        {hasNewAdvices ? (
          advices.map((advice) =>
            advice.accountsAdvice[0].status === "New" ? (
              <div
                className="card w-full bg-base-100 shadow-xl"
                key={advice.id}
              >
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
                      className="mobile:m-auto"
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
          <p className="mt-5">Je n'ai pas de advices à vous proposer</p>
        )}
      </div>
    </section>
  );
}
