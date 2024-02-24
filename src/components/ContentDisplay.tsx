import React from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch } from "../../commons/redux";
import { deleteAlert } from "../../redux/reducers/alerts";
import { IContent } from "../@types/content";
import { deleteAdvice } from "../../redux/reducers/advices";
import { deleteTips } from "../../redux/reducers/tips";

interface ContentDisplayProps {
  title: string;
  data: IContent[]; // Adapter selon le type de données
}

const ContentDisplay: React.FC<ContentDisplayProps> = ({ title, data }) => {
  const dispatch = useAppDispatch();

  const hasNewItems = data.some((item) => item.accounts[0].status === "New");
  console.log("hasNewItems :", hasNewItems);

  return (
    <section className="cards w-[90%] m-auto">
      <h1 className="text-5xl font-bold text-center mt-10 text-accent">
        {title}
      </h1>
      <div className="grid grid-cols-2 gap-5 justify-items-center mt-5">
        {hasNewItems ? (
          data.map(
            (item) =>
              item.accounts[0].status === "New" && (
                <div className="card w-[80%] shadow-xl" key={item.id}>
                  <div className="card-body justify-between">
                    <div className="badge badge-secondary">
                      {item.accounts[0].status}
                    </div>
                    <h2 className="text-md font-bold">{item.text}</h2>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-sm mr-auto">
                        Solution
                      </button>
                      <button
                        className="ml-auto"
                        onClick={() => {
                          {
                            title === "Alertes" &&
                              dispatch(deleteAlert(item.id));
                          }
                          {
                            title === "Advices" &&
                              dispatch(deleteAdvice(item.id));
                          }
                          {
                            title === "Tips" && dispatch(deleteTips(item.id));
                          }
                        }}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </div>
                  </div>
                </div>
              )
          )
        ) : (
          <p className="col-span-2 mt-5 text-center">
            Vous n'avez rien d'urgent
          </p>
        )}
      </div>
    </section>
  );
};

export default ContentDisplay;
