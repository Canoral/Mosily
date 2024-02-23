import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch } from "../../commons/redux";
import { ITips } from "../@types/tips";
import { deleteTips } from "../../redux/reducers/tips";

export default function Tips({ tips }: { tips: ITips[] }) {
  const dispatch = useAppDispatch();

  const hasNewTips = tips.some((tip) => tip.accountsTips[0].status === "New");

  return (
    <section className="tips mt-5">
      <h1 className="text-lg font-bold text-center pt-2">Tips !</h1>
      <div className="flex gap-2 justify-center tablet:flex-col tablet:items-center">
        {/* Mapping through alerts */}
        {hasNewTips ? (
          tips.map((tip) =>
            tip.accountsTips[0].status === "New" ? (
              <div className="card w-full bg-base-100 shadow-xl" key={tip.id}>
                <div className="card-body justify-between">
                  <div className="badge badge-secondary">
                    {tip.accountsTips[0].status}
                  </div>
                  <h2 className="text-md font-bold">{tip.tip_text}</h2>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-sm mr-auto">
                      Solution
                    </button>
                    {/* Dispatching deletetip action */}
                    <button
                      className="mobile:m-auto"
                      onClick={() => {
                        dispatch(deleteTips(tip.id));
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
          <p className="mt-5">Je n'ai pas de tips à vous proposer</p>
        )}
      </div>
    </section>
  );
}
