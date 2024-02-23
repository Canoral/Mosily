import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch } from "../../commons/redux";
import { IAdvices } from "../@types/adives";
import { deleteAdvice } from "../../redux/reducers/advices";

export default function Advices({ advices }: { advices: IAdvices[] }) {
  const dispatch = useAppDispatch();

  return (
    <section className="advices mt-5">
      <h1 className="text-lg font-bold text-center pt-2">Conseils !</h1>
      <div className="flex gap-2 justify-center tablet:flex-col tablet:items-center">
        {advices.map((advice) => (
          <div className="card w-full bg-base-100 shadow-xl" key={advice.id}>
            <div className="card-body">
              {advice.accountsAdvice[0] &&
              advice.accountsAdvice[0].status === "New" ? (
                <div className="badge badge-secondary">NEW</div>
              ) : (
                <div className="badge badge-neutral">OLD</div>
              )}
              <h2 className="text-md font-bold">{advice.advice_text}</h2>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm mr-auto">
                  Solution est par là !
                </button>
                <button
                  onClick={() => {
                    dispatch(deleteAdvice(advice.id));
                  }}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
            </div>
          </div>
        ))}
        {advices.length === 0 && (
          <p className="mt-5">Vous n'avez rien d'urgent</p>
        )}
      </div>
    </section>
  );
}
